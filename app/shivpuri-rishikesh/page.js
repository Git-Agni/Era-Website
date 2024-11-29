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

  const handleAccordionToggle = (dayIndex) => {
    setExpandedDay(expandedDay === dayIndex ? null : dayIndex);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Your custom itinerary has been submitted!');
  };

  const itinerary = [
    {
      day: 1,
      title: 'Day 1: Check-in & Activities',
      activities: [
        'Check into the Camp',
        'Lunch',
        'Games & Activities (Carom, Badminton, Volleyball)',
        'Bonfire',
        'Dinner',
      ],
      description: `Arrive at Shivpuri and check into the camp. Enjoy a delicious lunch before diving into activities like carom, badminton, and volleyball. Relax around a warm bonfire in the evening and wrap up the day with a hearty dinner. Overnight stay at the camp.`,
      highlights: [
        'Welcome drinks on arrival',
        'Personalized campsite tour',
        'Evening snacks during bonfire',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Adventure & Departure',
      activities: [
        'Breakfast',
        'White Water River Rafting',
        'Body Surfing',
        'Cliff Jump',
      ],
      description: `Begin your day with a scrumptious breakfast before embarking on an exciting white-water rafting experience. After rafting, enjoy activities like body surfing and cliff jumping. Conclude your adventure with lifelong memories!`,
      highlights: [
        'Professional rafting instructors',
        'Safety equipment provided',
        'Scenic river views during the rafting session',
      ],
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto p-4 md:p-8">
          {/* Hero Section */}
          <div className="relative h-[300px] md:h-[400px] mb-8 rounded-xl overflow-hidden">
            <img
              src="/Assets/rs.jpg" // Replace with the actual image path
              alt="Rafting Adventure"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Shivpuri Adventure Camp
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                A Thrilling Getaway in Rishikesh
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Trip Overview & Itinerary Timeline */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-4">Trip Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Duration</p>
                      <p className="text-sm text-gray-500">1 Night / 2 Days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Destinations</p>
                      <p className="text-sm text-gray-500">Rishikesh - Shivpuri</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Activities</p>
                      <p className="text-sm text-gray-500">
                        Rafting, Bonfire
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Group Size</p>
                      <p className="text-sm text-gray-500">Flexible</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Itinerary Timeline */}
              <div className="space-y-4">
                {itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="bg-white rounded-lg shadow p-6 cursor-pointer"
                  >
                    <div
                      onClick={() =>
                        setExpandedDay(expandedDay === day.day ? null : day.day)
                      }
                      className="flex justify-between items-center"
                    >
                      <h3 className="text-lg font-semibold">
                        {day.title}
                      </h3>
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
            </div>

            {/* Customization Form Section */}
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
