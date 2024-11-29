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
        'Arrive at Delhi airport and receive a traditional welcome.',
        'Transfer to your hotel for check-in and relaxation.',
      ],
      description: `Welcome to the vibrant capital city of India! Begin your journey with a warm reception and enjoy a comfortable overnight stay at your hotel.`,
      highlights: [
        'Traditional welcome at Delhi airport',
        'Comfortable accommodations in Delhi',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Discover Delhi',
      activities: [
        'Morning sightseeing of Old Delhi: Red Fort, Chandni Chowk, and Jama Masjid.',
        'Post-lunch sightseeing of New Delhi: India Gate, Parliament House, Rashtrapati Bhawan, Humayun’s Tomb, and Qutub Minar.',
      ],
      description: `Explore the rich history of Delhi. Visit iconic landmarks like the Red Fort, Jama Masjid, and Qutub Minar. Dive into the cultural charm of Old and New Delhi.`,
      highlights: [
        'Experience Mughal architecture at Jama Masjid and Red Fort',
        'Visit UNESCO sites: Humayun’s Tomb and Qutub Minar',
        'Stroll through bustling markets and serene gardens',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Drive from Delhi to Agra',
      activities: [
        'Drive to Agra and check in to your hotel.',
        'Visit the Taj Mahal and Agra Fort.',
      ],
      description: `Travel to Agra and marvel at the Taj Mahal, a symbol of eternal love, and explore the historical Agra Fort.`,
      highlights: [
        'Explore the Taj Mahal, one of the Seven Wonders of the World',
        'Discover the history of Agra Fort',
        'Enjoy scenic views on the way to Agra',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Drive from Agra to Jaipur',
      activities: [
        'Drive to Jaipur via Fatehpur Sikri.',
        'Attend the evening Aarti at Birla Temple in Jaipur.',
      ],
      description: `En route to Jaipur, visit the UNESCO site of Fatehpur Sikri, a well-preserved Mughal city. In the evening, experience spiritual serenity at Birla Temple.`,
      highlights: [
        'Visit Fatehpur Sikri, a UNESCO World Heritage Site',
        'Participate in the Aarti ceremony at Birla Temple',
        'Experience the royal charm of Jaipur',
      ],
    },
    {
      day: 5,
      title: 'Day 5: Discover Jaipur',
      activities: [
        'Morning sightseeing: Nahargarh Fort, Amber Fort, and Jal Mahal.',
        'Afternoon sightseeing: Hawa Mahal, City Palace, and Jantar Mantar.',
      ],
      description: `Explore Jaipur's royal palaces and forts, including the Amber Fort and Nahargarh Fort. Dive into the rich history of the Pink City with visits to Hawa Mahal and City Palace.`,
      highlights: [
        'Admire architectural marvels like Hawa Mahal and Amber Fort',
        'Visit Jantar Mantar, an ancient astronomical site',
        'Immerse yourself in the vibrant culture of Jaipur',
      ],
    },
    {
      day: 6,
      title: 'Day 6: Drive from Jaipur to Delhi',
      activities: [
        'Drive back to Delhi and transfer to your hotel or airport for departure.',
      ],
      description: `Conclude your Golden Triangle Tour with cherished memories as you return to Delhi.`,
      highlights: [
        'Scenic drive back to Delhi',
        'Convenient drop-off at your desired location',
        'End your journey with unforgettable experiences',
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
              src="/Assets/agra.jpg"
              alt="Golden Triangle Tour"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Golden Triangle Tour
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Explore Delhi, Agra, and Jaipur in 6 Days
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
