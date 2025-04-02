import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import restaurant from "../assets/images/restaurant-img1.jpg";
import logo from "../assets/Our_Logo.png";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";

const Auth = () => {
  useEffect(() => {
    document.title = "POS | Auth";
  }, []);

  const [isRegister, setIsRegister] = useState(false);

  // **********Animation Variants************
  const animationVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.4, ease: "easeInOut" } }
  };

  return (
    <div className="relative w-full h-screen flex overflow-hidden">
      <AnimatePresence mode="wait">
        {isRegister ? (
          <motion.div key="register" variants={animationVariants} initial="hidden" animate="visible" exit="exit" className="flex h-full w-full">
            {/* Left Image (with Quote) */}
            <div className="w-1/2 p-4 bg-[#2c2638] flex items-center justify-center bg-cover relative">
              <img className="w-full h-full rounded-2xl brightness-50 object-cover shadow-3xl" src={restaurant} alt="Restaurant Image" />
              {/* Quote */}
              <blockquote className="absolute bottom-10 px-8 mb-10 text-xl italic text-white">
                "Serve customers the best food with prompt and friendly service in a
                welcoming atmosphere, and they’ll keep coming back."
                <br />
                <span className="block mt-4 text-yellow-400">- Founder of DineSphere</span>
              </blockquote>
            </div>
            
            {/* Right Form */}
            <div className="w-1/2 min-h-screen bg-[#2c2638] p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 cursor-pointer">
                <img src={logo} className="h-16 w-16 mb-4" alt="restro logo" />
                <h1 className="text-4xl font-rochester font-semibold text-[#f5f5f5] tracking-wide">DineSphere</h1>
              </div>
              <h2 className="text-4xl text-start mt-4 font-semibold text-white mb-10">Create an Account</h2>
              <Register setIsRegister={setIsRegister} />
              <p className="text-sm text-[#ababab] text-center mt-6">
                Already have an account? <span className="text-[#ba7ef9] font-semibold hover:underline cursor-pointer" onClick={() => setIsRegister(false)}>Sign in</span>
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div key="login" variants={animationVariants} initial="hidden" animate="visible" exit="exit" className="flex h-full w-full">
            {/* Left Form */}
            <div className="w-1/2 min-h-screen bg-[#2c2638] p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 cursor-pointer">
                <img src={logo} className="h-16 w-16 mb-4" alt="restro logo" />
                <h1 className="text-4xl font-rochester font-semibold text-[#f5f5f5] tracking-wide">DineSphere</h1>
              </div>
              <h2 className="text-4xl text-start mt-4 font-semibold text-white mb-10">Employee Login</h2>
              <Login />
              <p className="text-sm text-[#ababab] text-center mt-6">
                Don't have an account? <span className="text-[#ba7ef9] font-semibold hover:underline cursor-pointer" onClick={() => setIsRegister(true)}>Sign up</span>
              </p>
            </div>

            {/* Right Image (with Quote) */}
            <div className="w-1/2 p-4 bg-[#2c2638] flex items-center justify-center bg-cover relative">
              <img className="w-full h-full rounded-2xl brightness-50 object-cover shadow-3xl" src={restaurant} alt="Restaurant Image" />
              {/* Quote */}
              <blockquote className="absolute bottom-10 px-8 mb-10 text-xl italic text-white">
                "Serve customers the best food with prompt and friendly service in a
                welcoming atmosphere, and they’ll keep coming back."
                <br />
                <span className="block mt-4 text-yellow-400">- Founder of DineSphere</span>
              </blockquote>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Auth;
