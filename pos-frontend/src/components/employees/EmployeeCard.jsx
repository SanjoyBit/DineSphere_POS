import React, { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const EmployeeCard = ({
  profileImage,
  name,
  title = "Product Manager",
  email,
  phone,
  location = "Bangalore",
  status = "Active",
}) => {
  const [currentStatus, setCurrentStatus] = useState(status);

  const toggleStatus = () => {
    setCurrentStatus((prev) => (prev === "Active" ? "Inactive" : "Active"));
  };

  return (
    <div className="w-[230px] h-[280px] rounded-xl border-none overflow-hidden transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-[#28283a] shadow-xl">
      {/* Top Section */}
      <div className="bg-[#1f1f2e] text-white px-4 py-4 flex flex-col items-center">
        <img
          src={profileImage}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-white"
        />
        <h2 className="mt-2 font-semibold text-base">{name}</h2>
        <p className="text-sm text-gray-300">{title}</p>
        
        {/* Clickable Status Active or Inactive */}
        <span
          onClick={toggleStatus}
          className={`mt-2 text-xs font-medium px-3 py-1 rounded-full cursor-pointer transition-all duration-200 ${
            currentStatus === "Active"
              ? "bg-green-100 text-green-600 hover:bg-green-200"
              : "bg-red-100 text-red-600 hover:bg-red-200"
          }`}
        >
          {currentStatus}
        </span>
      </div>

      {/* Bottom Section */}
      <div className="bg-white px-4 py-3 text-sm text-gray-700 space-y-2">
        <div className="flex items-center gap-2">
          <MdEmail className="text-gray-500" />
          <span className="truncate">{email}</span>
        </div>
        <div className="flex items-center gap-2">
          <MdPhone className="text-gray-500" />
          <span>{phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <MdLocationOn className="text-gray-500" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
