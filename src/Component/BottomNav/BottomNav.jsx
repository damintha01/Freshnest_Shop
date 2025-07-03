import { FaHome, FaShoppingCart, FaQuestionCircle, FaEnvelope } from "react-icons/fa";
import React from 'react';


const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-zinc-900 text-white flex justify-around items-center py-3 sm:hidden z-50">
      <div className="flex flex-col items-center text-emerald-500">
        <FaHome className="text-xl" />
        <span className="text-xs mt-1">Home</span>
      </div>
      <div className="flex flex-col items-center">
        <FaShoppingCart className="text-xl" />
        <span className="text-xs mt-1">Products</span>
      </div>
      <div className="flex flex-col items-center">
        <FaQuestionCircle className="text-xl" />
        <span className="text-xs mt-1">FAQ</span>
      </div>
      <div className="flex flex-col items-center">
        <FaEnvelope className="text-xl" />
        <span className="text-xs mt-1">Contact</span>
      </div>
    </div>
  );
};

export default BottomNav;
