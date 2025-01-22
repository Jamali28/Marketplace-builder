import React from "react";
import Image from "next/image";

const chefs = [
  { name: "Tahmina Rumi", role: "Chef", image: "/pic1.jpg"  },
  { name: "Jorina Begum", role: "Chef", image: "/pic2.jpg" },
  { name: "M. Mohammad", role: "Chef", image: "/pic3.jpg" },
  { name: "Munna Kathy", role: "Chef", image: "/pic4.jpg" },
  { name: "Tahmina Rumi", role: "Cook", image: "/pic5.jpg" },
  { name: "Bisnu Devgon", role: "Chef", image: "/pic6.jpg" },
  { name: "Motin Molladst", role: "Chef", image: "/pic7.jpg" },
  { name: "William Rumi", role: "Chef", image: "/pic8.jpg" },
  { name: "Kets William Roy", role: "Chef", image: "/pic9.jpg" },
  { name: "Mahmud Kholil", role: "Chef", image: "/pic10.jpg" },
  { name: "Ataur Rahman", role: "Chef", image: "/pic11.jpg" },
  { name: "Monalisa Holly", role: "Chef", image: "/pic12.jpg" },
];

const ChefGrid = () => {
    return (

       <div>


<div className="relative w-screen h-[150px] bg-black">
      {/* Background Image with 30% Opacity */}
      <div className="absolute inset-0 opacity-60">
        <Image
          src="/img.png"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[popins] text-yellow-500  px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-6 lg:py-8 
         text-center">
          Our Chefs
        </h1>
        

      </div>
    </div>

      <div className="p-6 mt-20"> {/* Adding mt-20 for margin top */}
        {/* Grid with responsive columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl ${
                index === 6
                  ? "border-4 border-purple-600" // Complete purple border for the 7th box
                  : "border-4 border-transparent hover:border-purple-600" // Hover effect for other boxes
              }`}
            >
              {/* Chef Image */}
              <div className="flex-1">
              <Image
                src={chef.image}
                alt={chef.name}
                width={100}
                height={50}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Static Information Section Below Image */}
            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-bold text-lg">{chef.name}</h3>
              <p className="text-gray-600">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
 </div>
  );
};

export default ChefGrid;