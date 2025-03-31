import React from 'react';
import { Link } from 'react-router-dom';

function Section1() {
  return (
    <div className="w-full bg-white py-12 flex justify-center">
      <div className="w-[90%] max-w-4xl text-center md:text-left space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Delivering World-Class Service
        </h1>

        <p className="text-xl font-semibold text-gray-700">
          Join Our Gym <br className="md:hidden" /> Our Family
        </p>

        <p className="text-gray-600 leading-relaxed">
          We’re passionate about helping you achieve the body you’ve always wanted. 
          Our world-class facilities, state-of-the-art equipment, and a team of experts 
          are dedicated to giving you the results you deserve. Join us today and start 
          living your best life.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Oneabove Fitness is the perfect place to get fit. Our fitness equipment is 
          designed with excellent biomechanics that not only delivers superior results 
          but also prevents injuries. With over 40 years of experience, we know what 
          it takes to level up your fitness, and we are committed to leveling up our 
          services and infrastructure every day to make fitness possible.
        </p>

        <div className="mt-6">
          <Link 
            to="/register"
            className="px-6 py-3 bg-orange-600 text-white font-semibold text-lg rounded-lg 
                       shadow-md hover:bg-orange-700 transition duration-300"
          >
            Become a Member
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section1;
