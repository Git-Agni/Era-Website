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
      title: 'Day 1: Arrival at Kochi',
      activities: [
        'Arrival at Cochin International Airport',
        'Visit Fort Kochi and Mattancherry Palace',
        'Explore Chinese Fishing Nets and Kochi Marina Drive',
      ],
      description: `Begin your Kerala journey in Kochi, a historic port city with a unique blend of Dutch, Portuguese, and British influences. Explore its charming old town and serene waterfront.`,
      highlights: [
        'Historic Fort Kochi',
        'Cultural heritage at Mattancherry Palace',
        'Iconic Chinese Fishing Nets',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Kochi to Munnar',
      activities: [
        'Drive to Munnar',
        'Visit Mattupetty Dam and Anamudi Peak',
        'Check-in and overnight stay at hotel',
      ],
      description: `Travel to Munnar, a picturesque hill station famous for its lush tea plantations and scenic landscapes. Enjoy the serene beauty of the Western Ghats.`,
      highlights: [
        'Breathtaking views at Mattupetty Dam',
        'Majestic Anamudi Peak',
        'Refreshing tea plantation visits',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Explore Munnar',
      activities: [
        'Visit Echo Point and Tea Plantation',
        'Explore Tata Tea Museum and Pothamedu',
      ],
      description: `Spend the day exploring Munnar's natural beauty and its rich tea heritage. Visit iconic spots like Echo Point and Pothamedu to capture stunning views.`,
      highlights: [
        'Picturesque Echo Point',
        'Learn tea history at Tata Tea Museum',
        'Scenic Pothamedu plantation views',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Munnar to Thekkady',
      activities: [
        'Drive to Thekkady',
        'Visit Periyar Wildlife Sanctuary and Periyar Lake',
        'Experience Kalaripayattu at Kadathanadan Kalari Centre',
      ],
      description: `Head to Thekkady, home to the famous Periyar Wildlife Sanctuary. Enjoy a boat ride on Periyar Lake and witness Kerala's traditional martial arts.`,
      highlights: [
        'Wildlife safari at Periyar Sanctuary',
        'Tranquil boat ride on Periyar Lake',
        'Cultural performance of Kalaripayattu',
      ],
    },
    {
      day: 5,
      title: 'Day 5: Thekkady to Alleppey',
      activities: [
        'Drive to Alleppey',
        'Check-in to a houseboat',
        'Explore the serene backwaters of Alleppey',
      ],
      description: `Enjoy the unique experience of staying on a houseboat in Alleppey. Cruise through Kerala's famous backwaters, surrounded by lush greenery and lagoons.`,
      highlights: [
        'Houseboat stay and backwater cruise',
        'Serene Alappuzha Lake',
        'Authentic Kerala cuisine onboard',
      ],
    },
    {
      day: 6,
      title: 'Day 6: Alleppey to Kovalam',
      activities: [
        'Drive to Kovalam',
        'Visit Poovar Lake, Kovalam Beach, and Lighthouse Beach',
      ],
      description: `Relax at Kovalam, a paradise of swaying coconut trees and golden sands. Explore its serene beaches and enjoy the coastal vibes of Kerala.`,
      highlights: [
        'Relaxing Poovar Lake boat ride',
        'Stunning views from Lighthouse Beach',
        'Clean and swimmable Kovalam Beach',
      ],
    },
    {
      day: 7,
      title: 'Day 7: Kovalam to Trivandrum',
      activities: [
        'Full-day sightseeing in Trivandrum',
        'Visit Padmanabhaswamy Temple, Napier Museum, and Trivandrum Zoo',
      ],
      description: `Explore Trivandrum, the capital of Kerala, with its iconic temples, museums, and lush green zoo. Immerse yourself in Kerala’s cultural heritage.`,
      highlights: [
        'Historic Padmanabhaswamy Temple',
        'Art and history at Napier Museum',
        'Relaxing walks in Trivandrum Zoo',
      ],
    },
    {
      day: 8,
      title: 'Day 8: Departure from Trivandrum',
      activities: [
        'Transfer to Trivandrum International Airport',
        'Onward journey to your destination',
      ],
      description: `Conclude your Kerala journey with cherished memories of its natural beauty, rich culture, and warm hospitality.`,
      highlights: [
        'Seamless transfer to airport',
        'Memories of Kerala’s charm',
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
          <div className="relative h-[300px] md:h-[400px] mb-8 rounded-xl overflow-hidden">
            <img
              src="/Assets/kerala.jpg"
              alt="Kerala God's Own Country"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Kerala - God's Own Country
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                A Journey Through the Enchanting Land of Kerala
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
