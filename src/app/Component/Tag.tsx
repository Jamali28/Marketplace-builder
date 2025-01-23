import React from "react";
import { FaHamburger, FaPizzaSlice, FaUtensils } from "react-icons/fa";
import { PiChefHatBold } from "react-icons/pi";

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <PiChefHatBold className="text-6xl text-yellow-500" />,
      value: "420",
      label: "Professional Chefs",
    },
    {
      icon: <FaHamburger className="text-6xl text-yellow-500" />,
      value: "320",
      label: "Items Of Food",
    },
    {
      icon: <FaUtensils className="text-6xl text-yellow-500" />,
      value: "30+",
      label: "Years Of Experience",
    },
    {
      icon: <FaPizzaSlice className="text-6xl text-yellow-500" />,
      value: "220",
      label: "Happy Customers",
    },
  ];

  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"> {/* Increased gap here */}
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-8">{stat.icon}</div> {/* Increased margin-bottom */}
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="text-lg mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
