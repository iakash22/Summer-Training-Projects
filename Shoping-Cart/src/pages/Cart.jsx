import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useState,useEffect } from "react";

const Cart = () => {
  const {cart }= useSelector((state) => state);
  const [totalAmount , setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])
  console.log(`cart: ${cart}`);
  return (
    <div className="">
      {
        cart.length > 0 ?
        (
        <div className="max-w-[1200px] mx-auto flex flex-row justify-center">
          <div className="w-[100%] md-w-[60%] flex flex-col p-2">
            {
              cart.map((item,index) => (
                <CartItem key={item.is} item={item} itemIndex={index}/>
              ))
            }
          </div>
          <div className=" w-[100%] md-w-[40%] flex flex-col mt-5 relative">
            <div className="flex flex-col gap-5 my-14 h-[100%] justify-between p-5">
              <div className="flex gap-5 flex-col">
                <p className="font-semibold text-xl text-green-800">Your Cart</p>
                <p className="uppercase font-semibold text-5xl text-green-700 mt-5">Summary</p>
                <p className="text-xl">
                  <span className="font-semibold text-gray-700 text-xl">Total items : {cart.length}</span>
                </p>
              </div>

              <div className="flex flex-col absolute bottom-2">
                <p className="text-xl font-semibold">Total Amount : {totalAmount}</p>
                <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl"
                >CheckOut Now</button>
              </div>
              
            </div>

            </div>
        </div>
        ) 
        :
        (
        <div className="flex flex-col w-full min-h-[80vh] items-center justify-center">
          <div className="relative">
            <h1 className="text-2xl text-gray-700 font-semibold mb-2">Your cart is empty</h1>
            <img width="40" height="40" src="https://img.icons8.com/pulsar-color/48/image-not-avialable.png"
            alt="image-not-avialable" className=" absolute -top-1 right-[-50px]"/>
          </div>
          <NavLink to={'/'}>
            <button className="mt-5 bg-green-600 hover:bg-purple-50 file border-2 
            border-green-600 text-white hover:text-green-700 p-3 px-10 rounded-lg
            transition duration-300 ease-in font-semibold tracking-wider">
              Shop now 
            </button>
          </NavLink>
        </div>
        )
      }
    </div>
  );
};

export default Cart;
