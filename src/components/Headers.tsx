'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import MenuTabs from './MenuTabs';

const Headers = () => {
  const pathname = usePathname();
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="container flex px-4 items-center justify-between ma-auto">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-3 py-4">
            <FaShoppingCart className="text-[#f76411] text-3xl" />
            <div className="font-bold">
              <span className="text-3xl font-bold text-[#f23e14]">J</span>
              <span className="text-2xl font-bold text-orange-600">oe</span>
              <span className="text-2xl font-semibold text-green-600">
                Shop
              </span>
              <span className="text-3xl font-bold text-gray-800">K</span>
              <span className="text-2xl font-semibold text-gray-800">ing</span>
            </div>
          </Link>
          <div className="flex items-center space-x-8 py-4">
            <Link
              href={'/'}
              className={`${
                pathname === '/'
                  ? 'font-bold text-xl text-[#f76411]'
                  : 'text-black'
              }`}
            >
              Home
            </Link>
            <div className="relative group py-4">
              <button className="text-black font-bold text-xl flex items-center gap-2">
                Categories <MdOutlineKeyboardArrowDown className="text-2xl" />
              </button>
              <div className="absolute w-[800px] bg-white rounded shadow-md hidden group-hover:block">
                <MenuTabs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
