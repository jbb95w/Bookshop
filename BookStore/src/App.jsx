import React from "react";
import { Routes, Route, Link } from "react-router";
import NavBar from "./components/NavBar";


function App() {

  return (
    <>
    <div className="w=1/3">
      <div className="flex justify-evenly justify">
        <img style={mask-top-left} src="/img-logo/logo.png" alt="logo" />
        <NavBar/>

      </div>

    </div>
      

      
    </>
  )
}

export default App





{/* <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ margin: "10px" }}>Home</Link>
        <Link to="/about" style={{ margin: "10px" }}>About</Link>
        <Link to="/contact" style={{ margin: "10px" }}>Contact</Link> 
      </nav>*/}

      {/* This decides which page to show */}
      {/* <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      






