import React from "react";
import Hero from "./Hero";

const Home = ({ handleAddToCart }) => {  
  return (
    <>
      <Hero handleAddToCart={handleAddToCart} />  
    </>
  );
};

export default Home;