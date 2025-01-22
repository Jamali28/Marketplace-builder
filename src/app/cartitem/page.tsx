"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const initialCartItems = [
  { name: "Burger", price: 10.99, quantity: 2, image: "/burger.jpg" },
  { name: "Fresh Lime", price: 3.49, quantity: 1, image: "/zinger.jpg" },
  { name: "Pizza", price: 9.99, quantity: 4, image: "/don.jpg" },
  { name: "Chocolate Muffin", price: 4.49, quantity: 1, image: "/waf.jpg" },
  { name: "Cheese Butter", price: 11.99, quantity: 3, image: "/ramen.jpg" },
];

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedItems = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  const handleRemoveItem = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const handleApplyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(0.1); // 10% discount
    } else {
      setDiscount(0);
    }
  };

  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCharges = 30.0;
  const totalAmount = cartSubtotal - cartSubtotal * discount + shippingCharges;

  return (
    <div className="relative w-full bg-black">
      {/* Background Image with 30% Opacity */}
      <div className="absolute inset-0 opacity-60">
        <Image
          src="/img.jpg"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Centered Content */}
      <section className="bg-cover bg-center h-64 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold">Add to Cart</h2>
          <p className="mt-4 text-sm sm:text-base">
            <Link href="/" className="text-yellow-400">Home</Link> &gt; CartItems
          </p>
        </div>
      </section>

      <div className="bg-white font-sans">
        <main className="py-12 px-4 sm:px-6 md:px-12 lg:px-16">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 sm:p-4 font-semibold">Product</th>
                <th className="p-2 sm:p-4 font-semibold">Price</th>
                <th className="p-2 sm:p-4 font-semibold">Quantity</th>
                <th className="p-2 sm:p-4 font-semibold">Total</th>
                <th className="p-2 sm:p-4 font-semibold">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2 sm:p-4 flex items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded mr-2 sm:mr-4"
                    />
                    <span>{item.name}</span>
                  </td>
                  <td className="p-2 sm:p-4">${item.price.toFixed(2)}</td>
                  <td className="p-2 sm:p-4">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 0)}
                      className="w-12 sm:w-16 border rounded px-2 py-1 text-center"
                      min="0"
                    />
                  </td>
                  <td className="p-2 sm:p-4">${(item.price * item.quantity).toFixed(2)}</td>
                  <td className="p-2 sm:p-4 text-red-500 cursor-pointer" onClick={() => handleRemoveItem(index)}>
                    &times;
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-8">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <h2 className="text-lg font-semibold mb-2">Coupon Code</h2>
              <div className="flex items-center">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter your code"
                  className="flex-grow border rounded-l px-4 py-2"
                />
                <button
                  onClick={handleApplyCoupon}
                  className="bg-orange-500 text-white px-4 sm:px-6 py-2 rounded-r font-semibold"
                >
                  Apply
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
                <div className="flex justify-between mb-2 sm:mb-4">
                  <span>Cart Subtotal</span>
                  <span>${cartSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2 sm:mb-4">
                  <span>Discount</span>
                  <span>${(cartSubtotal * discount).toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2 sm:mb-4">
                  <span>Shipping Charges</span>
                  <span>${shippingCharges.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total Amount</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <button className="w-full bg-orange-500 text-white mt-4 py-2 sm:py-3 rounded font-semibold">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ShoppingCart;
