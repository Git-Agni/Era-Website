'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-16">
        {/* Heading Section */}
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h1>
        </div>

        {/* Info Cards Section */}
        <div className="max-w-4xl mx-auto px-4 grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {/* Telephone No Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 transition transform hover:scale-105">
            <Phone className="w-8 h-8 text-green-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Telephone No.</h2>
              <p className="text-gray-600">+91-11-45637449</p>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 transition transform hover:scale-105">
            <Phone className="w-8 h-8 text-green-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">WhatsApp</h2>
              <p className="text-gray-600">+91-98105 31962</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 transition transform hover:scale-105">
            <Mail className="w-8 h-8 text-green-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Email Address</h2>
              <p className="text-gray-600">eratours@hotmail.com</p>
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 transition transform hover:scale-105">
            <MapPin className="w-8 h-8 text-green-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Address</h2>
              <p className="text-gray-600">
                ERA TOURS & TRAVELS (I) PVT. LTD.<br />
                Office No. DGL 107, 01st Floor, The Galleria, DLF Mayur Vihar, Plot no. 01B, DDA District Centre,<br />
                Mayur Vihar Phase 1 Extn. (Near Mayur Vihar Extn. Metro Station),<br />
                New Delhi - 110091, India
              </p>
            </div>
          </div>
        </div>

        {/* Google Form Section */}
        <div className="max-w-4xl mx-auto mt-12 px-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Send Enquiry</h2>
          <p className="text-center text-gray-600 text-lg mb-8">
            Contact Our Tour Planner - Just Fill In The Form And We Will Get Back To You With A Custom Made Tour Plan.
          </p>

          {/* Embedded Google Form */}
          <section className="bg-white shadow-lg rounded-lg p-8">
            <div className="relative w-full overflow-hidden rounded-lg">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeFgBZh0UzyLfOVsh6gjZBMmGzPOCNf_Jx8ZtdNVrGxkp6yug/viewform?embedded=true"
                width="640"
                height="785"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className="w-full h-[700px] border-none"
                style={{ backgroundColor: '#C6E7FF' }}
                title="Enquiry Form"
              >
                Loading…
              </iframe>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
