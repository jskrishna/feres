// components/BottomNavigation.js

import React from 'react';
import Link from 'next/link';
import { FaHome, FaClipboardList, FaComments, FaUser } from 'react-icons/fa';
import Image from 'next/image';

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around items-center border-t-[1px] border-[#ECECEC] border-solid">
      <Link href="/" passHref className='flex-1 py-4'>
        <div className="text-center cursor-pointer">
          <img
            src="/home-01.svg"
            alt=''
            width={0}
            height={0}
            className='md:h-24 h-full w-8 m-auto'
          />
          <p className="mt-[8px] text-[12px] font-[500] text-[#0AB247]">Home</p>
        </div>
      </Link>
      <Link href="/orders" passHref className='flex-1 py-4'>
        <div className="text-center cursor-pointer">
        <img
            src="/invoice-01.svg"
            alt=''
            width={0}
            height={0}
            className='md:h-24 h-full w-8 m-auto'
          />
          <p className="mt-[8px] text-[12px] font-[400] text-[#CCCCCC]">Orders</p>
        </div>
      </Link>
      <Link href="/messages" passHref className='flex-1 py-4'>
        <div className="text-center cursor-pointer">
        <img
            src="/message-02.svg"
            alt=''
            width={0}
            height={0}
            className='md:h-24 h-full w-8 m-auto'
          />
          <p className="mt-[8px] text-[12px] font-[400] text-[#CCCCCC]">Messages</p>
        </div>
      </Link>
      <Link href="/profile" passHref className='flex-1 py-4'>
        <div className="text-center cursor-pointer">
        <img
            src="/user.svg"
            alt=''
            width={0}
            height={0}
            className='md:h-24 h-full w-8 m-auto'
          />
          <p className="mt-[8px] text-[12px] font-[400] text-[#CCCCCC]">Profile</p>
        </div>
      </Link>
    </div>
  );
};

export default BottomNavigation;
