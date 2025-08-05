'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import MenuTabs from './MenuTabs';

const Headers = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
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
              <div className="absolute top-14  left[-100px] w-[800px] bg-white rounded shadow-md hidden group-hover:block">
                <MenuTabs />
              </div>
            </div>
            <Link
              href="/offers"
              className={`py-4 text-xl font-bold ${
                pathname === '/offers' ? 'text-[#f76411]' : 'text-black'
              }`}
            >
              Offers
            </Link>{' '}
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none text-gray-800"
              />
              <FaSearch className="absolute left-3 top-1/2 text-gray-400 transform -translate-y-1/2 " />
            </div>
            <div className="relative group me-4 py-4 text-black">
              <div className="flex items-center space-x-2 cursor-pointer">
                <img src="/english.png" alt="flag" className="h-5" />
                <span>English</span>
                <MdOutlineKeyboardArrowDown className="text-xl ms-3" />
              </div>
              <div className="absolute top-14 left-[1px] w-48 bg-white border rounded shadow-lg hidden group-hover:block">
                <button className="flex items-center space-x-3">
                  <img src="/english.png" alt="flag" />
                  English
                </button>
              </div>
            </div>
            <Link href={'/wishlist'}>
              <FaHeart className="text-black cursor-pointer" />
            </Link>
            <div className="relative group me-4 py-4">
              <div className="flex items-center space-x-2 ">
                <FaUser className="text-black cursor-pointer" />
              </div>
              <div className="absolute top-14  right-[-10px] w-52 p-3 bg-white rounded-md shadow-md hidden group-hover:block">
                {!isLoggedIn ? (
                  <div className="flex flex-col items-center space-y-2">
                    <Link
                      className=" px-3 py-2 bg-[#ff4f0080]  rounded-full text-white"
                      href="/register"
                    >
                      Register your Account
                    </Link>
                    <p className="py-1 text-center text-black">or</p>
                    <Link
                      className="px-3 py-2 text-black bg-[#ff4500] rounded-full  text-white"
                      href="/login"
                    >
                      Login to your Account
                    </Link>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
