import React, { useState } from 'react'

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
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h1 className="text-2xl font-bold text-center mb-4">BMI Calculator</h1>

            <div className="space-y-3">
                <label className="block text-gray-700 font-medium">Your Weight in Kg</label>
                <input 
                    type="number"
                    value={weight}
                    onChange={
                        (e)=>{
                            if (e.target.value>=0) {
                                return  setWeight(e.target.value);
                                
                            }
                        }
                    }
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />

                <label className="block text-gray-700 font-medium">Your Height in cm</label>
                <input 
                    type="number"
                    value={height}
                    onChange={
                        (e)=>{
                            if (e.target.value>=0) {
                                return  setHeight(e.target.value);
                                
                            }
                        }
                    }
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />

                <button 
                    onClick={calculateBmi} 
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                    Calculate
                </button>

                {bmi && (
                    <div className="text-center mt-4 text-xl font-semibold text-gray-800">
                        Your BMI: <span className="text-blue-500">{bmi}</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BmiCalculator