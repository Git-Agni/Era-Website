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
      title: 'Day 1: Delhi to Shimla',
      activities: [
        'Pick up from Delhi and drive to Shimla.',
        'Check-in at the hotel upon arrival.',
        'Optional visit to Mall Road and Christ Church.',
      ],
      description: `Begin your journey with a scenic drive to Shimla, the Queen of Hills. Spend the evening exploring the iconic Mall Road and Christ Church or relaxing at your leisure.`,
      highlights: [
        'Scenic journey from Delhi to Shimla',
        'Explore Shimla’s Mall Road and Christ Church',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Shimla – Naldhera – Kufri',
      activities: [
        'Visit Naldhera Golf Course, the highest in the area.',
        'Explore Kufri, known for its snow points and pony rides (own cost).',
        'Sightseeing at Sankat Mochan Temple, Viceroy Lodge, and Jakhoo Temple.',
      ],
      description: `Enjoy a day filled with adventure and serenity. Visit the Naldhera Golf Course and Kufri, known for its breathtaking snow-capped vistas. End the day with visits to Shimla’s historic and spiritual sites.`,
      highlights: [
        'Visit Naldhera Golf Course and Kufri Snow Point',
        'Sightseeing at Sankat Mochan Temple and Jakhoo Temple',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Naldhera – Shimla – Manali',
      activities: [
        'Check out from the hotel and drive towards Manali.',
        'En route, visit Mandi, Pandoh Dam, and river rafting points (own cost).',
        'Evening free to explore the local market in Manali.',
      ],
      description: `Travel to Manali, stopping at scenic locations like Mandi and Pandoh Dam. Experience adventure with optional river rafting along the way. Spend your evening exploring Manali’s charming market.`,
      highlights: [
        'Explore Mandi and Pandoh Dam en route',
        'Optional river rafting experience',
        'Free time in Manali’s local market',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Manali – Solang Valley – Rohtang Pass',
      activities: [
        'Full-day excursion to Rohtang Pass (subject to weather and permissions).',
        'En route, visit Kothi, Gulaba, and Rahala Waterfalls.',
        'Alternate visit to Solang Valley for skiing and paragliding (own cost).',
        'Evening free for indoor activities, music, and dance at the hotel.',
      ],
      description: `Enjoy a thrilling day at Rohtang Pass (subject to weather) or Solang Valley, where you can indulge in snow sports and adventure. The journey is marked by scenic spots like Kothi and Gulaba.`,
      highlights: [
        'Visit Rohtang Pass or Solang Valley',
        'Enjoy snow skiing and paragliding',
        'Scenic views at Rahala Waterfalls',
      ],
    },
    {
      day: 5,
      title: 'Day 5: Kasol to Delhi',
      activities: [
        'Check out from the camping site in Kasol.',
        'Day at leisure to explore Kasol or relax.',
        'Drive back to Delhi for onward journey.',
      ],
      description: `Conclude your trip with a leisurely morning in Kasol, famous for its serene beauty. Begin your journey back to Delhi with cherished memories of Himachal Pradesh.`,
      highlights: [
        'Relax amidst the tranquil beauty of Kasol',
        'Convenient return journey to Delhi',
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
              src="/Assets/shimla.jpg"
              alt="Shimla Manali Naldhera and Kasol Tour"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Shimla Manali Naldhera and Kasol Tour
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                A Memorable Journey through the Hills of Himachal
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
