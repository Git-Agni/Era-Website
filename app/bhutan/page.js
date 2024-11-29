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
      title: 'Day 1: Arrive in Paro by Druk Air – Transfer to Thimphu',
      activities: [
        'Arrive in Paro by Druk Air.',
        'Transfer to Thimphu, the capital of Bhutan.',
        'Check-in at the hotel and relax.',
      ],
      description: `Arrive in Paro and transfer to Thimphu. Enjoy a comfortable stay in the capital city of Bhutan.`,
      highlights: [
        'Smooth transfer to Thimphu',
        'Relax in the capital city of Bhutan',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Thimphu Sightseeing',
      activities: [
        'Visit National Library, Painting School, Traditional Medicine Institute, Textile and Folk Heritage Museum.',
        'Explore Memorial Chorten, Trashichhodzong, and Handicrafts Emporium.',
      ],
      description: `Spend a full day sightseeing in Thimphu, including visits to Bhutan’s important cultural landmarks such as the National Library and the Memorial Chorten.`,
      highlights: [
        'Explore Bhutan’s rich cultural heritage',
        'Visit the National Library and Painting School',
        'See the sacred Memorial Chorten',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Thimphu to Trongsa (200 km, 6 hours)',
      activities: [
        'Drive via Dochula Pass and stop at Gangkar Puensum.',
        'Visit Chendbji Chorten and continue the drive to Trongsa.',
        'Check-in at the lodge for an overnight stay.',
      ],
      description: `Journey to Trongsa with scenic stops, including Dochula Pass and Chendbji Chorten. Enjoy the panoramic views and visit significant landmarks along the way.`,
      highlights: [
        'Scenic drive via Dochula Pass and Gangkar Puensum',
        'Visit Chendbji Chorten',
        'Stay overnight at a lodge in Trongsa',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Trongsa to Bumthang (68 km, 3 hours)',
      activities: [
        'Visit Trongsa Dzong and Ta Dzong (watch tower).',
        'Drive to Bumthang and explore Kurje Lhakhang, Jambey Lhakhang, and Tamshing Monastery.',
        'Visit Jakar Dzong and Swiss Farm House.',
      ],
      description: `Explore Trongsa Dzong and Ta Dzong before continuing to Bumthang. Visit key temples and monasteries, including Kurje Lhakhang and Jakar Dzong.`,
      highlights: [
        'Visit historic Trongsa Dzong and Ta Dzong',
        'Explore Bumthang’s temples and monasteries',
        'Discover the beauty of Jakar Dzong',
      ],
    },
    {
      day: 5,
      title: 'Day 5: Bumthang to Punakha (205 km, 6 hours)',
      activities: [
        'Drive to Punakha, stopping for lunch in Trongsa.',
        'Visit Wangduephodrang Dzong.',
        'Check-in at the hotel in Punakha.',
      ],
      description: `Drive to Punakha, making stops for scenic views and to explore Wangduephodrang Dzong. Enjoy a relaxing stay in Punakha.`,
      highlights: [
        'Visit the impressive Wangduephodrang Dzong',
        'Enjoy a scenic drive to Punakha',
        'Relax and explore Punakha',
      ],
    },
    {
      day: 6,
      title: 'Day 6: Punakha to Paro (125 km, 4.5 hours)',
      activities: [
        'Visit Punakha Dzong.',
        'Drive to Paro and stop at a traditional Bhutanese farm house.',
        'Check-in at the hotel in Paro.',
      ],
      description: `Visit the magnificent Punakha Dzong before heading to Paro. Experience the traditional Bhutanese lifestyle at a local farm house.`,
      highlights: [
        'Visit the Punakha Dzong at the confluence of two rivers',
        'Discover Bhutanese rural life at a farm house',
        'Relax in the peaceful town of Paro',
      ],
    },
    {
      day: 7,
      title: 'Day 7: Paro Sightseeing',
      activities: [
        'Visit Ta Dzong, the watchtower for Paro Dzong.',
        'Explore Drukgyel Dzong and Kyichu Lhakhang.',
      ],
      description: `Explore the Paro Valley, including visits to Ta Dzong, Drukgyel Dzong, and Kyichu Lhakhang, one of Bhutan’s oldest and most sacred shrines.`,
      highlights: [
        'Explore the historic Ta Dzong watchtower',
        'Visit the sacred Kyichu Lhakhang',
        'Learn about Bhutan’s victory over Tibet at Drukgyel Dzong',
      ],
    },
    {
      day: 8,
      title: 'Day 8: Departure from Paro',
      activities: [
        'Transfer to Paro airport for your onward journey.',
      ],
      description: `Your enchanting Bhutan journey concludes as you depart from Paro airport for your next destination.`,
      highlights: [
        'End your trip with a smooth transfer to Paro Airport',
        'Take home unforgettable memories of Bhutan’s beauty and culture',
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
              src="/Assets/bhutan.jpg"
              alt="Bhutan Splendor"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Bhutan Splendor
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Experience the Culture and Beauty of Bhutan
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
