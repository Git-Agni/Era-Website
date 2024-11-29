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
      title: 'Day 1: Arrival in Varanasi (Kashi)',
      activities: [
        'Arrive at Varanasi airport or railway station.',
        'Transfer to your hotel for check-in and relaxation.',
        'Evening visit to Ganga Aarti at Dashashwamedh Ghat and Durga Kund Temple.',
      ],
      description: `Begin your spiritual journey with a traditional welcome and check-in at your hotel. Experience the mesmerizing Ganga Aarti at Dashashwamedh Ghat.`,
      highlights: [
        'Traditional welcome at Varanasi',
        'Ganga Aarti at Dashashwamedh Ghat',
        'Visit Durga Kund Temple',
      ],
    },
    {
      day: 2,
      title: 'Day 2: Varanasi Sightseeing',
      activities: [
        'Morning boat ride on the Ganges.',
        'Visit Kashi Vishwanath Temple, Annapurna Temple, and Kaal Bhairav Temple.',
        'Visit Sarnath, where Lord Buddha delivered his first sermon.',
      ],
      description: `Enjoy a boat ride on the Ganges to see the Ghats, then explore the holy temples of Varanasi. Visit Sarnath, an important Buddhist site.`,
      highlights: [
        'Sunrise boat ride on the Ganges',
        'Visit Kashi Vishwanath Temple',
        'Explore Sarnath, Dhamekha Stupa, and Chaukhandi Stupa',
      ],
    },
    {
      day: 3,
      title: 'Day 3: Varanasi – Gaya – Bodhgaya (Optional Side Tour)',
      activities: [
        'Drive to Gaya to visit Vishnupaad Temple and perform Pinda Daan rituals.',
        'Visit Bodhgaya and explore the Mahabodhi Temple and Bodhi Tree.',
        'Overnight stay at Bodhgaya.',
      ],
      description: `Optionally, visit Gaya for Pinda Daan rituals and continue to Bodhgaya to visit the Mahabodhi Temple, where Lord Buddha attained enlightenment.`,
      highlights: [
        'Visit Vishnupaad Temple in Gaya',
        'Explore Mahabodhi Temple and Bodhi Tree in Bodhgaya',
        'Optional excursion to Bodhgaya for a spiritual experience',
      ],
    },
    {
      day: 4,
      title: 'Day 4: Varanasi to Ayodhya',
      activities: [
        'Drive to Ayodhya.',
        'Visit Shri Ramjanam Bhoomi, Kanak Bhawan, and Hanuman Garhi.',
      ],
      description: `Travel to Ayodhya, a sacred site of Lord Ram. Visit famous temples and the banks of the Saryu River.`,
      highlights: [
        'Visit Shri Ramjanam Bhoomi and Kanak Bhawan',
        'Explore Hanuman Garhi and Tulsi Smarak',
        'Visit the banks of the Saryu River',
      ],
    },
    {
      day: 5,
      title: 'Day 5: Ayodhya to Prayagraj',
      activities: [
        'Drive to Prayagraj (Allahabad).',
        'Visit Triveni Sangam and take a holy dip.',
        'Visit Allahabad Fort, Anand Bhawan, and Bade Hanuman Ji Temple.',
      ],
      description: `Experience the spiritual significance of Triveni Sangam, the confluence of three holy rivers, and explore historic sites in Prayagraj.`,
      highlights: [
        'Take a dip in the Triveni Sangam',
        'Visit Allahabad Fort and Anand Bhawan',
        'See the Patalpuri Temple and Bade Hanuman Ji Temple',
      ],
    },
    {
      day: 6,
      title: 'Day 6: Prayagraj to Chitrakoot',
      activities: [
        'Full-day excursion to Chitrakoot.',
        'Visit Kamadgiri Temple, Sati Anusuiya Temple, and Ramghat.',
      ],
      description: `Explore the holy town of Chitrakoot, visit Kamadgiri Temple and Sati Anusuiya Temple, and take in the spiritual atmosphere of Ramghat.`,
      highlights: [
        'Visit Kamadgiri Temple and Sati Anusuiya Temple',
        'Explore Ramghat and Gupt Godavari',
        'Visit Spathik Shila and Hanuman Dhara',
      ],
    },
    {
      day: 7,
      title: 'Day 7: Departure from Varanasi',
      activities: [
        'Return to Varanasi and transfer to the railway station or airport for your onward journey.',
      ],
      description: `Conclude your spiritual journey through Kashi, Ayodhya, Prayag, and Chitrakoot with an assisted transfer to your departure point.`,
      highlights: [
        'End the tour with memories of the sacred sites',
        'Transfer to the airport or railway station for departure',
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
              src="/Assets/kashi.jpg"
              alt="Kashi Ayodhya Prayag Tour"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Kashi Ayodhya Prayag Tour
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Explore the Sacred and Spiritual Heart of India
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
