import React from "react";
import { Link } from "react-router-dom";

function MemberShip() {
  const memberships = [
    {
      type: "Monthly",
      price: "700 Rs",
      duration: "1 Month",
      features: ["Access to Gym", "Personal Trainer Support", "Locker Facility"],
    },
    {
      type: "Quarterly",
      price: "2000 Rs",
      duration: "3 Months",
      features: ["All Monthly Benefits", "Diet Consultation", "Group Training"],
    },
    {
      type: "Yearly",
      price: "5000 Rs",
      duration: "12 Months",
      features: ["All Quarterly Benefits", "Exclusive Merchandise", "Priority Booking"],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-4xl font-bold mb-8">Choose Your Membership</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {memberships.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center w-80"
          >
            <h2 className="text-2xl font-bold text-yellow-400">{plan.type}</h2>
            <p className="text-lg mt-2 text-gray-300">{plan.duration}</p>
            <p className="text-3xl font-semibold mt-4">{plan.price}</p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-300">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-all">
              <Link to={"/register"}>Join Now</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemberShip;
