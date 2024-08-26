// components/Header.js

import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai'; // Import new cart icon
import Image from 'next/image';

const Header = () => {
  return (
    <div className="p-4 bg-white fixed w-full z-10">
      <div className="flex justify-between items-center mb-6">
        <button className="text-green-600 rounded-[13px] w-[44px] h-[44px] flex items-center justify-center border-[1px] border-solid border-[#EEEEEE]">
          <img
            src="/arrow-left.svg"
            alt=''
            width={0}
            height={0}
            className='md:h-24 h-full w-8'
          />
        </button>
        <div className="text-center">
          <span className="text-[14px] font-[500] text-[#2F2F3F]">Delivery to</span>
          <h2 className="text-[14px] font-bold text-[#0AB247] flex items-center gap-2">Elgin St. Celina, Delaware 10299 <Image src="/Vector.svg"
            alt=''
            width={0}
            height={0}
            className='h-24 w-4' /></h2>
        </div>
        <div className="relative">
          <button className="text-green-600">
            <img
              src="/shopping-basket-01.svg"
              alt=''
              width={0}
              height={0}
              className='h-24 w-auto'
            />
          </button>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            2
          </span>
        </div>
      </div>
      <div className="flex items-center ">
        <div className="relative flex items-center w-full bg-[#F8F8F8] p-2 rounded-[13px]">
          <input
            type="text"
            placeholder="Search for food, groceries..."
            className="flex-1 p-2 pl-[45px] bg-transparent rounded-md focus:outline-none"
          />
          <div className="absolute left-3 text-gray-400">
            <img
              src="/search.svg"
              alt=''
              width={0}
              height={0}
              className='md:h-24 h-full w-6 m-auto'
            />
          </div>
        </div>
        <button className="ml-2 h-[56px] w-[66px] bg-[#F8F8F8] p-2 rounded-[13px]">
          <img
            src="/filter-horizontal.svg"
            alt=''
            width={0}
            height={0}
            className='md:h-24 h-full w-6 m-auto'
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
