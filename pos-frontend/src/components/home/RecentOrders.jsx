import React from "react";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { getOrders } from "../../https/index";

const RecentOrders = () => {
  const { data: resData, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      return await getOrders();
    },
    placeholderData: keepPreviousData,
  });

  // if (isError) {
  //   enqueueSnackbar("Something went wrong!", { variant: "error" });
  // }

  return (
    <div className=" mt-6">
      <div className="bg-[#1b1521] w-full h-[230px] rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            Recent Orders
          </h1>
          <a href="" className="text-[#025cca] text-xs font-semibold">
            View all
          </a>
        </div>

        <div className="flex items-center gap-4 bg-[#261d2e] rounded-[10px] px-6 py-2 mx-6">
          <FaSearch className="text-[#f5f5f5] text-sm" />
          <input
            type="text"
            placeholder="Search recent orders"
            className="bg-[#261d2e] outline-none text-sm text-[#f5f5f5]"
          />
        </div>

        {/* Order list */}
        <div className="mt-4 px-6 overflow-y-scroll h-[300px] scrollbar-hide">
          {resData?.data.data.length > 0 ? (
            resData.data.data.map((order) => {
              return <OrderList key={order._id} order={order} />;
            })
          ) : (
            <p className="col-span-3 text-sm text-gray-500">No orders available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
