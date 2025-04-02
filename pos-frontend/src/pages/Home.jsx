import React, { useEffect } from "react";
import BottomNav from "../components/shared/BottomNav";
import Greetings from "../components/home/Greetings";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import MiniCard from "../components/home/MiniCard";
import RecentOrders from "../components/home/RecentOrders";
import PopularDishes from "../components/home/PopularDishes";

const Home = () => {

  useEffect(() => {
    document.title = "POS | Home";
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#1e1e2e] via-[#252738] to-[#1e1e2e] h-[calc(100vh-5rem)] overflow-hidden flex gap-6 p-8">
      {/* Left Div */}
      <div className="flex-[3] space-y-8">
        <Greetings />

        <div className="flex items-center w-full gap-6">
          <MiniCard 
            title="Total Earnings" 
            icon={<BsCashCoin />} 
            number={512} 
            footerNum={1.6} 
            bgColor="bg-gradient-to-r from-[#ffb830] to-[#f58f29]"
          />
          <MiniCard 
            title="In Progress" 
            icon={<GrInProgress />} 
            number={16} 
            footerNum={3.6} 
            bgColor="bg-gradient-to-r from-[#ff6464] to-[#f73c3c]"
          />
        </div>

        <RecentOrders />
      </div>

      {/* Right Div */}
      <div className="flex-[2] space-y-8">
        <PopularDishes />
      </div>

      <BottomNav />
    </section>
  );
};

export default Home;
