import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../FramerMotion/Variant';
function BmiCalculator() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(null);



    const calculateBmi = () => {
        if (!weight || !height || height <= 0 || weight <= 0) {
            // alert("Please enter valid weight and height");
            return
        }
        const personBmi = (Number(weight) / ((Number(height) / 100) ** 2)).toFixed(2);
        setBmi(personBmi);

        setWeight("");
        setHeight("");
    }
    return (
        <>
       <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-zinc-800 to-zinc-900 p-6">
      {/* Left Section - Image */}
      <motion.div
      variants={fadeIn('right',0.5)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.7}}
      className="w-full md:w-1/2 p-4">
        <div
          className="w-full h-72 md:h-96 bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden shadow-lg"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          }}
        ></div>
      </motion.div>

      {/* Right Section - BMI Calculator */}
      <motion.div 
       variants={fadeIn('left',0.5)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false,amount:0.7}}
      className="w-full md:w-1/3 p-6 bg-white shadow-lg rounded-lg mt-6 md:mt-0">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          BMI Calculator
        </h1>

        <div className="space-y-4">
          <label className="block text-gray-700 font-medium">
            Your Weight in Kg
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) =>
              e.target.value >= 0 ? setWeight(e.target.value) : null
            }
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter weight in kg"
          />

          <label className="block text-gray-700 font-medium">
            Your Height in cm
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) =>
              e.target.value >= 0 ? setHeight(e.target.value) : null
            }
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter height in cm"
          />

          <button
            onClick={calculateBmi}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Calculate
          </button>

          {bmi && (
            <div className="text-center mt-4 text-xl font-semibold text-gray-800">
              Your BMI: <span className="text-blue-500">{bmi}</span>
            </div>
          )}
        </div>
      </motion.div>
    </div>
        </>
    );
}

export default BmiCalculator