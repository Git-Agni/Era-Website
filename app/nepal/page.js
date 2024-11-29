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
      title: 'Day 1: Arrival in Kathmandu',
      activities: [
        'Arrive at Tribhuvan International Airport in Kathmandu.',
        'Transfer to the hotel and check-in.',
        'Rest and relax at the hotel.',
        'Explore the city at leisure.',
      ],
      description: `Arrive in Kathmandu, the cultural hub of Nepal. Check into your hotel and spend the day relaxing. Enjoy the peaceful ambiance of this city, which is a blend of tradition and modernity.`,
      highlights: [
        'Traditional cultural experience in Kathmandu',
        'Restful start to your Nepal adventure',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Kathmandu City Tour',
      activities: [
        'Visit Pashupatinath Temple, dedicated to Lord Shiva.',
        'Explore Bouddhanath Stupa, the largest Buddhist structure.',
        'Visit Patan Durbar Square, a UNESCO World Heritage Site.',
        'Tour the Swayambhunath Stupa (Monkey Temple).',
      ],
      description: `Embark on a full-day city tour to explore Kathmandu’s historical and cultural sites, including the sacred Pashupatinath Temple, Bouddhanath Stupa, Patan Durbar Square, and the famous Swayambhunath Stupa.`,
      highlights: [
        'Visit UNESCO World Heritage sites',
        'Experience Hindu and Buddhist religious landmarks',
        'Explore Patan’s cultural heritage',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Kathmandu to Chitwan',
      activities: [
        'Drive to Chitwan, home to the first national park in Nepal.',
        'Check into the hotel and rest.',
        'Enjoy a wildlife safari in Chitwan National Park.',
        'Elephant ride and nature walk.',
      ],
      description: `Travel to Chitwan, a UNESCO World Heritage Site known for its rich wildlife. Experience thrilling safaris to spot one-horned rhinos, Bengal tigers, crocodiles, and a variety of birds.`,
      highlights: [
        'Safari in Chitwan National Park',
        'Elephant ride and nature walk',
        'Spot endangered wildlife and exotic birds',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Chitwan to Pokhara',
      activities: [
        'Drive to Pokhara, a scenic town surrounded by mountains.',
        'Check into your hotel and relax.',
        'Visit the Binsabasini Temple and Devi’s Falls.',
        'Explore the sacred Gupteshwar Cave.',
      ],
      description: `Travel to Pokhara, a picturesque town in the foothills of the Himalayas. Visit Devi’s Falls and the sacred Gupteshwar Cave. Enjoy the tranquil atmosphere of the lakeside city.`,
      highlights: [
        'Sightseeing tour of Pokhara',
        'Visit Devi’s Falls and Gupteshwar Cave',
        'Relax by the peaceful Phewa Lake',
      ],
    },
    {
      day: 5,
      title: 'Day 5: Pokhara to Nagarkot',
      activities: [
        'Drive from Pokhara to Kathmandu.',
        'Transfer to Nagarkot for panoramic views of the Himalayas.',
        'Relax at your hotel and enjoy the beautiful surroundings.',
        'Evening sightseeing in Nagarkot.',
      ],
      description: `Head towards Nagarkot for an unforgettable experience of panoramic mountain views, including Mount Everest. Enjoy the serenity of this hill station and a peaceful evening amid nature.`,
      highlights: [
        'Breathtaking views of Mount Everest and the Himalayas',
        'Relaxing environment for leisure and sightseeing',
      ],
    },
    {
      day: 6,
      title: 'Day 6: Nagarkot to Kathmandu (Departure)',
      activities: [
        'Morning breakfast at the hotel.',
        'Transfer to Kathmandu airport for your return flight.',
      ],
      description: `After breakfast, transfer back to Kathmandu for your flight home, concluding your amazing journey through Nepal.`,
      highlights: [
        'Final views of the Himalayas from Nagarkot',
        'Smooth transfer to Kathmandu for departure',
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
              src="/Assets/nepal.jpg"
              alt="The Best of Nepal"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                The Best of Nepal
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                A Cultural and Scenic Journey Through Nepal
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
