import React from 'react';
import Image from 'next/image';

function Testimonials() {
  return (
    <section className="bg-black px-4 sm:px-6 md:px-[135px] py-[80px] sm:py-[100px] md:py-[120px]">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-[#FF9F0D] text-[20px] sm:text-[24px] md:text-[32px]">
          Testimonials
        </h2>
        <h2 className="text-white font-bold text-[24px] sm:text-[32px] md:text-[48px] mt-2">
          What Our Clients Are Saying
        </h2>
      </div>

      {/* Placeholder Section */}
      <div className="flex justify-center items-center mt-10">
        <div className="w-full max-w-[800px] h-[300px] sm:h-[400px] md:h-[500px] bg-gray-300 flex justify-center items-center p-6 sm:p-8 md:p-10">
          <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;