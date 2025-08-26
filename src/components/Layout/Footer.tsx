import Link from 'next/link';
import React from 'react';
import {
  FaEnvelope,
  FaFacebook,
  FaInbox,
  FaInstagram,
  FaMapMarkedAlt,
  FaPhone,
  FaShoppingCart,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="py-12 bg-[#1f1f39] text-white">
      <div className="xl:container px-2 xl:px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          <div>
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
                className="flex-1 p-2 pl-4 rounded-l-full text-black outline-none"
                placeholder="Your Email Address..."
                name="newsletter"
                required
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
          <div>
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
                <Link href="/return" className="hover:text-[#ff4500]">
                  Return & Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-[#ff4500]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
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
              <li>
                <Link href="/aboutus" className="hover:text-[#ff4500]">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact Us</h3>
            <p className="mb-1 flex items-center gap-3">
              <FaMapMarkedAlt className="text-[#ff4500]" />
              House: 1234 Street Nakuru, City, State, 56789
            </p>
            <p className="mb-1 flex items-center gap-3">
              <FaEnvelope className="text-[#ff4500]" />
              info@sk.com
            </p>
            <p className="mb-1 flex items-center gap-3">
              <FaPhone className="text-[#ff4500]" />
              +254 791279635
            </p>
            <div className="flex space-x-3 mt-4">
              <img
                src="/play-store.png"
                alt="play store"
                className="h-[400]px] w-[130px]"
              />
              <img
                src="app-store.png"
                alt="app store"
                className="h-[400]px] w-[130px]"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
