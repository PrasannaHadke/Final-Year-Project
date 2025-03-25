import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    membership: "basic",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registration Data:", formData);
    alert("Registration Successful! Welcome to Zini Fitness Hub 💪");
    navigate("/layout"); // Redirect after successful registration
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-yellow-400 text-center">Gym Registration</h2>
        <p className="text-gray-400 text-center mt-2">Join us today and start your fitness journey with Fitness Hub today!</p>

        {/* Registration Form */}
        <form className="mt-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-300 font-medium mb-1">Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none"
              placeholder="Enter your full name"/>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-300 font-medium mb-1">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none"
              placeholder="Enter your email"/>
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-gray-300 font-medium mb-1">Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none"
              placeholder="Enter your phone number"/>
          </div>

          {/* Membership Type */}
          <div className="mb-4">
            <label className="block text-gray-300 font-medium mb-1">Membership Type</label>
            <select name="membership" value={formData.membership} onChange={handleChange} required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none">
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
              <option value="vip">VIP</option>
            </select>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-300 font-medium mb-1">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none"
              placeholder="Enter your password"/>
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-gray-300 font-medium mb-1">Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none"
              placeholder="Confirm your password"/>
          </div>

          {/* Register Button */}
          <button type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105" >
            Register
          </button>
        </form>

        {/* Already Have an Account? */}
        <p className="text-gray-400 text-center mt-4">
          Already a member? <a href="/login" className="text-yellow-400 hover:underline">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
