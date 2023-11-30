import React from "react";
import toast from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
import {useDispatch} from 'react-redux';
import {remove} from '../Redux/Slices/CartSlice';

const Cartitem = ({ item }) => {
    const dispatch = useDispatch();

    const removeFromCart= () => {
        dispatch(remove(item.id));
        toast.error("Item Removed")
    }
  return (
    <div className="max-w-[900px] w-10/12  mx-auto ">
      <div className="flex border-b-2 border-green-500 gap-7 py-7 ">
        <div className="w-[34%] flex justify-center ">
          <img src={item.image} className="h-[210px]  " />
        </div>
        <div className="w-[66%] flex flex-col space-y-3 ">
          <h1 className="text-gray-800 font-bold text-[18px] w-full">{item.title}</h1>
          <h1 className=" text-gray-600  text-[17px] font-semibold  "> {item.description.split(" ").slice(0,15).join(" ")+"..." } </h1>
          <div className="flex justify-between items-center w-[95%]  ">
            <p className="text-green-600 font-bold "> ${item.price} </p>
            <div 
            className="cursor-pointer bg-red-300 rounded-full p-2"
            onClick={removeFromCart}>
              <FcDeleteDatabase className="text-sm "/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
