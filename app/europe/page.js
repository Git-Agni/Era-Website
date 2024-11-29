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
      title: 'Day 1: Fly from Delhi to Paris',
      activities: [
        'Arrive at Paris airport.',
        'Transfer to hotel and check-in.',
        'Indian dinner at a local restaurant.',
      ],
      description: `Fly from Delhi to Paris and settle in your hotel, followed by a delicious dinner in the city.`,
      highlights: [
        'Arrival in Paris and hotel check-in',
        'Indian dinner at a local restaurant',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Visit the Palace of Versailles & Louvre Museum',
      activities: [
        'Visit the Palace of Versailles.',
        'Explore the Louvre Museum (optional).',
        'Dinner at a local restaurant.',
      ],
      description: `Visit the iconic Palace of Versailles, followed by a trip to the Louvre Museum (optional).`,
      highlights: [
        'Tour of the Palace of Versailles',
        'Explore the Louvre Museum',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Eiffel Tower & Seine River Cruise',
      activities: [
        'Visit the Eiffel Tower.',
        'Take a Seine River Cruise.',
        'Free time for shopping.',
        'Dinner at a local restaurant.',
      ],
      description: `Enjoy the sights of Paris, including a visit to the Eiffel Tower and a Seine River Cruise.`,
      highlights: [
        'View Paris from the Eiffel Tower',
        'Take a scenic Seine River Cruise',
        'Shopping and leisure time in Paris',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Travel from Paris to Geneva',
      activities: [
        'Drive from Paris to Geneva.',
        'Visit Lake Geneva, Jet D’eau Fountain, UN Building.',
        'Dinner at a local restaurant.',
      ],
      description: `Travel from Paris to Geneva and visit the major attractions of the city.`,
      highlights: [
        'Explore Lake Geneva and Jet D’eau Fountain',
        'Visit the UN Building and Broken Chair',
      ],
    },
    {
      day: 5,
      title: 'Day 5: Geneva to Lucerne',
      activities: [
        'Drive from Geneva to Lucerne.',
        'Visit Lion Monument and Chapel Bridge.',
        'Dinner at a local restaurant.',
      ],
      description: `Explore Lucerne’s landmarks including the famous Lion Monument and Chapel Bridge.`,
      highlights: [
        'Tour of Lucerne’s Lion Monument',
        'Explore Chapel Bridge in Lucerne',
      ],
    },
    {
      day: 6,
      title: 'Day 6: Mt. Titlis Tour',
      activities: [
        'Visit Mt. Titlis, enjoy a cable car ride.',
        'Take a photo with idols of Shahrukh Khan and Kajol.',
        'Return to Lucerne for dinner.',
      ],
      description: `Visit the snow-covered peaks of Mt. Titlis and enjoy panoramic views from the cable car.`,
      highlights: [
        'Cable car ride to Mt. Titlis',
        'Cliff walk and snow activities',
        'Photo opportunity with Shahrukh Khan and Kajol idols',
      ],
    },
    {
      day: 7,
      title: 'Day 7: Travel from Lucerne to Innsbruck',
      activities: [
        'Drive to Innsbruck, Austria.',
        'Visit Swarovski Crystal Garden.',
        'Dinner at a local restaurant.',
      ],
      description: `Explore the crystal wonderland at Swarovski Crystal Garden in Innsbruck, Austria.`,
      highlights: [
        'Visit the famous Swarovski Crystal Garden',
        'Explore Innsbruck’s charm',
      ],
    },
    {
      day: 8,
      title: 'Day 8: Venice Tour',
      activities: [
        'Drive to Venice.',
        'Take a Vaporetto water bus ride and Gondola ride.',
        'Dinner at a local restaurant.',
      ],
      description: `Experience the beautiful waterways of Venice on a Vaporetto ride and Gondola tour.`,
      highlights: [
        'Explore Venice on a Vaporetto water bus',
        'Gondola ride through Venice’s canals',
      ],
    },
    {
      day: 9,
      title: 'Day 9: Pisa and Florence Tour',
      activities: [
        'Visit the Leaning Tower of Pisa.',
        'Explore Florence and visit Piazzale Michelangelo and the Statue of David.',
        'Dinner at a local restaurant.',
      ],
      description: `Visit the world-famous Leaning Tower of Pisa and the artistic city of Florence.`,
      highlights: [
        'See the Leaning Tower of Pisa',
        'Explore Florence’s artistic heritage',
      ],
    },
    {
      day: 10,
      title: 'Day 10: Travel to Rome and Vatican City',
      activities: [
        'Visit St. Peter’s Basilica and Vatican Museum.',
        'Tour of Circus Maximus, Castle Sant’ Angelo, Piazza Venezia.',
        'Dinner at a local restaurant.',
      ],
      description: `Explore the Vatican City and iconic landmarks of Rome like St. Peter’s Basilica and Circus Maximus.`,
      highlights: [
        'Tour Vatican City’s St. Peter’s Basilica',
        'Visit Rome’s ancient landmarks',
      ],
    },
    {
      day: 11,
      title: 'Day 11: Colosseum and Departure',
      activities: [
        'Visit the Colosseum and Roman Forum.',
        'Photo stop at Trevi Fountain.',
        'Transfer to the airport for your return flight.',
      ],
      description: `Explore the Colosseum and Roman Forum before heading to the airport for your return flight.`,
      highlights: [
        'Visit the Colosseum and Roman Forum',
        'Throw a coin into Trevi Fountain for good luck',
        'Transfer to the airport for your flight home',
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
              src="/Assets/europe.jpg"
              alt="Best of Europe Tour"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Best of Europe
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Explore the Beauty of Europe Across 10 Countries
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

            {/* Customization Form */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Customize Your Trip</h2>
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
                    <option>Luxury Resort</option>
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
