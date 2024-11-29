'use client';

import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

export default function CustomerRatings() {
  const reviews = [
    {
      name: "Raman Patel",
      rating: 5,
      comment: "Era Tours planned every detail of our business trip perfectly. Smooth, efficient, and worry-free! Highly recommend.",
      image: "/Assets/c1.jpg",
    },
    {
      name: "Shivani Singh",
      rating: 5,
      comment: "An unforgettable adventure! The personalized itinerary matched our family’s needs perfectly. Era Tours made it stress-free.",
      image: "/Assets/shivani.jpg",
    },
    {
      name: "Abhishek Sharma",
      rating: 5,
      comment: "The best cultural experience ever! Great accommodations and flawless organization throughout the trip. Truly top-notch.",
      image: "/Assets/c2.jpg",
    },
    {
      name: "Aditi Tyagi",
      rating: 4,
      comment: "Very well-planned trip with great guides. I only wish we had more time at certain landmarks. Fantastic overall!",
      image: "/Assets/ad.jpg",
    },
    {
      name: "Rishabh Oberoi",
      rating: 4,
      comment: "Wonderful travel experience. I would’ve liked a bit more flexibility, but everything was handled smoothly. Kudos to the team!",
      image: "/Assets/c3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 relative">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center text-white mb-12">
          Customer Experiences
        </h2>
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={prevReview}
            className="absolute left-0 transform -translate-x-1/2 sm:-translate-x-[60%] bg-blue-800 text-white rounded-full p-4 shadow-md hover:bg-blue-900 transition-transform transform hover:scale-110 z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Review Card */}
          <div className="mx-auto bg-white rounded-lg p-6 shadow-xl w-80 transform transition-all duration-300">
            <div className="flex items-center mb-6">
              <img
                src={reviews[currentIndex].image}
                alt={reviews[currentIndex].name}
                className="w-16 h-16 rounded-full mr-6 border-4 border-blue-500 shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-semibold text-blue-900">{reviews[currentIndex].name}</h3>
                <div className="flex mt-1">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-700 italic leading-relaxed">
              "{reviews[currentIndex].comment}"
            </p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextReview}
            className="absolute right-0 transform translate-x-1/2 sm:translate-x-[60%] bg-blue-800 text-white rounded-full p-4 shadow-md hover:bg-blue-900 transition-transform transform hover:scale-110 z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
