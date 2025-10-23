// import React from "react";
// import Home from "./Home";
// import About from "./About";
// import { FaCartArrowDown } from "react-icons/fa6";
// import { Routes, Route, Link } from "react-router";


// function NavBar (){
//     return(
//     <nav className="bg-stone-900">
//       <div className="h-16 items-center flex justify-between">
//         {/* Logo */}
//         <div className="text-3x1 text-white font-bold px-4">Book Hub</div>
//         {/* buttons desktop */}
//         <div className="flex justify-space-between" >
//           <a href="" className="text-gray-100 text-1g px-4"><Home /></a>
//           <a href="" className="text-gray-100 text-1g px-4"><About /></a>
//           <a href="" className="text-gray-100 text-1g px-4"><FaCartArrowDown /></a>
//         </div>

//       </div>
//       <nav style={{ marginBottom: "20px" }}>
//         <Link to="/" style={{ margin: "10px" }}>Home</Link>
//         <Link to="/about" style={{ margin: "10px" }}>About</Link>
//       </nav>

      
//     </nav>
//     )
// }

// export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";

function NavBar() {
  return (
    <nav className="bg-stone-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">Book Hub</div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
          <FaCartArrowDown className="cursor-pointer hover:text-yellow-300" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
