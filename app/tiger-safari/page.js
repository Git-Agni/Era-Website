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
        'Arrive at Delhi airport.',
        'Transfer to your hotel and check-in.',
        'Spend the day at leisure.',
      ],
      description: `Your bird-watching and tiger safari adventure starts in Delhi. After your arrival, enjoy a relaxing day in India’s bustling capital city.`,
      highlights: [
        'Traditional welcome at Delhi airport',
        'Relax and unwind at your hotel',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Explore Delhi',
      activities: [
        'Visit Red Fort and Jama Masjid in Chandni Chowk.',
        'Tour India Gate and Qutub Minar.',
        'Evening shopping at Dilli Haat.',
      ],
      description: `Explore Delhi’s heritage with visits to iconic landmarks like Red Fort and Jama Masjid. In the evening, shop at Dilli Haat for souvenirs.`,
      highlights: [
        'Visit historical sites like Red Fort and Jama Masjid',
        'Explore the bustling streets of Chandni Chowk',
        'Shop for handicrafts at Dilli Haat',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Delhi to Ranthambore',
      activities: [
        'Transfer to the railway station.',
        'Board train to Sawai Madhopur (Ranthambore).',
        'Check-in at your resort near Ranthambore National Park.',
      ],
      description: `Travel to Ranthambore, famous for its tiger safaris. Check-in to your resort and prepare for your exciting wildlife adventure.`,
      highlights: [
        'Travel to Ranthambore by train',
        'Relax at a resort near Ranthambore National Park',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Ranthambore Safari',
      activities: [
        'Morning jeep safari in Ranthambore National Park.',
        'Afternoon wildlife excursion in the park.',
        'Dinner and overnight stay at the resort.',
      ],
      description: `Enjoy a full day of wildlife exploration in Ranthambore National Park. The early morning safari offers the best chance to spot tigers.`,
      highlights: [
        'Morning and evening jeep safaris in Ranthambore',
        'Spot Bengal tigers and other wildlife',
      ],
    },
    {
      day: 5,
      title: 'Day 5: Ranthambore Safari & Fort Visit',
      activities: [
        'Visit Ranthambore Fort.',
        'Afternoon jeep safari to Kachida Valley.',
        'Return to the resort for dinner and overnight stay.',
      ],
      description: `Visit the historic Ranthambore Fort located inside the national park. Enjoy a jeep safari in Kachida Valley to spot leopards and other wildlife.`,
      highlights: [
        'Visit Ranthambore Fort for panoramic views of the jungle',
        'Safari to Kachida Valley for leopards and wildlife sightings',
      ],
    },
    {
      day: 6,
      title: 'Day 6: Ranthambore to Jaipur',
      activities: [
        'Transfer to Jaipur by road.',
        'Check-in at a heritage hotel in Jaipur.',
        'Rest of the day at leisure.',
      ],
      description: `Drive to Jaipur, the capital of Rajasthan, known for its royal history and architectural marvels. Enjoy a relaxing evening at your heritage hotel.`,
      highlights: [
        'Scenic drive to Jaipur',
        'Leisure time to relax in Jaipur',
      ],
    },
    {
      day: 7,
      title: 'Day 7: Explore Jaipur',
      activities: [
        'Morning elephant ride to Amber Fort.',
        'Visit Hawa Mahal and Jal Mahal.',
        'Afternoon visit to Jantar Mantar and City Palace.',
      ],
      description: `Experience the royal heritage of Jaipur with a visit to Amber Fort, Hawa Mahal, and Jantar Mantar. Enjoy a guided tour of the City Palace.`,
      highlights: [
        'Elephant ride to Amber Fort',
        'Visit Hawa Mahal and Jantar Mantar',
        'Tour the City Palace of Jaipur',
      ],
    },
    {
      day: 8,
      title: 'Day 8: Jaipur to Bharatpur',
      activities: [
        'Drive to Bharatpur.',
        'Visit Keoladeo National Park for bird watching.',
        'Return to the hotel for dinner and overnight stay.',
      ],
      description: `Visit Keoladeo National Park, a UNESCO World Heritage Site famous for bird watching. The park is home to over 230 bird species, including Siberian cranes.`,
      highlights: [
        'Bird watching at Keoladeo National Park',
        'Spot rare migratory birds like Siberian cranes',
      ],
    },
    {
      day: 9,
      title: 'Day 9: Bharatpur to Agra',
      activities: [
        'Morning visit to Keoladeo National Park (optional).',
        'Drive to Fatehpur Sikri and explore the Mughal city.',
        'Proceed to Agra and check-in at your hotel.',
      ],
      description: `Visit Fatehpur Sikri, a former Mughal capital, and explore the iconic monuments. In the afternoon, drive to Agra for an overnight stay.`,
      highlights: [
        'Visit the historic Fatehpur Sikri',
        'Explore Agra, home to the Taj Mahal',
      ],
    },
    {
      day: 10,
      title: 'Day 10: Agra Sightseeing',
      activities: [
        'Visit the Taj Mahal and Agra Fort.',
        'Drive to Umaria/Katni to board a train to Bandhavgarh.',
      ],
      description: `Visit the Taj Mahal, one of the Seven Wonders of the World, followed by a tour of the Agra Fort. Then, board an overnight train to Umaria, the nearest station to Bandhavgarh.`,
      highlights: [
        'Visit the Taj Mahal at sunrise',
        'Explore Agra Fort and its historical monuments',
      ],
    },
    {
      day: 11,
      title: 'Day 11: Bandhavgarh Arrival',
      activities: [
        'Arrive at Umaria and transfer to Bandhavgarh.',
        'Check-in at your jungle resort.',
        'Rest of the day at leisure.',
      ],
      description: `Arrive at Bandhavgarh, a famous national park known for its Bengal tiger population. Relax at your jungle resort after the long journey.`,
      highlights: [
        'Arrive at Bandhavgarh National Park',
        'Leisure time to relax at the jungle resort',
      ],
    },
    {
      day: 12,
      title: 'Day 12: Bandhavgarh Safari',
      activities: [
        'Morning and evening jeep safaris in Bandhavgarh National Park.',
        'Spot tigers, leopards, and other wildlife.',
      ],
      description: `Enjoy a full day of safaris in Bandhavgarh National Park. The park is known for its high tiger density, providing excellent opportunities to spot tigers.`,
      highlights: [
        'Morning and evening safaris in Bandhavgarh',
        'Spot Bengal tigers and other wildlife',
      ],
    },
    {
      day: 13,
      title: 'Day 13: Bandhavgarh Safari',
      activities: [
        'Morning and evening safaris to explore the park.',
        'Enjoy a nature walk and bird-watching tour.',
      ],
      description: `Take part in two guided tiger safaris in Bandhavgarh National Park. Explore the wildlife and enjoy bird watching in the park's natural surroundings.`,
      highlights: [
        'Guided tiger safaris in Bandhavgarh',
        'Bird-watching tour to spot various species',
      ],
    },
    {
      day: 14,
      title: 'Day 14: Bandhavgarh to Delhi',
      activities: [
        'Drive to Umaria/Katni and board a train to Delhi.',
        'Dinner on-board and overnight train ride.',
      ],
      description: `Enjoy the final day of the tour with a relaxing journey back to Delhi. Board an overnight train for a comfortable return.`,
      highlights: [
        'Train journey back to Delhi',
        'Dinner on-board and overnight stay',
      ],
    },
    {
      day: 15,
      title: 'Day 15: Arrival in Delhi',
      activities: [
        'Arrive in Delhi and check-in at the hotel.',
        'Breakfast and leisure time until your flight back home.',
        'Transfer to Delhi airport for your departure.',
      ],
      description: `Conclude your wildlife adventure with breakfast and leisure time in Delhi before heading to the airport for your onward journey.`,
      highlights: [
        'End the tour with cherished memories',
        'Transfer to Delhi airport for your return flight',
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
              src="/Assets/tiger.jpg"
              alt="Bird Watching & Tiger Safari Tour"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Bird Watching & Tiger Safari Tour
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Explore the Wildlife of India on a Memorable Safari Adventure
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
