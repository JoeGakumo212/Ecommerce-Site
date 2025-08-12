import Link from 'next/link';
import React from 'react';
import {
  FaFacebook,
  FaInbox,
  FaInstagram,
  FaShoppingCart,
  FaTwitter,
  FaVoicemail,
  FaWhatsapp,
} from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="py-12 bg-[#1f1f39] text-white">
      <div className="container px-2 xl:px-4 mx-auto">
        <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 w-1/4 ">
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
                className="p-2 focus:outline-none rounded-l-full text-black outline-none"
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
            <div className="flex space-x-4 mt-3 justify-center md:justify-start">
              <Link
                href={'https://www.facebook.com/inilabs/'}
                className="text-4xl text-white hover:text-[#ff4500]"
              >
                <FaFacebook />
              </Link>
              <Link
                href={'https://www.instagram.com/inilabsn/#'}
                className="text-4xl text-white hover:text-[#ff4500]"
              >
                <FaInstagram />
              </Link>
              <Link
                href={'https://x.com/inilabsn?lang=en'}
                className="text-4xl text-white hover:text-[#ff4500]"
              >
                <FaTwitter />
              </Link>
              <Link
                href={'https://www.whatsapp.com/inilabsn/#'}
                className="text-4xl text-white hover:text-[#ff4500]"
              >
                <FaWhatsapp />
              </Link>
            </div>
          </div>
          <div className="mb-8 md:mb-0 w-1/4">
            <h3 className="font-bold mb-2">Support</h3>
            <ul>
              <li>
                <Link href="/help" className="hover:text-[#ff4500]">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#ff4500]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#ff4500]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0 w-1/4">
            <h3 className="font-bold mb-2">Legal</h3>
            <ul>
              <li>
                <Link href="/privacy" className="hover:text-[#ff4500]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#ff4500]">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0 w-1/4">
            <h3 className="font-bold mb-2">Contact</h3>
            <ul>
              <li>
                <span className="text-gray-300">
                  <FaHouse className="inline mr-1 " size={20} />
                  Address: 1234 Joe&apos;s Street,
                  <br />
                  House: 25, Road No: 2,
                  <br />
                  Block A, Mirpur-1, Dhaka 1216
                </span>
              </li>
              <li>
                <span className="text-gray-300">
                  <FaInbox className="inline mr-1" size={20} /> Email:
                  support@joeshopking.com
                </span>
              </li>
              <li>
                <span className="text-gray-300">Phone: +254 791 279 635</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
