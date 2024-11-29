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
    accommodation: 'Beachfront Resort',
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
      title: 'Day 1: Arrival in Bali',
      activities: [
        'Arrival at Bali Airport.',
        'Meet and greet by our representative.',
        'Transfer to the hotel and check-in.',
        'Indulge in an authentic Balinese SPA session.',
        'Candle light dinner with a 3-course menu and flower-decorated room.',
      ],
      description: `Arrive in Bali and enjoy a relaxing spa session followed by a romantic candlelight dinner. Experience the tropical paradise right from the start of your journey.`,
      highlights: [
        'Authentic Balinese SPA experience',
        'Romantic candle light dinner with flower decorations',
        'Leisure time at the resort',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Full Day Kintamani Tour',
      activities: [
        'Breakfast at the hotel.',
        'Excursion to Batubulan Village for Barong Dance.',
        'Visit to Celuk, Mas Village, Tea and Coffee Plantation, Ubud Village.',
        'Lunch in Kintamani with a view of Mount Batur.',
        'Visit Elephanta Cave (Goa Gajah).',
      ],
      description: `Explore the cultural richness of Bali with a full-day tour, including visits to traditional villages, a beautiful mountain view of Kintamani, and a stop at the historical Goa Gajah.`,
      highlights: [
        'Cultural exploration in Balinese villages',
        'Breathtaking views of Mount Batur',
        'Visit to Elephanta Cave and rice terraces',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Water Sports on Tanjung Benoa and Tanah Lot Sunset Tour',
      activities: [
        'Water sports: Jet Ski, Parasailing, Snorkeling.',
        'Visit Turtle Island on a glass-bottom boat.',
        'Explore Tanah Lot Temple for the sunset.',
      ],
      description: `Enjoy thrilling water sports at Tanjung Benoa, followed by a visit to Turtle Island. Later, explore the stunning Tanah Lot Temple, famous for its beautiful sunset views.`,
      highlights: [
        'Snorkeling and water sports activities',
        'Visit to Turtle Island and its conservation efforts',
        'Sunset at Tanah Lot Temple',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Bali to Gili Island Transfer',
      activities: [
        'Breakfast at the hotel.',
        'Transfer to the Gili Islands by speedboat.',
        'Check-in at the hotel in Gili Island.',
      ],
      description: `Check out from the hotel in Bali and take a speedboat to Gili Island. Spend the day relaxing or exploring the beautiful island.`,
      highlights: [
        'Scenic transfer to Gili Island',
        'Relaxing day at your Gili Island resort',
      ],
    },
    {
      day: 5,
      title: 'Day 5: Gili Island Leisure Day',
      activities: [
        'Enjoy a day at leisure on Gili Island.',
        'Relax on the beaches or explore the island at your own pace.',
      ],
      description: `Enjoy a free day in Gili Island. Relax on the beautiful beaches or take part in optional activities like snorkeling, diving, or exploring the island.`,
      highlights: [
        'Leisure time to explore or relax on the beach',
        'Optional water activities and sightseeing',
      ],
    },
    {
      day: 6,
      title: 'Day 6: Gili to Bali – Seminyak',
      activities: [
        'Breakfast at the hotel.',
        'Transfer from Gili Island to Bali.',
        'Check-in at a Seminyak villa.',
      ],
      description: `After a relaxing time in Gili, transfer back to Bali and check into your luxurious Seminyak villa. Spend the day enjoying leisure activities in the vibrant Seminyak area.`,
      highlights: [
        'Arrival in Seminyak and villa check-in',
        'Leisure time to explore Seminyak',
      ],
    },
    {
      day: 7,
      title: 'Day 7: Sunset Dinner Cruise',
      activities: [
        'Breakfast at the villa.',
        'Bali Hai Sunset Dinner Cruise with live musical entertainment.',
        'Enjoy a buffet dinner and a live cabaret show.',
      ],
      description: `Set sail on a beautiful sunset dinner cruise around Benoa Harbor in Bali. Enjoy live entertainment and a delicious buffet dinner while you watch the sunset over the ocean.`,
      highlights: [
        'Sunset dinner cruise aboard Bali Hai II',
        'Live entertainment and cabaret show',
        'International buffet dinner',
      ],
    },
    {
      day: 8,
      title: 'Day 8: Departure from Bali',
      activities: [
        'Breakfast at the hotel.',
        'Last-minute shopping in Bali.',
        'Transfer to the airport for departure.',
      ],
      description: `Enjoy a final breakfast at the hotel before some last-minute shopping. Transfer to the airport for your flight back home, concluding your unforgettable Bali and Gili Island vacation.`,
      highlights: [
        'Final shopping in Bali',
        'Farewell transfer to Bali airport',
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
              src="/Assets/bali.jpg"
              alt="Bali with Gili Island"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Bali with Gili Island
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                A Tropical Escape to Bali and Gili Island
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
                    <option>Beachfront Resort</option>
                    <option>Overwater Villa</option>
                    <option>Luxury Hotel</option>
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
