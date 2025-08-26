import React from 'react';

const aboutUsData = [
  {
    title: 'Our Mission',
    content:
      'At JoeShopKing, our mission is to provide a seamless, trustworthy, and enjoyable shopping experience for customers worldwide. We believe in quality, convenience, and excellent customer service.',
  },
  {
    title: 'Who We Are',
    content:
      'ShopKing is a leading eCommerce platform dedicated to connecting buyers with a wide range of products from trusted sellers. Our team is passionate about innovation and customer satisfaction.',
  },
  {
    title: 'Our Values',
    content:
      'We value integrity, transparency, and sustainability. Our commitment is to offer products that meet high standards while fostering a community that empowers both customers and sellers.',
  },
  {
    title: 'Why Choose Us?',
    content:
      'With a user-friendly interface, secure payment options, and fast shipping, ShopKing stands out as the go-to destination for all your shopping needs.',
  },
];

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen py-16 px-4 md:px-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">About Us</h1>

      {aboutUsData.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
          <p className="text-gray-700 leading-relaxed">{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
