'use client';
import React, { useState } from 'react';

const ProductDetails = () => {
  const [zoom, setZoom] = useState(false);

  return (
    <div className="text-gray-700 xl:px-4 py-12 xl:container mx-auto px-2">
      <h2 className="text-3xl font-semibold mb-6">Product Details</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image with Zoom */}
        <div className="md:w-1/2 relative overflow-hidden">
          <img
            src="/jumper.png"
            alt="Product Image"
            className={`w-full h-auto rounded-lg cursor-zoom-in transition-transform duration-300 ${
              zoom ? 'scale-150' : 'scale-100'
            }`}
            onClick={() => setZoom(!zoom)}
          />
          {zoom && (
            <p className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-sm rounded">
              Click to Zoom Out
            </p>
          )}
        </div>

        {/* Product Info */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Classic White T-Shirt</h3>
          <p className="text-xl text-gray-900 font-bold mb-4">$19.99</p>
          <p className="mb-4">
            This classic white t-shirt is made from 100% organic cotton,
            ensuring comfort and breathability. Perfect for casual wear or
            layering under jackets and sweaters.
          </p>

          <ul className="list-disc list-inside mb-4">
            <li>Material: 100% Organic Cotton</li>
            <li>Available Sizes: S, M, L, XL</li>
            <li>Color: White</li>
            <li>Care Instructions: Machine wash cold, tumble dry low</li>
          </ul>

          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
