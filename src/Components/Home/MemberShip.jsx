import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../FramerMotion/Variant";

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
      features: [
        "All Quarterly Benefits",
        "Exclusive Merchandise",
        "Priority Booking",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-5">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Choose Your Membership
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] max-w-6xl">
        {memberships.map((plan, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all text-center"
          >
            <h2 className="text-2xl font-bold text-blue-600">{plan.type}</h2>
            <p className="text-lg mt-2 text-gray-700">{plan.duration}</p>
            <p className="text-3xl font-semibold mt-4 text-gray-900">
              {plan.price}
            </p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-700">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-all">
              <Link to={"/register"}>Join Now</Link>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MemberShip;
