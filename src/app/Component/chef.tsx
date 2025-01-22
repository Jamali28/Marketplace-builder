import React from "react";
import Image from "next/image";

function OurChefs() {
  return (
    <section className="bg-black px-4 sm:px-6 md:px-[135px] py-[50px]">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-[24px] md:text-[32px] font-normal text-[#FF9F0D] font-greatVibes">
          Chefs
        </h1>
        <h1 className="text-[20px] md:text-[50px] font-bold text-white mt-2">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h1>
      </div>

      {/* Placeholder Explanation */}
      <div className="text-white text-center mt-6 mb-10">
        <p className="text-sm sm:text-base md:text-lg">
          Due to some technical constraints, the images of our talented chefs
          are currently unavailable. However, we still wanted to introduce you
          to them. Once the images are ready, they will be displayed here. Stay tuned!
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 mt-[50px]">
        {["/pic3.jpg", "/pic5.jpg", "/pic2.jpg", "/pic7.jpg"].map((src, index) => (
          <div
            key={index}
            className="relative w-[200px] sm:w-[250px] md:w-[280px] h-[200px] sm:h-[250px] md:h-[280px] cursor-pointer group"
          >
            <Image 
              src={src} 
              alt={`Chef ${index + 1}`} 
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            {/* Hover effect text */}
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg md:text-xl font-semibold">Chef {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurChefs;
