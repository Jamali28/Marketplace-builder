"use client";

import { Button } from "@/components/ui/button";
import MyDropdown from "@/components/ui/MyDropdown";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6"; // Magnifying Glass Icon
import { PiUserBold, PiHandbagBold } from "react-icons/pi"; // User & Shopping Bag Icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          Food<span className="text-orange-500">tuck</span>
        </a>

        {/* Icons for Small Screens */}
        <div className="lg:hidden flex items-center space-x-4">
          <div className="text-white text-xl hover:text-orange-500 transition ">
            <FaMagnifyingGlass />
          </div>
          <div className="text-white text-xl hover:text-orange-500 transition ">
            <PiUserBold />
          </div>
         
          <div className="text-white text-xl hover:text-orange-500 transition ">
          <Link href="./cartitem"> <PiHandbagBold /></Link>
          </div>
          {/* Hamburger Menu */}
          <div
            className="text-2xl cursor-pointer ml-4"
            onClick={toggleMenu}
          >
            {isMenuOpen ? "✕" : "≡"}
          </div>
        </div>

        {/* Large Screen Navigation */}
        <div className="hidden lg:flex items-center justify-between py-2 flex-1 ml-8">
          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a href="/" className="hover:text-orange-500 transition">
              Home
            </a>
            <a href="/food" className="hover:text-orange-500 transition">
              Menu
            </a>
            <a href="/blog" className="hover:text-orange-500 transition">
              Blog
            </a>
            <a className="hover:text-orange-500 transition">
            <MyDropdown />
            </a>
            <a href="/about" className="hover:text-orange-500 transition">
              About
            </a>
            <a href="/signin" className="hover:text-orange-500 transition">
            Sign In
            </a>
            <a href="/checkout" className="hover:text-orange-500 transition">
              CheckOut
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center ml-8 space-x-4">
            <div className="text-white text-xl hover:text-orange-500 transition">
              <FaMagnifyingGlass />
            </div>
            <div className="text-white text-xl hover:text-orange-500 transition">
              <PiUserBold />
            </div>
            <div className="text-white text-2xl hover:text-orange-500 transition">
             <Link href={"/cartitem"}> <PiHandbagBold /></Link >
            </div>
          </div>
        </div>
      </div>

      {/* Collapsible Menu for Small Screens */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden bg-black text-white mt-4 space-y-4 px-6`}
      >
        {/* Navigation Links */}
        <div className="flex flex-col space-y-4">
          <a href="/" className="hover:text-orange-500 transition">
            Home
          </a>
          <a href="/food" className="hover:text-orange-500 transition">
            Menu
          </a>
          <a href="/blog" className="hover:text-orange-500 transition">
            Blog
          </a>
          <a href="/chef" className="hover:text-orange-500 transition">
            Pages
          </a>
          <a href="/about" className="hover:text-orange-500 transition">
            About
          </a>
          <a href="/shop" className="hover:text-orange-500 transition">
            Shop
          </a>
          <a href="/signin" className="hover:text-orange-500 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
