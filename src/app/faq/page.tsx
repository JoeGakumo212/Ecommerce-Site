'use client';
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const faqs = [
    {
      question: 'How do I check my order status?',
      answer:
        'You can check your order status by logging into your account and navigating to the "Orders" section. You will see the status of all your orders there.',
    },
    {
      question: 'Can I cancel or change my order?',
      answer:
        'Unfortunately, once your order has been placed it is sent to our warehouse for processing. You will need to return the original package to obtain a refund. If you need to change your shipping address, please contact support immediately.',
    },
    {
      question: 'How do I return or exchange an item?',
      answer:
        'We offer free returns for online orders placed on our site within 45 days. Return unused items in original packaging for a refund. Exchanges can be requested via your account dashboard.',
    },
    {
      question: 'What is the 30-Day Test Run?',
      answer:
        'Try your items for 30 days, and if they’re not a good fit, send them back hassle-free. This applies to select products only. Please check product details for eligibility.',
    },
    {
      question: 'What types of payments are accepted?',
      answer:
        'We accept debit/credit cards, Apple Pay, PayPal, ShopKing Gift Cards, and mobile money options for select regions.',
    },
    {
      question: 'How do I use a promotion/coupon code?',
      answer:
        'Enter your code in the checkout field. Make sure it’s spelled correctly and not expired. Only one code can be used per order.',
    },
    {
      question: 'Why is my Coupon Code Not Working?',
      answer:
        'Coupon codes don’t work on new product releases, clearance, and some bundled offers. Please check the terms and conditions for each code.',
    },
    {
      question: 'How long does delivery take?',
      answer:
        'Standard delivery takes 3-7 business days. Express options are available at checkout. International shipping times may vary.',
    },
    {
      question: 'Is my personal information secure?',
      answer:
        'Yes, we use industry-standard encryption and never share your data with third parties. Read our Privacy Policy for more details.',
    },
    {
      question: 'How do I contact customer support?',
      answer:
        'You can reach us via live chat, email (support@shopking.com), or phone (+254 791 279 635). Our team is available 24/7.',
    },
    {
      question: 'Can I track my shipment?',
      answer:
        'Yes, once your order is shipped, you will receive a tracking number via email and SMS. You can also track orders from your account dashboard.',
    },
    {
      question: 'Do you offer gift wrapping?',
      answer:
        'Gift wrapping is available for select products. Choose the option at checkout and add a personalized message.',
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="container bg-white min-h-screen py-10 px-5 md:px-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-10">FAQ</h1>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b pb-4">
            <button
              className="flex items-center justify-between w-full text-left focus:outline-none"
              onClick={() => handleToggle(idx)}
            >
              <h2 className="text-xl font-semibold text-gray-700">
                {faq.question}
              </h2>
              <span className="ml-4">
                {openIdx === idx ? (
                  <FaMinus className="text-[#f76411]" />
                ) : (
                  <FaPlus className="text-[#f76411]" />
                )}
              </span>
            </button>
            {openIdx === idx && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FAQ;
