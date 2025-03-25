import React, { useState } from "react";
import Logo from "../Logo/Logo.jsx";
function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Signup Successful!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        
      <div className="flex  justify-center"><Logo/></div>
        {/* <p className="text-gray-400 text-center mt-2">Create your account now!</p> */}

        {/* Form */}
        <form className="mt-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-300 font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-300 font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-300 font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-gray-400 text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-400 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
