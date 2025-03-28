import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../FramerMotion/Variant";
function HeroSection() {
  return (
    <div className="w-full min-h-screen flex justify-center bg-gradient-to-r from-zinc-800 to-zinc-900">
      <div className=" w-[90%] max-w-6xl min-h-screen flex flex-col md:flex-row items-center">
        
        {/* Left Section - Text */}
        <motion.div 
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}

        className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-6 p-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            You Only Fail When You Stop Trying!
          </h1>

          <button className="bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 
                font-medium rounded-lg text-sm px-6 py-3 focus:outline-none transition duration-200">
            <Link to="/register" className="text-white">Join Now!</Link>
          </button>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
         className="w-full md:w-1/2 p-4">
          <div className="w-full h-72 md:h-96 bg-cover bg-center bg-no-repeat 
            rounded-lg overflow-hidden shadow-lg"
            style={{ 
              backgroundImage: "url(https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltfGVufDB8fDB8fHww)" 
            }}>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default HeroSection;
