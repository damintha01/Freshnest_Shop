import React from "react";

// Icons (you can replace these with actual icon images if needed)
import { FaShippingFast } from "react-icons/fa";
import { BiRefresh } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { IoMdHelpBuoy } from "react-icons/io";

const features = [
  {
    id: 1,
    icon: <FaShippingFast className="text-green-500 w-12 h-12" />,
    title: "Free Shipping",
    description: "On all orders over $50.00",
  },
  {
    id: 2,
    icon: <BiRefresh className="text-green-500 w-12 h-12" />,
    title: "Free Returns",
    description: "Returns are free within 3 days",
  },
  {
    id: 3,
    icon: <MdPayment className="text-green-500 w-12 h-12" />,
    title: "Secure Payment",
    description: "Your payments are 100% safe",
  },
  {
    id: 4,
    icon: <IoMdHelpBuoy className="text-green-500 w-12 h-12" />,
    title: "24/7 Support",
    description: "Contact us anytime you need",
  },
];

const FeatureCards = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-xl p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto my-8 sm:my-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center text-gray-800 mb-6 sm:mb-8 md:mb-10">
        Why Shop With Us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center text-center bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 border border-green-100 transform hover:scale-105"
          >
            {/* Icon */}
            <div className="bg-green-100 rounded-full p-3 sm:p-4 flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
              <div className="text-green-500 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
                {feature.icon}
              </div>
            </div>
            {/* Text */}
            <div>
              <h3 className="font-bold text-base sm:text-lg md:text-xl text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;