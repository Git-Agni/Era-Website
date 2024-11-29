'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function InternationalTours() {
  const [expandedTour, setExpandedTour] = useState(null);

  const internationalTours = [
    {
      title: 'Discovery Vietnam',
      duration: '07 Nights / 08 Days',
      locations: 'Hanoi - Halong Bay - Da Nang - Hoi An - Da Nang - Ba Na Hill - Ho Chi Minh - Ho Chi Minh - Cu Chi Tunnels',
      description: 'Embark on a journey through Vietnam, discovering the rich history, culture, and natural beauty of the country. From the scenic Halong Bay to the bustling streets of Ho Chi Minh, this tour offers a blend of exploration and relaxation.',
      imageUrl: '/Assets/vietnam.jpg',
      link: '/vietnam',
    },
    {
      title: 'Stunning Maldives (IT1)',
      duration: '03 Nights / 04 Days',
      locations: 'Maldives',
      description: 'Relax and rejuvenate in the idyllic Maldives, where crystal-clear waters and pristine beaches await. This luxurious tour is perfect for beach lovers and those seeking tranquility.',
      imageUrl: '/Assets/maldives.jpg',
      link: '/maldives',
    },
    {
      title: 'Bali With Gili Island (IT2)',
      duration: '07 Nights / 08 Days',
      locations: 'Bali - Gili Island',
      description: 'Experience the best of Bali and Gili Island with this tour, featuring stunning beaches, vibrant culture, and incredible natural landscapes. Enjoy leisurely days on Gili Island, followed by the vibrant charm of Bali.',
      imageUrl: '/Assets/bali.jpg',
      link: '/bali',
    },
    {
      title: 'Bhutan Splendor (IT3)',
      duration: '07 Nights / 08 Days',
      locations: 'Paro - Thimphu - Trongsa - Bumthang - Punakha',
      description: 'Discover the beauty and spirituality of Bhutan with this immersive tour. From the peaceful monasteries in Paro to the stunning Punakha Valley, Bhutan offers a serene journey through its majestic mountains and valleys.',
      imageUrl: '/Assets/bhutan.jpg',
      link: '/bhutan',
    },
    {
      title: 'The Best Of Nepal (IT4)',
      duration: '05 Nights / 06 Days',
      locations: 'Kathmandu - Chitwan - Pokhara - Nagarkot',
      description: 'This tour explores the cultural and natural beauty of Nepal, from the historical temples of Kathmandu to the tranquil lakes of Pokhara. Experience the serene beauty of the Himalayas and the adventurous spirit of Nepal.',
      imageUrl: '/Assets/nepal.jpg',
      link: '/nepal',
    },
    {
      title: 'Mesmerising Sri Lanka (IT5)',
      duration: '05 Nights / 06 Days',
      locations: 'Colombo - Negombo - Chilaw - Kandy - Nuwara Eliya',
      description: 'Immerse yourself in the stunning beauty of Sri Lanka, with visits to ancient temples, picturesque tea plantations, and golden beaches. This tour offers a mix of relaxation and adventure in one of Asia’s most beautiful destinations.',
      imageUrl: '/Assets/sri-lanka.jpg',
      link: '/sri-lanka',
    },
    {
      title: 'Majestic Dubai With Abu Dhabi (IT6)',
      duration: '05 Nights / 06 Days',
      locations: 'Dubai - Abu Dhabi',
      description: 'Explore the futuristic city of Dubai and the opulent capital of the UAE, Abu Dhabi. From world-class shopping to architectural wonders like the Burj Khalifa and Sheikh Zayed Mosque, this tour promises an unforgettable experience.',
      imageUrl: '/Assets/abu-dhabi.jpg',
      link: '/abu-dhabi',
    },
    {
      title: 'Best Of Singapore Malaysia And Thailand Tour (IT7)',
      duration: '09 Nights / 10 Days',
      locations: 'Singapore - Kuala Lumpur - Pattaya - Bangkok',
      description: 'Enjoy a multi-country adventure with a tour that takes you through the vibrant cities of Singapore, Kuala Lumpur, Pattaya, and Bangkok. From skyscrapers to beaches, temples to shopping, this tour has something for every traveler.',
      imageUrl: '/Assets/singapore.jpg',
      link: '/singapore',
    },
    {
      title: 'Best Of China Tour (IT8)',
      duration: '07 Nights / 08 Days',
      locations: 'Shanghai - Hangzhou - Xian - Beijing',
      description: 'Delve into the rich culture and history of China with visits to Shanghai’s skyline, the ancient city of Xian with the Terracotta Army, and the iconic Great Wall of China. This tour offers a perfect blend of modernity and tradition.',
      imageUrl: '/Assets/china.jpg',
      link: '/china',
    },
    {
      title: 'Best Of Europe (IT9)',
      duration: '10 Nights / 11 Days',
      locations: 'Paris - France - Geneva - Switzerland - Lucerne - Innsbruck - Austria - Venice - Italy - Florence - Rome',
      description: 'Explore the timeless beauty of Europe on a grand tour, visiting iconic cities like Paris, Geneva, Venice, and Rome. From world-renowned art to charming canals, this tour offers a taste of Europe’s best.',
      imageUrl: '/Assets/europe.jpg',
      link: '/europe',
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
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold text-zinc-800 mb-4">
              International Tours: Explore the World with Us
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Discover incredible destinations across the globe with our exclusive international tours. From the beaches of the Maldives to the cultural heart of Europe, our tours offer an unforgettable experience of nature, adventure, and luxury. 
            </p>
            <p className="text-lg text-gray-700">
              Whether you're seeking relaxation, adventure, or cultural exploration, we have a variety of tours tailored to your interests. Explore exotic locations, taste new cuisines, and create memories that last a lifetime.
            </p>
          </div>

          {/* International Tours Section */}
          <div className="grid lg:grid-cols-3 gap-8">
            {internationalTours.map((tour, index) => (
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
