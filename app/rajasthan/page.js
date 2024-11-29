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
      title: 'Day 1: Delhi to Udaipur (Night Stay)',
      activities: [
        'Arrival at IGI Airport Delhi',
        'Transfer to Udaipur Hotel',
        'Visit Lake Pichola',
        'Explore Udaipur City Palace',
      ],
      description: `Start your journey from Delhi and arrive in Udaipur, famously known as the 'Venice of the East.' Explore the serene Lake Pichola and the grand Udaipur City Palace. Immerse yourself in the city's vibrant history and culture.`,
      highlights: [
        'Picturesque Lake Pichola',
        'Majestic City Palace',
        'Comfortable overnight stay in Udaipur',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Udaipur to Mount Abu (Night Stay)',
      activities: [
        'Transfer to Mount Abu',
        'Visit Achalgarh Fort',
        'Relax by Nakki Lake',
        'Explore Dilwara Jain Temple',
      ],
      description: `Head to Mount Abu, the only hill station in Rajasthan. Discover the serene Nakki Lake and the architectural brilliance of Dilwara Jain Temple. Relax amidst the cool and tranquil ambiance of this hill retreat.`,
      highlights: [
        'Hill station vibes',
        'Sacred Nakki Lake',
        'Marble marvels of Dilwara Temple',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Mount Abu to Jodhpur (Night Stay)',
      activities: [
        'Transfer to Jodhpur',
        'Explore Mehrangarh Fort',
        'Visit Jaswant Thada',
      ],
      description: `Travel to the historic city of Jodhpur, known as the 'Blue City.' Explore the majestic Mehrangarh Fort and the serene Jaswant Thada memorial.`,
      highlights: [
        'Breathtaking views from Mehrangarh Fort',
        'Intricate architecture of Jaswant Thada',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Jodhpur to Jaisalmer (Night Stay)',
      activities: [
        'Transfer to Jaisalmer',
        'Visit Patwon Ki Haveli',
        'Explore Jaisalmer Fort',
        'Desert Safari at Sam Sand Dunes',
      ],
      description: `Arrive in Jaisalmer, the 'Golden City' of Rajasthan. Experience the desert lifestyle at Sam Sand Dunes and explore the iconic Jaisalmer Fort.`,
      highlights: [
        'Heritage haveli tour',
        'Desert safari adventure',
        'Golden sandstone architecture',
      ],
    },
    {
      day: 5,
      title: 'Day 5: Jaisalmer to Khimsar (Night Stay)',
      activities: [
        'Transfer to Khimsar',
        'Explore Khimsar Fort',
        'Relax at Khimsar Dunes',
      ],
      description: `Travel to Khimsar, where history and tranquility merge seamlessly. Explore the stunning Khimsar Fort and unwind amidst the rustic beauty of Khimsar Dunes.`,
      highlights: [
        'Historic Khimsar Fort',
        'Camel-back rides at dunes',
      ],
    },
    {
      day: 6,
      title: 'Day 6: Khimsar to Ajmer (Night Stay)',
      activities: [
        'Transfer to Ajmer',
        'Visit Ajmer Sharif Dargah',
      ],
      description: `Experience the spiritual essence of Ajmer by visiting the revered Ajmer Sharif Dargah. Discover the charm of this culturally rich city.`,
      highlights: [
        'Sufi pilgrimage site',
        'Serene ambiance at Ajmer Dargah',
      ],
    },
    {
      day: 7,
      title: 'Day 7: Ajmer to Pushkar to Ajmer (Night Stay)',
      activities: [
        'Visit Pushkar Lake',
        'Explore Brahma Temple',
      ],
      description: `Take a short trip to Pushkar, the holy town known for its sacred lake and the iconic Brahma Temple. Soak in the spiritual and peaceful aura of this charming place.`,
      highlights: [
        'Sacred Pushkar Lake',
        'One-of-a-kind Brahma Temple',
      ],
    },
    {
      day: 8,
      title: 'Day 8: Ajmer to Jaipur (Night Stay)',
      activities: [
        'Transfer to Jaipur',
        'Explore Nahargarh Fort',
        'Visit Jal Mahal',
      ],
      description: `Travel to Jaipur, the 'Pink City,' and delve into its royal splendor. Explore Nahargarh Fort for panoramic views and the enchanting Jal Mahal set amidst the Man Sagar Lake.`,
      highlights: [
        'Scenic views from Nahargarh Fort',
        'Unique water palace experience',
      ],
    },
    {
      day: 9,
      title: 'Day 9: Jaipur (Night Stay)',
      activities: [
        'Visit Amber Fort',
        'Explore Hawa Mahal',
        'Discover Jaipur City Palace',
        'Marvel at Jantar Mantar Observatory',
      ],
      description: `Immerse yourself in Jaipur's rich heritage. Visit the magnificent Amber Fort, Hawa Mahal, and City Palace, and explore the astronomical wonders at Jantar Mantar.`,
      highlights: [
        'Intricate designs of Amber Fort',
        'Iconic Hawa Mahal architecture',
        'Astronomical instruments at Jantar Mantar',
      ],
    },
    {
      day: 10,
      title: 'Day 10: Jaipur to Delhi',
      activities: [
        'Return journey to Delhi',
        'Transfer to airport/railway station',
      ],
      description: `Conclude your journey with a transfer back to Delhi. Cherish the memories of an unforgettable Royal Rajasthan Tour.`,
      highlights: [
        'Smooth return journey',
        'Memories of Rajasthan’s grandeur',
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
              src="/Assets/rajasthan.jpg" // Ensure the path is correct
              alt="Royal Rajasthan Tour"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Royal Rajasthan Tour
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                A Majestic Journey Across the Land of Kings
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