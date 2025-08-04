import React, { useState } from 'react';
import Link from 'next/link';
type TabName = 'Men' | 'Women' | 'Juniors';
type TabData = {
  [key in TabName]: {
    clothing: string[];
    shoes: string[];
    accessories: string[];
    image: string;
  };
};
const tabData: TabData = {
  Men: {
    image: '/men-thumb.png',
    clothing: ['Hoodies & SweatShirts'],
    shoes: ['Sneakers'],
    accessories: ['Bags & Backpacks'],
  },
  Women: {
    image: '/women-cover.png',
    clothing: ['Tops ', 'Jeans'],
    shoes: ['Heels', 'Flats'],
    accessories: ['Handbags'],
  },
  Juniors: {
    image: '/1-cover.png',
    clothing: ['T-Shirts'],
    shoes: ['Sneakers'],
    accessories: ['Hats'],
  },
};
const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState<TabName>('Men');
  const renderContent = () => {
    const data = tabData[activeTab];
    return (
      <div className="flex justify-between py-3 w-full">
        <div className="flex justify-between space-x-8 p-4  w-full">
          <div className="w-1/2">
            <img
              src={data?.image}
              alt="category"
              className="rounded-lg w-full object-fill h-[300px]"
            />
          </div>
          <div className="flex justify-normal space-x-8 w-full">
            <div className="w-1/3">
              <h2 className="font-bold mb-4 text-black">Shoes</h2>
              <ul className="space-y-2">
                {data?.shoes.map((item, index) => (
                  <li key={index}>
                    <Link href={`/products?category=${item?.toLowerCase()}`}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="w-full">
      <nav className="flex justify-center space-x-8 py-4 border-b">
        {(['Men', 'Women', 'Juniors'] as TabName[]).map((tab) => (
          <button
            key={tab}
            className={`text-black${
              activeTab === tab
                ? ' text-orange-500 border-b-2 border-orange-500'
                : ''
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      {renderContent()}
    </div>
  );
};

export default MenuTabs;
