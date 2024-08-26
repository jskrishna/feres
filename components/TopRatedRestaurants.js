// components/TopRatedRestaurants.js

import Link from 'next/link';
import React from 'react';

const TopRatedRestaurants = () => {
  const restaurants = [
    {
      name: 'KFC Eastlight',
      description: 'Burger, Fast Food, American...',
      time: '31 mins',
      deliveryFee: 'ETB 150',
      rating: '4.5',
      image: '/special-offer.png',
    },
  ];

  const grocery = [
    {
      name: 'Grocery Store',
      description: 'Organic, Fresh Produce...',
      time: '20 mins',
      deliveryFee: 'ETB 100',
      rating: '4.2',
      image: '/special-offer.png',
    },
  ];

  return (
    <div className='p-4 space-y-6 bg-[#F8F8F8]'>
  <div className="">
    <div className='flex justify-between items-center mb-4'>
      <h3 className="text-[18px] font-[500] text-[#2F2F3F]">Top Rated Restaurants</h3>
      <Link href="#" passHref className='text-[#979797] text-[16px] font-[500]'>See all</Link>
    </div>
    <div className="space-y-6">
      {restaurants.map((restaurant, index) => (
        <div key={index} className='bg-white rounded-[13px] p-3'> {/* Moved key here */}
          <div className="flex relative">
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 rounded-[7px] object-cover" />
            <div className='absolute right-[10px] bottom-[10px]'>
              <ul className='flex gap-[10px]'>
                <li className='flex gap-2 bg-[#F2FDF8] rounded-full px-3 py-2.5'>
                  <img src="/clock-01.svg" alt="" className="w-[20px] object-cover" />
                  <p className='text-[12px] text-[#1E1E1E]'>{restaurant.time}</p>
                </li>
                <li className='flex gap-2 bg-[#F2FDF8] rounded-full px-3 py-2.5'>
                  <img src="/scooter-02.svg" alt="" className="w-[20px] object-cover" />
                  <p className='text-[12px] text-[#1E1E1E]'>{restaurant.deliveryFee}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-2 justify-between pt-2">
            <div>
              <h4 className="text-[18px] font-bold text-[#2F2F3F]">{restaurant.name}</h4>
              <p className="text-[14px] font-[400] text-[#979797]">{restaurant.description}</p>
            </div>
            <div className="text-yellow-500">★ <span className='text-[16px] text-[#1E1E1E]'>{restaurant.rating}</span></div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div>
    <div className='flex justify-between items-center mb-4'>
      <h3 className="text-[18px] font-[500] text-[#2F2F3F]">Grocery stores</h3>
      <Link href="#" passHref className='text-[#979797] text-[16px] font-[500]'>See all</Link>
    </div>
    <div className="space-y-6">
      {grocery.map((grocery, index) => (
        <div key={index} className='bg-white rounded-[13px] p-3'> {/* Moved key here */}
          <div className="flex relative">
            <img src={grocery.image} alt={grocery.name} className="w-full h-40 rounded-[7px] object-cover" />
            <div className='absolute right-[10px] bottom-[10px]'>
              <ul className='flex gap-[10px]'>
                <li className='flex gap-2 bg-[#F2FDF8] rounded-full px-3 py-2.5'>
                  <img src="/clock-01.svg" alt="" className="w-[20px] object-cover" />
                  <p className='text-[12px] text-[#1E1E1E]'>{grocery.time}</p>
                </li>
                <li className='flex gap-2 bg-[#F2FDF8] rounded-full px-3 py-2.5'>
                  <img src="/scooter-02.svg" alt="" className="w-[20px] object-cover" />
                  <p className='text-[12px] text-[#1E1E1E]'>{grocery.deliveryFee}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-2 justify-between pt-2">
            <div>
              <h4 className="text-[18px] font-bold text-[#2F2F3F]">{grocery.name}</h4>
              <p className="text-[14px] font-[400] text-[#979797]">{grocery.description}</p>
            </div>
            <div className="text-yellow-500">★ <span className='text-[16px] text-[#1E1E1E]'>{grocery.rating}</span></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default TopRatedRestaurants;
