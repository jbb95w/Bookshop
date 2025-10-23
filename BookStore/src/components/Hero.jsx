import React, { useState } from "react";

const Hero = () => {
    const [search, setSearch]=useState("")
    
    return (
        <section className="relative bg-cover bg-center h-screen bg-[url('./assets/bp.jpg')] flex items-center justify-center text-center bg-" >
            <div className="relative z-10 text-white p-10 backdrop-blur-sm ">
                <h2 className=" text-lg/7 font-extrabold">Find Your Book Of Choice.</h2> <br/>
                <p className="text-center text-bold">Every book has a world waiting to be discovered.<br /> Whether you are chasing adventure, seeking knowledge, or escaping into imagination,<br /> use the search bar below to find the perfect story that speaks to your heart</p>
                <div>
                    <input type="text" placeholder="The Lost World..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    <button type="submit" >search</button>
                </div>
                
            </div>
            
            
        </section>
        
    )
}

export default Hero

// bg-white rounded-t-4x1

{/* <h2 className="hero-title text-capitalize">Find Your Book Of Choice.</h2><br/>
<p className="hero text" */}


