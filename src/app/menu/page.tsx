import React from 'react';
import Image from 'next/image';


const MenuPage: React.FC = () => {
  return (
    <div className="relative w-full h-[178px]">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
      <div className="absolute inset-0">
        <Image
          src="/img.png"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Centered Title */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-yellow-500 text-center px-4">
          Menu Page
        </h1>
      </div>

      <main className="bg-white px-4 sm:px-6 lg:px-16 py-8">
        {/* Food Section */}
        <section className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 py-16">
          <Image
            src="/c.jpg"
            alt="Food"
            width={448}
            height={628}
            className="w-full lg:w-1/3"
          />
          <div className="lg:w-2/3">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Food
            </h3>
            {[
              {
                name: "Grilled Salmon",
                price: "$25",
                desc: "Fresh salmon with a side of roasted vegetables.",
                cal: "450 CAL",
              },
              {
                name: "Chicken Alfredo",
                price: "$20",
                desc: "Creamy pasta with grilled chicken and parmesan.",
                cal: "600 CAL",
              },
              {
                name: "Vegan Buddha Bowl",
                price: "$18",
                desc: "Quinoa, avocado, chickpeas, and roasted veggies.",
                cal: "400 CAL",
              },
            ].map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between text-lg sm:text-xl font-bold mb-2">
                  <h4>{item.name}</h4>
                  <p className="text-yellow-500">{item.price}</p>
                </div>
                <p className="text-gray-600 mb-1">{item.desc}</p>
                <p className="text-gray-400 text-sm">{item.cal}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Drinks Section */}
        <section className="flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-8 py-16">
          <div className="lg:w-2/3">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Drinks
            </h3>
            {[
              {
                name: "Caffè Macchiato",
                price: "$32",
                desc: "Toasted French bread topped with romano, cheddar.",
                cal: "560 CAL",
              },
              {
                name: "Aperol Spritz Cappuccino",
                price: "$43",
                desc: "Gorgonzola, ricotta, mozzarella, taleggio.",
                cal: "700 CAL",
              },
              {
                name: "Caffe Latte Campuri",
                price: "$14",
                desc: "Ground cumin, avocados, peeled and cubed.",
                cal: "1000 CAL",
              },
            ].map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between text-lg sm:text-xl font-bold mb-2">
                  <h4>{item.name}</h4>
                  <p className="text-yellow-500">{item.price}</p>
                </div>
                <p className="text-gray-600 mb-1">{item.desc}</p>
                <p className="text-gray-400 text-sm">{item.cal}</p>
              </div>
            ))}
          </div>
          <Image
            src="/drink.jpg"
            alt="Drink"
            width={548}
            height={628}
            className="w-full lg:w-1/3"
          />
        </section>
      
   {/* Stats Section */}
<div
  className="relative bg-cover bg-center bg-no-repeat opacity-80"
  style={{ backgroundImage: "url('/download.jpeg')" }}
>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 relative z-10">
    {[
      { icon: "/a.png", title: "Professional Chefs", count: "420" },
      { icon: "/b.png", title: "Best Drinks", count: "320" },
      { icon: "/c.png", title: "Serving Tools", count: "30+" },
      { icon: "/d.png", title: "Delicious Pizza", count: "220" }
    ].map((stat, index) => (
      <div key={index} className="text-center group">
        {/* Icon Section */}
        <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
          <Image
            src={stat.icon}
            alt={stat.title}
            width={120}
            height={120}
            className="mx-auto"
          />
        </div>
        {/* Title */}
        <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">{stat.title}</h3>
        {/* Count */}
        <p className="text-[#FF9F0D] text-4xl sm:text-5xl font-bold">{stat.count}</p>
      </div>
    ))}
  </div>
</div>

        
        {/* Desserts Section */}
        <section className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 py-16">
          <Image
            src="/dessert.jpg"
            alt="Dessert"
            width={448}
            height={628}
            className="w-full lg:w-1/3"
          />
          <div className="lg:w-2/3">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Desserts
            </h3>
            {[
              {
                name: "Fig and Lemon Cake",
                price: "$32",
                desc: "Toasted French bread topped with romano, cheddar.",
                cal: "560 CAL",
              },
              {
                name: "Creamy Mascarpone Cake",
                price: "$35",
                desc: "Gorgonzola, ricotta, mozzarella, taleggio.",
                cal: "700 CAL",
              },
              {
                name: "Pastry, Blueberries, Lemon Juice",
                price: "$14",
                desc: "Ground cumin, avocados, peeled and cubed.",
                cal: "1000 CAL",
              },
            ].map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between text-lg sm:text-xl font-bold mb-2">
                  <h4>{item.name}</h4>
                  <p className="text-yellow-500">{item.price}</p>
                </div>
                <p className="text-gray-600 mb-1">{item.desc}</p>
                <p className="text-gray-400 text-sm">{item.cal}</p>
              </div>
            ))}
          </div>
        </section>
   
        {/* Drinks Section */}
        <section className="flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-8 py-16">
          <div className="lg:w-2/3">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Drinks
            </h3>
            {[
              {
                name: "Caffè Macchiato",
                price: "$32",
                desc: "Toasted French bread topped with romano, cheddar.",
                cal: "560 CAL",
              },
              {
                name: "Aperol Spritz Cappuccino",
                price: "$43",
                desc: "Gorgonzola, ricotta, mozzarella, taleggio.",
                cal: "700 CAL",
              },
              {
                name: "Caffe Latte Campuri",
                price: "$14",
                desc: "Ground cumin, avocados, peeled and cubed.",
                cal: "1000 CAL",
              },
            ].map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between text-lg sm:text-xl font-bold mb-2">
                  <h4>{item.name}</h4>
                  <p className="text-yellow-500">{item.price}</p>
                </div>
                <p className="text-gray-600 mb-1">{item.desc}</p>
                <p className="text-gray-400 text-sm">{item.cal}</p>
              </div>
            ))}
          </div>
          <Image
            src="/coffe.jpg"
            alt="Drink"
            width={548}
            height={628}
            className="w-full lg:w-1/3"
          />
        </section>
 

      </main>
    </div>
  );
};

export default MenuPage;
