import React from 'react';
import { motion } from 'framer-motion';
import {fadeIn} from '../FramerMotion/Variant';
function Section2() {
  return (
    <div className="w-full bg-white py-16 flex flex-col items-center">
      {/* Heading Section */}
      <motion.div
      variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
      className="w-[90%] max-w-5xl text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Featured Programs
        </h1>
        <p className="text-lg text-gray-600">
          Choose from our wide-ranging health & fitness programs that are suited for your needs.
        </p>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      className="w-[90%] max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        
        {/* Strength and Conditioning */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl 
                        transition duration-300 hover:bg-yellow-400">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Strength and Conditioning
          </h2>
          <p className="text-gray-600">
            It involves the performance of physical exercises that are designed 
            to improve strength and endurance.
          </p>
        </div>

        {/* Cardio Training */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl 
                        transition duration-300 hover:bg-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Cardio Training
          </h2>
          <p className="text-gray-600">
            Various physical conditioning routines that exercise the heart, 
            lungs, and associated blood vessels.
          </p>
        </div>

        {/* Weight Loss */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl 
                        transition duration-300 hover:bg-red-600 hover:text-white">
          <h2 className="text-2xl font-bold text-black hover:text-white mb-2">
            Weight Loss
          </h2>
          <p className="text-gray-900 hover:text-white">
            A comprehensive program consisting of various modules that together 
            contribute to helping you lose excess fat.
          </p>
        </div>

        {/* Nutrition */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl 
                        transition duration-300 hover:bg-fuchsia-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Nutrition
          </h2>
          <p className="text-gray-600 hover:text-white">
            Get the right nutrients that would help you achieve your fitness goals.
          </p>
        </div>

      </motion.div>
    </div>
  );
}

export default Section2;
