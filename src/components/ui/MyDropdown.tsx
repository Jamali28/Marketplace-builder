import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function MyDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            onClick={toggleDropdown}
            className="flex items-center text-white hover:text-orange-500 px-2 transition"
           >
            Pages 
            <IoIosArrowForward
              className={`transform transition-transform ${isOpen ? "rotate-90" : ""}`}
            />
          </button>
        </DropdownMenuTrigger>
        {isOpen && (
          <DropdownMenuContent 
            className="bg-black text-white border border-gray-700 shadow-lg w-48 mt-2"
            align="start"
          >
            <DropdownMenuLabel className="text-gray-300 px-3 py-2">Navigate To</DropdownMenuLabel>
            <DropdownMenuSeparator className="border-gray-600" />
            
            <DropdownMenuItem className="hover:bg-gray-700 px-3 py-2">
              <Link href="/chef" className="flex items-center gap-2 w-full">
                Chefs
              </Link>
            </DropdownMenuItem>
            
            <DropdownMenuItem className="hover:bg-gray-700 px-3 py-2">
              <Link href="/food" className="flex items-center gap-2 w-full">
                Shop
              </Link>
            </DropdownMenuItem>
            
            <DropdownMenuItem className="hover:bg-gray-700 px-3 py-2">
              <Link href="/faq" className="flex items-center gap-2 w-full">
                FAQs
              </Link>
            </DropdownMenuItem>
            
            <DropdownMenuItem className="hover:bg-gray-700 px-3 py-2">
              <Link href="/errorpage" className="flex items-center gap-2 w-full">
                Page 404
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
}
