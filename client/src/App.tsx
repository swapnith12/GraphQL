import 'tailwindcss/tailwind.css'
import React from 'react';
import { BrowserRouter, Routes, Route , RouterProvider , createBrowserRouter } from 'react-router-dom';
import Sidebar from './components/sideBar';
import ErrorPage from './components/ErrorPage';
import CardItems from './components/CardItems';
import Layout from './components/Layout';
import Banner from './components/Banner';
import LoginPage from './components/LoginPage';



const router = createBrowserRouter([
  { path: "/", Component: Layout,errorElement:<ErrorPage/>,
    children: [{path:'/cardItems',element:<CardItems/>},
                {path:'/',element:<Banner/>},
                {path:'/register' , element:<LoginPage/>}],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
