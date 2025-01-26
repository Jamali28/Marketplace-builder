import React from 'react';
import Image from 'next/image';
import { Great_Vibes } from 'next/font/google';

const VibeFont = Great_Vibes({ subsets: ['latin'], weight: ['400'] });

const FoodCategory = () => {
  const items = [
    { id: 1, img: '/zinger.jpg', label: 'Save 50% on Fast Food' },
    { id: 2, img: '/c.jpg', label: 'Delicious Burgers' },
    { id: 3, img: '/e.jpg', label: 'Healthy Salads' },
    { id: 4, img: '/don.jpg', label: 'Desserts' },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <p className={`${VibeFont.className} text-[#FF9F0D] text-4xl mb-4 animate-fade-in`}>
            Food Category
          </p>
          <h1 className="text-white text-5xl font-bold">
            <span className="text-[#FF9F0D]">Ch</span>oose Food Item
          </h1>
        </div>

        {/* Grid of food items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative group">
              {/* Image of the food item */}
              <div className="w-full h-72 sm:h-80 lg:h-96"> {/* Set flexible heights for responsiveness */}
                <Image
                  src={item.img}
                  alt={item.label}
                  layout="fill" // Ensures the image fills the div container
                  objectFit="cover" // Keeps image ratio intact while filling the div
                  className="rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                />
              </div>
              {/* Food label */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white text-lg px-4 py-2 rounded-lg">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategory;
