import 'tailwindcss/tailwind.css'
import React from 'react';
import { Link } from "@tanstack/react-router"
import { FaUserNinja } from 'react-icons/fa';
import { useAuth } from './auth';
import {MdDarkMode}  from 'react-icons/md'
import {BsSun , BsFillSunFill} from 'react-icons/bs'
import './App.css'
interface SidebarProps {

}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const auth = useAuth()
  const ToggleMode = ()=>{
    auth.changeMode()
  }
  const token = auth.token

  const background = auth.DarkMode?`${auth.theme.BodyDark.background}`:`bg-gradient-to-b from-cyan-500 to-blue-300`

  return (
    <div id="sideBar" className={`fixed min-h-screen max-h-full ${background} w-40 p-1 flex flex-col`}>
      <header>
        <h1 className='font-sans text-xl font-bold text-emerald-900 hover:text-violet-700'>Swap Ecommerce </h1>
        <nav>
          <ul className='p-6 divide-y divide-slate-200 '>
            <li className='text-emerald-900 hover:text-violet-700'><Link to="/cards">Card Items</Link> </li>
            <li className='text-emerald-900 hover:text-violet-700'><Link to="/">Banner Item</Link> </li>
          </ul>
        </nav>
      </header>
      <footer className='mt-auto' >
        <div className='flex flex-col justify-center items-centers'>
             <span>{auth.DarkMode?<BsFillSunFill color='white' size={30}/>:<MdDarkMode size={30} className='ml-9'/>}
             <label className='switch'>
              <input type="checkbox" className='ml-2' onClick={ToggleMode} />
              <span className='slider'></span>
             </label>
             </span>
        {token?<Link  to="/register" onClick={()=>auth.logout()}>
            <span className='flex flex-row justify-center items-center rounded-full
             bg-blue-300 hover:bg-cyan-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>
              <FaUserNinja className='text-3xl text-white' />
              <p className='text-white font-bold text-3xl'>Log Out</p>
            </span>
            </Link> :
             <Link  to="/register">
            <span className='flex flex-row justify-center items-center rounded-full
             bg-blue-300 hover:bg-cyan-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>
              <FaUserNinja className='text-3xl text-white' />
              <p className='text-white font-bold text-3xl'>LogIn</p>
            </span>
            </Link> }
        </div>
      </footer>
    </div>
  );
};

export default Sidebar;

