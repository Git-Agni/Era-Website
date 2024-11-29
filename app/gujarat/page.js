'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState } from 'react'; 
import { Calendar, MapPin, Users, Clock, ChevronDown, ChevronUp } from 'lucide-react';

export default function Itinerary() {
  const [expandedDay, setExpandedDay] = useState(null);
  const [formData, setFormData] = useState({
    travelDate: '',
    travelers: 1,
    accommodation: '3 Star Hotel',
    specialRequirements: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Trip customization submitted successfully!');
  };

  const itinerary = [
    {
      day: 1,
      title: 'Day 1: Mumbai to Ahmedabad',
      activities: [
        'Arrive at Ahmedabad Airport',
        'Check-in at the hotel',
        'Visit Gandhi Ashram, Hathee Singh Jain Temple, and Jama Masjid',
        'Explore Calico Museum of Textiles',
      ],
      description: `Begin your Gujarat journey by arriving in Ahmedabad, a city rich in history and culture. Known as the 'Manchester of the East,' it offers unique experiences from textile history to serene ashrams.`,
      highlights: [
        'Historic Gandhi Ashram',
        'Architectural marvels at Hathee Singh Jain Temple',
        'Intricate textiles at Calico Museum',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Ahmedabad to Poshina via Adalaj Stepwell',
      activities: [
        'Drive to Poshina',
        'Visit Adalaj Stepwell',
        'Explore Poshina village and tribal culture',
      ],
      description: `Journey through North Gujarat’s tribal landscapes, exploring Adalaj Stepwell and the culturally rich village of Poshina, famous for its artisan crafts and tribal jewelry.`,
      highlights: [
        'Adalaj Stepwell’s intricate carvings',
        'Authentic tribal experiences in Poshina',
        'Crafts like silver jewelry and terracotta art',
      ],
    },
    {
        day: 3,
        title: 'Day 3: Tribal Villages in Poshina',
        activities: [
          'Visit tribal villages around Poshina',
          'Explore Garasia tribal culture',
          'Visit Ambaji Hindu pilgrimage center',
          'Lunch and safari in Aravalli hills',
        ],
        description: `Dive deep into the vibrant tribal culture of Poshina. Witness the colorful attire, artistic ornaments, and daily lives of Garasia and Rabari tribes in the region.`,
        highlights: [
          'Cultural immersion with local tribes',
          'Scenic landscapes of Aravalli hills',
          'Artisan crafts and traditional lifestyles',
        ],
      },
      {
        day: 4,
        title: 'Day 4: Poshina to Dasada via Patan and Modhera',
        activities: [
          'Drive to Dasada',
          'Visit Rani-ki-Vav stepwell in Patan',
          'Explore Sun Temple at Modhera',
        ],
        description: `Discover the architectural wonders of Gujarat, including the intricately carved Rani-ki-Vav in Patan and the majestic Sun Temple in Modhera. Continue your journey to Dasada.`,
        highlights: [
          'UNESCO-listed Rani-ki-Vav',
          'Sun Temple’s exquisite carvings',
          'Cultural heritage in Patan and Modhera',
        ],
      },
      {
        day: 5,
        title: 'Day 5: Dasada - Little Rann of Kutch',
        activities: [
          'Jeep safari in Little Rann of Kutch',
          'Spot rare Indian Wild Ass',
          'Visit Rabari, Koli, and Banania tribes',
        ],
        description: `Explore the unique ecosystem of Little Rann of Kutch and engage with local tribes who maintain their rich heritage of embroidery, dances, and jewelry.`,
        highlights: [
          'Wildlife spotting in Little Rann of Kutch',
          'Authentic tribal interactions',
          'Stunning desert landscapes',
        ],
    },
    {
        day: 6,
        title: 'Day 6: Dasada to Bhuj',
        activities: [
          'Drive to Bhuj',
          'Obtain permit for restricted Banni villages',
          'Visit Aina Mahal and Pragmal Palace',
          'Explore Kachchh Museum and Ethology Museum',
        ],
        description: `Arrive in Bhuj, a city steeped in history and culture. Visit palaces and museums that showcase the grandeur of Kachchh.`,
        highlights: [
          'Historic Aina Mahal',
          'Artifacts at Kachchh Museum',
          'Scenic heritage sites in Bhuj',
        ],
      },
      {
        day: 7,
        title: 'Day 7: Bhuj - Tribal Villages',
        activities: [
          'Excursion to Banni villages',
          'Meet tribes like Jat, Harijan, Meghawal, and Mutva',
          'Explore villages like Hodka, Ludiya, and Dhordo',
        ],
        description: `Experience the traditional art and culture of Gujarat in Banni villages, meeting various tribes and exploring their crafts and way of life.`,
        highlights: [
          'Vibrant tribal culture',
          'Handicrafts and embroidery',
          'Unique village architecture',
        ],
    },
    {
        day: 8,
        title: 'Day 8: Bhuj to Gondal via Wankaner Palace',
        activities: [
          'Drive to Gondal',
          'Lunch at Wankaner Palace',
          'Sightseeing in Rajkot, including Watson Museum and Rashtriya Shala',
        ],
        description: `Travel to Gondal, visiting the majestic Wankaner Palace and exploring Rajkot's cultural landmarks. Gondal is a historic princely town known for its visionary ruler.`,
        highlights: [
          'Royal experience at Wankaner Palace',
          'Cultural insights at Watson Museum',
          'Historic town of Gondal',
        ],
      },
      {
        day: 9,
        title: 'Day 9: Gondal to Junagadh to Sasan Gir',
        activities: [
          'Drive to Junagadh for sightseeing',
          'Visit Mahabat Maqbara, Ashok Shilalekh, UpperKot Fort, and Durbar Hall Museum',
          'Proceed to Sasan Gir',
        ],
        description: `Explore the historic sites of Junagadh, including the exquisite Mahabat Maqbara and Ashoka's rock edicts. Then head to Sasan Gir, home to the majestic Asiatic lions.`,
        highlights: [
          'Ashoka’s ancient inscriptions',
          'Intricate architecture of Mahabat Maqbara',
          'Gateway to Gir National Park',
        ],
      },
      {
        day: 10,
        title: 'Day 10: Sasan Gir to Diu via Somnath',
        activities: [
          'Early morning safari in Gir National Park',
          'Drive to Somnath and visit the legendary Somnath Temple',
          'Continue to Diu for an overnight stay',
        ],
        description: `Start your day with a thrilling jeep safari at Gir, the last abode of Asiatic lions. Visit the sacred Somnath Temple and unwind by the serene beaches of Diu.`,
        highlights: [
          'Jeep safari in Gir National Park',
          'Sacred Somnath Temple',
          'Relaxation by Diu beaches',
        ],
      },
      {
        day: 11,
        title: 'Day 11: Explore Diu',
        activities: [
          'Visit Diu Fort, St. Paul’s Church, and Diu Museum',
          'Relax at Nagoa Beach',
        ],
        description: `Spend the day exploring the tranquil beauty of Diu. Visit its historic fort and church, followed by a relaxing evening at the pristine Nagoa Beach.`,
        highlights: [
          'Heritage sites like Diu Fort and St. Paul’s Church',
          'Relaxing beachside vibes',
          'Tranquil ambiance of Diu',
        ],
      },
      {
        day: 12,
        title: 'Day 12: Diu to Palitana/Bhavnagar',
        activities: [
          'Drive to Palitana',
          'Climb Shatrunjaya Hill to visit Jain Temples',
        ],
        description: `Travel to Palitana, renowned for its Shatrunjaya Hill and an exquisite cluster of Jain temples. These temples, perched atop the hill, offer a spiritual retreat amidst breathtaking views.`,
        highlights: [
          'Spiritual journey to Jain Temples',
          'Scenic climb up Shatrunjaya Hill',
          'Architectural beauty of Palitana',
        ],
      },
      {
        day: 13,
        title: 'Day 13: Palitana/Bhavnagar to Mumbai',
        activities: [
          'Transfer to the airport for a flight to Mumbai',
          'Onward journey to your destination',
        ],
        description: `Conclude your mesmerizing Gujarat tour with a flight back to Mumbai, cherishing the unforgettable experiences of Gujarat’s culture, wildlife, and heritage.`,
        highlights: [
          'Seamless transfer to Mumbai',
          'Memories of Gujarat’s charm and beauty',
        ],
      }
      
      
      
                        
            
            
  ];

  const handleAccordionToggle = (dayIndex) => {
    setExpandedDay(expandedDay === dayIndex ? null : dayIndex);
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto p-4 md:p-8">
          <div className="relative h-[300px] md:h-[400px] mb-8 rounded-xl overflow-hidden">
            <img
              src="/Assets/gujarat.jpg"
              alt="Mesmerizing Gujarat Tour"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Mesmerizing Gujarat Tour
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Discover the Charm and Culture of Gujarat
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {itinerary.map((day) => (
                <div
                  key={day.day}
                  className="bg-white rounded-lg shadow p-6 cursor-pointer"
                >
                  <div
                    onClick={() => handleAccordionToggle(day.day)}
                    className="flex justify-between items-center"
                  >
                    <h3 className="text-lg font-semibold">{day.title}</h3>
                    <div>{expandedDay === day.day ? <ChevronUp /> : <ChevronDown />}</div>
                  </div>
                  {expandedDay === day.day && (
                    <div className="mt-4">
                      <h4 className="text-md font-bold mb-2">Activities:</h4>
                      <ul className="list-disc pl-4 text-gray-700 mb-4">
                        {day.activities.map((activity, i) => (
                          <li key={i}>{activity}</li>
                        ))}
                      </ul>
                      <h4 className="text-md font-bold mb-2">Description:</h4>
                      <p className="text-gray-600 mb-4">{day.description}</p>
                      <h4 className="text-md font-bold mb-2">Highlights:</h4>
                      <ul className="list-disc pl-4 text-gray-700">
                        {day.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Customize Your Trip</h2>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="travelDate" className="block font-semibold mb-2">
                    Travel Date
                  </label>
                  <input
                    type="date"
                    id="travelDate"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg p-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="travelers" className="block font-semibold mb-2">
                    Number of Travelers
                  </label>
                  <input
                    type="number"
                    id="travelers"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg p-2"
                    min="1"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="accommodation" className="block font-semibold mb-2">
                    Preferred Accommodation
                  </label>
                  <select
                    id="accommodation"
                    name="accommodation"
                    value={formData.accommodation}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg p-2"
                  >
                    <option>3 Star Hotel</option>
                    <option>4 Star Hotel</option>
                    <option>5 Star Hotel</option>
                    <option>Homestay</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="specialRequirements" className="block font-semibold mb-2">
                    Special Requirements
                  </label>
                  <textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg p-2"
                    rows="4"
                    placeholder="Any specific requirements or preferences..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg"
                >
                  Submit Your Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
