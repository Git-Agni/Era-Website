'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function WildlifeTours() {
  const [expandedTour, setExpandedTour] = useState(null);

  const wildlifeTours = [
    {
      title: 'Bird Watching & Tiger Safari Tour (D14)',
      duration: '14 Nights / 15 Days',
      locations: 'Delhi - Ranthambore - Jaipur - Bharatpur - Agra - Bandhavgarh - Delhi',
      description: 'A thrilling wildlife experience, focusing on bird watching and tiger safari in some of India\'s most iconic national parks, offering incredible encounters with nature.',
      imageUrl: '/Assets/animal-gcbfa9281a_640.jpg',
      link: '/bird-watching-tiger-safari',
    },
    {
      title: 'Corbett Weekend Tour (D6)',
      duration: '02 Nights / 03 Days',
      locations: 'Corbett Park',
      description: 'A weekend getaway to the Corbett National Park, famous for its tigers and rich wildlife. Enjoy a perfect balance of adventure and relaxation.',
      imageUrl: '/Assets/tiger-g958ad07ab_640.jpg',
      link: '/corbett-weekend-tour',
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
         

          {/* SEO Optimized Description */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Wildlife Tours in India: A Journey into Nature
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Discover the wonders of India's wildlife through carefully curated tours. Whether you're a bird-watching enthusiast or a thrill-seeker looking for a tiger safari, these tours offer a unique opportunity to experience the country's natural beauty and wildlife diversity in iconic national parks. 
            </p>
            <p className="text-lg text-gray-700">
              Our tours provide a balanced combination of adventure, relaxation, and wildlife education. Explore the best of India's wildlife hotspots, from Corbett National Park to Ranthambore, and capture the essence of India’s flora and fauna.
            </p>
          </div>

          {/* Wildlife Tours Section */}
          <div className="grid lg:grid-cols-3 gap-8">
            {wildlifeTours.map((tour, index) => (
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
