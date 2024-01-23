import React from 'react'
import SignupForm from '../Components/SignupForm'
import { useNavigate } from 'react-router-dom';

function Signup(props) {

  const navigate = useNavigate();

  function clickHandler() {
    navigate("/login")
}
  return (
    <div className='flex justify-center items-center flex-col m-auto mt-2 gap-5  w-[580px]  border border-black rounded-[8px] login'>
      <SignupForm setIsLoggedIn={props.setIsLoggedIn} />

      <button onClick={clickHandler} className='text-blue-900 font-semibold pb-3'>Already have an account? Login</button>
    </div>
  )
}

export default Signup
