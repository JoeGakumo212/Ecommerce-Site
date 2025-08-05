'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slide = [
    { image: '/slider_one-cover.png', alt: 'slide 1' },
    { image: '/slider_two-cover.png', alt: 'slide 2' },
    { image: '/slider_three-cover.png', alt: 'slide 3' },
  ];
  return (
    <div className="xl:container banner mx-auto overflow-hidden px-2 xl:px-4 my-4">
      <Slider {...settings}>
        {slide.map((item, index) => (
          <div key={index} className="h-[400px]">
            <img
              src={item.image}
              alt={item?.alt}
              className="w-full h-full rounded-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
