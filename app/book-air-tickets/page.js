'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BookAirTickets() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto p-6 space-y-12">
        {/* Page Header */}
        <section className="space-y-6 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">Book Affordable Air Tickets</h1>
          <p className="text-lg text-gray-700 mt-4">
            Discover unbeatable deals on domestic and international flights. Fill in the details below to check availability and book your tickets seamlessly.
          </p>
        </section>

        {/* Styled Google Form Embed */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Check Availability</h2>
          <p className="text-center text-gray-600 mb-6">
            Submit your booking details to get the best rates on flights.
          </p>

          <div className="relative w-full overflow-hidden rounded-lg">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScBFSf0d8hZqFjbvEo8oA7fEgaYBV07VNEC6B_h5UekMOgTUA/viewform?embedded=true"
              width="640"
              height="785"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="w-full h-[700px] border-none"
              style={{ backgroundColor: '#B7E0FF' }}
              title="Air Ticket Booking Form"
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
