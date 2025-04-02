import React from "react";
import { useNavigate } from "react-router-dom";
import { getAvatarName, getBgColor } from "../../utils";
import { useDispatch } from "react-redux";
import { updateTable } from "../../redux/slices/customerSlice";
import { FaLongArrowAltRight } from "react-icons/fa";

const TableCard = ({ id, name, status, initials, seats }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (name) => {
    if (status === "Booked") return;

    const table = { tableId: id, tableNo: name };
    dispatch(updateTable({ table }));
    navigate(`/menu`);
  };

  return (
    <div
      onClick={() => handleClick(name)}
      className={`relative h-[200px] w-full bg-[#1f1f2e] border border-[#31313f] p-5 rounded-lg cursor-pointer 
        transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-[#28283a] shadow-xl`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[#f5f5f5] text-base font-semibold tracking-wide">
          Table <FaLongArrowAltRight className="text-[#ababab] ml-2 inline" /> {name}
        </h1>
        <p
          className={`px-3 py-1 text-sm font-medium rounded-lg ${
            status === "Booked"
              ? "text-green-400 bg-[#244c3c]"
              : "text-yellow-300 bg-[#5a3b00]"
          }`}
        >
          {status}
        </p>
      </div>

      {/* Avatar Circle */}
      <div className="flex items-center justify-center mt-6 mb-6">
        <h1
          className={`text-white text-2xl font-bold flex items-center justify-center w-16 h-16 rounded-full`}
          style={{ backgroundColor: initials ? getBgColor() : "#252536" }}
        >
          {getAvatarName(initials) || "N/A"}
        </h1>
      </div>

      {/* Seats Info */}
      <p className="text-[#bbbbbb] text-xs text-start">
        Seats: <span className="text-[#f5f5f5] font-semibold">{seats}</span>
      </p>
    </div>
  );
};

export default TableCard;
