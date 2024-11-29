'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BookHotels() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto p-6 space-y-12">
        {/* Page Header */}
        <section className="space-y-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900">Book Your Hotel Stay</h1>
          <p className="text-lg text-gray-700 mt-4">
            Secure the best hotel deals for your next trip.
          </p>
        </section>

        {/* Embedded Google Form */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Check Availability</h2>
          <p className="text-center text-gray-600 mb-6">
            Fill in your details below to book your stay seamlessly.
          </p>

          <div className="relative w-full overflow-hidden rounded-lg">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSctZdbyuTUrEd3Ogu71XQ4Bbc9FDHawxWzgK9LM6Ep9HcN0Ow/viewform?embedded=true" 
              width="640"
              height="785"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="w-full h-[700px] border-none"
              style={{ backgroundColor:'#D1E9F6' }}
              title="Hotel Booking Form"
            >
              Loading…
            </iframe>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
