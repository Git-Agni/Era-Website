'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function IndiaTours() {
  const [expandedTour, setExpandedTour] = useState(null);

  const indiaTours = [
    {
      title: 'Royal Rajasthan Tour (D1)',
      duration: '09 Nights / 10 Days',
      locations: 'Udaipur - Mount Abu - Jodhpur - Jaisalmer - Khimsar - Ajmer - Pushkar - Jaipur',
      description: 'Explore the majestic royal heritage of Rajasthan with this comprehensive tour, covering Udaipur, Mount Abu, Jodhpur, Jaisalmer, and Jaipur, famous for their palaces, forts, and vibrant culture.',
      imageUrl: '/Assets/rajasthan.jpg',
      link: '/rajasthan',
    },
    {
      title: 'Golden Triangle Tour (D2)',
      duration: '05 Nights / 06 Days',
      locations: 'Delhi - Agra - Jaipur',
      description: 'The perfect introduction to India’s rich history, the Golden Triangle covers the iconic cities of Delhi, Agra, and Jaipur, featuring the Taj Mahal, Amber Fort, and more.',
      imageUrl: '/Assets/agra.jpg',
      link: '/golden-triangle',
    },
    {
      title: 'Kerala Gods Own Country (D3)',
      duration: '07 Nights / 08 Days',
      locations: 'Kochi - Munnar - Thekkady - Alleppey - Kovalam - Trivandrum',
      description: 'Experience the serene backwaters, hill stations, and beautiful beaches of Kerala, known as “God’s Own Country”, with a perfect blend of nature and culture.',
      imageUrl: '/Assets/kerala.jpg',
      link: '/kerala',
    },
    {
      title: 'Mesmerising Gujarat Tour (D4)',
      duration: '12 Nights / 13 Days',
      locations: 'Mumbai - Ahmedabad - Poshina - Patan - Modhera - Dasada - Bhuj - Gondal - Junagarh - Sasan Gir - Somnath - Diu - Palitana - Bhavnagar - Mumbai',
      description: 'Embark on a journey through Gujarat’s cultural heritage, ancient temples, and wildlife, including a visit to the famous Somnath Temple and Gir National Park.',
      imageUrl: '/Assets/gujarat.jpg',
      link: '/gujarat',
    },
    {
      title: 'Goa Tours (D5)',
      duration: '04 Nights / 05 Days',
      locations: 'Goa',
      description: 'Discover the vibrant beaches, colonial architecture, and lively culture of Goa, offering a perfect getaway for beach lovers and history enthusiasts.',
      imageUrl: '/Assets/goa.jpg',
      link: '/goa',
    },
    {
      title: 'Corbett Weekend Tour (D6)',
      duration: '02 Nights / 03 Days',
      locations: 'Corbett Park',
      description: 'A weekend getaway to the Corbett National Park, famous for its tigers and rich wildlife, providing an adventurous yet relaxing experience.',
      imageUrl: '/Assets/jim.jpg',
      link: '/corbett-park',
    },
    {
      title: 'Shimla Manali Naldhera And Kasol Tour (D7)',
      duration: '04 Nights / 05 Days',
      locations: 'Delhi – Shimla – Manali – Kasol – Naldhera – Delhi',
      description: 'Experience the beauty of Himachal Pradesh with visits to Shimla, Manali, Kasol, and Naldhera, known for their scenic landscapes and adventure activities.',
      imageUrl: '/Assets/shimla.jpg',
      link: '/shimla',
    },
    {
      title: 'Journey To Ladakh (D8)',
      duration: '06 Nights / 07 Days',
      locations: 'Leh - Nubra Valley - Leh - Pangong Lake - Leh',
      description: 'Embark on a mesmerizing journey to the breathtaking landscapes of Ladakh, including Nubra Valley, Pangong Lake, and the vibrant city of Leh.',
      imageUrl: '/Assets/ladakh.jpg',
      link: '/ladakh',
    },
    {
      title: 'Tirupati Weekend Tour (D9)',
      duration: '02 Nights / 03 Days',
      locations: 'Chennai - Tirupati - Chennai',
      description: 'A spiritual retreat to Tirupati, one of India’s most visited pilgrimage destinations, offering a unique cultural and religious experience.',
      imageUrl: '/Assets/tpb.jpg',
      link: '/tirupati',
    },
    {
      title: 'A Luxury Journey Of Palace On Wheels (D10)',
      duration: '07 Nights / 08 Days',
      locations: 'Delhi - Jaipur - Sawai Madhopur - Chittorgarh - Udaipur - Jaisalmer - Jodhpur - Bharatpur - Agra – Delhi',
      description: 'Travel in luxury aboard the Palace on Wheels, exploring Rajasthan’s royal cities, palaces, and forts in opulent comfort.',
      imageUrl: '/Assets/pow.jpg',
      link: '/palace-on-wheels',
    },
    {
      title: 'Buddhist Culture And Heritage Tour (D11)',
      duration: '10 Nights / 11 Days',
      locations: 'Delhi - Jaipur - Agra - Khajuraho - Varanasi - Bodhgaya - Rajgir - Nalanda - Patna - Delhi',
      description: 'Journey through India’s rich Buddhist heritage with visits to sacred sites like Bodhgaya, Varanasi, and Nalanda, and discover the cultural depth of this ancient religion.',
      imageUrl: '/Assets/buddh.jpg',
      link: '/buddhist-culture',
    },
    {
      title: 'Triangle Package With Varanasi And Khajuraho (D12)',
      duration: '10 Nights / 11 Days',
      locations: 'Delhi - Jaipur - Agra - Orchha - Khajuraho - Varanasi - Delhi',
      description: 'Explore India’s cultural treasures with this comprehensive triangle package, adding the spiritual cities of Varanasi and the ancient temples of Khajuraho.',
      imageUrl: '/Assets/varanasi.jpg',
      link: '/varanasi',
    },
    {
      title: 'Kashmir Delight Tour (D13)',
      duration: '09 Nights / 10 Days',
      locations: 'Delhi – Srinagar – Sonmarg – Pahalgam – Gulmarg – Srinagar - Delhi',
      description: 'Experience the beauty of Kashmir’s valleys, lakes, and snow-capped mountains, with visits to Srinagar, Sonmarg, Pahalgam, and Gulmarg.',
      imageUrl: '/Assets/kashmir.jpg',
      link: '/kashmir',
    },
    {
      title: 'Bird Watching & Tiger Safari Tour (D14)',
      duration: '14 Nights / 15 Days',
      locations: 'Delhi - Ranthambore - Jaipur - Bharatpur - Agra - Bandhavgarh - Delhi',
      description: 'A thrilling wildlife tour that combines bird watching and tiger safari in India’s renowned national parks, offering incredible encounters with nature.',
      imageUrl: '/Assets/tiger.jpg',
      link: '/tiger-safari',
    },
    {
      title: 'North Eastern Mystery Tour (D15)',
      duration: '10 Nights / 11 Days',
      locations: 'Delhi – Dibrugarh – Jorhat – Kaziranga – Shillong – Guwahati – Delhi',
      description: 'Discover the natural beauty and cultural richness of India’s northeastern states, including Kaziranga, Shillong, and Guwahati, on this off-the-beaten-path tour.',
      imageUrl: '/Assets/singapore.jpg',
      link: '/north-east-tour',
    },
    {
      title: 'Rishikesh / Shivpuri Package (D16)',
      duration: '01 Night / 02 Days',
      locations: 'Rishikesh - Shivpuri',
      description: 'A short spiritual retreat with thrilling adventure activities like white-water rafting in Rishikesh and Shivpuri.',
      imageUrl: '/Assets/rs.jpg',
      link: '/shivpuri-rishikesh',
    },
    {
      title: 'Kashi Ayodhya Paryag (D17)',
      duration: '06 Nights / 07 Days',
      locations: 'Delhi - Varanasi – Gaya – Bodhgaya – Ayodhya - Prayagraj – Chitrakoot',
      description: 'A spiritual journey across India’s sacred cities, including Varanasi, Bodhgaya, Ayodhya, and Prayagraj, with deep religious significance.',
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
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
        <div className="container mx-auto p-4 md:p-8">
          {/* SEO Optimized Hero Section */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold text-zinc-800 mb-4">
              Incredible India Tours: Explore Cultural, Wildlife, and Scenic Diversity
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Discover India's cultural, natural, and spiritual treasures with our India tours. From the historical landmarks of Rajasthan to the peaceful backwaters of Kerala, these tours offer diverse experiences tailored to every interest.
            </p>
            <p className="text-lg text-gray-700">
              Explore the majestic forts of Rajasthan, embark on a Kerala houseboat cruise, or take an adventurous safari in Jim Corbett National Park. These immersive journeys offer unforgettable memories in every corner of India.
            </p>
          </div>

          {/* India Tours Section */}
          <div className="grid lg:grid-cols-3 gap-8">
            {indiaTours.map((tour, index) => (
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