import React, { useState, useEffect } from "react";
import { MdTableBar, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Metrics from "../components/dashboard/Metrics";
import RecentOrders from "../components/dashboard/RecentOrders";
import Modal from "../components/dashboard/Modal";
import RemoveTableModal from "../components/dashboard/RemoveTableModal";

const buttons = [
  { label: "Add Table", icon: <MdTableBar />, action: "add" },
  { label: "Remove Table", icon: <MdDelete />, action: "remove" },
];

const tabs = ["Metrics", "Orders", "Payments"];

const Dashboard = () => {
  useEffect(() => {
    document.title = "POS | Admin Dashboard";
  }, []);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Metrics");

  const handleOpenModal = (action) => {
    if (action === "add") setIsAddModalOpen(true);
    if (action === "remove") setIsRemoveModalOpen(true);
  };

  return (
    <div className="bg-gradient-to-r from-[#1e1e2e] via-[#252738] to-[#1e1e2e] h-[calc(100vh-5rem)]">
      <div className="container mx-auto flex items-center justify-between py-14 px-6 md:px-4">
        <div className="flex items-center gap-3">
          {buttons.map(({ label, icon, action }) => (
            <button
              key={action}
              onClick={() => handleOpenModal(action)}
              className="bg-[#1a1a1a] hover:bg-[#262626] px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2"
            >
              {label} {icon}
            </button>
          ))}

          <Link to="/inventory">
            <button className="bg-[#1a1a1a] hover:bg-[#262626] px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2">
              Inventory
            </button>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2 ${
                activeTab === tab ? "bg-[#262626]" : "bg-[#1a1a1a] hover:bg-[#262626]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "Metrics" && <Metrics />}
      {activeTab === "Orders" && <RecentOrders />}
      {activeTab === "Payments" && (
        <div className="text-white p-6 container mx-auto">
          Payment Component Coming Soon
        </div>
      )}

      {isAddModalOpen && <Modal setIsTableModalOpen={setIsAddModalOpen} />}
      {isRemoveModalOpen && <RemoveTableModal setIsRemoveModalOpen={setIsRemoveModalOpen} />}
    </div>
  );
};

export default Dashboard;
