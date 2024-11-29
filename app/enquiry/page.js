'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Enquiry() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto p-6 space-y-12">
        {/* Send Enquiry Section */}
        <section className="space-y-8">
          <h1 className="text-4xl font-bold text-center text-gray-800">Send Enquiry</h1>
          <p className="text-center text-gray-600 text-lg">
            Contact Our Tour Planner - Just Fill In The Form And We Will Get Back To You With A Custom Made Tour Plan.
          </p>

          {/* Embedded Google Form */}
          <section className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Enquiry Form</h2>
            <div className="relative w-full overflow-hidden rounded-lg">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeFgBZh0UzyLfOVsh6gjZBMmGzPOCNf_Jx8ZtdNVrGxkp6yug/viewform?embedded=true"
                width="640"
                height="785"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className="w-full h-[700px] border-none"
                style={{ backgroundColor: '#B7C9F2' }}
                title="Enquiry Form"
              >
                Loading…
              </iframe>
            </div>
          </section>
        </section>
      </div>

      <Footer />
    </div>
  );
}
