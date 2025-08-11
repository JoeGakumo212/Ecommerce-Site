import Link from 'next/link';
import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';

interface Product {
  image: string;
  title: string;
  price: number;
  originalPrice?: string;
}

interface ProductCardProps {
  data: Product[];
  isWishlisted?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ data, isWishlisted }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data?.map((item, index) => (
        <Link
          className="bg-white rounded-lg shadow-md p-2 flex flex-col"
          key={index}
          href={`/products/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <div className="w-full">
            <div className="relative">
              <span className="absolute top-3 left-3 z-10 bg-blue-900 text-white text-xs font-bold rounded-full px-2 py-1">
                Flash Sales
              </span>
              <FaHeart
                className="text-black absolute top-4 right-4 bg-white p-[10px] rounded-full z-10"
                size={34}
                color={`${isWishlisted ? '!text-[#ff4800]' : 'text-gray-300'}`}
              />
              <div className="overflow-hidden">
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="rounded-md w-full transform scale-95 hover:scale-100 transition duration-500 ease-in-out"
                />
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-500">
                {item?.title}
              </h2>
              <div className="my-2 flex items-center">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-black">
                  {item?.price}
                </span>
                <span className="text-gray-500 line-through ml-2">
                  {item?.originalPrice}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;
