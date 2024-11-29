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
      title: 'Day 1: Arrival in Leh',
      activities: [
        'Catch a flight from Delhi to Leh.',
        'Meet our tour representative and transfer to your hotel.',
        'Acclimatization and leisure day.',
      ],
      description: `Welcome to Leh! Arrive at the high-altitude city and take the day to acclimatize to the surroundings. A leisurely day at leisure is recommended to help you adjust to the altitude.`,
      highlights: [
        'Acclimatization to Leh’s high altitude',
        'Relaxing evening in Leh',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Leh – Alchi – Leh',
      activities: [
        'Drive westwards to Alchi Monastery.',
        'Visit the Magnetic Hill and the confluence of Zanskar and Indus Rivers.',
        'Return to Leh and visit the Military Hall of Fame.',
      ],
      description: `Drive to Alchi, one of Ladakh's most important Buddhist centers. Explore the serene surroundings, and enjoy a scenic drive past some of Leh's famous landmarks. Return to Leh for more sightseeing.`,
      highlights: [
        'Visit Alchi Monastery, founded in the 10th century',
        'See the Magnetic Hill and confluence of Zanskar and Indus',
        'Explore Military Hall of Fame in Leh',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Leh – Nubra Valley',
      activities: [
        'Drive to Nubra Valley via Khardungla, the highest motorable road.',
        'Visit Hundur and Diskit Monasteries.',
        'Enjoy a Camel Safari in the white sand dunes.',
      ],
      description: `Enjoy the scenic drive from Leh to Nubra Valley, passing through the famous Khardungla pass. Visit the monasteries and enjoy the unique Camel Safari experience on the sand dunes.`,
      highlights: [
        'Drive through Khardungla Pass, the highest motorable road in the world',
        'Visit Hundur and Diskit Monasteries',
        'Camel Safari in the white sand dunes of Nubra',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Nubra Valley – Leh',
      activities: [
        'Visit Samstanling Monastery in the morning.',
        'Return to Leh via Khardungla Pass.',
        'Explore Leh’s local markets in the evening.',
      ],
      description: `Visit the serene Samstanling Monastery before returning to Leh. In the evening, explore Leh's local markets and shop for souvenirs like Pashmina shawls and wood carvings.`,
      highlights: [
        'Serene morning visit to Samstanling Monastery',
        'Explore Leh’s vibrant local markets',
      ],
    },
    {
      day: 5,
      title: 'Day 5: Leh – Pangong Lake',
      activities: [
        'Drive to Pangong Lake via Chang La pass.',
        'Visit the nearby village to experience local culture.',
        'Stay in tents by the beautiful Pangong Lake.',
      ],
      description: `Drive to the picturesque Pangong Lake, located at an altitude of 14,000 feet. Witness the stunning views of the surrounding mountains and stay overnight in tents by the lake.`,
      highlights: [
        'Drive through Chang La, one of the highest mountain passes',
        'Stay at the mesmerizing Pangong Lake',
        'Interact with the local villagers and learn about their culture',
      ],
    },
    {
      day: 6,
      title: 'Day 6: Pangong Lake – Leh',
      activities: [
        'Enjoy early morning views of Pangong Lake.',
        'Drive back to Leh, visiting Hemis Monastery on the way.',
        'Explore Leh and shop for souvenirs.',
      ],
      description: `Enjoy the stunning sunrise over Pangong Lake. On your return to Leh, visit the Hemis Monastery, one of the largest and richest monasteries in Ladakh.`,
      highlights: [
        'Capture the stunning morning views at Pangong Lake',
        'Visit the Hemis Monastery',
        'Shop for souvenirs in Leh’s markets',
      ],
    },
    {
      day: 7,
      title: 'Day 7: Leh – Delhi',
      activities: [
        'Morning transfer to Kushok Bakula Airport.',
        'Fly from Leh to Delhi for onward journey.',
      ],
      description: `Bid farewell to Leh as you head to the airport for your flight back to Delhi, marking the end of an unforgettable Ladakh experience.`,
      highlights: [
        'Transfer to Leh airport for departure',
        'End the tour with cherished memories',
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
              src="/Assets/ladakh.jpg"
              alt="Journey to Ladakh"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Journey to Ladakh
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Discover the High Altitudes and Spiritual Wonders of Ladakh
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
