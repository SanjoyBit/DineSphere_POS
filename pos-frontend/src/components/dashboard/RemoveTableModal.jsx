import React from "react";

const mockTables = ["T1", "T2", "T3", "T4", "T5"];

const RemoveTableModal = ({ setIsRemoveModalOpen }) => {
  const handleRemove = (table) => {
    console.log("Removing table:", table);
    // Add your delete logic here
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center">
      <div className="bg-[#2a2136] p-6 rounded-xl shadow-2xl border border-[#5a4e7d] w-[90%] max-w-md text-gray-200">
        <h2 className="text-xl font-semibold mb-4">Remove Table</h2>
        <ul className="space-y-3 max-h-60 overflow-y-auto ">
          {mockTables.map((table) => (
            <li
              key={table}
              className="flex items-center justify-between px-4 py-2 border border-[#5a4e7d] rounded shadow-sm"
            >
              <span className="font-medium">{table}</span>
              <button
                onClick={() => handleRemove(table)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <div className="flex justify-end mt-6">
          <button
            onClick={() => setIsRemoveModalOpen(false)}
            className="px-4 py-2 bg-[#5a4e7d] rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveTableModal;
