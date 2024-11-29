'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function SouthIndiaTours() {
  const [expandedTour, setExpandedTour] = useState(null);

  const southIndiaTours = [
    {
      title: 'Kerala Gods Own Country (D3)',
      duration: '07 Nights / 08 Days',
      locations: 'Kochi - Munnar - Thekkady - Alleppey - Kovalam - Trivandrum',
      description: 'Experience the enchanting beauty of Kerala, often called "God\'s Own Country." This tour takes you through the lush landscapes of Munnar, the wildlife sanctuaries of Thekkady, the serene backwaters of Alleppey, and the tranquil beaches of Kovalam.',
      imageUrl: '/Assets/kerala.jpg',
      link: '/kerala',
    },
    {
      title: 'Tirupati Weekend Tour (D9)',
      duration: '02 Nights / 03 Days',
      locations: 'Chennai - Tirupati - Chennai',
      description: 'A spiritual getaway to the sacred city of Tirupati, known for the famous Venkateswara Temple. This tour offers a perfect weekend retreat for those seeking solace and devotion in one of India\'s holiest places.',
      imageUrl: '/Assets/tpb.jpg',
      link: '/tirupati',
    },
  ];

  const handleCardToggle = (tourIndex) => {
    setExpandedTour(expandedTour === tourIndex ? null : tourIndex);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto p-4 md:p-8">
          {/* SEO Optimized Hero Section */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-semibold mb-4">
              South India Tours: Experience Serenity and Spirituality
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Discover the diverse beauty of South India, where lush landscapes, serene beaches, and rich spiritual heritage await you. From Kerala's tranquil backwaters to the divine temples of Tirupati, these tours offer a blend of nature, culture, and spirituality.
            </p>
            <p className="text-lg text-gray-700">
              Explore the famous sights of South India, including the hill stations of Munnar, the wildlife in Thekkady, and the coastal beauty of Kovalam. Embark on a spiritual journey to Tirupati, one of the holiest pilgrimage sites in India.
            </p>
          </div>

          {/* South India Tours Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            {southIndiaTours.map((tour, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={tour.imageUrl}
                  alt={tour.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                  <p className="text-gray-700 mb-2"><strong>Duration:</strong> {tour.duration}</p>
                  <p className="text-gray-700 mb-2"><strong>Locations:</strong> {tour.locations}</p>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <a href={tour.link}>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
                      View Details
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
