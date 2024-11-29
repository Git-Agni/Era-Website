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
      title: 'Day 1: Arrive in Delhi',
      activities: [
        'Traditional welcome at Delhi’s airport.',
        'Transfer to your hotel for check-in and relaxation.',
      ],
      description: `Welcome to Delhi! Arrive and settle in with a traditional welcome. Enjoy the comforts of your hotel and prepare for your exciting tour of India.`,
      highlights: [
        'Traditional welcome in Delhi',
        'Relax and unwind in Delhi',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Explore Delhi',
      activities: [
        'Explore Old Delhi, visiting the Red Fort, Jama Masjid, and Rajghat.',
        'Visit New Delhi landmarks: India Gate, Humayun’s Tomb, and Qutub Minar.',
      ],
      description: `Dive into the rich history of Delhi. Explore Old Delhi’s Mughal architecture and the charm of New Delhi’s modern attractions.`,
      highlights: [
        'Rickshaw ride through Old Delhi',
        'Visit iconic landmarks like India Gate and Humayun’s Tomb',
        'Stroll through the bustling streets of New Delhi',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Delhi to Srinagar (Flight)',
      activities: [
        'Fly from Delhi to Srinagar.',
        'Enjoy a Shikara ride on Dal Lake.',
      ],
      description: `Fly to the serene city of Srinagar, the heart of Kashmir. Enjoy the peaceful Shikara ride on Dal Lake, an experience you’ll cherish.`,
      highlights: [
        'Shikara ride on Dal Lake',
        'Breathtaking views of the surrounding mountains',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Srinagar – Sonmarg – Srinagar',
      activities: [
        'Full-day excursion to Sonmarg.',
        'Enjoy the snow-capped peaks and glaciers.',
      ],
      description: `Travel to Sonmarg, known for its mesmerizing landscapes. Relax and enjoy the stunning natural beauty of the area before returning to Srinagar.`,
      highlights: [
        'Spectacular views of Sonmarg’s snow-covered peaks',
        'Leisure day in Srinagar after your excursion',
      ],
    },
    {
      day: 5,
      title: 'Day 5: Srinagar to Pahalgam',
      activities: [
        'Drive to Pahalgam, en route visiting Avantipura Ruins.',
        'Check-in and relax at your hotel.',
      ],
      description: `Drive to Pahalgam, enjoying the scenic views along the way. Visit the historic Avantipura Ruins and unwind in Pahalgam.`,
      highlights: [
        'Visit Avantipura Ruins en route to Pahalgam',
        'Relax in Pahalgam, known for its breathtaking views',
      ],
    },
    {
      day: 6,
      title: 'Day 6: Explore Pahalgam',
      activities: [
        'Excursion to Aru, Chandanwadi, and Betab Valley.',
      ],
      description: `Spend the day exploring the stunning landscapes of Pahalgam, with visits to beautiful spots like Aru, Chandanwadi, and Betab Valley.`,
      highlights: [
        'Explore the scenic Betab Valley',
        'Visit Aru and Chandanwadi for their scenic beauty',
      ],
    },
    {
      day: 7,
      title: 'Day 7: Pahalgam to Gulmarg',
      activities: [
        'Drive to Gulmarg, famous for its snow-covered slopes.',
        'Enjoy a Gondola ride up to the first phase.',
      ],
      description: `Travel to Gulmarg, known for its ski slopes. Take a Gondola ride and enjoy panoramic views of the mountains.`,
      highlights: [
        'Enjoy a Gondola ride in Gulmarg',
        'Explore the snow-covered mountains of Gulmarg',
      ],
    },
    {
      day: 8,
      title: 'Day 8: Gulmarg to Srinagar',
      activities: [
        'Drive back to Srinagar.',
        'Visit the Nishat, Shalimar, and Chashma Shahi Mughal gardens.',
        'Free time for shopping in Srinagar.',
      ],
      description: `Return to Srinagar and visit its famous Mughal gardens: Nishat, Shalimar, and Chashma Shahi. Enjoy some shopping in the local markets.`,
      highlights: [
        'Visit the Mughal gardens near Dal Lake',
        'Leisure time for shopping in Srinagar’s local markets',
      ],
    },
    {
      day: 9,
      title: 'Day 9: Srinagar to Delhi (Flight)',
      activities: [
        'Transfer to Srinagar airport for your flight back to Delhi.',
        'Upon arrival in Delhi, transfer to your hotel.',
      ],
      description: `Fly back to Delhi and relax for the evening at your hotel, preparing for the journey back home.`,
      highlights: [
        'Leisure evening in Delhi after returning from Srinagar',
        'Convenient transfer back to your hotel in Delhi',
      ],
    },
    {
      day: 10,
      title: 'Day 10: Departure from Delhi',
      activities: [
        'Transfer to Delhi International Airport for your flight back home.',
      ],
      description: `Conclude your tour with beautiful memories of Kashmir as you head to the airport for your return flight.`,
      highlights: [
        'Safe and hassle-free transfer to Delhi airport',
        'End your Kashmir tour with cherished memories',
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
              src="/Assets/kashmir.jpg"
              alt="Kashmir Delight Tour"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Kashmir Delight Tour
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Experience the Natural Beauty and Rich Culture of Kashmir
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
