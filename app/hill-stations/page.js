'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function HillStationTours() {
  const [expandedTour, setExpandedTour] = useState(null);

  const hillStationTours = [
    {
      title: 'Shimla Manali Naldhera And Kasol Tour (D7)',
      duration: '04 Nights / 05 Days',
      locations: 'Delhi – Shimla – Manali – Kasol – Naldhera – Delhi',
      description: 'Discover the picturesque hill stations of Himachal Pradesh with this tour that covers Shimla, Manali, Kasol, and Naldhera. Enjoy scenic landscapes, adventure activities, and serene surroundings.',
      imageUrl: '/Assets/shimla.jpg',
      link: '/shimla-manali-naldhera-kasol-tour',
    },
    {
      title: 'Kashmir Delight Tour (D13)',
      duration: '09 Nights / 10 Days',
      locations: 'Delhi – Srinagar – Sonmarg – Pahalgam – Gulmarg – Srinagar - Delhi',
      description: 'Experience the breathtaking beauty of Kashmir’s valleys, lakes, and snow-capped mountains. This tour includes visits to Srinagar, Sonmarg, Pahalgam, and Gulmarg, ideal for nature lovers.',
      imageUrl: '/Assets/kashmir.jpg',
      link: '/kashmir-delight-tour',
    },
    {
      title: 'Journey To Ladakh (D8)',
      duration: '06 Nights / 07 Days',
      locations: 'Leh - Nubra Valley - Leh - Pangong Lake - Leh',
      description: 'Venture into the stunning landscapes of Ladakh, with visits to Leh, Nubra Valley, Pangong Lake, and more, making this the perfect destination for adventure seekers and nature enthusiasts.',
      imageUrl: '/Assets/ladakh.jpg',
      link: '/journey-to-ladakh',
    },
  ];

  const handleCardToggle = (tourIndex) => {
    setExpandedTour(expandedTour === tourIndex ? null : tourIndex);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto p-4 md:p-8">
          {/* SEO Optimized Hero Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Hill Station Tours: Scenic Escapes Amidst the Majestic Mountains
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Explore the serene hill stations of India, from the cool climes of Shimla and Manali to the breathtaking landscapes of Ladakh and Kashmir. Perfect for those seeking tranquility and adventure.
            </p>
            <p className="text-lg text-gray-700">
              Whether you are hiking through the pine forests of Shimla or soaking in the beauty of the Ladakh plateau, these tours offer a refreshing escape into nature’s embrace.
            </p>
          </div>

          {/* Hill Station Tours Section */}
          <div className="grid lg:grid-cols-3 gap-8">
            {hillStationTours.map((tour, index) => (
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