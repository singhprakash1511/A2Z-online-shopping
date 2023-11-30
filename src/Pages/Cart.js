import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Cartitem from "../Components/Cartitem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector( (state) => state);
  console.log(cart)
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="cart max-w-[1000px] mx-auto w-full pb-4 pr-7">
      {cart.length > 0 ? (
        <div className="flex justify-between w-full">
          <div className="w-[65%]">
            {cart.map((item, index) => {
              return <Cartitem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="py-16 flex flex-col justify-between w-[35%] max-h-[650px] gap-9  ">
            <div>
              <div className="text-green-700 text-sm font-bold uppercase">Your Cart</div>
              <div className="text-green-700 text-3xl uppercase font-bold">Summary</div>
              <p className="font-bold text-slate-700 pt-3">
                Total Items: <span className="font-normal">{cart.length}</span>
              </p>
            </div>
            <div>
              <p className="text-slate-700 flex font-bold text-sm pb-4">Total Amount: <span className="text-black font-extrabold">${totalAmount}</span> </p>
              <button className="bg-green-600 text-slate-100 py-2 px-7  text-sm font-bold rounded-md w-full">CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col w-full h-screen space-y-5">
          <h1 className="font-bold" >Your Cart is Empty!</h1>

          <Link to={"/"}>
            <button
            className="bg-green-600 text-slate-100 py-3 px-7 uppercase  text-sm font-semibold rounded-md"
            >Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
