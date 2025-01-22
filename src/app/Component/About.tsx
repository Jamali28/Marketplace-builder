import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

function AboutUs() {
  return (
    <section 
      id="about"
      className="bg-black px-4 sm:px-6 md:px-[135px] py-[50px] flex flex-col md:flex-row md:items-center gap-10"
    >
      {/* Text Section */}
      <div className="text-white w-full md:w-1/2">
        <h1 className="text-2xl md:text-3xl font-normal text-[#FF9F0D] font-greatVibes">
          About Us
        </h1>

        <h1 className="text-xl md:text-4xl lg:text-5xl font-bold leading-snug mt-2">
          <span className="text-[#FF9F0D]">We</span> Create the Best Foody Product
        </h1>

        <p className="text-sm sm:text-base md:text-lg font-normal mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>

        <ul className="mt-6 space-y-4">
          {[
            "Lacus nisi, et ac dapibus sit eu velit in consequat.",
            "Quisque diam pellentesque bibendum non dui volutpat fringilla.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ].map((text, index) => (
            <li key={index} className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-normal">
              <FaCheck className="text-[#FF9F0D] mt-1" />
              {text}
            </li>
          ))}
        </ul>

        <div className="flex justify-start mt-8">
          <button className="bg-[#FF9F0D] text-white py-2 px-6 sm:py-3 sm:px-8 rounded-full text-sm sm:text-base md:text-lg hover:bg-yellow-800 transition-all">
            See More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <Image 
          src="/about1.jpg" 
          alt="About Us Image 1" 
          width={100}
          height={100}
          className="rounded-lg object-cover w-full h-[250px] sm:h-[350px] md:h-[450px]" 
        />

        <div className="grid grid-cols-2 gap-4 mt-6">
          {["/about2.jpg", "/about3.jpg"].map((src, index) => (
            <Image 
              key={index}
              src={src} 
              alt={`About Us Image ${index + 2}`} 
              width={100}
              height={100}
              className="rounded-lg object-cover w-full h-[150px] sm:h-[200px] md:h-[250px]" 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
