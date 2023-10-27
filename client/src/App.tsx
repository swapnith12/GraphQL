import 'tailwindcss/tailwind.css'
import React from 'react';
import Sidebar from './components/sideBar';
import ErrorPage from './components/ErrorPage';
import CardItems from './components/CardItems';
import Layout from './components/Layout';
import Banner from './components/Banner';
import LoginPage from './components/LoginPage';
import { AuthProvider } from './components/auth';
import ProtectedComponent from './components/ProtectedComponent';
import {
  Outlet,
  RouterProvider,
  Link,
  Router,
  Route,
  RootRoute,
  ErrorComponent 
} from '@tanstack/react-router'




const rootRoute = new RootRoute({
  component: () => (
    <>
      <Layout/>
    </>
  ),
  errorComponent: ({ error }) => {
    return <ErrorComponent error={error} />
  },
})

const indexRoute = new Route({
  getParentRoute: ()=>rootRoute,
  path:'/',
  component: ()=>  <Banner/>
})

const CardItemsRoute  = new Route({
  getParentRoute : ()=>rootRoute,
  path:'/cards',
  component: ()=><ProtectedComponent>
  <CardItems/>
  </ProtectedComponent>

  
})

const Register = new Route({
  getParentRoute : ()=>rootRoute,
  path:'/register',
  component: ()=> <LoginPage/>,
})

const routeTree = rootRoute.addChildren([indexRoute, CardItemsRoute , Register])

const router = new Router({ routeTree })

function App() {
  return (
    <div className="App">
      <AuthProvider>
       <RouterProvider router={router}/>  
      </AuthProvider>
    </div>
  );
}

export default App;
