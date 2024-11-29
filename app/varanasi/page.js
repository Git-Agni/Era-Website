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
      title: 'Day 1: Arrival in Delhi',
      activities: [
        'Arrive at Delhi airport/railway station.',
        'Transfer to a pre-booked hotel for check-in and relaxation.',
        'Spend the evening exploring shopping malls, street markets, or trying local street food.',
      ],
      description: `Welcome to Delhi! Spend your day at leisure, exploring the vibrant metropolitan city. From world-class shopping malls to bustling street markets offering mouth-watering food, Delhi has it all.`,
      highlights: [
        'Traditional welcome and comfortable accommodations',
        'Vibrant street markets and delicious street food',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Sightseeing in Delhi',
      activities: [
        'Morning visit to Raj Ghat and Jama Masjid.',
        'Post-lunch visit to Humayun’s Tomb and Qutub Minar.',
        'Drive past Parliament House, Rashtrapati Bhawan, and Diplomatic Enclaves.',
      ],
      description: `Explore Delhi’s heritage, showcasing Mughal and Sultanate architecture. Visit iconic landmarks like Raj Ghat, Jama Masjid, Humayun’s Tomb, and Qutub Minar. Enjoy a mix of historic splendor and modern infrastructure.`,
      highlights: [
        'Visit UNESCO World Heritage Sites: Humayun’s Tomb and Qutub Minar',
        'Admire Mughal-era architecture at Jama Masjid',
        'Drive past Parliament House and Rashtrapati Bhawan',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Delhi to Jaipur',
      activities: [
        'Drive to Jaipur, the Pink City of Rajasthan.',
        'Check in to your hotel and relax.',
        'Explore local bazaars for traditional souvenirs.',
      ],
      description: `Travel to Jaipur, known for its majestic forts and colorful bazaars. Unwind at your hotel or enjoy a stroll through the city’s vibrant markets.`,
      highlights: [
        'Explore Jaipur’s famous bazaars',
        'Relax in comfortable accommodations',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Sightseeing in Jaipur',
      activities: [
        'Morning visit to Amber Fort, with an optional elephant ride.',
        'Post-lunch visit to Jaigarh Fort, City Palace, and Jantar Mantar.',
        'Evening cultural performances at Choki Dhani village.',
      ],
      description: `Discover Jaipur’s rich heritage. From the grandeur of Amber Fort to the astronomical marvel of Jantar Mantar, immerse yourself in the royal charm of the Pink City.`,
      highlights: [
        'Enjoy an elephant ride at Amber Fort',
        'Visit UNESCO World Heritage Site: Jantar Mantar',
        'Experience cultural performances at Choki Dhani',
      ],
    },
    {
      day: 5,
      title: 'Day 5: Jaipur to Agra (via Fatehpur Sikri)',
      activities: [
        'Drive to Agra, visiting Fatehpur Sikri en route.',
        'Explore the Buland Darwaza and other monuments in Fatehpur Sikri.',
        'Check in to your hotel and explore Agra’s handicrafts markets.',
      ],
      description: `En route to Agra, stop at Fatehpur Sikri, a UNESCO site built by Emperor Akbar. In Agra, enjoy exploring the city’s renowned handicrafts.`,
      highlights: [
        'Visit Fatehpur Sikri, including Buland Darwaza',
        'Explore Agra’s local markets',
      ],
    },
    {
      day: 6,
      title: 'Day 6: Sightseeing in Agra',
      activities: [
        'Early morning visit to Taj Mahal.',
        'Visit Agra Fort and optionally Itmad-ud-Daula’s tomb.',
      ],
      description: `Begin your day with a sunrise view of the Taj Mahal, followed by a visit to the grand Agra Fort. Optional visit to Itmad-ud-Daula’s tomb for a closer look at Mughal architecture.`,
      highlights: [
        'Witness the stunning Taj Mahal at sunrise',
        'Explore UNESCO World Heritage Site: Agra Fort',
        'Optional visit to Itmad-ud-Daula’s tomb (Mini Taj)',
      ],
    },
    {
      day: 7,
      title: 'Day 7: Agra to Orchha and Khajuraho',
      activities: [
        'Board a train to Jhansi, followed by a road trip to Orchha.',
        'Visit Jehangir Mahal, Raj Mahal, and Laxmi Narayan Temple.',
        'Continue the journey to Khajuraho for an overnight stay.',
      ],
      description: `From Agra, travel to Orchha, known for its palaces and temples, before heading to Khajuraho. Enjoy the architectural beauty of the Chandella dynasty.`,
      highlights: [
        'Visit historic Orchha monuments like Jehangir Mahal',
        'Overnight stay in Khajuraho',
      ],
    },
    {
      day: 8,
      title: 'Day 8: Khajuraho to Varanasi',
      activities: [
        'Morning visit to Khajuraho temples: Kandariya Mahadev, Devi Jagdambi, and others.',
        'Fly to Varanasi and transfer to your hotel.',
      ],
      description: `Explore Khajuraho’s temples, famous for their intricate carvings. Later, fly to Varanasi, a spiritual hub in India.`,
      highlights: [
        'Explore the Kandariya Mahadev Temple in Khajuraho',
        'Visit clusters of Hindu and Jain temples',
      ],
    },
    {
      day: 9,
      title: 'Day 9: Sightseeing in Varanasi',
      activities: [
        'Early morning boat ride on the Ganges.',
        'Visit Sarnath and explore Dhamek Stupa, Sarnath Museum, and Chaukhandi Stupa.',
        'In Varanasi, visit Alamgir Mosque, Dashashwamedh Ghat, and Bharat Mata Temple.',
      ],
      description: `Start your day with a sacred boat ride on the Ganges. Visit Sarnath, where Lord Buddha delivered his first sermon, and explore Varanasi’s spiritual and historical sites.`,
      highlights: [
        'Sacred boat ride on the Ganges',
        'Visit Sarnath and Dashashwamedh Ghat',
        'Explore Varanasi’s religious heritage',
      ],
    },
    {
      day: 10,
      title: 'Day 10: Varanasi to Delhi',
      activities: [
        'Fly back to Delhi and check into a hotel.',
        'Spend the evening exploring nearby attractions or relaxing.',
      ],
      description: `Return to Delhi and enjoy your evening at leisure. Discover nearby attractions or relax before concluding your journey.`,
      highlights: [
        'Convenient flight to Delhi',
        'Leisure time for exploration or relaxation',
      ],
    },
    {
      day: 11,
      title: 'Day 11: Delhi Departure',
      activities: ['Transfer to the international airport for your onward journey.'],
      description: `Conclude your journey with beautiful memories as you depart from Delhi.`,
      highlights: [
        'Hassle-free transfer to the airport',
        'Cherished memories of the tour',
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
              src="/Assets/varanasi.jpg"
              alt="Triangle Package with Varanasi and Khajuraho"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Triangle Package with Varanasi and Khajuraho
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Explore the Spiritual and Architectural Marvels of India
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
