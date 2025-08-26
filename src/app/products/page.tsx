import ProductCard from '@/components/Home/ProductCard';
import ProductsFilter from '@/components/ProductsFilter';
import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Products = () => {
  const products = [
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
      title: 'Graphic Print Sweatshirt 1',
      image: '/sport.png',
      price: 54.99,
      discount: 22,
      category: 'Sweatshirts',
    },
    {
      id: 11,
      title: 'Graphic Print Sweatshirt 2',
      image: '/demm.png',
      price: 54.99,
      discount: 22,
      category: 'Sweatshirts',
    },
    {
      id: 12,
      title: 'Graphic Print Sweatshirt 3',
      image: '/lokoo.png',
      price: 54.99,
      discount: 22,
      category: 'Sweatshirts',
    },
  ];

  return (
    <div className="xl:container mx-auto px-2 xl:px-4 py-12">
      <div className="flex items-center space-x-3">
        <p className="text-gray-500">Home</p>
        <MdOutlineKeyboardArrowRight className="text-gray-500" />
        <p className="text-gray-500">Products</p>
      </div>
      <div className="flex items-center mt-2">
        <h1 className="text-4xl font-bold text-gray-800 mb-0">
          Explore All Products
        </h1>
        <span className="text-xl ms-2 text-gray-600">
          ({products.length} Products Found)
        </span>{' '}
      </div>
      <div className="mt-8">
        <div className="flex space-x-3">
          <div className="w-1/4">
            <ProductsFilter />
          </div>
          <div className="w-full">
            <ProductCard isWishlisted={false} data={products} />{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
