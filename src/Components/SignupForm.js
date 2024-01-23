import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function SignupForm(props) {
  const setIsLoggedIn = props.setIsLoggedIn;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if(formData.password !== formData.confirmPassword){
        toast.error("Password Do Not Match");
        return;
    }

    setIsLoggedIn(true);    
    toast.success("Account Created")
    navigate("/");
  }
  return (
    <div className="w-full pt-4 pb-3">
      <form onSubmit={submitHandler} className="w-full flex flex-col justify-center items-center gap-[5px] ">

        <div className="flex justify-evenly items-center w-full gap-3">
          <label>
            <p className="text-[1.4rem] mb-[0.2rem] leading[1.375rem]">
              First Name<sup className="text-pink-500 font-semibold">*</sup>
            </p>
            <input
              type="text"
              required
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="First Name"
              className="border border-black w-full p-[10px] rounded-[0.5rem]"
            />
          </label>

          <label>
            <p className="text-[1.4rem] mb-[0.2rem] leading[1.375rem]">
              Last Name<sup className="text-pink-500 font-semibold">*</sup>
            </p>
            <input
              type="text"
              required
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Last Name"
              className="border border-black w-full p-[10px] rounded-[0.5rem]"
            />
          </label>

        </div>

        <label className="w-full px-5">
          <p className="text-[1.3rem] mb-[0.2rem] leading[1.375rem]">
            Email Address<sup className="text-pink-500 font-semibold">*</sup>
          </p>

          <input
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter Email Address"
            className="border border-black w-full p-[12px] rounded-[0.5rem]"
          />
        </label>

        <label className="w-full px-5 relative">
          <p className="text-[1.3rem] mb-[0.2rem] leading[1.375rem]">
            Password<sup className="text-pink-500 font-semibold">*</sup>
          </p>
          <input
            type={showPassword ? "text" : "password"}
            required
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter Password"
            className="border border-black w-full p-[10px] rounded-[0.5rem] "
          />

          <span onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-[6%] top-[59%] text-[1.2rem]"
          >
            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        </label>

        <label className="w-full px-5 relative">
          <p className="text-[1.3rem] mb-[0.2rem] leading[1.375rem]">
            Confirm Password<sup className="text-pink-500 font-semibold">*</sup>
          </p>
          <input
            type={showConfirmPassword ? "text" : "password"}
            required
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={changeHandler}
            placeholder="Enter Confirm Password"
            className="border border-black w-full p-[10px] rounded-[0.5rem]"
          />

          <span onClick={() => setShowConfirmPassword((prev) => !prev)}
          className="absolute right-[6%] top-[59%] text-[1.2rem]"
          >
            {showConfirmPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        </label>

        <div className="w-full px-5 mt-6">
          <button className="w-full border border-black p-[10px] rounded-[0.5rem] text-[1.2rem] bg-slate-700 text-white ">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
