import React, { useState, useEffect } from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import TableCard from "../components/tables/TableCard";
import { useQuery } from "@tanstack/react-query";
import { getTables } from "../https";
import { useSnackbar } from "notistack";

const Tables = () => {
  const [status, setStatus] = useState("all");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    document.title = "POS | Tables";
  }, []);

  const { data: resData, isError } = useQuery({
    queryKey: ["tables"],
    queryFn: async () => {
      try {
        const response = await getTables();
        console.log("Fetched Data:", response);
        return response;
      } catch (error) {
        console.error("API Error:", error);
        throw error; // Triggers isError
      }
    },
  });

  if (isError) {
    enqueueSnackbar("Something went wrong!", { variant: "error" });
  }

  // Default table when no API data
  const defaultTable = [
    {
      _id: "default",
      tableNo: "T1",
      status: "Available",
      seats: 4,
      currentOrder: { customerDetails: { name: "Guest" } },
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#1e1e2e] via-[#252738] to-[#1e1e2e] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">Tables</h1>
        </div>
        <div className="flex items-center justify-around gap-4">
          <button
            onClick={() => setStatus("all")}
            className={`text-[#ababab] text-lg font-semibold px-5 py-2 rounded-lg ${
              status === "all" ? "bg-[#383838]" : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => setStatus("booked")}
            className={`text-[#ababab] text-lg font-semibold px-5 py-2 rounded-lg ${
              status === "booked" ? "bg-[#383838]" : ""
            }`}
          >
            Booked
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3 px-16 py-4 h-[650px] overflow-y-scroll scrollbar-hide">
        {resData?.data?.data?.length > 0
          ? resData.data.data.map((table) => (
              <TableCard
                key={table._id}
                id={table._id}
                name={table.tableNo}
                status={table.status}
                initials={table?.currentOrder?.customerDetails?.name || "N/A"}
                seats={table.seats}
              />
            ))
          : // Show default table if no data
            defaultTable.map((table) => (
              <TableCard
                key={table._id}
                id={table._id}
                name={table.tableNo}
                status={table.status}
                initials={table?.currentOrder?.customerDetails?.name || "N/A"}
                seats={table.seats}
              />
            ))}
      </div>

      <BottomNav />
    </section>
  );
};

export default Tables;
