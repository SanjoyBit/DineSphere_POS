// pages/Employees.jsx
import React, { useEffect, useState } from "react";
import BackButton from "../components/shared/BackButton";
import BottomNav from "../components/shared/BottomNav";
import EmployeeCard from "../components/employees/EmployeeCard";

const Employees = () => {
  const [status, setStatus] = useState("all");

  useEffect(() => {
    document.title = "POS | Employees";
  }, []);

  // Sample Employee Data (replace with API later)
  const employees = [
    {
      id: "e1",
      name: "Ravi Kumar",
      phone: "+91 9876543210",
      email: "ravi@example.com",
      profileImage: "https://i.pravatar.cc/100?img=1",
      isVerified: true,
      status: "Active",
    },
    {
      id: "e2",
      name: "Priya Sharma",
      phone: "+91 9123456789",
      email: "priya@example.com",
      profileImage: "https://i.pravatar.cc/100?img=2",
      isVerified: false,
      status: "Inactive",
    },
  ];

  const filteredEmployees =
    status === "all" ? employees : employees.filter((emp) => emp.status.toLowerCase() === status);

  return (
    <section className="bg-gradient-to-r from-[#1e1e2e] via-[#252738] to-[#1e1e2e] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">Employees</h1>
        </div>
        <div className="flex items-center justify-around gap-4">
          <button
            onClick={() => setStatus("all")}
            className={`text-[#ababab] text-lg font-semibold px-5 py-2 rounded-lg ${
              status === "all" ? "bg-[#1b1521]" : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => setStatus("active")}
            className={`text-[#ababab] text-lg font-semibold px-5 py-2 rounded-lg ${
              status === "active" ? "bg-[#1b1521]" : ""
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setStatus("inactive")}
            className={`text-[#ababab] text-lg font-semibold px-5 py-2 rounded-lg ${
              status === "inactive" ? "bg-[#1b1521]" : ""
            }`}
          >
            Inactive
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3 px-16 py-4 h-[650px] overflow-y-scroll scrollbar-hide">
        {filteredEmployees.map((emp) => (
          <EmployeeCard
            key={emp.id}
            profileImage={emp.profileImage}
            name={emp.name}
            phone={emp.phone}
            email={emp.email}
            isVerified={emp.isVerified}
            status={emp.status}
          />
        ))}
      </div>

      <BottomNav />
    </section>
  );
};

export default Employees;
