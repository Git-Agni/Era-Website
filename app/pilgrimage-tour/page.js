'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function PilgrimageTours() {
  const [expandedTour, setExpandedTour] = useState(null);

  const pilgrimageTours = [
    {
      title: 'Tirupati Weekend Tour (D9)',
      duration: '02 Nights / 03 Days',
      locations: 'Chennai - Tirupati - Chennai',
      description: 'A spiritually enriching weekend tour to the sacred city of Tirupati, known for its famous Venkateswara Temple. A perfect blend of religious significance and cultural heritage.',
      imageUrl: '/Assets/tpb.jpg',
      link: '/tirupati',
    },
    {
      title: 'Buddhist Culture And Heritage Tour (D11)',
      duration: '10 Nights / 11 Days',
      locations: 'Delhi - Jaipur - Agra - Khajuraho - Varanasi - Bodhgaya - Rajgir - Nalanda - Patna - Delhi',
      description: 'Embark on a journey through India’s rich Buddhist heritage. Explore ancient temples, monasteries, and landmarks that have shaped Buddhist culture, from Bodhgaya to Varanasi.',
      imageUrl: '/Assets/buddh.jpg',
      link: '/buddhist-culture',
    },
    {
      title: 'Triangle Package With Varanasi And Khajuraho (D12)',
      duration: '10 Nights / 11 Days',
      locations: 'Delhi - Jaipur - Agra - Orchha - Khajuraho - Varanasi - Delhi',
      description: 'This tour takes you through the architectural marvels of India’s Golden Triangle, adding the spiritual charm of Varanasi and the ancient temples of Khajuraho.',
      imageUrl: '/Assets/varanasi.jpg',
      link: '/varanasi',
    },
    {
      title: 'Kashi Ayodhya Paryag (D17)',
      duration: '06 Nights / 07 Days',
      locations: 'Delhi - Varanasi – Gaya – Bodhgaya – Ayodhya - Prayagraj – Chitrakoot',
      description: 'Experience the religious essence of India as you visit the sacred cities of Varanasi, Ayodhya, and Prayagraj, immersed in spiritual significance and historical importance.',
      imageUrl: '/Assets/kashi.jpg',
      link: '/kashi',
    },
    {
      title: 'Rishikesh / Shivpuri Package (D16)',
      duration: '01 Night / 02 Days',
      locations: 'Rishikesh - Shivpuri',
      description: 'A short getaway to Rishikesh and Shivpuri, known for spiritual retreats, yoga, and thrilling adventure sports like white-water rafting.',
      imageUrl: '/Assets/rs.jpg',
      link: '/shivpuri-rishikesh',
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
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Pilgrimage Tours in India: Sacred Journeys Across Spiritual Landmarks
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Explore India's most revered pilgrimage sites with our specially curated tours. From the sacred temples of Tirupati to the spiritual teachings of Bodhgaya, these tours offer a profound connection to India's religious and cultural heritage.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're seeking spiritual solace or cultural immersion, these pilgrimage tours are designed to provide enriching experiences in the heart of India’s most sacred cities.
            </p>
          </div>

          {/* Pilgrimage Tours Section */}
          <div className="grid lg:grid-cols-3 gap-8">
            {pilgrimageTours.map((tour, index) => (
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
