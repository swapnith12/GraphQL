import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { useNavigate} from '@tanstack/react-router'
import { useAuth } from './auth'

interface LoginPage {

}

const LoginPage: React.FC<LoginPage> = () => {
  const navigate = useNavigate()
  const [registered, setRegistered] = useState(false)
  const auth = useAuth()

  const handleLogin = (args:any)=>{
    auth.login(args)
    navigate({
      to:'/',
    } )
  }


  const loginOptions = () => {
    setRegistered(!registered)
  }
  const login = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const Email = formData.get('login-Email') as String
    const Password = formData.get('login-Password') as String
    if(Email.trim().length===0 || Password.trim().length===0){return}

    let requestBody = {
      query: `
        query {
          login(email: "${Email}", password: "${Password}") {
            userId
            token
            tokenExpiration
          }
        }
      `
    };

    fetch('http://localhost:4000/graphql',{
      method:'POST',
      body:JSON.stringify(requestBody),
      headers:{'Content-Type':'application/json'}
    }).then(res=>{
      if(res.status !== 200 && res.status !== 201){
        throw new Error('Failed')
      }
      return res.json()
    })
    .then(data=>handleLogin(data.data.login.token))
    .catch(err=>console.log(err))
  }

  const signUp = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const Email = formData.get('Email') as String
    const Password = formData.get('Password') as String
    if(Email?.trim().length===0 || Password?.trim().length===0){return}
    console.log(Email,Password,"new creds")
    const requestBody = {
      query: `
        mutation {
          createUser(userInput: { email: "${Email}", password: "${Password}" }) {
            _id
            password
          }
        }
      `,
    };

    fetch('http://localhost:4000/graphql',{
      method:'POST',
      body:JSON.stringify(requestBody),
      headers:{'Content-Type':'application/json'}
    }).then(res=>{
      if(res.status !== 200 && res.status !== 201){
        throw new Error('Failed')
      }
      return res.json()
    }).then(data=>console.log(data))
    .catch(err=>console.log(err))

    formData.set("Email","")
    formData.set("Password","")
  }
  

  return (
    <>
      {registered ? (
        <Grid textAlign='center' style={{ height: '100vh', margin: "auto" }} verticalAlign='middle'
          className='ml-40 mt-40'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' style={{ color: "#00BCD4" }} textAlign='center'>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTewZ_BwQjeHlSXtmxPqsDqNUuxBRnu2JG0xg&usqp=CAU' /> Log-in to your account
            </Header>
            <Form size='large' onSubmit={login} >
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
                name="login-Email" />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name='login-Password'
                />

                <Button  style={{ backgroundColor: "#7FFFD4" }} fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message style={{ backgroundColor: "#7FFFD4" }}>
              New to us? <button onClick={() => loginOptions()}>Sign Up</button>
            </Message>
          </Grid.Column>
        </Grid>) :
        (<Grid textAlign='center' style={{ height: '100vh', margin: "auto" }} verticalAlign='middle'
          className='ml-40 mt-40'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' style={{ color: "#00BCD4" }} textAlign='center'>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC3g-7Na40GnFAtFb5663o0ZQ7chdm1jv8zQ&usqp=CAU' />Create new account
            </Header>
            <Form size='large' onSubmit={signUp} >
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Register with E-mail 
                address' name='Email'/>
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Create new password'
                  type='password'
                  name='Password'
                />
                <Button style={{ backgroundColor: "#7FFFD4" }} fluid size='large'>
                  Sign up
                </Button>
              </Segment>
            </Form>
            <Message style={{ backgroundColor: "#7FFFD4" }}>
              Already registered? <button onClick={() => loginOptions()} >Log In</button>
            </Message>
          </Grid.Column>
        </Grid>)}
    </>
  )
}

export default LoginPage