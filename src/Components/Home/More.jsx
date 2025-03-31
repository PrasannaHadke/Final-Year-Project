import React from "react";

function More() {
  return (
    <div className="bg-white text-gray-900 min-h-screen p-6">
      {/* Gym Timings */}
      <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-gray-500 mb-4">🏋️ Gym Timings</h2>
        <p className="text-lg">Monday - Saturday: <strong>5:00 AM - 10:00 PM</strong></p>
        <p className="text-lg">Sunday: <strong>Closed</strong></p>
      </div>

      {/* Height & Weight Chart */}
      <div className="mt-12 max-w-4xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-500 text-center mb-4">📏 Height & Weight Chart</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-500 text-white">
                <th className="p-2 border border-gray-300">Height (ft)</th>
                <th className="p-2 border border-gray-300">Ideal Weight (Men) (kg)</th>
                <th className="p-2 border border-gray-300">Ideal Weight (Women) (kg)</th>
                <th className="p-2 border border-gray-300">BMI Range</th>
              </tr>
            </thead>
            <tbody>
              {[
                { height: "5'0", men: "48 - 58 kg", women: "45 - 55 kg", bmi: "18.5 - 24.9" },
                { height: "5'2", men: "52 - 64 kg", women: "49 - 60 kg", bmi: "18.5 - 24.9" },
                { height: "5'4", men: "56 - 70 kg", women: "53 - 65 kg", bmi: "18.5 - 24.9" },
                { height: "5'6", men: "61 - 76 kg", women: "57 - 70 kg", bmi: "18.5 - 24.9" },
                { height: "5'8", men: "66 - 82 kg", women: "61 - 75 kg", bmi: "18.5 - 24.9" },
                { height: "5'10", men: "71 - 88 kg", women: "66 - 81 kg", bmi: "18.5 - 24.9" },
                { height: "6'0", men: "76 - 94 kg", women: "70 - 86 kg", bmi: "18.5 - 24.9" },
              ].map((row, index) => (
                <tr key={index} className="text-center bg-gray-50 even:bg-gray-200">
                  <td className="p-2 border border-gray-300">{row.height}</td>
                  <td className="p-2 border border-gray-300">{row.men}</td>
                  <td className="p-2 border border-gray-300">{row.women}</td>
                  <td className="p-2 border border-gray-300">{row.bmi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Nutrition Information */}
      <div className="mt-12 max-w-4xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-500 text-center mb-4">🍽️ Nutrition Chart</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-500 text-white">
                <th className="p-2 border border-gray-300">Meal</th>
                <th className="p-2 border border-gray-300">Protein (g)</th>
                <th className="p-2 border border-gray-300">Fat (g)</th>
                <th className="p-2 border border-gray-300">Carbs (g)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { meal: "Chicken Breast (100g)", protein: "31g", fat: "3.6g", carbs: "0g" },
                { meal: "Eggs (2 large)", protein: "12g", fat: "10g", carbs: "1g" },
                { meal: "Brown Rice (1 cup)", protein: "5g", fat: "1.6g", carbs: "45g" },
                { meal: "Salmon (100g)", protein: "25g", fat: "13g", carbs: "0g" },
                { meal: "Oatmeal (1 cup)", protein: "6g", fat: "3.2g", carbs: "27g" },
                { meal: "Almonds (28g)", protein: "6g", fat: "14g", carbs: "6g" },
              ].map((row, index) => (
                <tr key={index} className="text-center bg-gray-50 even:bg-gray-200">
                  <td className="p-2 border border-gray-300">{row.meal}</td>
                  <td className="p-2 border border-gray-300">{row.protein}</td>
                  <td className="p-2 border border-gray-300">{row.fat}</td>
                  <td className="p-2 border border-gray-300">{row.carbs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default More;
