'use client'
import React, { useState } from "react";
import Image from "next/image";

function Hero() {
  const images = [
    { src: "/a.jpg", category: "Pizza", price: 45 },
    { src: "/b.jpg", category: "Burger", price: 30 },
    { src: "/c.jpg", category: "Pizza", price: 50 },
    { src: "/d.jpg", category: "Sandwiches", price: 40 },
    { src: "/let.jpg", category: "Drink", price: 20 },
    { src: "/e.jpg", category: "Chicken Chup", price: 60 },
    { src: "/f.jpg", category: "Drinks", price: 15 },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceFilter, setPriceFilter] = useState([0, 8000]);
  const [appliedPriceFilter, setAppliedPriceFilter] = useState([0, 8000]);

  const filteredImages = images.filter((image) => {
    const matchesSearchTerm = image.category
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || image.category === selectedCategory;
    const matchesPrice =
      image.price >= appliedPriceFilter[0] && image.price <= appliedPriceFilter[1];

    return matchesSearchTerm && matchesCategory && matchesPrice;
  });

  const handleCategoryChange = (category: React.SetStateAction<string>) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  };

  const handleApplyPriceFilter = () => {
    setAppliedPriceFilter(priceFilter);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Product"
          className="w-full h-12 bg-gray-100 text-black px-4 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h2 className="font-bold text-xl mb-4">Category</h2>
        <div className="space-y-2 mb-6">
          {["Sandwiches", "Burger", "Pizza", "Chicken Chup", "Drinks"].map(
            (category) => (
              <div key={category} className="flex items-center">
                <input
                  type="checkbox"
                  id={category}
                  className="mr-2"
                  checked={selectedCategory === category}
                  onChange={() => handleCategoryChange(category)}
                />
                <label htmlFor={category}>{category}</label>
              </div>
            )
          )}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-6 shadow-md rounded-lg p-4 bg-gray-50">
        <h3 className="font-bold text-xl mb-4">Filter By Price</h3>
        <div>
          <input
            type="range"
            min="0"
            max="8000"
            value={priceFilter[1]}
            onChange={(e) => setPriceFilter([0, +e.target.value])}
            className="w-full"
          />
          <p className="text-sm text-gray-500">From $0 to ${priceFilter[1]}</p>
          <button
            onClick={handleApplyPriceFilter}
            className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-orange-600 transition"
          >
            Apply Filter
          </button>
        </div>
      </div>

      {/* Product List */}
      <div>
        <h2 className="font-bold text-2xl mb-6">Products</h2>
        <div className="space-y-4">
          {filteredImages.length > 0 ? (
            filteredImages.map((image, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-white shadow-md rounded-lg p-4"
              >
                <Image
                  src={"/c.jpg"}
                  alt="Product"
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
                <div>
                  <p className="text-lg font-semibold">{image.category}</p>
                  <p className="text-orange-500 font-bold">${image.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero
