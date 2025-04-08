import React, { useEffect, useState } from "react";
import SideNavbar from "../components/inventory/SideNavbar";

const Inventory = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const greeting = () => {
    const hour = time.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="flex min-h-screen font-serif bg-[#f3eee5] text-[#3a302a]">
      <SideNavbar />
      <main className="flex-1 p-10 bg-[url('/vintage-bg.png')] bg-cover bg-center">
        <div className="bg-[#fff8f0] p-8 rounded-xl shadow-lg border border-[#d6c3b2]">
          <h1 className="text-3xl font-bold text-yellow-700 mb-2">{greeting()}, Admin!</h1>
          <p className="text-sm text-[#7e6b5a]">Welcome back to your inventory dashboard.</p>

          <div className="mt-6">
            <div className="flex items-center gap-10 text-[#5b4636]">
              <div>
                <h3 className="text-lg font-semibold">Today's Date</h3>
                <p>{formattedDate}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Current Time</h3>
                <p>{formattedTime}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="bg-[#f8f1e7] p-6 rounded-lg shadow-md border border-[#e2d2be]">
              <h2 className="text-xl font-bold text-[#5b4636] mb-2">Inventory Overview</h2>
              <p className="text-sm">Total Items: 120</p>
              <p className="text-sm">Low Stock Items: 5</p>
              <p className="text-sm">Out of Stock: 2</p>
            </div>
            <div className="bg-[#f8f1e7] p-6 rounded-lg shadow-md border border-[#e2d2be]">
              <h2 className="text-xl font-bold text-[#5b4636] mb-2">Quick Actions</h2>
              <button className="bg-yellow-700 text-white px-4 py-2 rounded-lg mr-3 hover:bg-yellow-800">Add Stock</button>
              <button className="bg-[#5b4636] text-white px-4 py-2 rounded-lg hover:bg-[#3f322a]">View Reports</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Inventory;
