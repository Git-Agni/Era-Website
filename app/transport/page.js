'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BookTransport() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto p-6 space-y-12">
        {/* Page Header */}
        <section className="space-y-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900">Hire Transport</h1>
          <p className="text-lg text-gray-700 mt-4">
            Unbeatable Deals For Room Reservation, Wedding Group, And Corporate Conference.
          </p>
        </section>

        {/* Embedded Google Form */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Hire Transport</h2>
          <p className="text-center text-gray-600 mb-6">
            Submit your transport booking details below to get the best deals.
          </p>

          <div className="relative w-full overflow-hidden rounded-lg">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc9LBjdy1H4nB0IqXaZY1F-tRPo2Xhf9_hJwuy7ND4qGW9-uA/viewform?embedded=true"
              width="640"
              height="785"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="w-full h-[700px] border-none"
              style={{ backgroundColor: '#96C9F4' }}
              title="Transport Booking Form"
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
