import React from 'react';
import Image from 'next/image';

const MenuPage: React.FC = () => {
  return (
    <div className="relative w-full h-[160px] bg-black">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 opacity-90">
        <Image
          src="/img.png"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Centered Title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[poppins] text-yellow-500 px-4 py-3 text-center">
          Menu Page
        </h1>
      </div>

      <main className="bg-white px-4 sm:px-6 lg:px-16">
        {/* Desserts Section */}
        <section className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 py-48">
          <Image
            src="/dessert.jpg"
            alt="Dessert"
            width={448}
            height={628}
            className="w-full lg:w-1/3"
          />
          <div className="lg:w-2/3">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">Desserts</h3>
            {[{
              name: "Fig and lemon cake",
              price: "$32",
              desc: "Toasted French bread topped with romano, cheddar",
              cal: "560 CAL",
            }, {
              name: "Creamy mascarpone cake",
              price: "$35",
              desc: "Gorgonzola, ricotta, mozzarella, taleggio",
              cal: "700 CAL",
            }, {
              name: "Pastry, blueberries, lemon juice",
              price: "$14",
              desc: "Ground cumin, avocados, peeled and cubed",
              cal: "1000 CAL",
            }].map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between text-xl font-bold mb-2">
                  <h4>{item.name}</h4>
                  <p className="text-yellow-500">{item.price}</p>
                </div>
                <p className="text-gray-600 mb-1">{item.desc}</p>
                <p className="text-gray-400">{item.cal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Drinks Section */}
        <section className="flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-8 py-16">
          <div className="lg:w-2/3">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">Drinks</h3>
            {[{
              name: "Caffè macchiato",
              price: "$32",
              desc: "Toasted French bread topped with romano, cheddar",
              cal: "560 CAL",
            }, {
              name: "Aperol Spritz Cappuccino",
              price: "$43",
              desc: "Gorgonzola, ricotta, mozzarella, taleggio",
              cal: "700 CAL",
            }, {
              name: "Caffe Latte Campuri",
              price: "$14",
              desc: "Ground cumin, avocados, peeled and cubed",
              cal: "1000 CAL",
            }].map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between text-xl font-bold mb-2">
                  <h4>{item.name}</h4>
                  <p className="text-yellow-500">{item.price}</p>
                </div>
                <p className="text-gray-600 mb-1">{item.desc}</p>
                <p className="text-gray-400">{item.cal}</p>
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

      {/* Partners Section */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-6">We work with the best people</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {["/im1.jpg", "/im2.jpg", "/im3.jpg", "/im4.jpg", "/im5.jpg"].map((src, index) => (
            <Image key={index} src={src} alt={`Partner ${index + 1}`} width={140} height={40} className="h-16 mx-auto" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
