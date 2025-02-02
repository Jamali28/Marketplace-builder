"use client";

import React from "react";
import Image from "next/image";
import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-[135px] py-[50px]">
        <div className="md:w-[50%] w-full">
          <h2 className="text-[20px] md:text-[32px] font-semibold">
            <span className="text-[#FF9F0D]">St</span>ill Need Our Support?
          </h2>
          <p className="text-[10px] md:text-[16px] mt-[17px]">
            Don&#39;t wait, make a smart & logical quote here. Its pretty easy.
          </p>
        </div>

        <div className="flex md:mt-0 mt-[20px]">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white py-[10px] px-[20px] mr-2"
          />
          <button className="text-[#FF9F0D] bg-white py-[10px] px-[20px]">Subscribe Now</button>
        </div>
      </div>

      <hr className="border-[#FF9F0D] mx-[135px]" />

      {/* Footer Content */}
      <div className="w-full max-w-screen-xl mx-auto px-[135px] py-6 lg:py-8 grid grid-cols-2 md:grid-cols-4 gap-[50px]">
        {/* About Us */}
        <div>
          <h2 className="text-[24px] font-semibold">About Us</h2>
          <p className="text-[16px] font-normal mt-2">
            Corporate clients and leisure travelers rely on us for safe, dependable, and professional chauffeured car services worldwide.
          </p>
          <div className="flex gap-4 items-center mt-4">
            <div className="bg-[#FF9F0D] flex justify-center items-center w-[72px] h-[72px]">
              <PiClockClockwiseBold className="text-white text-[40px]" />
            </div>
            <div>
              <h3 className="text-[16px]">Opening Hours</h3>
              <p className="text-[14px]">Mon - Sat (8:00 - 6:00)</p>
              <p className="text-[14px]">Sunday - Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-[24px] font-semibold">Useful Links</h2>
          <ul className="space-y-2">
            {["About", "Sign up", "FAQ", "Team", "Menu", "Cart"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-[#FF9F0D]">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h2 className="text-[24px] font-semibold">Help?</h2>
          <ul className="space-y-2">
            {["FAQ", "Terms & Conditions", "Reporting", "Documentation", "Support Policy", "Privacy"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#FF9F0D]">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-[24px] font-semibold">Recent Posts</h2>
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex gap-4 mt-4">
              <Image src="/food.jpg" alt="Food" width={100} height={100} />
              <div>
                <p className="text-[14px] opacity-70">20 Feb 2022</p>
                <h3 className="text-[18px] font-normal">Keep Your Business</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#FF9F0D] px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <span className="text-sm">Copyright © 2024 Muheeb Ali. All Rights Reserved.</span>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map((Icon, index) => (
            <div key={index} className="bg-white p-2 rounded flex items-center justify-center">
              <Icon className="text-gray-700 text-[20px]" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
