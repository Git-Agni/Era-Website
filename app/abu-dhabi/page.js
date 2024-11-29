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
      title: 'Day 1: Arrive Dubai - Abu Dhabi',
      activities: [
        'Arrive at Dubai Airport and meet our representative.',
        'Transfer to your hotel in Abu Dhabi.',
        'Check-in and relax at the hotel.',
        'Evening free for shopping and visiting local markets.',
      ],
      description: `Arrive in Dubai and transfer to Abu Dhabi. Enjoy some leisure time to explore the local markets or just relax at your hotel.`,
      highlights: [
        'Arrival in Dubai and transfer to Abu Dhabi',
        'Shopping at local markets in Abu Dhabi',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Abu Dhabi City Tour and Ferrari World',
      activities: [
        'Visit the Grand Mosque in Abu Dhabi (guide fee extra).',
        'Explore Ferrari World, enjoying thrilling rides and simulators.',
      ],
      description: `Explore the cultural and historical wonders of Abu Dhabi, including the Grand Mosque. Then, experience the thrill of Ferrari World with exciting rides for all ages.`,
      highlights: [
        'Visit to the Grand Mosque',
        'Ferrari World adventure with exclusive rides',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Abu Dhabi to Dubai - Top of Burj Khalifa Tour',
      activities: [
        'Transfer to your hotel in Dubai.',
        'Check in and enjoy the surroundings.',
        'Visit the Burj Khalifa and take in the stunning views of Dubai from the observation deck.',
      ],
      description: `Travel from Abu Dhabi to Dubai and check into your hotel. Later, visit the Burj Khalifa, the world's tallest building, and experience the amazing views of the Dubai skyline.`,
      highlights: [
        'Top of Burj Khalifa experience',
        'Breathtaking views of Dubai from the tallest tower',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Wild Wadi Water Park and Desert Safari',
      activities: [
        'Enjoy thrilling water rides at Wild Wadi Water Park.',
        'Experience a desert safari, complete with a BBQ dinner and belly dance show.',
      ],
      description: `After a day of fun at Wild Wadi Water Park, head out for an exhilarating desert safari. Enjoy a BBQ dinner, a camel ride, and a belly dance show under the stars.`,
      highlights: [
        'Wild Wadi Water Park adventure',
        'Exciting desert safari with BBQ dinner and entertainment',
      ],
    },
    {
      day: 5,
      title: 'Day 5: Aquaventure Water Park and Lost Chambers Aquarium',
      activities: [
        'Spend the day at Aquaventure Water Park.',
        'Visit the Lost Chambers Aquarium to explore the mysterious ruins of Atlantis.',
      ],
      description: `Have a fun-filled day at Aquaventure Water Park, followed by a visit to the Lost Chambers Aquarium where you can explore the underwater world.`,
      highlights: [
        'Aquaventure Water Park excitement',
        'Discover marine life at the Lost Chambers Aquarium',
      ],
    },
    {
      day: 6,
      title: 'Day 6: Depart Dubai',
      activities: [
        'Check out of your hotel and transfer to Dubai International Airport for departure.',
      ],
      description: `After a memorable trip, check out of your hotel and head to the airport for your flight home.`,
      highlights: [
        'Transfer to Dubai airport for departure',
        'End of a majestic Dubai and Abu Dhabi tour',
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
              src="/Assets/abu-dhabi.jpg"
              alt="Majestic Dubai with Abu Dhabi"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Majestic Dubai with Abu Dhabi
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                A Perfect Blend of Luxury and Adventure
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
