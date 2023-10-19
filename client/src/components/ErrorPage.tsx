import React from 'react'
import { useLocation  } from "react-router-dom";
interface ErrorPage {
  
}

const ErrorPage: React.FC<ErrorPage> = (props) => {
  const location = useLocation();
  const error = location.state && location.state.error;
  return (
    <div className='flex flex-col justify-self-center items-center'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{ "Page Not Found"}</i>
      </p>
    </div>
  )
}

export default ErrorPage