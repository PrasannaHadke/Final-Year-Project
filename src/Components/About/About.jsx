import React from "react";

function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?gym,fitness')" }}>
        <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center">About Us</h1>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">Welcome to Our Gym</h2>
        <p className="text-lg text-center max-w-2xl mx-auto">
          At <strong>Your Gym Name</strong>, we believe fitness is not just a goal, it’s a lifestyle. 
          Whether you're a beginner or an experienced athlete, we have everything you need to achieve 
          your fitness goals in a motivating and energetic environment.
        </p>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {/* Feature Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">🏋️‍♂️ Modern Equipment</h3>
            <p>We provide top-notch gym equipment to help you train effectively.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">💪 Certified Trainers</h3>
            <p>Our experienced trainers guide you every step of the way.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">🔥 Group Workouts</h3>
            <p>Join Zumba, Yoga, HIIT, and CrossFit classes for a fun fitness experience.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Ready to Transform Your Life?</h2>
          <p className="text-lg max-w-xl mx-auto">
            Join <strong>Your Gym Name</strong> today and take the first step towards a stronger, healthier you!
          </p>
          <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
