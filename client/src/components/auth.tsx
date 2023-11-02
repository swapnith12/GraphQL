import React , {Children, createContext , useState} from 'react'
import { theme } from '../Theme';

const AuthContext = createContext<any>({});

type IPauthProps = {
 children : React.ReactNode
}

export const AuthProvider:React.FC<IPauthProps> = ({children})=> {
    const [token , setToken] = useState<string | null>(null)
    const [DarkMode , setDarkMode] = useState(false)
    
    const login=(token:any)=>{
       localStorage.setItem('token',token)
       setToken(token)
    }

    const logout = (token:any)=>{
        localStorage.removeItem('token')
        setToken('')
    }
 
    const changeMode = () =>{
      setDarkMode((prevMode)=>!prevMode)
      console.log(DarkMode)
    }

  return (
    <AuthContext.Provider value={{token , login , logout , theme , changeMode , DarkMode}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
    return React.useContext(AuthContext)
}


