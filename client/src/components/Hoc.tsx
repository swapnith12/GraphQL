import React from 'react'
import { useAuth } from './auth'
import { Navigate } from '@tanstack/react-router'
interface IPHocProps {
  WrappedComponent : React.ComponentType
}

const Hoc: React.FC<IPHocProps> = ({WrappedComponent}) => {
    const auth = useAuth()

    if (!auth.token) { return <Navigate to='/register' /> }
    return (
        <>
            <WrappedComponent />
        </>
    )
}

export default Hoc
