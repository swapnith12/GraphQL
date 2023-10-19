import 'tailwindcss/tailwind.css'
import React from 'react';
import { BrowserRouter, Routes, Route , RouterProvider , createBrowserRouter } from 'react-router-dom';
import Sidebar from './components/sideBar';
import ErrorPage from './components/ErrorPage';
import CardItems from './components/CardItems';
import Layout from './components/Layout';

const router = createBrowserRouter([
  { path: "*", Component: Layout},
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
