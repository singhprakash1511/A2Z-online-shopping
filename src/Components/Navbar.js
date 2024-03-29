import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const Navbar = (props) => {

  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  const { cart } = useSelector((state) => state);

  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-[1000px]  mx-auto ">
        <NavLink to="/">
          <div className="text-green-600 leading-3 ml-5">
            <h1 className="text-2xl font-bold ">A2Z</h1>
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6 gap-x-3 ">
          <div className="flex gap-3">

            { !isLoggedIn && 
              <Link to="/login">
                <button>
                  Login/Signup
                  </button>
              </Link>
            }

            { isLoggedIn &&
              <Link to="/">
                <button 
                onClick={ () => {
                  setIsLoggedIn(false)
                  toast.success("Logged Out")
                }}>
                  Log Out
                </button>
              </Link>
            }

          </div>
          
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex-5 flex justify-center items-center animate-bounce rounded-full text-white ">
                  {cart.length}{" "}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
