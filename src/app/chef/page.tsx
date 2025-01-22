"use client";

import { useEffect, useState } from "react";
import { Chef } from "../../../types/data";
import { client } from "@/sanity/lib/client";
import { allChefs } from "@/sanity/lib/query";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const AllChefs = () => {
  const [chefs, setChefs] = useState<Chef[]>([]);

  useEffect(() => {
    async function fetchChefs() {
      const fetchedChefs: Chef[] = await client.fetch(allChefs);
      setChefs(fetchedChefs);
    }
    fetchChefs();
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="relative w-screen h-[200px] bg-black">
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[popins] text-yellow-500 text-center px-4 py-3">
            Our Chefs
          </h1>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {chefs.map((chef) => (
            <div
              key={chef._id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {chef.image ? (
                <Image
                  src={urlFor(chef.image).url()}
                  alt={chef.name}
                  width={500}
                  height={350}
                  className="w-full h-60 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/fallback-image.jpg";
                  }}
                />
              ) : (
                <div className="w-full h-60 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800">
                  {chef.name}
                </h2>
                {/* Additional details about the chef can go here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllChefs;
