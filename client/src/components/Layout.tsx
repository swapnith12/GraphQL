import React , {useEffect} from 'react'
import Sidebar from './sideBar'
import { Outlet } from '@tanstack/react-router'

interface Layout {
  
}

const Layout: React.FC<Layout> = (props) => {

  return (
    <div>
      <Sidebar />
      {/*Banner*/}
      <main className='p-3'>
        {/* <CardItems/> */}
        <div className='flex flex-row justify-content-around'>
        <Outlet/>
        </div>
      </main>
    </div>
  )
}

export default Layout
