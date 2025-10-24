import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Hero from "./components/Hero";
import Cart from "./components/Cart";
import SignUp from "./components/Signup";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}


export default App;
