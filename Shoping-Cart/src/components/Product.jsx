import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";
import {add, remove} from "../redux/Slices/cartSlice"

const Product = ({item}) => {
  const {cart} = useSelector((state) => state)
  console.log(cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed to Cart")
  }

  return (
    <div className=" flex items-center flex-col hover:scale-110 card-shadow 
    gap-3 p-4 mt-10 ml-5 rounded-xl transition-all duration-300 ease-in">
      <div>
        <p className="text-gray-700 font-semibold text-lg truncate w-40 mt-1">{item.title.split(" ").slice(0,5).join(" ") + "..."}</p>
      </div>
      <div>
        <p className="font-normal w-40 text-gray-400 text-[10px] text-left
        ">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={item.image} alt="ProductImage" className="w-full h-full" />
      </div>
      <div className="flex justify-between gap-x-12 items-center w-full mt-5">
        <div>
        <p className="text-green-600 font-semibold">{item.price}$</p>
        </div>
        {
          cart.some((p)=> p.id == item.id) ? 
          (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
          text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in"
          onClick={removeFromCart}>
            <p>Remove Item</p>
          </button>)
          :
          (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
          text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in"
          onClick={addToCart}>
            <p>Add to Cart</p>
          </button>)
        }
      </div>
    </div>
  );
};

export default Product;
