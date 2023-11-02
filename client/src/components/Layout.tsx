import React , {useEffect} from 'react'
import Sidebar from './sideBar'
import { Outlet } from '@tanstack/react-router'
import { useAuth } from './auth'



interface Layout {
  
}


const Layout: React.FC<Layout> = (props) => {
  const auth = useAuth()
  const background = auth.DarkMode?`${auth.theme.BodyDark.background}`:'white'

  return (
    <div>
      <Sidebar />
      {/*Banner*/}
      <main className='p-3 h-screen' style={{background:`${background}`}}>
        {/* <CardItems/> */}
        <div className='flex flex-row justify-content-around'>
        <Outlet/>
        </div>
      </main>
    </div>
  )
}

export default Layout
