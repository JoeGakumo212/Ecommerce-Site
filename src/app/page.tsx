import Carousel from '@/components/Home/Carousel';
import CategoryCarousel from '@/components/Home/CategoryCarousel';
import PopularBrands from '@/components/Home/PopularBrands';
import ProductCard from '@/components/Home/ProductCard';
import PromotionCards from '@/components/Home/PromotionCards';

import { FaClock, FaLock, FaShippingFast } from 'react-icons/fa';
import { FaBoxOpen } from 'react-icons/fa6';

export default function Home() {
  const products = [
    {
      title: 'Brown Jacket',
      image: '/1-cover.png',
      price: '$69.99',
      originalPrice: '$89.99',
    },
    {
      title: 'Brown Jacket',
      image: '/1-cover1.png',
      price: '$59.99',
      originalPrice: '$89.99',
    },
    {
      title: 'Brown Jacket',
      image: '/1-cover 2.png',
      price: '$39.99',
      originalPrice: '$59.99',
    },
    {
      title: 'Brown Jacket',
      image: '/1-cover 4.png',
      price: '$49.99',
      originalPrice: '$99.99',
    },
  ];

  const services = [
    {
      icon: <FaShippingFast size={30} className="text-center text-[#f23e14]" />,
      title: 'Fast Delivery',
      description: 'Efficient customer support from passionate team',
    },
    {
      icon: <FaLock size={30} className="text-center text-[#f23e14]" />,
      title: 'Secure Payments',
      description: 'Different secure payment methods',
    },
    {
      icon: <FaClock size={30} className="text-center text-[#f23e14]" />,
      title: '24/7 Customer Support',
      description: 'Fast and convenient door to door delivery',
    },
    {
      icon: <FaBoxOpen size={30} className="text-center text-[#f23e14]" />,
      title: 'Easy Returns',
      description: 'Hassle-free returns within 30 days',
    },
  ];

  return (
    <div className="mb-8">
      <Carousel />
      <CategoryCarousel />
      <PromotionCards />
      <div className="xl:container px-2 xl:px-4 mt-10 mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-gray-700">
          Trendy Collection
        </h2>
        <ProductCard isWishlisted={false} data={products} />
      </div>
      <div className="xl:container px-2 xl:px-4 mt-10 mx-auto">
        <PopularBrands />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mb-3"
            >
              {item.icon}
              <h3 className="text-2xl font-bold mt-2 text-gray-700">
                {item.title}
              </h3>
              <p className="text-sm text-center text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
