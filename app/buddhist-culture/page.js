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
      title: 'Day 1: Arrival in Delhi',
      activities: [
        'Arrival at Delhi airport.',
        'Transfer to your hotel for check-in.',
        'Relax at your hotel and unwind.',
      ],
      description: `Arrive in Delhi, the capital of India. After a traditional welcome, check-in at your hotel and enjoy a relaxing day.`,
      highlights: [
        'Traditional welcome at Delhi airport',
        'Relax and unwind in Delhi',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Explore Delhi',
      activities: [
        'Sightseeing tour of Delhi: Jama Masjid, Gandhi Memorial, Red Fort, Parliament House, India Gate, Qutub Minar, Humayun’s Tomb.',
      ],
      description: `Explore the vibrant capital of India. Visit the iconic landmarks like the Jama Masjid, India Gate, and Qutub Minar, and delve into India’s rich history.`,
      highlights: [
        'Visit historical sites like Jama Masjid and Red Fort',
        'Explore India Gate and Qutub Minar',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Delhi to Jaipur',
      activities: [
        'Morning breakfast and check-out.',
        'Drive to Jaipur, the Pink City.',
        'Elephant/jeep ride to Amber Fort.',
        'Visit Jantar Mantar and City Palace in Jaipur.',
      ],
      description: `After breakfast, drive to Jaipur. Visit the Amber Fort with an elephant or jeep ride and explore Jantar Mantar and City Palace.`,
      highlights: [
        'Elephant/jeep ride to Amber Fort',
        'Visit Jantar Mantar and City Palace in Jaipur',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Jaipur to Agra',
      activities: [
        'Morning breakfast and check-out.',
        'Visit Fatehpur Sikri on the way to Agra.',
        'Check-in at your hotel in Agra.',
        'Visit Taj Mahal and Agra Fort.',
      ],
      description: `Travel from Jaipur to Agra, stopping at the UNESCO World Heritage Site Fatehpur Sikri. In Agra, visit the Taj Mahal and Agra Fort.`,
      highlights: [
        'Visit the Taj Mahal and Agra Fort',
        'Explore Fatehpur Sikri en route to Agra',
      ],
    },
    {
      day: 5,
      title: 'Day 5: Agra to Khajuraho',
      activities: [
        'Morning breakfast.',
        'Board train to Jhansi, followed by a drive to Khajuraho.',
        'Explore the famous Khajuraho temples.',
      ],
      description: `Visit the UNESCO World Heritage site of Khajuraho, renowned for its intricately carved temples. Take a day to explore the temples and their beautiful architecture.`,
      highlights: [
        'Explore Khajuraho’s famous temples',
        'Discover ancient temple architecture',
      ],
    },
    {
      day: 6,
      title: 'Day 6: Khajuraho to Varanasi',
      activities: [
        'Sightseeing tour of Khajuraho temples.',
        'Fly from Khajuraho to Varanasi.',
        'Check-in and overnight stay in Varanasi.',
      ],
      description: `Explore the famous temples of Khajuraho, and then head to Varanasi, one of the oldest living cities in the world, for the next stage of your journey.`,
      highlights: [
        'Visit famous temples in Khajuraho',
        'Experience the spiritual city of Varanasi',
      ],
    },
    {
      day: 7,
      title: 'Day 7: Varanasi',
      activities: [
        'Early morning boat cruise on the river Ganges.',
        'Visit Sarnath, the place where Buddha delivered his first sermon.',
        'Explore temples in Varanasi, including Vishwanath and Dugra Temple.',
      ],
      description: `Start the day with a sunrise boat cruise on the Ganges. Explore Sarnath, where Buddhism began, and visit the sacred temples in Varanasi.`,
      highlights: [
        'Sunrise boat cruise on the Ganges',
        'Explore Sarnath and temples in Varanasi',
      ],
    },
    {
      day: 8,
      title: 'Day 8: Varanasi to Bodhgaya',
      activities: [
        'Morning check-out and drive to Bodhgaya.',
        'Visit the Bodhi tree where Buddha attained enlightenment.',
        'Check-in at the hotel in Bodhgaya.',
      ],
      description: `Visit Bodhgaya, one of the holiest sites in Buddhism, where Lord Buddha attained enlightenment under the Bodhi tree.`,
      highlights: [
        'Visit the Bodhi tree in Bodhgaya',
        'Explore the Buddhist temples in Bodhgaya',
      ],
    },
    {
      day: 9,
      title: 'Day 9: Bodhgaya',
      activities: [
        'Sightseeing tour of Bodhgaya temples.',
        'Afternoon at leisure for personal exploration.',
      ],
      description: `Spend a day exploring the temples in Bodhgaya, with free time in the afternoon for individual activities.`,
      highlights: [
        'Visit temples in Bodhgaya',
        'Leisure time for exploration',
      ],
    },
    {
      day: 10,
      title: 'Day 10: Bodhgaya to Patna via Rajgir and Nalanda',
      activities: [
        'Morning breakfast and drive to Patna.',
        'Visit Rajgir and Nalanda en route.',
        'Check-in and overnight stay in Patna.',
      ],
      description: `On the way to Patna, visit Rajgir and Nalanda, ancient centers of learning in India. Upon arrival, check into your hotel in Patna.`,
      highlights: [
        'Visit Rajgir and Nalanda',
        'Explore ancient Indian universities',
      ],
    },
    {
      day: 11,
      title: 'Day 11: Patna to Delhi',
      activities: [
        'Visit Golghar, Museum, and Patna Sahib Gurudwara.',
        'Drive to Patna airport for flight to Delhi.',
        'Dinner at a restaurant near the airport and flight back home.',
      ],
      description: `End your Buddhist culture and heritage tour with a visit to Patna Sahib Gurudwara and a sightseeing tour of Patna. In the evening, return to Delhi for your onward flight.`,
      highlights: [
        'Explore Patna’s historical sites',
        'End the tour with dinner and departure to Delhi',
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
              src="/Assets/buddh.jpg"
              alt="Buddhist Culture and Heritage Tour"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Buddhist Culture and Heritage Tour
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Discover the Sacred Buddhist Sites in India
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
