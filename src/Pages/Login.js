import React from 'react'
import LoginForm from '../Components/LoginForm'
import { useNavigate } from 'react-router-dom'

function Login(props) {
    const navigate = useNavigate();

    function clickHandler () {
        navigate('/signup')
    }
  return (
    <div className='flex justify-center items-center flex-col m-auto mt-10 pb-3 gap-10  w-[520px]  border border-black rounded-[8px] '>
      <LoginForm setIsLoggedIn={props.setIsLoggedIn}/>

      <button onClick={clickHandler} 
      className='text-blue-900 font-semibold'
      >New here? Create Account</button>
    </div>
  )
}

export default Login
