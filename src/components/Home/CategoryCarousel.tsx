'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
const CategoryCarousel = () => {
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

  const Categories = [
    { name: 'Men', image: '/pants_&_tights-thumb.png' },
    { name: 'Clothings', image: '/clothing-thumb.png' },
    { name: 'Hoodies & Sweaters', image: '/hoodies_&_sweatshirts-thumb.png' },
    { name: 'Jackets & Vests', image: '/jackets_&_vests-thumb.png' },
    { name: 'Pants &Tights', image: '/pants-thumb.png' },
    { name: 'Shorts', image: '/shorts-thumb.png' },
    { name: 'Tops & T-Shirts', image: '/tops_&_t-shirts-thumb.png' },
    { name: 'Shoes', image: '/sneakers-thumb.png' },
  ];
  return (
    <div className="xl:container category-carousel mx-auto overflow-hidden px-2 xl:px-4 my-4 mt-10">
      <div className="flex justify-between items-center">
        <h3 className=" text-md lg:text-4xl text-black font-bold">
          Browse By Category
        </h3>
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="bg-gray-200 w-8 lg:w-10 h-8 lg:h-10 rounded-full px-1 lg:px-2 py-1 text-black"
        >
          <MdKeyboardArrowLeft size={25} />
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="bg-gray-200 w-8 lg:w-10 h-8 lg:h-10 rounded-full px-1 lg:px-2 py-1 text-black"
        >
          <MdKeyboardArrowRight size={25} />
        </button>
      </div>
      <div className="mt-5">
        <Slider ref={sliderRef} {...settings}>
          {Categories.map((item, index) => (
            <div
              key={index}
              className=" flex justify-center items-center gap-3 rounded-t-md"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full pe-3 rounded-tr-md rounded-tl-md "
              />
              <h4 className="text-center mt-3 text-lg font-bold text-gray-800">
                {item.name}
              </h4>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategoryCarousel;
