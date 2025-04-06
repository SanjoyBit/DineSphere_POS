import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const OTPInput = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next field if a number is entered
      if (value !== "" && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleBackspace = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputRefs.current[index - 1].focus();
    }
  };

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Entered OTP:", otp.join(""));
  };

  return (
    <section className="h-screen  flex items-center justify-center bg-gradient-to-r from-[#1e1e2e] via-[#252738] to-[#1e1e2e]">
      <div className="bg-[#1b1521] p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-white text-2xl font-semibold text-center mb-4">Enter OTP</h2>
        <p className="text-[#ababab] text-center mb-6">We have sent a 6-digit OTP to your email</p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex gap-3 mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                value={digit}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleBackspace(index, e)}
                maxLength="1"
                className="w-12 h-12 text-center text-white text-xl font-semibold bg-[#2d2338] rounded-lg focus:outline-none border border-[#3d3d3d] focus:border-yellow-400 transition"
              />
            ))}
          </div>

          <div className="text-center text-[#ffb830] text-lg font-bold mb-4">
            {formatTime()} remaining
          </div>
          <Link to="/">
            <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg font-semibold bg-[#6d54b5] text-gray-200 hover:bg-[#7a7098] transition"
                disabled={timeLeft === 0 || otp.includes("")}
            >
                Verify OTP
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default OTPInput;
