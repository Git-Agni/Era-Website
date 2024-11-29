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
      title: 'Day 1: Arrive in Singapore – Night Safari Tour',
      activities: [
        'Arrive in Singapore and transfer to the hotel.',
        'Evening visit to the Night Safari for a 40-minute tram ride and Creatures of the Night Show.',
      ],
      description: `Arrive in Singapore and enjoy a thrilling tram ride through the Night Safari, where you'll encounter lions, tigers, and other nocturnal animals.`,
      highlights: [
        'Tram ride through the Night Safari',
        'Encounter nocturnal animals like lions and tigers',
        'Experience the Creatures of the Night Show',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Singapore – Half-Day City Tour',
      activities: [
        'Visit Merlion Park, Suntec City, Orchard Road, Little India, and Chinatown.',
      ],
      description: `Explore the key highlights of Singapore, including Merlion Park and Orchard Road, before enjoying the vibrant areas of Chinatown and Little India.`,
      highlights: [
        'See the iconic Merlion Park',
        'Explore the rich culture of Chinatown and Little India',
        'Visit Suntec City and Orchard Road for shopping',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Singapore – Afternoon Sentosa Island Tour',
      activities: [
        'Visit Sentosa Island, including a one-way cable car ride, SEA Aquarium, Merlion Tower, and Wings of Time show.',
      ],
      description: `Spend your afternoon in Sentosa Island, where you can explore the SEA Aquarium, Merlion Tower, and enjoy the Wings of Time show, a spectacular outdoor night show.`,
      highlights: [
        'Cable car ride to Sentosa Island',
        'Visit the SEA Aquarium and Merlion Tower',
        'Enjoy the Wings of Time show at sunset',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Singapore to Kuala Lumpur',
      activities: [
        'Transfer from Singapore to Kuala Lumpur by coach.',
        'Explore Kuala Lumpur at your leisure.',
      ],
      description: `Travel by coach to Kuala Lumpur, Malaysia’s bustling capital, and explore the local markets and cultural sites in your free time.`,
      highlights: [
        'Drive through scenic Malaysia to Kuala Lumpur',
        'Explore the vibrant streets and markets of Kuala Lumpur',
      ],
    },
    {
      day: 5,
      title: 'Day 5: Kuala Lumpur City Tour',
      activities: [
        'Visit the King’s Palace, National Monument, Lake Gardens, and the iconic Petronas Twin Towers.',
      ],
      description: `Explore Kuala Lumpur’s major attractions, including the King’s Palace, the National Mosque, and the famous Petronas Twin Towers.`,
      highlights: [
        'Tour the iconic Petronas Twin Towers',
        'Visit the King’s Palace and the National Monument',
        'Take a photo at the Moorish Styled Railway Station',
      ],
    },
    {
      day: 6,
      title: 'Day 6: Kuala Lumpur to Pattaya – Optional Alcazar Show',
      activities: [
        'Fly to Bangkok and transfer to Pattaya.',
        'Enjoy an optional visit to the Alcazar Show.',
      ],
      description: `Arrive in Pattaya and check in at your resort. You can relax or opt for the spectacular Alcazar Show, a world-famous cabaret performance.`,
      highlights: [
        'Enjoy the Alcazar Cabaret Show',
        'Relax or explore the Pattaya beach resort',
      ],
    },
    {
      day: 7,
      title: 'Day 7: Pattaya – Coral Island Tour with Lunch',
      activities: [
        'Take a boat to Coral Island for water sports, including jet skiing, parasailing, and snorkeling.',
        'Enjoy a leisurely lunch on the island.',
      ],
      description: `Explore Coral Island (Koh Lann) and indulge in water activities like parasailing and snorkeling. Enjoy a relaxing day on the beach before heading back to Pattaya.`,
      highlights: [
        'Snorkel and parasail on Coral Island',
        'Relax on the pristine beach of Koh Lann',
        'Lunch at a popular restaurant in Pattaya',
      ],
    },
    {
      day: 8,
      title: 'Day 8: Bangkok – City and Temple Tour',
      activities: [
        'Visit Wat Traimit (Golden Buddha), Wat Pho (Reclining Buddha), and the Gems Gallery.',
        'Explore the city’s Buddhist temples.',
      ],
      description: `Tour Bangkok’s famous Buddhist temples, including the Golden Buddha and Reclining Buddha. Shop for souvenirs at the Gems Gallery.`,
      highlights: [
        'Visit the Golden Buddha at Wat Traimit',
        'See the Reclining Buddha at Wat Pho',
        'Shop for Thai gems and souvenirs',
      ],
    },
    {
      day: 9,
      title: 'Day 9: Bangkok – Optional Safari World and Marine Park',
      activities: [
        'Enjoy a day at Safari World and Marine Park with safari rides and animal shows.',
      ],
      description: `Spend the day at Safari World and Marine Park, where you can spot exotic animals like dolphins, orangutans, and seals in their natural habitats.`,
      highlights: [
        'Experience an exciting Safari ride',
        'Watch animal shows and explore the Bird Park',
        'Interact with wildlife at Safari World',
      ],
    },
    {
      day: 10,
      title: 'Day 10: Departure from Bangkok',
      activities: [
        'Transfer to Bangkok Airport for your departure flight.',
      ],
      description: `Your memorable trip to Singapore, Malaysia, and Thailand ends with a transfer to the airport for your return journey.`,
      highlights: [
        'End your journey with a smooth transfer to the airport',
        'Return home with cherished memories',
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
              src="/Assets/singapore.jpg"
              alt="Best of Singapore, Malaysia, and Thailand Tour"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Best of Singapore, Malaysia, and Thailand Tour
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Experience the Best Attractions in Southeast Asia
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
