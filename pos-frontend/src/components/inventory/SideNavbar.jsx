import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  MdDashboard,
  MdAddBox,
  MdCategory,
  MdOutlineAssessment,
  MdOutlineReceiptLong,
  MdHome,
} from "react-icons/md";

const SideNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: "Dashboard", icon: <MdDashboard size={20} />, path: "/dashboard" },
    { name: "Add Stock", icon: <MdAddBox size={20} />, path: "/add-stock" },
    { name: "Stock by Category", icon: <MdCategory size={20} />, path: "/stock" },
    { name: "Report", icon: <MdOutlineAssessment size={20} />, path: "/report" },
    { name: "Sales Record", icon: <MdOutlineReceiptLong size={20} />, path: "/sales-record" },
    { name: "Go to Home", icon: <MdHome size={20} />, path: "/" },
  ];

  return (
    <div className="min-h-screen w-64 bg-[#1e1b18] text-white p-6 border-r border-[#5b4636] shadow-xl font-serif overflow-hidden">
      <h2 className="text-2xl mb-6 font-bold text-yellow-300 tracking-wide">
        Inventory Panel
      </h2>

      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 border border-transparent hover:border-yellow-500 hover:bg-[#2d2622] ${
                isActive(item.path)
                  ? "bg-[#3a302a] border-yellow-600 text-yellow-300"
                  : "text-[#d8cfc4]"
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-10 text-center text-xs text-[#a39e97] italic">
        Crafted with care ✨
      </div>
    </div>
  );
};

export default SideNavbar;
