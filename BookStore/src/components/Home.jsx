import React from "react";
import Hero from "./Hero";

const Home = ({ onAddToCart }) => {
  return (
    <>
      <Hero onAddToCart={onAddToCart} />
    </>
  );
};

export default Home;
