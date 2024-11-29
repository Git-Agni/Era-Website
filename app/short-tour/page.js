'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ShortTours() {
  return (
    <div>
      <Navbar />
      
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Short Tours Section */}
        <section className="space-y-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Short Tours</h2>
          <p className="text-lg text-gray-700 mt-4">
            Interesting and Intriguing, India offers incredible holiday experiences through its cultural, topography, and wildlife diversity. Explore these amazing and unique destinations with our specially curated short tours.
          </p>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
            {/* Goa Tour Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="Assets/goa.jpg
              " alt="Goa" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">Goa Tours (D5)</h3>
                <p className="text-gray-600">04 Nights / 05 Days</p>
                <p className="text-gray-600">Goa</p>
                <a href="/goa" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white text-center rounded-full hover:bg-blue-700">View Details</a>
              </div>
            </div>

            {/* Golden Triangle Tour Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="Assets/agra.jpg" alt="Golden Triangle" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">Golden Triangle Tour (D2)</h3>
                <p className="text-gray-600">05 Nights / 06 Days</p>
                <p className="text-gray-600">Delhi - Agra - Jaipur</p>
                <a href="/golden-triangle" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white text-center rounded-full hover:bg-blue-700">View Details</a>
              </div>
            </div>

            {/* Corbett Weekend Tour Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="Assets/jim.jpg" alt="Corbett" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">Corbett Weekend Tour (D6)</h3>
                <p className="text-gray-600">02 Nights / 03 Days</p>
                <p className="text-gray-600">Corbett Park</p>
                <a href="/corbett-park" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white text-center rounded-full hover:bg-blue-700">View Details</a>
              </div>
            </div>

            {/* Shimla Manali Tour Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="Assets/shimla.jpg" alt="Shimla Manali" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">Shimla Manali Naldhera And Kasol Tour (D7)</h3>
                <p className="text-gray-600">04 Nights / 05 Days</p>
                <p className="text-gray-600">Delhi – Shimla – Manali – Kasol – Naldhera – Delhi</p>
                <a href="/shimla" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white text-center rounded-full hover:bg-blue-700">View Details</a>
              </div>
            </div>

            {/* Tirupati Weekend Tour Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="Assets/tpb.jpg" alt="Tirupati" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">Tirupati Weekend Tour (D9)</h3>
                <p className="text-gray-600">02 Nights / 03 Days</p>
                <p className="text-gray-600">Chennai - Tirupati - Chennai</p>
                <a href="/tirupati" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white text-center rounded-full hover:bg-blue-700">View Details</a>
              </div>
            </div>

            {/* Rishikesh Shivpuri Package Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="Assets/rs.jpg" alt="Rishikesh" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">Rishikesh / Shivpuri Package (D16)</h3>
                <p className="text-gray-600">01 Night / 02 Days</p>
                <p className="text-gray-600">Rishikesh - Shivpuri</p>
                <a href="/shivpuri-rishikesh" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white text-center rounded-full hover:bg-blue-700">View Details</a>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
