'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState } from 'react'; // Ensure this is included
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
        'Traditional welcome at Delhi airport.',
        'Transfer to the hotel for check-in.',
        'Overnight stay in Delhi.',
      ],
      description: `Begin your journey in Delhi with a warm welcome. Relax and prepare for your upcoming adventure.`,
      highlights: [
        'Traditional welcome',
        'Stay at a comfortable hotel',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Explore Delhi',
      activities: [
        'Photo stop at the Red Fort.',
        'Rickshaw ride through Chandni Chowk and visit Jama Masjid.',
        'Explore Rajghat and New Delhi landmarks: India Gate, Presidential Palace.',
        'Visit Humayun’s Tomb and Qutub Minar.',
      ],
      description: `Discover Delhi's rich history and architectural marvels. Visit key landmarks from Old and New Delhi.`,
      highlights: [
        'Rickshaw ride in Chandni Chowk',
        'Visit Humayun’s Tomb, a UNESCO World Heritage Site',
        'Photo stop at Qutub Minar',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Fly to Dibrugarh',
      activities: [
        'Morning flight to Dibrugarh.',
        'Visit heritage tea gardens and learn about tea production.',
        'Cultural performance by an Assamese dance group in the evening.',
      ],
      description: `Fly to Dibrugarh and explore Assam’s famous tea culture. End the day with a traditional dance performance.`,
      highlights: [
        'Heritage tea gardens',
        'Cultural evening with Assamese dances',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Dibrugarh Exploration',
      activities: [
        'Morning boat cruise on the Brahmaputra River.',
        'Drive to Digboi for a tour of the Oil Museum.',
        'Visit Digboi War Cemetery.',
        'Explore Tai-Phakial ethnic village.',
      ],
      description: `Discover Dibrugarh’s history and culture. Enjoy a serene boat cruise and visit historical sites in Digboi.`,
      highlights: [
        'Boat cruise on the Brahmaputra River',
        'Visit Digboi Oil Museum and War Cemetery',
        'Explore Tai-Phakial village',
      ],
    },
    {
      day: 5,
      title: 'Day 5: Dibrugarh to Jorhat',
      activities: [
        'Drive to Sivasagar to explore its temples and palaces.',
        'Visit Rang Ghar, the oldest amphitheater in Asia.',
        'Enjoy a traditional Satriya dance performance in Jorhat.',
      ],
      description: `Travel to Jorhat via Sivasagar, rich in Ahom history. Witness traditional dance performances in the evening.`,
      highlights: [
        'Visit Sivasagar’s historical sites',
        'Witness Satriya dance in Jorhat',
      ],
    },
    {
      day: 6,
      title: 'Day 6: Jorhat to Kaziranga',
      activities: [
        'Morning excursion to Majuli Island.',
        'Ferry crossing to explore the largest inhabited river island.',
        'Visit Vaishnavite monasteries on Majuli Island.',
        'Evening drive to Kaziranga National Park.',
      ],
      description: `Explore Majuli Island, famous for its monasteries and natural beauty. Head to Kaziranga National Park for an overnight stay.`,
      highlights: [
        'Visit Majuli Island’s monasteries',
        'Ferry crossing over the Brahmaputra River',
      ],
    },
    {
      day: 7,
      title: 'Day 7: Kaziranga Safari',
      activities: [
        'Early morning elephant safari in the central range.',
        'Post-breakfast jeep safari to the western range.',
        'Evening jeep safari to the eastern range of the park.',
      ],
      description: `Embark on thrilling safaris in Kaziranga National Park, home to the one-horned rhinoceros and diverse wildlife.`,
      highlights: [
        'Spot rare wildlife on elephant and jeep safaris',
        'Explore Kaziranga’s three zones',
      ],
    },
    {
      day: 8,
      title: 'Day 8: Kaziranga to Shillong',
      activities: [
        'Drive to Shillong via scenic routes.',
        'Free time to relax or explore Shillong’s markets.',
      ],
      description: `Travel to Shillong, the capital of Meghalaya. Enjoy its natural beauty and vibrant culture.`,
      highlights: [
        'Scenic drive to Shillong',
        'Free time for leisure',
      ],
    },
    {
      day: 9,
      title: 'Day 9: Excursion to Cherrapunjee',
      activities: [
        'Drive to Cherrapunjee, once the wettest place on earth.',
        'Visit limestone caves and enjoy panoramic views.',
        'Explore David Scott’s Trail and Sacred Forest.',
      ],
      description: `Experience Cherrapunjee’s stunning landscapes, waterfalls, and caves. Return to Shillong by evening.`,
      highlights: [
        'Visit limestone caves',
        'Explore David Scott’s Trail',
      ],
    },
    {
      day: 10,
      title: 'Day 10: Shillong to Guwahati',
      activities: [
        'Visit Kamakhya Temple in Guwahati.',
        'Enjoy a panoramic view of the Brahmaputra River.',
      ],
      description: `Travel to Guwahati and visit the famous Kamakhya Temple, a key Hindu pilgrimage site.`,
      highlights: [
        'Visit Kamakhya Temple',
        'Scenic views of the Brahmaputra River',
      ],
    },
    {
      day: 11,
      title: 'Day 11: Guwahati to Delhi',
      activities: [
        'Morning flight to Delhi.',
        'Evening international flight for onward journey.',
      ],
      description: `End your tour with a flight back to Delhi, cherishing memories of North East India.`,
      highlights: [
        'Convenient transfer to Delhi',
        'Onward journey from Delhi',
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
              alt="North Eastern Mystery Tour"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                North Eastern Mystery Tour
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Explore the Hidden Gems of North Eastern India
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
              {/* Customization Form Section */}
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