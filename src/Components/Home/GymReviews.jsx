import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../FramerMotion/Variant";
function GymReviews() {
  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      feedback: "Amazing gym with great equipment and trainers!",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Sarah Smith",
      rating: 4,
      feedback: "Love the environment! The trainers are super helpful.",
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Michael Brown",
      rating: 5,
      feedback: "Best gym in town! Clean, spacious, and well-equipped.",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  // Function to render stars based on rating
  const renderStars = (rating) => {
    return "⭐".repeat(rating);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-5">
      <motion.h1 
      variants={fadeIn('up',0.5)}
      initial= 'hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.7}}
      className="text-4xl font-bold mb-8">Member Reviews</motion.h1>

      
      <motion.div
      variants={fadeIn('down',0.5)}
      initial= 'hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.7}}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center w-80"
          >
            <img
              src={review.profilePic}
              alt={review.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-yellow-500"
            />
            <h2 className="text-xl font-bold">{review.name}</h2>
            <p className="text-yellow-400 text-lg">{renderStars(review.rating)}</p>
            <p className="text-gray-300 mt-4 italic">"{review.feedback}"</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default GymReviews;
