// components/MenuSelection.js

"use client"; // Add this directive to make it a Client Component

import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // Use the updated hook

const MenuSelection = () => {
  const router = useRouter(); // Initialize useRouter

  const categories = ['All', 'Trending meals', 'Sandwiches'];
  const menuItems = [
    {
      name: 'Beef Burger',
      description: 'beef patties, comb the ground beef, salt, pepper, Worcestershire...',
      oldPrice: 'ETB 170',
      price: 'ETB 140',
      image: '/images/beef-burger.jpg',
    },
    {
      name: 'Fresh orange juice',
      description: 'freshly squeezed, no added sugar',
      oldPrice: 'ETB 170',
      price: 'ETB 140',
      image: '/images/orange-juice.jpg',
    },
    {
      name: 'Fresh mango juice',
      description: 'made from fresh mangos',
      oldPrice: 'ETB 170',
      price: 'ETB 140',
      image: '/images/mango-juice.jpg',
    },
    {
      name: 'Ice cream',
      description: 'creamy vanilla ice cream',
      oldPrice: 'ETB 170',
      price: 'ETB 140',
      image: '/images/ice-cream.jpg',
    },
  ];

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back(); // Go back if there is history
    } else {
      router.push('/'); // Navigate to home if no history
    }
  };

  return (
    <div className="p-4 bg-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={handleBack} className="text-green-600">
          {/* Use handleBack for back navigation */}
          <FaArrowLeft />
        </button>
        <h2 className="text-center text-lg font-bold text-gray-800">Select menu</h2>
        <button className="text-green-600 font-semibold">Close</button>
      </div>

      {/* Categories */}
      <div className="mb-4">
        <h3 className="text-md font-bold mb-2 text-gray-800">Categories</h3>
        <div className="flex space-x-2 overflow-x-auto">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm ${
                index === 0 ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div>
        <h3 className="text-md font-bold mb-2 text-gray-800">All Menu</h3>
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white shadow rounded-lg flex p-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
              <div className="ml-4 flex-1">
                <h4 className="text-md font-bold text-gray-800">{item.name}</h4>
                <p className="text-xs text-gray-500">{item.description}</p>
                <div className="text-xs text-red-500 line-through">{item.oldPrice}</div>
                <div className="text-sm text-green-500">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSelection;
