// components/SpecialOffers.js

import Link from 'next/link';
import React from 'react';

const SpecialOffers = () => {
  return (
    <div className="p-4">
      <div className='flex justify-between items-center mb-4'>
        <h3 className="text-[18px] font-[500] text-[#2F2F3F]">Special Offers</h3> {/* Set text color */}
        <Link href="#" passHref className='text-[#979797] text-[16px] font-[500]' >See all
        </Link>
      </div>
      <div className="bg-white relative shadow rounded-lg overflow-hidden">
        <img src="/special-offer.png" alt="Special Offer" className="w-full h-40 object-cover" />
        <span className="absolute left-[10px] top-[10px] bg-[#F2FDF8] text-[#0AB247] text-[12px] rounded-full px-3 py-2">30% off selected items</span> {/* Offer badge */}
        <div className='absolute right-[10px] bottom-[10px]'>
          <ul className='flex gap-[10px]'>
            <li className='flex items-center gap-2 bg-[#F2FDF8] rounded-full px-3 py-2.5'>
              <img src="/clock-01.svg" alt="" className="w-[20px] object-cover" />
              <p className='text-[12px] text-[#1E1E1E]'>31 mins</p>
            </li>
            <li className='flex items-center gap-2 bg-[#F2FDF8] rounded-full px-3 py-2.5'>
              <img src="/scooter-02.svg" alt="" className="w-[20px] object-cover" />
              <p className='text-[12px] text-[#1E1E1E]'>EBT 150</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
