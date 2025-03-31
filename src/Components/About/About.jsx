import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-center text-white shadow-lg">
          About Us
        </h1>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Welcome to Our Gym</h2>
        <p className="text-lg text-center max-w-2xl mx-auto">
          At <strong>Fitness Hub</strong>, we believe fitness is not just a goal, it’s a lifestyle.
          Whether you're a beginner or an experienced athlete, we have everything you need to achieve
          your fitness goals in a motivating and energetic environment.
        </p>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {/* Feature Card - Modern Equipment */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <img 
              src="https://images.pexels.com/photos/4164763/pexels-photo-4164763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Gym Equipment"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-3 text-gray-800">🏋️‍♂️ Modern Equipment</h3>
            <p>We provide top-notch gym equipment to help you train effectively.</p>
          </div>

          {/* Feature Card - Certified Trainers */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <img 
              src="https://images.pexels.com/photos/4753893/pexels-photo-4753893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Certified Trainer"
              className="w-full h-48 object-contain rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-3 text-gray-800">💪 Certified Trainers</h3>
            <p>Our experienced trainers guide you every step of the way.</p>
          </div>

          {/* Feature Card - Group Workouts */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <img 
              src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Group Workout"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-3 text-gray-800">🔥 Group Workouts</h3>
            <p>Join Zumba, Yoga, HIIT, and CrossFit classes for a fun fitness experience.</p>
          </div>
        </div>

        {/* Our Commitment Section */}
        <div className="mt-16 bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Commitment</h2>
          <div className="flex flex-col md:flex-row items-center">
            <img 
              src="https://images.pexels.com/photos/4753927/pexels-photo-4753927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Commitment to Fitness"
              className="w-full md:w-1/2 h-64 object-cover rounded-lg mb-6 md:mb-0"
            />
            <p className="text-lg text-center md:text-left max-w-3xl mx-auto md:ml-6">
              At <strong>Fitness Hub</strong>, we are committed to fostering a supportive and empowering fitness community.
              Our goal is to provide a welcoming space where individuals of all fitness levels can train, grow, and achieve their
              personal best. We prioritize high-quality equipment, expert guidance, and a motivating atmosphere to help you stay
              on track with your health journey. Your success is our mission, and we strive to inspire, educate, and push you beyond
              your limits every day.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Transform Your Life?</h2>
          <p className="text-lg max-w-xl mx-auto">
            Join <strong>Fitness Hub</strong> today and take the first step towards a stronger, healthier you!
          </p>
          <button className="mt-6 bg-gray-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg transition-all">
            <Link to="/register">Join Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
