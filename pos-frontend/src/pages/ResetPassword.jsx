import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [timer, setTimer] = useState(600); // 10 minutes = 600 seconds
  const navigate = useNavigate();

  // Countdown Timer
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          navigate("/login"); // redirect to login after 10 mins
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [navigate]);

  const handleOtpChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      // Auto focus to next field
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }
    console.log("New Password:", password);
    console.log("Entered OTP:", enteredOtp);
    // Add actual reset logic here
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-[#1e1e2e] via-[#252738] to-[#1e1e2e]">
      <div className="bg-[#1b1521] p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-white text-2xl font-semibold text-center mb-4">
          Reset Password
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col">
          {/* OTP Input */}
          <label className="block text-[#ababab] text-sm font-medium mb-2">
            Enter 6-digit OTP
          </label>
          <div className="flex justify-between gap-2 mb-4">
            {otp.map((value, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={value}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                className="w-10 h-10 text-center text-white bg-[#2d2338] rounded-md focus:outline-none"
              />
            ))}
          </div>
          <p className="text-sm text-gray-400 mb-4 text-center">
            OTP expires in:{" "}
            <span className="text-yellow-400 font-semibold">
              {formatTime(timer)}
            </span>
          </p>

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

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#6d54b5] text-gray-200 font-semibold hover:bg-[#7a7098] transition mt-4"
          >
            Reset Password
          </button>
          <p className="text-sm text-gray-400 mt-4 text-center">
            Remember Password?{" "}
            <Link
              to="/login"
              className="text-[#6d54b5] font-bold hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
