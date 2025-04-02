import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";
import { addTable } from "../../https";
import { enqueueSnackbar } from "notistack";

const Modal = ({ setIsTableModalOpen }) => {
  const [tableData, setTableData] = useState({
    tableNo: "",
    seats: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Prevent negative values
    const newValue = value === "" ? "" : Math.max(0, Number(value));
    setTableData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    tableMutation.mutate(tableData);
  };

  const handleCloseModal = () => {
    setIsTableModalOpen(false);
  };

  const tableMutation = useMutation({
    mutationFn: (reqData) => addTable(reqData),
    onSuccess: (res) => {
      setIsTableModalOpen(false);
      enqueueSnackbar(res.data.message, { variant: "success" });
    },
    onError: (error) => {
      enqueueSnackbar(error.response.data.message, { variant: "error" });
      console.error(error);
    },
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-[#2a2136] p-6 rounded-xl shadow-2xl w-96 border border-[#5a4e7d] relative"
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-[#f5f5f5] text-xl font-semibold tracking-wide">
            Add New Table
          </h2>
          <button
            onClick={handleCloseModal}
            className="text-[#f5f5f5] hover:text-red-400 transition duration-200"
          >
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#d1c7e0] mb-2 text-sm font-medium">
              Table Number
            </label>
            <div className="flex items-center shadow-2xl rounded-lg p-3 px-4 bg-[#3a2c4d] border border-[#6b5a8b]">
              <input
                type="number"
                name="tableNo"
                value={tableData.tableNo}
                onChange={handleInputChange}
                min="0"
                className="bg-transparent flex-1 text-white placeholder-gray-400 focus:outline-none appearance-none custom-number-input"
                placeholder="Enter table number"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-[#d1c7e0] mb-2 text-sm font-medium">
              Number of Seats
            </label>
            <div className="flex items-center shadow-2xl rounded-lg p-3 px-4 bg-[#3a2c4d] border border-[#6b5a8b]">
              <input
                type="number"
                name="seats"
                value={tableData.seats}
                onChange={handleInputChange}
                min="0"
                className="bg-transparent flex-1 text-white placeholder-gray-400 focus:outline-none appearance-none custom-number-input"
                placeholder="Enter number of seats"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-6 py-3 text-lg bg-[#7d61cf] text-white rounded-lg shadow-xl transition duration-200 hover:bg-[#6b54b5]"
          >
            Add Table
          </motion.button>
        </form>
      </motion.div>

      {/* Remove Number Input Spinners using Tailwind & CSS */}
      <style>
        {`
          /* Remove number input spinners in Chrome, Safari, Edge */
          .custom-number-input::-webkit-outer-spin-button,
          .custom-number-input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* Remove number input spinners in Firefox */
          .custom-number-input {
            -moz-appearance: textfield;
          }
        `}
      </style>
    </div>
  );
};

export default Modal;
