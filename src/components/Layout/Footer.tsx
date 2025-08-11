import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-12 bg-[#1f1f39] text-white">
      <div className="container px-2 xl:px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center space-x-3 py-4">
              <FaShoppingCart className="text-[#f76411] text-3xl" />
              <div className="font-bold flex items-center space-x-1">
                <span className="text-3xl font-bold text-[#f23e14]">J</span>
                <span className="text-2xl font-bold text-orange-600">oe</span>
                <span className="text-2xl font-semibold text-green-600">
                  Shop
                </span>
                <span className="text-3xl font-bold text-white">K</span>
                <span className="text-2xl font-semibold text-white">ing</span>
              </div>
            </Link>
            <p className="mb-2">Subscribe to our Newsletter</p>
            <form className="flex items-center mb-4 rounded-full p-1 bg-white">
              <input
                type="email"
                className="p-2 rounded-l-full text-black outline-none"
                placeholder="Your Email Address..."
                name="newsletter"
              />
              <button
                type="submit"
                className="bg-[#ff4500] text-white p-2 rounded-r-full"
              >
                Subscribe
              </button>
            </form>
          </div>
          {/* Add more footer sections here if needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
