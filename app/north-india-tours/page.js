'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function NorthIndiaTours() {
  const [expandedTour, setExpandedTour] = useState(null);

  const northIndiaTours = [
    {
      title: 'Royal Rajasthan Tour (D1)',
      duration: '09 Nights / 10 Days',
      locations: 'Udaipur - Mount Abu - Jodhpur - Jaisalmer - Khimsar - Ajmer - Pushkar - Jaipur',
      description: 'Explore the royal heritage of Rajasthan, visiting historic cities like Udaipur, Jodhpur, and Jaipur. This tour takes you through palaces, forts, temples, and the desert landscapes of Jaisalmer and Khimsar.',
      imageUrl: '/Assets/rajasthan.jpg',
      link: '/rajasthan',
    },
    {
      title: 'Golden Triangle Tour (D2)',
      duration: '05 Nights / 06 Days',
      locations: 'Delhi - Agra - Jaipur',
      description: 'Discover the iconic Golden Triangle of India, with visits to Delhi, Agra, and Jaipur. Explore the Taj Mahal, historical forts, and palaces while experiencing the rich cultural heritage of these cities.',
      imageUrl: '/Assets/agra.jpg',
      link: '/golden-triangle',
    },
    {
      title: 'Mesmerising Gujarat Tour (D4)',
      duration: '12 Nights / 13 Days',
      locations: 'Mumbai - Ahmadabad - Poshina - Patan - Modhera - Dasada - Bhuj - Gondal - Junagarh - Sasan Gir - Somnath - Diu - Palitana - Bhavnagar - Mumbai Departure',
      description: 'Embark on a journey through Gujarat, visiting architectural wonders like Modhera Sun Temple, Rann of Kutch, and Sasan Gir for wildlife safaris. Explore vibrant cities and historical landmarks, ending your tour in Mumbai.',
      imageUrl: '/Assets/gujarat.jpg',
      link: '/gujarat',
    },
    {
      title: 'Triangle Package With Varanasi And Khajuraho (D12)',
      duration: '10 Nights / 11 Days',
      locations: 'Delhi - Jaipur - Agra - Orchha - Khajuraho - Varanasi - Delhi',
      description: 'Combine the rich cultural heritage of the Golden Triangle with the spiritual essence of Varanasi and the architectural wonders of Khajuraho. A perfect blend of history, culture, and spirituality.',
      imageUrl: '/Assets/varanasi.jpg',
      link: '/varanasi',
    },
    {
      title: 'Rishikesh / Shivpuri Package (D16)',
      duration: '01 Night / 02 Days',
      locations: 'Rishikesh - Shivpuri',
      description: 'Perfect for adventure seekers, this tour offers rafting and adventure activities in Rishikesh, along with a serene stay in Shivpuri, surrounded by the Himalayan foothills.',
      imageUrl: '/Assets/rs.jpg',
      link: '/shivpuri-rishikesh',
    },
    {
      title: 'Kashi Ayodhya Paryag (D17)',
      duration: '06 Nights / 07 Days',
      locations: 'Delhi - Varanasi – Gaya – Bodhgaya – Ayodhya - Prayagraj – Chitrakoot',
      description: 'A spiritual tour covering the sacred cities of Varanasi, Ayodhya, and Prayagraj. Visit revered temples, ghats, and experience the spiritual aura of these holy places.',
      imageUrl: '/Assets/kashi.jpg',
      link: '/kashi',
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
              North India Tours: Discover Heritage, Culture, and Spirituality
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Explore the cultural heart of India with our North India tours. From Rajasthan’s royal palaces to the spiritual sanctity of Varanasi, these tours offer a rich blend of heritage, history, and spirituality.
            </p>
            <p className="text-lg text-gray-700">
              Visit the historical wonders of Delhi, Jaipur, and Agra or delve into the spiritual sanctuaries of Varanasi, Ayodhya, and Bodhgaya. Experience the beauty and diversity of India's cultural landscape with these immersive journeys.
            </p>
          </div>

          {/* North India Tours Section */}
          <div className="grid lg:grid-cols-3 gap-8">
            {northIndiaTours.map((tour, index) => (
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
