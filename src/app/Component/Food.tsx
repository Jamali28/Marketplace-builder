"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import ProductCard from "../Component/ProductCard";
import Image from "next/image";
import ShopCat from "./ShopCat";
import Link from "next/link";

const client = createClient({
  projectId: "pe7pu33j",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-01-11",
});

type Food = {
  _id: string;
  name: string;
  price: number;
  rating: number;
  tags: string[];
  imageUrl: string;
};

const Food: React.FC = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<string>("price");
  const [itemsPerPage, setItemsPerPage] = useState<number>(9);

  useEffect(() => {
    const fetchFoods = async () => {
      const query = `*[_type == "food"]{
        _id,
        name,
        price,
        rating,
        tags,
        "imageUrl": image.asset->url
      }`;
      try {
        const data = await client.fetch(query);
        setFoods(data);
      } catch (error) {
        console.error("Failed to fetch foods:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFoods();
  }, []);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(event.target.value));
  };

  // Sorting logic
  const sortedFoods = [...foods].sort((a, b) => {
    if (sortBy === "price") {
      return a.price - b.price;
    } else if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });

  // Paginate based on itemsPerPage
  const paginatedFoods = sortedFoods.slice(0, itemsPerPage);

  if (loading) {
    return <div className="text-center py-10">Loading foods...</div>;
  }

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
            Foods
          </h1>
        </div>
      </div>

      <div className="container mx-auto p-4">
        {/* Sort and Show Options */}
        <div className="flex justify-between mb-6">
          <div>
            <label className="mr-2">Sort by:</label>
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="border p-2 rounded"
            >
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          <div>
            <label className="mr-2">Show:</label>
            <select
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className="border p-2 rounded"
            >
              <option value={6}>6</option>
              <option value={9}>9</option>
              <option value={12}>12</option>
            </select>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Product Cards */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {paginatedFoods.map((food) => (
                <div key={food._id} className="relative">
                  <ProductCard
                    image={food.imageUrl}
                    name={food.name}
                    price={`$${food.price}`}
                    discountedPrice={`$${(food.price * 0.8).toFixed(2)}`}
                    discount="20% off"
                    rating={food.rating}
                    reviews={Math.floor(Math.random() * 100)}
                  />
                  {/* Add to Cart Button */}
               <Link href="/cartitem">  <button className="absolute bottom-4 right-4 bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600">
                    Add to Cart
                  </button></Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: ShopCat Component */}
          <div className="w-full lg:w-1/3">
            <ShopCat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
