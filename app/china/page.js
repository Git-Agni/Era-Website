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
    accommodation: 'Standard Hotel',
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
      title: 'Day 1: Arrival in Shanghai',
      activities: [
        'Arrive at Shanghai Airport at 1120 Hrs.',
        'Transfer to the city via Maglev train.',
        'Check-in at the hotel and rest.',
        'Evening walk and shopping around Bund area.',
      ],
      description: `Arrive in Shanghai and experience a thrilling ride on the Maglev train. Enjoy an evening at the famous Bund area before returning to your hotel for rest.`,
      highlights: [
        'Experience the Maglev superfast train',
        'Leisure time around Bund area',
        'First glimpse of Shanghai’s skyline',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Full Day Tour in Shanghai',
      activities: [
        'Visit Yuyuan Garden, Buddha Temple, and Shanghai Museum.',
        'Explore the Oriental TV Tower and Huangpu River.',
      ],
      description: `Explore Shanghai’s major attractions including Yuyuan Garden, the Buddha Temple, and the Shanghai Museum. Enjoy panoramic views of the city from the Oriental TV Tower.`,
      highlights: [
        'Explore the historical Yuyuan Garden',
        'Climb the Oriental TV Tower for stunning views',
        'Cruise along the Huangpu River',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Shanghai to Hangzhou',
      activities: [
        'Drive to Hangzhou and check-in at the hotel.',
        'Enjoy a cruise on West Lake.',
      ],
      description: `Travel to Hangzhou, known for its beautiful West Lake. Take a relaxing boat ride across the lake and enjoy its scenic beauty.`,
      highlights: [
        'Cruise across West Lake',
        'Discover Hangzhou’s natural beauty',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Hangzhou City Tour & Overnight Train to Xian',
      activities: [
        'Visit Ling Yin Temple and Fei Lai Peak.',
        'Board the overnight train to Xian.',
      ],
      description: `In Hangzhou, visit the famous Ling Yin Temple and Fei Lai Peak. Later, board the high-speed train for an overnight journey to Xian.`,
      highlights: [
        'Explore Ling Yin Temple, one of China’s largest Buddhist temples',
        'Experience the scenic beauty of Fei Lai Peak',
        'Ride the high-speed train to Xian',
      ],
    },
    {
      day: 5,
      title: 'Day 5: Arrive in Xian & Full Day City Tour',
      activities: [
        'Visit the Museum of Terracotta Warriors and Horses.',
        'Explore Muslim Street and Big Wild Pagoda Square.',
      ],
      description: `Arrive in Xian and visit the incredible Terracotta Warriors. Explore the city’s historical streets and visit the Big Wild Pagoda, an iconic Buddhist structure.`,
      highlights: [
        'See the Terracotta Warriors and Horses',
        'Walk around the historic Muslim Street',
        'Visit the Big Wild Pagoda and Square',
      ],
    },
    {
      day: 6,
      title: 'Day 6: Xian to Beijing',
      activities: [
        'Visit the Old City Wall in Xian.',
        'Take the high-speed train to Beijing.',
        'Evening stroll around Beijing’s marketplaces.',
      ],
      description: `In Xian, explore the Old City Wall. Then take the high-speed train to Beijing and enjoy a relaxing evening exploring the bustling city markets.`,
      highlights: [
        'Tour the ancient Old City Wall',
        'Experience Beijing’s dynamic shopping culture',
        'Comfortable transfer to Beijing',
      ],
    },
    {
      day: 7,
      title: 'Day 7: Full Day Tour in Beijing',
      activities: [
        'Visit the Great Wall (Juyongguan) and Summer Palace.',
        'See the Olympic Stadium from the outside.',
        'Enjoy an Opera Show in the evening.',
      ],
      description: `Spend a full day in Beijing, exploring historical landmarks like the Great Wall and the Summer Palace. Experience the modern architecture of the Olympic Stadium before enjoying a live opera show.`,
      highlights: [
        'Climb the Great Wall at Juyongguan Pass',
        'Explore the Summer Palace and its beautiful gardens',
        'See the Bird’s Nest Olympic Stadium',
      ],
    },
    {
      day: 8,
      title: 'Day 8: Beijing City Tour & Departure',
      activities: [
        'Visit the Forbidden City and Tiananmen Square.',
        'Transfer to Beijing airport for departure.',
      ],
      description: `On your last day, visit the Forbidden City, the former imperial palace, and Tiananmen Square. Then transfer to the airport for your return flight.`,
      highlights: [
        'Explore the Forbidden City',
        'See Tiananmen Square’s iconic monuments',
        'Smooth transfer to the airport for departure',
      ],
    },
  ];

  const handleAccordionToggle = (dayIndex) => {
    setExpandedDay(expandedDay === dayIndex ? null : dayIndex);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto p-4 md:p-8">
          {/* Hero Section */}
          <div className="relative h-[300px] md:h-[400px] mb-8 rounded-xl overflow-hidden">
            <img
              src="/Assets/china.jpg"
              alt="Best of China Tour"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Best of China Tour
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Explore the Wonders of Shanghai, Xian, Beijing, and More
              </p>
            </div>
          </div>

          {/* Itinerary Section */}
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

            {/* Form Section */}
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
                    <option>Standard Hotel</option>
                    <option>Luxury Hotel</option>
                    <option>Guest House</option>
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
