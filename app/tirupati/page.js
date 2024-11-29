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
      title: 'Day 1: Chennai to Tirupati',
      activities: [
        'Pickup from Chennai (airport or advised location)',
        'Drive to Tirupati',
        'Check-in at hotel and relaxation',
        'Evening visit to Tirupati Balaji Temple for pooja and darshan',
      ],
      description: `Start your spiritual weekend tour with a drive from Chennai to Tirupati. Visit the world-famous Tirupati Balaji Temple in the evening for a serene pooja and darshan experience.`,
      highlights: [
        'Spiritual blessings at Tirupati Balaji Temple',
        'Peaceful darshan experience',
        'Comfortable overnight stay in Tirupati',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Tirupati Temple Tour',
      activities: [
        'Morning leisure time',
        'Visit Tirupati Balaji Temple for seegra darshan',
        'Explore Tiruchanur Temple (Shri Padmavathi Temple)',
        'Visit Sri Kalyana Venkateswaraswami Temple at Srinivasa Mangapuram',
        'End the day at Kapila Theertham with scenic waterfalls',
      ],
      description: `Spend a spiritual day visiting Tirupati’s sacred temples, including Tirupati Balaji Temple for seegra darshan. Explore the holy Shri Padmavathi Temple, Kalyana Venkateswaraswami Temple, and the picturesque Kapila Theertham, known for its tranquil waterfalls.`,
      highlights: [
        'Seegra darshan at Tirupati Balaji Temple',
        'Visit to Shri Padmavathi Temple',
        'Scenic beauty and spiritual vibes at Kapila Theertham',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Tirupati to Chennai',
      activities: [
        'Morning leisure time and relaxation',
        'Visit Srikalahasti Temple en route to Chennai',
        'Drive back to Chennai',
        'Drop off at Chennai airport or advised location',
      ],
      description: `Conclude your spiritual journey with a visit to Srikalahasti Temple, dedicated to Lord Shiva. Drive back to Chennai with cherished memories of the Tirupati Weekend Tour.`,
      highlights: [
        'Visit Srikalahasti Temple, known for its spiritual significance',
        'Scenic and comfortable return journey',
        'Memorable conclusion to the weekend getaway',
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
              src="/Assets/tpb.jpg"
              alt="Tirupati Weekend Tour"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Tirupati Weekend Tour
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                A Spiritual Retreat to Tirupati and Beyond
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
