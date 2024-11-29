'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function Hero({ mode }) {
  const businessImages = [
    "/Assets/china.jpg",
    "/Assets/agra.jpg",
    "/Assets/rajasthan.jpg",
  ];

  const leisureImages = [
    "/Assets/kerala.jpg",
    "/Assets/bhutan.jpg",
    "/Assets/pow.jpg",
  ];

  const images = mode === 'business' ? businessImages : leisureImages;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      className="relative h-[600px] bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url('${images[currentImageIndex]}')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">Do more with Era Tours</h1>
          <p className="text-xl mb-8">Plan better with 300,000+ travel experiences.</p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl">
            <div className="flex-1 bg-white rounded-lg p-3 flex items-center">
              <MapPin className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Where to?"
                className="w-full text-gray-800 outline-none"
              />
            </div>
            <div className="flex-1 bg-white rounded-lg p-3 flex items-center">
              <Calendar className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="When?"
                className="w-full text-gray-800 outline-none"
              />
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
