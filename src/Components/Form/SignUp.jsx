import React, { useState ,useContext } from "react";
import UserContext from "../Context/UserContext.js";
import Logo from "../Logo/Logo.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function SignUp() {
  const {setUser} = useContext(UserContext)


  const [formData, setFormData] = useState({
    fullName: "",
    // email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      const signUpResponse = await axios.get("https://6788e51d2c874e66b7d6c01d.mockapi.io/one");
      console.log(signUpResponse.data);
      
      let user = signUpResponse.data.find((u) => {
        // console.log(u);
        
        return (u.fullName === formData.fullName && u.email === formData.email && u.password === formData.password)
      })

      if (user) {
        setUser({fullName:user.fullName});
        console.log("user",user.fullName);
        
        navigate("/dashboard");
      }
    } catch (error) {
      setError("SignUp failed. Please try again.");
    }
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
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          {/* <div className="mb-4">
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
          </div> */}

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
        <p>{error}</p>
      </div>
    </div>
  );
}

export default SignUp;
