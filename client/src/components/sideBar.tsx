import 'tailwindcss/tailwind.css'
import React from 'react';
import { Link , Outlet } from 'react-router-dom';
interface SidebarProps {
  
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <div className='fixed min-h-screen bg-emerald-300 w-40 p-1 '>
      <header>
      <h1 className='font-sans text-xl font-bold'>Swap Ecommerce </h1>
      <nav>
        <ul>
          <li><Link to="cardItems">CardItems</Link> </li>
        </ul>
      </nav>
      </header>
    </div>
  );
};

export default Sidebar;

