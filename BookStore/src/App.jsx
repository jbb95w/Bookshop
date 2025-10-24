import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Hero from "./components/Hero";
import Cart from "./components/Cart";
import SignUp from "./components/Signup";

function App() {
  
  const [cart, setCart] = useState([]);

  
  const handleAddToCart = (book) => {
    setCart((prev) => [...prev, book]);
    alert(`${book.volumeInfo.title} added to Basket!`);
  };

  return (
    <>
     
      <NavBar cartCount={cart.length} />
      
      <Routes>
        <Route path="/" element={<Hero handleAddToCart={handleAddToCart} />} />
        <Route path="/home" element={<Home handleAddToCart={handleAddToCart} />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;