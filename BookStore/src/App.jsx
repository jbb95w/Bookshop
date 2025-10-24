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
    const price = book?.price ?? book?.saleInfo?.listPrice?.amount ?? book?.saleInfo?.retailPrice?.amount ?? 0;
    const bookWithPrice = { ...book, price };
    setCart((prev) => [...prev, bookWithPrice]);
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    alert("Proceeding to payment...");
  };

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Hero onAddToCart={handleAddToCart} />} />
        <Route path="/home" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onRemoveFromCart={handleRemoveFromCart}
              onCheckout={handleCheckout}
            />
          }
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}


export default App;
