import 'tailwindcss/tailwind.css'
import React from 'react';
import { Link } from "@tanstack/react-router"
import { FaUserNinja } from 'react-icons/fa';
import { useAuth } from './auth';
interface SidebarProps {

}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const auth = useAuth()
  const token = auth.token
  return (
    <div id="sideBar" className='fixed min-h-screen max-h-full bg-gradient-to-b from-cyan-500 to-blue-300 w-40 p-1 flex flex-col'>
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
        <div>
          <Link  to="/register">
            <span className='flex flex-row justify-center items-center rounded-full
             bg-blue-300 hover:bg-cyan-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>
              <FaUserNinja className='text-3xl text-white' />
              {token?<p className='text-white font-bold text-3xl'>Log Out</p>:<p className='text-white font-bold text-3xl'>LogIn</p>}
            </span>
            </Link>
        </div>
      </footer>
    </div>
  );
};

export default Sidebar;

