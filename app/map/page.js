'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Map() {
  return (
    <div>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">
            <span className="uppercase text-green-600 font-semibold text-sm">India Map</span>
            <br />
            Places To Visit In India
          </h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        {/* Map Section */}
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="/Assets/map.jpg"
            alt="India Map"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Additional Content Section */}
        <section className="space-y-6 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            India is a land of diversity and culture, offering countless attractions to explore.
            From the serene mountains in the north to the tropical beaches in the south, every
            region has its unique charm. Use this map to discover iconic places to visit and plan
            your next adventure.
          </p>
          <a
            href="#"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-600 transition duration-300"
          >
            Explore More Destinations
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
}
