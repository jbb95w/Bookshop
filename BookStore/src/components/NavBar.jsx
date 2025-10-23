import React from "react";
import Home from "./Home";
import About from "./About";
import { FaCartArrowDown } from "react-icons/fa6";


function NavBar (){
    return(
    <nav className="bg-stone-900">
      <div className="h-16 items-center flex justify-between">
        {/* Logo */}
        <div className="text-3x1 text-white font-bold px-4">Book Hub</div>
        {/* buttons desktop */}
        <div className="flex justify-space-between" >
          <a href="" className="text-gray-100 text-1g px-4"><Home /></a>
          <a href="" className="text-gray-100 text-1g px-4"><About /></a>
          <a href="" className="text-gray-100 text-1g px-4"><FaCartArrowDown /></a>
        </div>

      </div>

    </nav>
    )
}

export default NavBar;