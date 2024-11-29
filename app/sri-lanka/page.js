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
      title: 'Day 1: Arrival in Colombo - Transfer to Negombo',
      activities: [
        'Arrive in Colombo and transfer to Negombo.',
        'Check-in at the hotel and relax.',
        'Take a short trip around Negombo.',
      ],
      description: `Arrive in Colombo and embark on a relaxing drive to Negombo. Check-in at your hotel, followed by a short trip around the beautiful coastal town.`,
      highlights: [
        'Relax in the coastal town of Negombo',
        'First glance of Sri Lankan culture and architecture',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Negombo - Chilaw - Kandy',
      activities: [
        'Visit Muneshwaram and Manawari Temples.',
        'Stop at Pinnawala Elephant Orphanage.',
        'Visit the Dalada Maligai (Temple of the Tooth).',
        'Cultural dance performance in Kandy.',
      ],
      description: `Explore the mythological significance of Lord Rama’s journey in Sri Lanka, starting with visits to Muneshwaram and Manawari temples. Then, head to Kandy, stopping at the famous Pinnawala Elephant Orphanage. End your day with a cultural dance performance.`,
      highlights: [
        'Visit sacred Ramayana-related temples',
        'See elephants at Pinnawala',
        'Explore Kandy’s religious landmarks',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Kandy to Nuwara Eliya',
      activities: [
        'Visit the Botanical Gardens in Peradeniya.',
        'Visit Sri Baktha Hanuman Temple.',
        'Tour Nuwara Eliya, a British-influenced town.',
      ],
      description: `Start the day with a visit to the beautiful Botanical Gardens in Peradeniya before continuing your journey to Nuwara Eliya. Visit the Sri Baktha Hanuman Temple and enjoy the British colonial charm of Nuwara Eliya.`,
      highlights: [
        'Explore the vibrant botanical gardens',
        'See colonial-era architecture in Nuwara Eliya',
        'Visit the Sri Baktha Hanuman Temple',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Nuwara Eliya Sightseeing',
      activities: [
        'Visit Seetha Amman Temple and Ashoka Vathika.',
        'Visit Divurumpola, site of Seetha Devi’s Agni Pariksha.',
        'Explore Huggala Botanical Garden.',
      ],
      description: `Visit the Seetha Amman Temple, Ashoka Vathika, and Divurumpola, which are significant places in the Ramayana. Continue with a visit to the peaceful Huggala Botanical Garden.`,
      highlights: [
        'Visit sacred Ramayana sites',
        'Explore the Huggala Botanical Garden',
        'Learn about Seetha Devi’s mythological significance',
      ],
    },
    {
      day: 5,
      title: 'Day 5: Nuwara Eliya to Colombo',
      activities: [
        'Visit Anjaneyar Temple and Kelaniya Temple.',
        'Explore Colombo’s ancient sites and markets.',
      ],
      description: `Visit two key temples in Colombo, Anjaneyar Temple and Kelaniya Temple, both with strong connections to the Ramayana. Explore Colombo’s mix of ancient and modern sites.`,
      highlights: [
        'Explore Ramayana-related temples',
        'Discover Colombo’s vibrant culture and markets',
      ],
    },
    {
      day: 6,
      title: 'Day 6: Departure from Colombo',
      activities: [
        'Transfer to Colombo airport for your onward journey.',
      ],
      description: `Your amazing journey through Sri Lanka’s mythological landmarks comes to a close. Transfer to Colombo airport for your departure.`,
      highlights: [
        'Farewell transfer to Colombo Airport',
        'End of an unforgettable Ramayana tour in Sri Lanka',
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
              src="/Assets/sri-lanka.jpg"
              alt="Mesmerising Sri Lanka"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Mesmerising Sri Lanka
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                A Journey Through the Ramayana Sites in Sri Lanka
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
