import React from 'react';
import Link from 'next/link';
import { useSwipeable } from 'react-swipeable';

const ExploreSection = () => {
  const options = [
    { icon: '/car.svg', label: 'Ride' },
    { icon: '/food.svg', label: 'Food', link: '/menu' },
    { icon: '/mart.svg', label: 'Mart' },
    { icon: '/mart.svg', label: 'Mart' },
    { icon: '/mart.svg', label: 'Mart' }
  ];


  return (
    <div className="p-4 mt-40">
      <h3 className="text-[18px] font-[500] mb-3 text-[#2F2F3F]">Explore Feres</h3>
      <div className="flex gap-[20px] overflow-x-auto scrollbar-hide"
      >
        {options.map((option, index) => (
          <Link href={option.link || '#'} key={index} passHref className="flex min-w-[110px]">
            <div className="flex-shrink-0 w-full flex flex-col items-center justify-center cursor-pointer">
              <div className='bg-[#F3F4F6] rounded-[13px] w-full h-24 flex items-center justify-center'>
                <img src={option.icon} alt={option.label} className="w-16 h-16" />
              </div>
              <span className="text-[16px] font-[400] mt-2 text-[#2F2F3F]">{option.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
