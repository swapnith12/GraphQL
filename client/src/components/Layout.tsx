import React from 'react'
import Sidebar from './sideBar'
import CardItems from './CardItems'

interface Layout {
    
}


const Layout: React.FC<Layout> = (props) => {
  return (
    <div>
        <Sidebar/>
        <main className='ml-3'>
        <CardItems/>
        </main>
    </div>
  )
}

export default Layout
