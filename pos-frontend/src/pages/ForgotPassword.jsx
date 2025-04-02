import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reset link sent to: ${email}`);
  };

  

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-[#1e1e2e] via-[#252738] to-[#1e1e2e]">
      <div className="w-full max-w-md bg-[#1b1521] p-8 rounded-lg shadow-4xl">
        <h2 className="text-2xl font-semibold text-white text-center">Forgot Password</h2>
        <p className="text-gray-400 text-sm text-center mt-2 mb-6">
          Enter your email to receive a One Time Password.
        </p>
        
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-400 mb-2 text-sm font-medium">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-[#2d2338] text-white focus:outline-none "
            required
          />
          
          <Link to="/forgot-password/otp">
            <button
              type="submit"
              className="w-full mt-6 py-3 bg-[#6d54b5] text-gray-200 font-semibold rounded-lg hover:bg-[#7a7098] transition"
            >
              Send OTP
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
