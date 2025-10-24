import React from "react";
import { Link } from "react-router-dom";
import { GiBasket } from "react-icons/gi";

function NavBar() {
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

          <Link to="/cart" className="text-gray-100 text-lg hover:text-yellow-400 transition">
            <GiBasket size={20} />
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
