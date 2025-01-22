import React from 'react';
import Image from 'next/image';
// import Image from "next/image"; // Commented out until the image is available

const menuItems = [
  { name: 'Lettuce Leaf', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: "/let.jpg" },
  { name: 'Fresh Breakfast', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '14.5$', image: "/menu2.jpg" },
  { name: 'Mild Butter', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: "/about2.jpg" },
  { name: 'Fresh Bread', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: "/about3.jpg" },
  { name: 'Glow Cheese', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: "/about4.jpg" },
  { name: 'Italian Pizza', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '14.5$', image: "/about5.jpg" },
  { name: 'Slice Beef', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: "/about6.jpg" },
  { name: 'Mushroom Pizza', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: "/tikka.jpg" },
];

const MenuCom = () => {
  return (
    <section className='bg-black px-8 sm:px-16 lg:px-[135px] text-white py-12'>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center text-yellow-400 mb-2">Choose & Pick</h2>
        <h1 className="text-3xl font-bold text-center mb-8">From Our Menu</h1>

        {/* Category Filters */}
        <div className="flex justify-center mb-8">
          <ul className="flex flex-wrap justify-evenly space-x-2 sm:space-x-4">
            <li className="cursor-pointer hover:text-yellow-500">Breakfast</li>
            <li className="cursor-pointer hover:text-yellow-500">Lunch</li>
            <li className="cursor-pointer hover:text-yellow-500">Dinner</li>
            <li className="cursor-pointer hover:text-yellow-500">Dessert</li>
            <li className="cursor-pointer hover:text-yellow-500">Drink</li>
            <li className="cursor-pointer hover:text-yellow-500">Snack</li>
            <li className="cursor-pointer hover:text-yellow-500">Soups</li>
          </ul>
        </div>

        {/* Menu Section */}
        <div className='flex flex-col lg:flex-row'>
          {/* Left Section: Decorative Image */}
          <div className="hidden lg:block w-1/3 md:w-[50%]">
            {/* Image component will work once you have the image in the proper path */}
             <Image src={"/let.jpg"} alt="Menu Decor" width={350} height={350} layout="responsive" /> 
          </div>

          {/* Right Section: Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow">
            {menuItems.map((item, index) => (
              <div key={index} className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="w-full h-64 bg-gray-200 flex justify-center items-center">
                  {/* Commented out Image for now */}
                  {/* <Image src={item.image} alt={item.name} width={100} height={100} className="object-cover" /> */}
                </div>
                <div className="p-4">
                  <h1 className="text-lg font-semibold">{item.name}</h1>
                  <p className="text-sm text-gray-400 mb-2">{item.description}</p>
                  <h2 className="text-yellow-400 font-bold">{item.price}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuCom;