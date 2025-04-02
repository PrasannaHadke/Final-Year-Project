import React, { useState , useContext } from "react";
import { useNavigate ,Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../Context/UserContext.js";
import { address } from "framer-motion/client";
function Register() {
  const {setRegisterUser} = useContext(UserContext)

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    confirmPassword: "",
    membership: "basic",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registration Data:", formData);
    // alert("Registration Successful! Welcome to Fitness Hub 💪");


    // agar user phele se exist krta hai to registration nhi honga uska code yaha se hai!

    try{
      const response = await axios.get("https://6788e51d2c874e66b7d6c01d.mockapi.io/one");
      console.log(response.data);
      const existingUser = response.data.find(user => user.email === formData.email);
      if (existingUser) {
        setErrors({ error: "User already exists. Please choose a different email." });
        return;
      }
    }catch(error){
      errors({ error: "Registration failed. Please try again." });
    }


    // Send registration data to the server for processing

    try {
      const registeredUser  =await axios.post("https://6788e51d2c874e66b7d6c01d.mockapi.io/one", formData);
    console.log(registeredUser );

    if (registeredUser.status === 201) {
      alert("Registration Successful! Welcome to Fitness Hub 💪");
      setRegisterUser(registeredUser.data)
      navigate("/signup"); // Redirect after successful registration
    }

    } catch (error) {
      setErrors({ error: "Registration failed. Please try again." });
    }
    
    
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

          {/* Address */}
          <div>
            <label className="block text-gray-300 font-medium mb-1">Address</label>
            <input type="address" name="address" value={formData.address} onChange={handleChange} required
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none"
            placeholder="Enter your address" />
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
            <select name="membership" value={formData.membership || ""} onChange={handleChange} required
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
          Already a member? <Link to="/signup" className="text-yellow-400 hover:underline">Login here</Link>
        </p>
        <p className="text-xl text-white text-center">{errors.error }</p>
      </div>
    </div>
  );
}

export default Register;
