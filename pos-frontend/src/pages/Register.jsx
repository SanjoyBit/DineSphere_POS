import React, { useState } from "react";
import restaurant from "../assets/images/restaurant-img1.jpg";
import logo from "../assets/Our_Logo2.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleSelection = (selectedRole) => {
    setFormData({ ...formData, role: selectedRole });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Clicked:", formData);
  };

  return (
    <motion.div
      className="relative w-full h-screen flex gap-10 overflow-hidden"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left Form */}
      <div className="w-full lg:w-1/2 flex flex-col p-10 bg-transparent relative">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-16 h-16" />
          <span className="text-white font-rochester font-bold text-4xl">
            DineSphere
          </span>
        </div>

        <form onSubmit={handleSubmit} className="w-full bg-transparent mt-10">
          <h2 className="text-3xl font-bold text-white mb-6">
            Employee Register
          </h2>

          <div className="flex items-center rounded-lg px-4 py-3 bg-[#3c364c]">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              className="bg-transparent flex-1 text-white focus:outline-none"
              required
            />
          </div>

          <div className="flex gap-4 mt-4">
            <div className="w-1/2">
              <div className="flex items-center rounded-lg px-4 py-3 bg-[#3c364c]">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="bg-transparent flex-1 text-white focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="w-1/2">
              <div className="flex items-center rounded-lg px-4 py-3 bg-[#3c364c]">
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="bg-transparent flex-1 text-white focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex items-center mt-4 rounded-lg px-4 py-3 bg-[#3c364c]">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="bg-transparent flex-1 text-white focus:outline-none"
              required
            />
          </div>

          <label className="block text-[#ababab] mb-2 mt-4 text-sm font-medium">
            Choose Role
          </label>
          <div className="flex items-center gap-3">
            {["Waiter", "Cashier", "Admin"].map((role) => (
              <button
                key={role}
                type="button"
                onClick={() => handleRoleSelection(role)}
                className={`px-3 py-3 w-full rounded-2xl text-[#c7acf3] transition-all duration-200 ${
                  formData.role === role
                    ? "bg-[#6b46c1]"
                    : "bg-[#451e6e7e] hover:bg-[#5a3b99] active:bg-[#764abc]"
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg mt-6 py-3 text-lg bg-[#6d54b5] text-gray-200 hover:bg-[#5a44a0]"
          >
            <Link to="/forgot-password/otp">Sign up</Link>
          </button>

          <p className="text-gray-400 text-base text-center mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-[#6d54b5] hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>

      {/* Right Image */}
      <div className="w-1/2 p-4 bg-transparent flex items-center justify-center bg-cover relative">
        <img
          className="w-full h-full rounded-2xl brightness-50 object-cover shadow-3xl"
          src={restaurant}
          alt="Restaurant Image"
        />
        <blockquote className="absolute bottom-10 px-8 mb-10 text-xl italic text-white">
          "Serve customers the best food with prompt and friendly service in a
          welcoming atmosphere."
          <br />
          <span className="block mt-4 text-yellow-400">
            - Founder of DineSphere
          </span>
        </blockquote>
      </div>
    </motion.div>
  );
};

export default Register;
