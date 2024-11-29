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
      title: 'Day 1: Arrive in Goa',
      activities: [
        'Arrival at Goa.',
        'Meet and greet by our representative.',
        'Transfer to your hotel and check-in.',
        'Relax at your hotel and unwind.',
      ],
      description: `Arrive in Goa, the beach paradise of India. You will be greeted by our representative at the airport and transferred to your hotel. Take the day to relax and enjoy the beautiful surroundings.`,
      highlights: [
        'Traditional welcome on arrival',
        'Relax and unwind at the hotel',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Explore Goa',
      activities: [
        'Morning breakfast.',
        'Half-day city tour of Goa: visit the Basilica of Bom Jesus, old and new Goa.',
        'Evening boat cruise on the Mandovi River (at extra cost).',
      ],
      description: `Explore the rich heritage of Goa, with its blend of Portuguese and Goan architecture. Visit the famous Basilica of Bom Jesus and experience the charm of old and new Goa. In the evening, enjoy a serene boat cruise on the Mandovi River.`,
      highlights: [
        'Visit the Basilica of Bom Jesus and other historic sites',
        'Optional evening boat cruise on the Mandovi River',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Relax on Goa’s Beaches',
      activities: [
        'Breakfast at the hotel.',
        'Relax and unwind on the beaches of Goa.',
        'Spend the day at leisure, enjoying the beach and local surroundings.',
      ],
      description: `Enjoy a relaxing day in Goa, soaking in the sun on its beautiful beaches. This day is perfect for some beach time, relaxing and rejuvenating.`,
      highlights: [
        'Spend a relaxing day on Goa’s famous beaches',
        'Leisure day for personal enjoyment',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Relax on Goa’s Beaches',
      activities: [
        'Breakfast at the hotel.',
        'Another day to relax at your leisure, enjoy the beaches and local markets.',
      ],
      description: `Take another day to enjoy the serene beaches of Goa. You can opt for a variety of water sports or simply relax by the beach, making the most of your beach paradise experience.`,
      highlights: [
        'Further relaxation on the beautiful beaches of Goa',
        'Enjoy leisure time for shopping and activities',
      ],
    },
    {
      day: 5,
      title: 'Day 5: Departure from Goa',
      activities: [
        'Breakfast at the hotel.',
        'Check-out and transfer to Goa airport for your onward journey.',
      ],
      description: `After breakfast, check out from your hotel and get transferred to Goa airport for your flight back home, carrying with you beautiful memories of your Goa adventure.`,
      highlights: [
        'End the tour with cherished memories of Goa',
        'Transfer to the airport for departure',
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
              src="/Assets/goa.jpg"
              alt="Goa Tours"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Goa Tours
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Relax and Explore the Beautiful Beaches of Goa
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
                    <option>3 Star Hotel</option>
                    <option>4 Star Hotel</option>
                    <option>5 Star Hotel</option>
                    <option>Beachfront Resort</option>
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
