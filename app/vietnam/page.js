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
      title: 'Day 1: Arrival in Hanoi',
      activities: [
        'Arrive at Noi Bai International Airport.',
        'Transfer to hotel and check-in.',
        'Visit Ba Dinh Square, Ho Chi Minh Mausoleum, One Pillar Pagoda, and more.',
        'Enjoy coffee on Train Street.',
      ],
      description: `Arrive in Hanoi and explore the capital's top attractions like the Ho Chi Minh Mausoleum and the iconic One Pillar Pagoda.`,
      highlights: [
        'Visit the Ho Chi Minh Mausoleum and One Pillar Pagoda',
        'Explore Hanoi’s historical landmarks',
        'Shop at Dong Xuan Market',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Hanoi to Halong Bay',
      activities: [
        'Drive to Halong Bay (3.5 hours).',
        'Check in aboard the junk for a cruise around Halong Bay.',
        'Trek to a nearby summit for panoramic views.',
        'Visit a fishing village.',
        'Enjoy a sunset dinner aboard.',
      ],
      description: `Travel to Halong Bay and embark on a scenic cruise, followed by a trek for stunning views and interaction with local villagers.`,
      highlights: [
        'Explore Halong Bay by boat',
        'Visit a traditional fishing village',
        'Enjoy a beautiful sunset dinner aboard',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Halong Bay to Hanoi and Flight to Da Nang',
      activities: [
        'Tai Chi exercise on the sundeck.',
        'Cruise back to shore and have a buffet brunch.',
        'Drive back to Hanoi.',
        'Transfer to the airport for a flight to Da Nang.',
      ],
      description: `Continue exploring Halong Bay before heading back to Hanoi for your flight to Da Nang, where your next adventure awaits.`,
      highlights: [
        'Relax with Tai Chi on Halong Bay',
        'Buffet brunch aboard the cruise',
        'Flight to Da Nang for your next destination',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Da Nang and Hoi An',
      activities: [
        'Visit Linh Ung Pagoda and the Marble Mountains.',
        'Explore Hoi An Ancient Town.',
        'Visit Tan Ky House, Japanese Bridge, and local cultural sites.',
      ],
      description: `Visit the famous Marble Mountains and explore the UNESCO World Heritage-listed town of Hoi An, known for its well-preserved architecture.`,
      highlights: [
        'Visit the Marble Mountains and Hoi An Ancient Town',
        'Discover the historical Japanese Bridge',
        'Enjoy a walking tour through Hoi An',
      ],
    },
    {
      day: 5,
      title: 'Day 5: Da Nang to Ba Na Hill',
      activities: [
        'Visit Ba Na Hill and take a cable car to the summit.',
        'Visit the Golden Hand Bridge and Fantasy Park.',
        'Transfer back to Da Nang for shopping.',
      ],
      description: `Spend the day at Ba Na Hill, home to the famous Golden Hand Bridge and the thrilling Fantasy Park.`,
      highlights: [
        'Ride the cable car at Ba Na Hill',
        'Walk across the Golden Hand Bridge',
        'Explore Fantasy Park and its attractions',
      ],
    },
    {
      day: 6,
      title: 'Day 6: Da Nang to Ho Chi Minh City and Mekong Delta',
      activities: [
        'Fly to Ho Chi Minh City.',
        'Visit My Tho and explore Dragon Island, Unicorn Island, and more.',
        'Tour a coconut candy workshop and enjoy local fruits.',
        'Return to Ho Chi Minh City.',
      ],
      description: `Explore the Mekong Delta with a boat trip to various islands before returning to Ho Chi Minh City for the night.`,
      highlights: [
        'Explore the Mekong Delta by boat',
        'Visit local islands and try local delicacies',
        'Learn about coconut candy production',
      ],
    },
    {
      day: 7,
      title: 'Day 7: Ho Chi Minh City and Cu Chi Tunnels',
      activities: [
        'Visit Saigon Notre-Dame Basilica, Post Office, and War Museum.',
        'Take a tour of the Cu Chi Tunnels.',
        'Visit the Independent Palace and shop at local markets.',
      ],
      description: `Learn about the history of Vietnam through visits to Saigon’s historical landmarks and a tour of the Cu Chi Tunnels.`,
      highlights: [
        'Explore Ho Chi Minh City’s landmarks',
        'Learn about Vietnam’s wartime history at the Cu Chi Tunnels',
        'Enjoy shopping and leisure time at local markets',
      ],
    },
    {
      day: 8,
      title: 'Day 8: Ho Chi Minh City Departure',
      activities: [
        'Morning sightseeing and shopping in Ho Chi Minh.',
        'Transfer to Tan Son Nhat International Airport for departure.',
      ],
      description: `Your journey ends with a final sightseeing tour and shopping before heading to the airport for your departure.`,
      highlights: [
        'Last-minute shopping and sightseeing',
        'Smooth transfer to the airport',
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
              src="/Assets/vietnam.jpg"
              alt="Discovery Vietnam"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Discovery Vietnam
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Experience the Wonders of Vietnam
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
