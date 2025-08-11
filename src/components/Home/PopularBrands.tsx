'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useRef } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const PopularBrands = () => {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const brands = [
    { name: 'babymel-cover', image: '/babymel-cover.png' },
    { name: 'burberry-cover', image: '/burberry-cover.png' },
    { name: 'camper-cover', image: '/camper-cover.png' },
    { name: 'chanel-cover', image: '/chanel-cover.png' },
    { name: 'dr_martens-cover', image: '/dr._martens-cover.png' },
    { name: 'fila-cover', image: '/fila-cover.png' },
    { name: 'Levis', image: '/levi.png' },
    { name: 'puma-cover', image: '/puma-cover.png' },
  ];
  return (
    <div className="xl:container mx-auto px-2 mt-10 xl:px-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-4xl font-bold text-gray-700">Popular Brands</h3>
        <div className="flex items-center gap-3">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="bg-gray-200 w-8 lg:w-10 h-8 lg:h-10 rounded-full flex items-center justify-center text-black"
          >
            <MdKeyboardArrowLeft size={25} />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="bg-gray-200 w-8 lg:w-10 h-8 lg:h-10 rounded-full flex items-center justify-center text-black"
          >
            <MdKeyboardArrowRight size={25} />
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {brands.map((item, index) => (
          <div
            key={index}
            className="p-4 flex flex-col justify-center items-center shadow-md mx-3 bg-white my-1 rounded-md"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full block mx-auto aspect-square h-[80px] p-4 mb-3 object-contain"
            />
            <h4 className="text-center text-lg font-bold text-gray-800">
              {item.name}
            </h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PopularBrands;
