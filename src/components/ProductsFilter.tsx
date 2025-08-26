'use client';
import React from 'react';

import { useState } from 'react';
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';

const ProductsFilter = () => {
  const [sortBy, setSortBy] = useState<string>('');
  const [minPrice, setMinPrice] = useState<number | string>(0);
  const [maxPrice, setMaxPrice] = useState<number | string>(1000);

  const handleMultiRangeChange = (e: {
    minValue: number;
    maxValue: number;
  }) => {
    setMinPrice(e.minValue);
    setMaxPrice(e.maxValue);
  };
  return (
    <div className="text-gray-800 p-4 bg-white shadow rounded-lg">
      <div className="mb-4">
        <h3 className="font-semibold mb-2 text-gray-700">Sort By</h3>
        <label htmlFor="sort" className="flex items-center space-x-2 gap-3">
          <input
            type="radio"
            id="sort"
            name="sort"
            onChange={() => setSortBy('newest')}
            value="newest"
          />
          Newest
        </label>
        <label htmlFor="sort" className="flex items-center space-x-2 gap-3">
          <input
            type="radio"
            id="sort"
            name="sort"
            onChange={() => setSortBy('price-high-to-low')}
            value="price-low-to-high"
          />
          Price low to high
        </label>
        <label htmlFor="sort" className="flex items-center space-x-2 gap-3">
          <input
            type="radio"
            id="sort"
            name="sort"
            onChange={() => setSortBy('price-low-to-high')}
            value="price-low-to-high"
          />
          Price high to low
        </label>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2 text-gray-700">Price</h3>

        <div className="flex gap-2">
          <input
            type="text"
            readOnly
            className="w-1/2 p-1 border rounded"
            placeholder="Min"
          />
          <input
            type="text"
            readOnly
            className="w-1/2 p-1 border rounded"
            placeholder="Max"
          />
        </div>
        <MultiRangeSlider
          min={0}
          max={10000}
          step={10}
          ruler={false}
          label={true}
          preventWheel={false}
          minValue={Number(minPrice)}
          maxValue={Number(maxPrice)}
          barInnerColor="#f34d1d"
          thumbLeftColor="#f34d1d"
          thumbRightColor="#f34d1d"
          style={{ border: 'none', boxShadow: 'none', background: 'white' }}
          onInput={(e: ChangeResult) => handleMultiRangeChange(e)}
        />
      </div>
      <div className="md-4">
        <h3 className="font-semibold mb-2 text-gray-700">Brand</h3>
        <label htmlFor="brand" className="flex items-center space-x-2 gap-3">
          <input type="checkbox" id="brand" name="brand" value="nike" />
          Nike
        </label>
        <label htmlFor="brand" className="flex items-center space-x-2 gap-3">
          <input type="checkbox" id="brand" name="brand" value="adidas" />
          Adidas
        </label>
        <label htmlFor="brand" className="flex items-center space-x-2 gap-3">
          <input type="checkbox" id="brand" name="brand" value="puma" />
          Puma
        </label>
        <label htmlFor="brand" className="flex items-center space-x-2 gap-3">
          <input type="checkbox" id="brand" name="brand" value="reebok" />
          Reebok
        </label>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2 text-gray-700">Size</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <label
              key={size}
              className="border rounded p-2 cursor-pointer hover:bg-gray-200 flex items-center justify-center"
            >
              <input
                type="radio"
                name="size"
                value={size}
                className="hidden peer"
              />
              <span className="peer-checked:bg-gray-800 peer-checked:text-white w-10 text-center rounded">
                {size}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsFilter;
