'use client';
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const Offers = () => {
  const [wishlisted, setWishlisted] = useState<{ [key: number]: boolean }>({});
  const offerProducts = [
    {
      id: 1,
      title: 'White Sneakers',
      image: '/sneaker.png',
      price: 149.99,
      discount: 20,
      category: 'Shoes',
    },
    {
      id: 2,
      title: 'Men’s Denim Jacket',
      image: '/tsho.png',
      price: 89.99,
      discount: 15,
      category: 'Jackets',
    },
    {
      id: 3,
      title: 'Pink Hoodie',
      image: '/socks.png',
      price: 59.99,
      discount: 10,
      category: 'Hoodies',
    },
    {
      id: 4,
      title: 'Fitness Leggings',
      image: '/dem.png',
      price: 39.99,
      discount: 25,
      category: 'Sportswear',
    },
    {
      id: 5,
      title: 'Classic White T-Shirt',
      image: '/jumpa.png',
      price: 19.99,
      discount: 5,
      category: 'T-Shirts',
    },
    {
      id: 6,
      title: 'Ankle Socks (3-Pack)',
      image: '/jumper.png',
      price: 9.99,
      discount: 30,
      category: 'Accessories',
    },
    {
      id: 7,
      title: 'Running Shorts',
      image: '/kinyasa.png',
      price: 29.99,
      discount: 20,
      category: 'Sportswear',
    },
    {
      id: 8,
      title: 'Canvas Backpack',
      image: '/toja.png',
      price: 49.99,
      discount: 18,
      category: 'Bags',
    },
    {
      id: 9,
      title: 'Slim Fit Jeans',
      image: '/dress.png',
      price: 69.99,
      discount: 12,
      category: 'Pants',
    },
    {
      id: 10,
      title: 'Graphic Print Sweatshirt',
      image: '/sport.png',
      price: 54.99,
      discount: 22,
      category: 'Sweatshirts',
    },
    {
      id: 10,
      title: 'Graphic Print Sweatshirt',
      image: '/demm.png',
      price: 54.99,
      discount: 22,
      category: 'Sweatshirts',
    },
    {
      id: 10,
      title: 'Graphic Print Sweatshirt',
      image: '/lokoo.png',
      price: 54.99,
      discount: 22,
      category: 'Sweatshirts',
    },
  ];

  return (
    <div className="xl:container px-2 xl:px-4 py-12 mx-auto">
      <div className="flex items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-700">Offer Products</h1>
        <span className="text-xl ms-2 relative top-[2px] text-gray-700">
          ({offerProducts.length} Products Found)
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {offerProducts.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-lg shadow p-4 product-card text-gray-700"
          >
            <span className="absolute top-3 left-3 z-10 bg-blue-900 text-white text-xs font-bold rounded-full px-2 py-1">
              Flash Sales
            </span>
            <FaHeart
              className={`absolute top-4 right-4 bg-white p-[10px] rounded-full z-10 cursor-pointer ${
                wishlisted[product.id] ? 'text-[#ff4800]' : 'text-gray-300'
              }`}
              size={34}
              onClick={() =>
                setWishlisted((prev) => ({
                  ...prev,
                  [product.id]: !prev[product.id],
                }))
              }
            />
            <div className="overflow-hidden mb-3">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-md w-full transform scale-95 hover:scale-100 transition duration-500 ease-in-out"
              />
            </div>
            <h3 className="font-bold text-lg mb-1">{product.title}</h3>
            <p className="price text-gray-700 mb-1">
              <span className="discounted text-[#f76411] font-bold mr-2">
                ${(product.price * (1 - product.discount / 100)).toFixed(2)}
              </span>
              <span className="original text-gray-400 line-through">
                ${product.price.toFixed(2)}
              </span>
            </p>
            <span className="text-xs text-gray-500">{product.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
