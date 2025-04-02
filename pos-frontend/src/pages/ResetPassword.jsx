import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");
      console.log("New Password Set:", password);
    }
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-[#1e1e2e] via-[#252738] to-[#1e1e2e]">
      <div className="bg-[#1b1521] p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-white text-2xl font-semibold text-center mb-4">
          Reset Password
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col">
          {/* New Password Field */}
          <div className="mb-4 relative">
            <label className="block text-[#ababab] text-sm font-medium mb-2">
              New Password
            </label>
            <div className="flex items-center rounded-lg bg-[#2d2338] p-3">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
                className="bg-transparent flex-1 text-white focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-200"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4 relative">
            <label className="block text-[#ababab] text-sm font-medium mb-2">
              Confirm Password
            </label>
            <div className="flex items-center rounded-lg bg-[#2d2338] p-3">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter new password"
                className="bg-transparent flex-1 text-white focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="text-gray-400 hover:text-gray-200"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#6d54b5] text-gray-200 font-semibold hover:bg-[#7a7098] transition mt-4"
          >
            Reset Password
          </button>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
