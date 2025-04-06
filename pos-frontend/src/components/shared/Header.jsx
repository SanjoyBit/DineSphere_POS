import React, { useState } from "react";
import { FaSearch, FaUserCircle, FaBell } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import logo from "../../assets/Our_Logo2.png";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../https";
import { removeUser } from "../../redux/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showProfileModal, setShowProfileModal] = useState(false);

  const logoutMutation = useMutation({
    mutationFn: () => logout(),
    onSuccess: (data) => {
      console.log(data);
      dispatch(removeUser());
      navigate("/auth");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <>
      <header className="flex justify-between items-center h-16 py-4 px-8 shadow-2xl bg-[#1b1521]">
        {/* LOGO */}
        <div onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer">
          <img src={logo} className="h-10 w-10" alt="restro logo" />
          <h1 className="text-2xl font-rochester font-semibold text-[#f5f5f5] tracking-wide">
            DineSphere
          </h1>
        </div>

        {/* SEARCH */}
        <div className="flex items-center gap-4 bg-gradient-to-br from-[#1e1e2e] via-[#252738] to-[#1e1e2e] rounded-[15px] px-5 py-2 w-[500px]">
          <FaSearch className="text-[#f5f5f5]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent w-full outline-none text-[#f5f5f5]"
          />
        </div>

        {/* LOGGED USER DETAILS */}
        <div className="flex items-center gap-4">
          {userData.role === "Admin" && (
            <div onClick={() => navigate("/dashboard")} className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
              <MdDashboard className="text-[#f5f5f5] text-2xl" />
            </div>
          )}
          <div className="bg-[#1f1f1f] rounded-[15px] p-2 cursor-pointer">
            <FaBell className="text-[#f5f5f5] text-xl" />
          </div>

          {/* USER PROFILE CLICKABLE AREA */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setShowProfileModal(true)}>
            <FaUserCircle className="text-[#f5f5f5] text-3xl" />
            <div className="flex flex-col items-start">
              <h1 className="text-sm text-[#f5f5f5] font-semibold tracking-wide">
                {userData.name || "TEST USER"}
              </h1>
              <p className="text-xs text-[#ababab] font-medium">
                {userData.role || "Role"}
              </p>
            </div>
          </div>
          
          <Link to="/login">
            <TbLogout 
              onClick={handleLogout}
              className="text-[#f5f5f5] ml-2"
              size={25}
            />
          </Link>
        </div>
      </header>

      {/* ANIMATED PROFILE MODAL */}
      <AnimatePresence>
        {showProfileModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1f1f1f] rounded-xl shadow-2xl p-6 w-96 relative"
              initial={{ scale: 0.8, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowProfileModal(false)}
                className="absolute top-2 right-4 text-white text-xl font-bold"
              >
                ×
              </button>

              {/* Profile Image */}
              <div className="flex justify-center mb-4">
                <FaUserCircle className="text-white text-6xl bg-[#2d2d2d] rounded-full p-2" />
              </div>

              {/* User Info */}
              <div className="text-left text-[#f5f5f5] space-y-2">
                <h2 className="text-lg font-semibold">{userData.name}</h2>
                <p>Email: {userData.email || "Not Provided"}</p>
                <p>Phone: {userData.phone || "Not Provided"}</p>
                <p>Role: {userData.role}</p>
                <p>Verified: {userData.isVerified ? "Yes" : "No"}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-around mt-6">
                <button
                  onClick={() => {
                    setShowProfileModal(false);
                    navigate("/update-profile");
                  }}
                  className="bg-[#6d54b5] text-white px-4 py-2 rounded-lg hover:bg-[#7a7098] transition"
                >
                  Update Profile
                </button>
                <button
                  onClick={() => {
                    setShowProfileModal(false);
                    navigate("/change-password");
                  }}
                  className="bg-[#6d54b5] text-white px-4 py-2 rounded-lg hover:bg-[#7a7098] transition"
                >
                  Change Password
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
