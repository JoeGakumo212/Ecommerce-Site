'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaHeart, FaSearch } from 'react-icons/fa';

const HelpCenter = () => {
  const [chatInput, setChatInput] = useState('');
  const [chatLog, setChatLog] = useState<string[]>([]);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatInput.trim() === '') return;
    setChatLog([
      ...chatLog,
      `You: ${chatInput}`,
      `Bot: This is a placeholder response.`,
    ]);
    setChatInput('');
  };

  return (
    <div className="container mx-auto bg-white min-h-screen py-10 px-5 md:px-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Help Center</h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column - Help Content */}
        <div className="lg:w-2/3 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-[#f76411] mb-2">
              Contact Support
            </h2>
            <p className="text-gray-700 mb-2">
              Need help? Reach out to our support team 24/7 via:
            </p>
            <ul className="list-disc ml-6 text-gray-600">
              <li>
                Email:{' '}
                <a
                  href="mailto:support@shopking.com"
                  className="text-[#f76411] underline"
                >
                  support@shopking.com
                </a>
              </li>
              <li>
                Phone:{' '}
                <a
                  href="tel:+254791279635"
                  className="text-[#f76411] underline"
                >
                  +254 791 279 635
                </a>
              </li>
              <li>Live Chat: Available at the bottom right of every page</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#f76411] mb-2">
              Popular Topics
            </h2>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Order Status & Tracking</li>
              <li>Returns & Exchanges</li>
              <li>Payment & Billing</li>
              <li>Shipping Information</li>
              <li>Account Management</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#f76411] mb-2">
              Quick Links
            </h2>
            <ul className="list-disc ml-6 text-gray-600">
              <li>
                <a href="/faq" className="text-[#f76411] underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="text-[#f76411] underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-[#f76411] underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/RETURN-EXCHANGE" className="text-[#f76411] underline">
                  Return & Refund Policy
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* Right Column - Subscription & Chatbot */}
        <div className="lg:w-1/3 space-y-10">
          {/* Subscription Form */}
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Subscribe for Updates
            </h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className=" text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f76411]"
              />
              <button
                type="submit"
                className="w-full bg-[#f76411] text-white py-2 px-4 rounded-md hover:bg-[#e45300] transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Chatbot Box */}
          <div className="border p-6 rounded-lg shadow-sm flex flex-col h-96">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Ask Our Bot
            </h3>
            <div className="flex-1 overflow-y-auto bg-gray-50 p-3 mb-4 rounded-md text-sm text-gray-700 space-y-2">
              {chatLog.map((msg, index) => (
                <p key={index}>{msg}</p>
              ))}
            </div>
            <form onSubmit={handleChatSubmit} className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type your question..."
                className=" text-black flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f76411]"
              />
              <button
                type="submit"
                className="bg-[#f76411] text-white px-4 py-2 rounded-md hover:bg-[#e45300] transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
