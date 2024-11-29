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
    accommodation: 'Beachside Resort',
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
      title: 'Day 1: Arrival in Maldives',
      activities: [
        'Arrive at Male Airport, Maldives.',
        'Transfer to your resort via speedboat.',
        'Check-in at your resort and enjoy leisure time.',
        'Explore the beach, local cuisine, and market.',
      ],
      description: `Arrive at Male Airport and be transferred to your resort via a speedboat. Relax and enjoy your first day in the Maldives, exploring the beach, savoring local cuisine, or indulging in various activities.`,
      highlights: [
        'Transfer to the resort via speedboat',
        'Leisure time to explore the island',
        'Enjoy local cuisine and scenic beach views',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Maldives at Leisure',
      activities: [
        'Breakfast at the resort.',
        'Day at leisure, enjoy resort activities or go on a cruise.',
        'Opt for water sports like kayaking, jet skiing, or scuba diving.',
      ],
      description: `After breakfast, enjoy a full day at leisure. Opt for a luxury cruise to explore the atolls or partake in adventurous water sports such as snorkeling, jet skiing, or scuba diving.`,
      highlights: [
        'Explore the Indian Ocean on a luxury cruise',
        'Enjoy exciting water sports activities',
        'Relax and unwind in paradise',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Explore Male City',
      activities: [
        'Breakfast at the resort.',
        'Explore Male city: Visit Tsunami Monument, Jumhoorie Maidan, and the National Mosque.',
        'Enjoy shopping and sightseeing in the capital city.',
      ],
      description: `On day 3, after breakfast, explore the capital city of Male. Visit historical sites, monuments, and modern attractions. You can also shop at the local markets or relax on the beach.`,
      highlights: [
        'Sightseeing tour of Male city',
        'Visit historical landmarks like the National Mosque',
        'Shopping and leisure in the bustling capital',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Depart from Maldives',
      activities: [
        'Breakfast at the resort.',
        'Transfer to Maldives International Airport for departure.',
      ],
      description: `After breakfast, you will be transferred to Maldives International Airport for your return flight, concluding your stunning getaway in the Maldives.`,
      highlights: [
        'Final breakfast and check-out',
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
              src="/Assets/maldives.jpg"
              alt="Stunning Maldives"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Stunning Maldives
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Experience the Tropical Beauty of Maldives
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
                    <option>Beachside Resort</option>
                    <option>Overwater Bungalow</option>
                    <option>Luxury Villa</option>
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
