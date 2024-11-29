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
    accommodation: 'Deluxe AC Cabin',
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
        '1600 hrs: Reporting at Safdarjung Railway Station for check-in formalities.',
        '1830 hrs: Depart for Jaipur.',
        '1930 hrs: Dinner aboard the royal Palace on Wheels.',
      ],
      description: `Arrive at Safdarjung Railway Station for check-in. After completing the formalities, enjoy a royal dinner onboard the Palace on Wheels as you depart for Jaipur.`,
      highlights: [
        'Royal check-in at Safdarjung Railway Station',
        'Dinner aboard the Palace on Wheels',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Jaipur',
      activities: [
        '0345 hrs: Arrival in Jaipur.',
        '0700 hrs: Breakfast onboard Palace on Wheels.',
        '0800 hrs: Traditional welcome at Jaipur Railway Station.',
        '0830 hrs: Excursion tour of Jaipur: Amber Fort, Jantar Mantar, City Palace.',
        '1330 hrs: Lunch at Amber Fort.',
        '1630 hrs: Visit local markets in Jaipur.',
        '2000 hrs: Dinner at Jai Mahal Palace.',
        '2200 hrs: Return to Palace on Wheels for onward journey to Sawai Madhopur.',
      ],
      description: `Explore the iconic sites of Jaipur, including Amber Fort, Jantar Mantar, and City Palace. Enjoy a grand lunch at Amber Fort and return to the train for a delicious dinner at Jai Mahal Palace.`,
      highlights: [
        'Excursion to Amber Fort and City Palace',
        'Traditional welcome at Jaipur Railway Station',
        'Dinner at Jai Mahal Palace',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Sawai Madhopur/Chittorgarh',
      activities: [
        '0530 hrs: Arrival in Sawai Madhopur.',
        '0600 hrs: Morning jungle safari in Ranthambore National Park.',
        '0915 hrs: Breakfast in a forest lodge.',
        '1030 hrs: Depart for Chittorgarh.',
        '1600 hrs: Sightseeing tour of Chittorgarh Fort.',
        '1930 hrs: Dinner at Panna Hotel with a cultural show.',
      ],
      description: `Start the day with a jungle safari in Ranthambore National Park to spot tigers and other wildlife. Then, travel to Chittorgarh for a tour of the famous fort followed by a cultural dinner show.`,
      highlights: [
        'Early morning safari at Ranthambore National Park',
        'Tour the historic Chittorgarh Fort',
        'Cultural dinner show at Panna Hotel',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Udaipur',
      activities: [
        '0200 hrs: Depart from Chittorgarh for Udaipur.',
        '0800 hrs: Arrival in Udaipur.',
        '0815 hrs: Breakfast in a deluxe hotel.',
        '0900 hrs: City sightseeing tour of Udaipur.',
        '1330 hrs: Lunch at a heritage hotel.',
        '1430 hrs: Boat ride on Lake Pichola.',
        '1930 hrs: Dinner aboard Palace on Wheels.',
      ],
      description: `Explore the lake city of Udaipur with a city tour, including a boat ride on Lake Pichola and lunch at a heritage hotel. Enjoy dinner aboard the Palace on Wheels as you continue your luxurious journey.`,
      highlights: [
        'Boat ride on Lake Pichola',
        'Sightseeing tour of Udaipur’s beautiful palaces',
        'Dinner aboard Palace on Wheels',
      ],
    },
    {
      day: 5,
      title: 'Day 5: Jaisalmer',
      activities: [
        '0730 hrs: Arrival in Jaisalmer.',
        '0915 hrs: Sightseeing tour of Jaisalmer.',
        '1330 hrs: Lunch at Moomal Hotel.',
        '1530 hrs: Tea and camel ride in the sand dunes of Jaisalmer.',
        '1930 hrs: Royal dinner in the sand dunes with cultural performance.',
        '2300 hrs: Return to Palace on Wheels for onward journey to Jodhpur.',
      ],
      description: `Explore the desert city of Jaisalmer, enjoy a camel ride in the sand dunes, and dine under the stars with a cultural show.`,
      highlights: [
        'Camel ride in the sand dunes of Jaisalmer',
        'Cultural dinner performance in the desert',
        'Sightseeing tour of Jaisalmer’s forts and palaces',
      ],
    },
    {
      day: 6,
      title: 'Day 6: Jodhpur',
      activities: [
        '0700 hrs: Arrival in Jodhpur.',
        '0900 hrs: Sightseeing tour of Jodhpur.',
        '1400 hrs: Lunch at a deluxe resort.',
        '1930 hrs: Dinner aboard Palace on Wheels.',
      ],
      description: `In Jodhpur, visit the Mehrangarh Fort, Umaid Bhawan Palace, and other iconic sites. Enjoy a delicious lunch at a deluxe resort before returning to the train for dinner.`,
      highlights: [
        'Visit Mehrangarh Fort and Umaid Bhawan Palace',
        'Lunch at a luxury resort',
        'Dinner aboard Palace on Wheels',
      ],
    },
    {
      day: 7,
      title: 'Day 7: Bharatpur/Agra',
      activities: [
        '0500 hrs: Arrival at Bharatpur.',
        '0600 hrs: Early morning bird-watching at Keoladeo Ghana National Park.',
        '1030 hrs: Arrival in Agra.',
        '1100 hrs: Sightseeing tour of Agra including Taj Mahal.',
        '2000 hrs: Dinner at a luxury hotel in Agra.',
        '2300 hrs: Return to Palace on Wheels for onward journey to Delhi.',
      ],
      description: `Explore Bharatpur’s Keoladeo Ghana National Park for bird-watching, then proceed to Agra to see the Taj Mahal and enjoy a royal dinner in the city.`,
      highlights: [
        'Bird-watching at Keoladeo Ghana National Park',
        'Visit the Taj Mahal and other historic sites',
        'Dinner at a luxury hotel in Agra',
      ],
    },
    {
      day: 8,
      title: 'Day 8: Departure from Delhi',
      activities: [
        '0400 hrs: Arrival at Safdarjung Railway Station.',
        '0730 hrs: Onboard breakfast and farewell.',
      ],
      description: `Arrive in Delhi and enjoy your final breakfast aboard the Palace on Wheels before completing check-out and returning home.`,
      highlights: [
        'Breakfast onboard the Palace on Wheels',
        'Farewell at Safdarjung Railway Station',
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
              src="/Assets/pow.jpg"
              alt="Luxury Journey of Palace on Wheels"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Luxury Journey of Palace on Wheels
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Experience Royalty on a Legendary Train Journey Across India
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
                    <option>Deluxe AC Cabin</option>
                    <option>Luxury Suite</option>
                    <option>Presidential Suite</option>
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
