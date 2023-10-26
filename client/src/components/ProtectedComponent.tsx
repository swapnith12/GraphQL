import React from 'react'
import  {useAuth}  from './auth'
import { redirect, Navigate } from '@tanstack/react-router'

type IProtectedProps = {
  children: React.ReactNode
}


const ProtectedComponent: React.FC<IProtectedProps> = ({ children }) => {
  const auth = useAuth()
 
  if (!auth.token) { return <Navigate to='/register' /> }
  return (
    <>{children}</>
  )
}

export default ProtectedComponent

