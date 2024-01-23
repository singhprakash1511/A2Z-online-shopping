import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const LoginForm = (props) => {

    const setIsLoggedIn = props.setIsLoggedIn

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email:'',
        password:''
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData( (prevData) => ({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }

    function submitHandler (event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In")
        navigate("/")
    }

  return (
    <div className='w-full m-auto flex items-center justify-center px-3'>
      <form onSubmit={submitHandler} className='w-full flex gap-3 flex-col justify-center items-center my-7'>
        <label className='w-full px-5'>

            <p className='text-[1.6rem] mb-1 leading[1.375rem] title'>Email Address<sup className='text-pink-500 font-semibold'>*</sup></p>

            <input 
            type="text" 
            required
            name='email'
            onChange={changeHandler}
            value={formData.email}
            placeholder='Enter Email Address'
            className='border border-black w-full p-[12px] rounded-[0.5rem]'/>
        </label>

        <label className='w-full px-5 relative email'>

            <p className='text-[1.6rem] mb-1 leading[1.375rem] title'>Password<sup className='text-pink-500 font-semibold'>*</sup></p>

            <input 
            type={showPassword ? "text" : "password"} 
            required
            name='password'
            onChange={changeHandler}
            value={formData.password}
            placeholder='Enter Password'
            className='border border-black w-full p-[12px] rounded-[0.5rem]'/>

        <span onClick={() => setShowPassword((prev) => !prev)} className='absolute right-[8%] top-[61%]  text-[1.2rem] cursor-pointer'>
            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
        </span>
        </label>

        <div className='w-full px-5 mt-6'>
            <button className='w-full border border-black p-[10px] rounded-[0.5rem] text-[1.2rem] bg-slate-700 text-white '>
                Log in
            </button>
        </div>
      </form>

    </div>
  )
}

export default LoginForm
