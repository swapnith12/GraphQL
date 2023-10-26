import React , {Children, createContext , useState} from 'react'

const AuthContext = createContext<any>({});

type IPauthProps = {
 children : React.ReactNode
}

export const AuthProvider:React.FC<IPauthProps> = ({children})=> {
    const [token , setToken] = useState<string | null>(null)
    
    const login=(token:any)=>{
       localStorage.setItem('token',token)
       setToken(token)
    }

    const logout = (token:any)=>{
        localStorage.removeItem('token')
        setToken('')
    }

  return (
    <AuthContext.Provider value={{token , login , logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
    return React.useContext(AuthContext)
}


