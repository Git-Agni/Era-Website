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
    accommodation: 'Deluxe AC Cottage',
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
      title: 'Day 1: Arrival at Corbett',
      activities: [
        'Arrival at Corbett Park.',
        'Welcome drink on arrival and check-in at your accommodation.',
        'Free time to relax and enjoy the amenities.',
        'Evening tea/coffee with snacks.',
        'Enjoy bone fire with music.',
      ],
      description: `Arrive at Corbett Park and check-in to your deluxe AC cottage or room. Enjoy a refreshing welcome drink and relax before heading out for some leisure activities. In the evening, unwind with a bone fire and music under the stars.`,
      highlights: [
        'Welcome drink and check-in to deluxe AC cottage/room',
        'Relaxing evening with bone fire and music',
        'Free usage of indoor and outdoor games',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Corbett Park Adventure',
      activities: [
        'Morning tea/coffee followed by breakfast.',
        'Enjoy a nature walk or a safari in Corbett National Park.',
        'Lunch at the resort.',
        'Evening tea/coffee.',
        'Leisure activities such as indoor games, tracking, and a dip in the swimming pool.',
      ],
      description: `Start your day with tea or coffee, followed by a hearty breakfast. Explore the beauty of Corbett National Park with a nature walk or safari. In the afternoon, relax and enjoy the resort amenities like the swimming pool or outdoor games.`,
      highlights: [
        'Nature walk and Corbett Safari',
        'Relaxing afternoon by the pool or with indoor games',
        'Delicious meals and tea/coffee breaks throughout the day',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Departure from Corbett',
      activities: [
        'Morning tea/coffee and breakfast.',
        'Check-out and transfer back to the station or your onward destination.',
      ],
      description: `After breakfast, enjoy some free time before check-out. Relish your final moments in the serene surroundings of Corbett Park before departing for your next destination.`,
      highlights: [
        'Relaxed morning with tea/coffee',
        'Check-out and transfer back to your onward destination',
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
              src="/Assets/jim.jpg"
              alt="Corbett Weekend Tour"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Corbett Weekend Tour
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                A Quick Getaway to Corbett National Park
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
                    <option>Deluxe AC Cottage</option>
                    <option>Deluxe AC Room</option>
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
