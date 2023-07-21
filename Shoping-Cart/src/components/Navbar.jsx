import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import Cart from "../pages/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart} = useSelector((state) => state);
  return (
    <div className="">
      <nav className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/"><img src={logo} alt="logo" className="h-14"/></NavLink>
        <div className="flex items-center text-slate-100 font-medium mr-5 space-x-6">
          <NavLink to="/"><p>Home</p></NavLink>
          <NavLink to="/cart">
            <div className=" relative">
              <FaShoppingCart className="text-2xl"/>
              {
                cart.length > 0 &&
              <span className=" absolute text-xs w-5 h-5 rounded-full bg-green-500 
              flex justify-center items-center -top-1 -right-2 animate-bounce
              ">{cart.length}</span>
              }
          </div>
          </NavLink>
        </div>
      </nav>

    </div>);
};

export default Navbar;
