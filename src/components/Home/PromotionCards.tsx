'use client';
import React from 'react';

const PromotionCards = () => {
  const [promotions, setPromotions] = React.useState([
    {
      image: '/winter_exclusive_for_man-cover.png',
      alt: 'Summer Sale',
      title: 'Summer Sale promotion 1',
      description: 'Up to 50% off on selected items',
      link: '/promotions/summer-sale',
    },
    {
      image: '/winter_exclusive_for_woman-cover.png',
      alt: 'Summer Sale promotion 2',
      title: 'New Arrivals',
      description: 'Check out the latest trends',
      link: '/promotions/new-arrivals',
    },
    {
      image: '/winter_exclusive_for_kids-cover.png',
      alt: 'Summer Sale promotion 3',
      title: 'Clearance Sale',
      description: 'Grab the best deals before they are gone',
      link: '/promotions/clearance-sale',
    },
  ]);
  return (
    <div className="xl:container px-2 px-4 mx-auto my-16">
      <div className="flex flex-wrap lg:flex-nowrap justify-between space-x-4 items-center me-2">
        {promotions?.map((item, index) => (
          <div
            key={index}
            className="w-full lg:w-1/3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item?.image}
              alt={item?.alt}
              className="w-full  object-cover rounded-xl"
            />
            <h3 className="text-xl font-bold mt-4 text-gray-500">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
            <a
              href={item.link}
              className="inline-block mt-4 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors duration-300"
            >
              Shop Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionCards;
