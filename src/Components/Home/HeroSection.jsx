import React from 'react';
import { Link } from 'react-router-dom';
function HeroSection() {
  return (
    <div 
      className='w-full h-screen flex flex-col justify-center items-center text-white text-2xl font-bold'
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <h1 className='text-6xl text-white m-3'>Welcome to Fitness Hub</h1>

      <h1>
  <Link 
    to="/register" 
    className="m-4 px-6 py-3 bg-orange-600 text-white font-semibold text-lg rounded-lg 
               shadow-md hover:bg-orange-700 transition duration-300"
  >
    Get Started
  </Link>
</h1>

    </div>
  );
}

export default HeroSection;
