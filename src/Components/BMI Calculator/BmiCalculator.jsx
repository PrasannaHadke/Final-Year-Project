import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../FramerMotion/Variant";

function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBmi = () => {
    if (!weight || !height || height <= 0 || weight <= 0) return;
    
    const personBmi = (Number(weight) / ((Number(height) / 100) ** 2)).toFixed(2);
    setBmi(personBmi);

    setWeight("");
    setHeight("");
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white p-6">
      {/* Title Container */}
      <div className="w-full text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Calculate Your BMI
        </h1>
      </div>

      <div className="w-[90%] max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left Section - Image */}
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-full md:w-1/2 p-4"
        >
          <div
            className="w-full h-72 md:h-96 bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden shadow-md"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
            }}
          ></div>
        </motion.div>

        {/* Right Section - BMI Calculator */}
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-full md:w-1/3 p-8 bg-gray-100 shadow-lg rounded-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            BMI Calculator
          </h2>

          <div className="space-y-4">
            {/* Weight Input */}
            <label className="block text-gray-700 font-medium">
              Your Weight (kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter weight in kg"
            />

            {/* Height Input */}
            <label className="block text-gray-700 font-medium">
              Your Height (cm)
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter height in cm"
            />

            {/* Calculate Button */}
            <button
              onClick={calculateBmi}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Calculate
            </button>

            {/* Display BMI Result */}
            {bmi && (
              <div className="text-center mt-4 text-xl font-semibold text-gray-800">
                Your BMI: <span className="text-blue-500">{bmi}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default BmiCalculator;
