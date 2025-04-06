import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      alert("New Password and Confirm Password do not match!");
      return;
    }

    // TODO: Call your backend API here to change the password
    console.log("Changing password...", {
      currentPassword,
      newPassword,
    });
  };

  const inputClass =
    "w-full p-3 pr-10 rounded bg-[#2d2338] pl-10 text-white outline-none focus:ring-2 ring-[#6d54b5] placeholder:text-gray-600";

  const iconClass =
    "absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400 cursor-pointer";

  const lockIconClass =
    "absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400";

  return (
    <div className="h-screen bg-gradient-to-r from-[#1e1e2e] via-[#252738] to-[#1e1e2e] flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1b1521] text-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Change Password</h2>

        {/* Current Password */}
        <div>
          <label className="block mb-1 text-sm font-medium">Current Password</label>
          <div className="relative">
            <CiLock className={lockIconClass} />
            <input
              type={showCurrent ? "text" : "password"}
              className={inputClass}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Current password"
              required
            />
            <span
              className={iconClass}
              onClick={() => setShowCurrent(!showCurrent)}
            >
              {showCurrent ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* New Password */}
        <div>
          <label className="block mb-1 text-sm font-medium">New Password</label>
          <div className="relative">
            <CiLock className={lockIconClass} />
            <input
              type={showNew ? "text" : "password"}
              className={inputClass}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New password"
              required
            />
            <span
              className={iconClass}
              onClick={() => setShowNew(!showNew)}
            >
              {showNew ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* Confirm New Password */}
        <div>
          <label className="block mb-1 text-sm font-medium">Confirm New Password</label>
          <div className="relative">
            <CiLock className={lockIconClass} />
            <input
              type={showConfirm ? "text" : "password"}
              className={inputClass}
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              placeholder="Confirm password"
              required
            />
            <span
              className={iconClass}
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#6d54b5] hover:bg-[#7a7098] transition text-white py-3 rounded font-medium"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
