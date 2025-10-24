import React from "react";
import { Link } from "react-router-dom";
import { GiBasket } from "react-icons/gi";

function NavBar({ cartCount }) {  
  return (
    <nav className="bg-stone-900">
      <div className="h-16 flex items-center justify-between px-4">
        <Link to="/" className="text-3xl text-white font-bold">
          Book Hub
        </Link>

        <div className="flex space-x-6">
          <Link to="/home" className="text-gray-100 text-lg hover:text-yellow-400 transition">
            Home
          </Link>

          <Link to="/about" className="text-gray-100 text-lg hover:text-yellow-400 transition">
            About
          </Link>

          <Link to="/cart" className="text-gray-100 text-lg hover:text-yellow-400 transition relative">
            <GiBasket size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>
          
          <Link to="/signup" className="text-gray-100 text-lg hover:text-yellow-400 transition">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;