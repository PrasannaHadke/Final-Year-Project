import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="border-2 w-full min-h-screen flex justify-center bg-gradient-to-r from-zinc-800 to-zinc-900">
      <div className=" w-[90%] max-w-6xl min-h-screen flex flex-col md:flex-row items-center">
        
        {/* Left Section - Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-6 p-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            You Only Fail When You Stop Trying!
          </h1>

          <button className="bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 
                font-medium rounded-lg text-sm px-6 py-3 focus:outline-none transition duration-200">
            <Link to="/register" className="text-white">Join Now!</Link>
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 p-4">
          <div className="w-full h-72 md:h-96 bg-cover bg-center bg-no-repeat 
            rounded-lg overflow-hidden shadow-lg"
            style={{ 
              backgroundImage: "url(https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltfGVufDB8fDB8fHww)" 
            }}>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;
