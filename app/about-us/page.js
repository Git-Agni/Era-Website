'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link'; // Import Link for routing

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* About the Company Section */}
        <section className="space-y-4" id="about">
          <h2 className="text-3xl font-bold text-gray-800 ">
            About the Company
          </h2>
          <p className="text-gray-600 leading-7">
            Era Tours & Travels, India, based in New Delhi, has been a trusted name in the travel industry since 1997.
            We specialize in offering personalized tours and services for both international and Indian travelers.
            We are proud to be recognized by the Ministry of Tourism (MOT), Government of India, and are an active member of
            IATO and the ICPB. Join us for a journey of a lifetime.
          </p>
          {/* Link wrapped around the button */}
          <Link href="/certificate">
            <button className="mt-4 px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded shadow-md hover:shadow-lg transition duration-300">
              View Company Certificates
            </button>
          </Link>
        </section>

        {/* Our Mission Section */}
        <section className="space-y-4" id="mission">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Mission
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600">
              <span className="text-orange-500 text-xl mr-2">✔</span>
              Customer satisfaction is our top priority.
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-orange-500 text-xl mr-2">✔</span>
              We provide fast, accurate, and real-time information.
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-orange-500 text-xl mr-2">✔</span>
              Offering affordable prices and value for your money.
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-orange-500 text-xl mr-2">✔</span>
              Tailor-made itineraries to match your preferences.
            </li>
          </ul>
        </section>

        {/* Teamwork Section */}
        <section className="space-y-4" id="teamwork">
          <h2 className="text-3xl font-bold text-gray-800">
            Teamwork
          </h2>
          <p className="text-gray-600 leading-7">
            At Era Tours, we believe in strong teamwork. Our professionals are passionate about sharing their travel experiences
            and providing excellent customer service. Guided by the principle "Atithi Devo Bhava," which translates to "The guest is God,"
            our team ensures you have a memorable and enjoyable journey.
          </p>
        </section>

        {/* What We Do Section */}
        <section className="space-y-4" id="services">
          <h2 className="text-3xl font-bold text-gray-800 ">
            What We Do
          </h2>
          <p className="text-gray-600 leading-7">
            We provide a wide range of travel services tailored to your needs. Whether you're planning a vacation, business trip, or honeymoon,
            we've got you covered. Here's an overview of what we offer:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-2">
              <li className="flex items-start text-gray-600">
                <span className="text-orange-500 text-xl mr-2">✔</span>
                Tour Packages including hotel reservations in India and neighboring countries.
              </li>
              <li className="flex items-start text-gray-600">
                <span className="text-orange-500 text-xl mr-2">✔</span>
                MICE services for Meetings, Incentives, Conferences, and Exhibitions.
              </li>
              <li className="flex items-start text-gray-600">
                <span className="text-orange-500 text-xl mr-2">✔</span>
                Tailor-made tours, business tours, and honeymoon packages.
              </li>
              <li className="flex items-start text-gray-600">
                <span className="text-orange-500 text-xl mr-2">✔</span>
                City tours, leisure trips, and more.
              </li>
              <li className="flex items-start text-gray-600">
                <span className="text-orange-500 text-xl mr-2">✔</span>
                Airport transfers and exhibition conference transfers.
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start text-gray-600">
                <span className="text-orange-500 text-xl mr-2">✔</span>
                Car and luxury transport rentals in India.
              </li>
              <li className="flex items-start text-gray-600">
                <span className="text-orange-500 text-xl mr-2">✔</span>
                Airline and railway reservations at competitive prices.
              </li>
              <li className="flex items-start text-gray-600">
                <span className="text-orange-500 text-xl mr-2">✔</span>
                Multilingual travel guides for most languages.
              </li>
              <li className="flex items-start text-gray-600">
                <span className="text-orange-500 text-xl mr-2">✔</span>
                A variety of cuisines tailored to your taste.
              </li>
              <li className="flex items-start text-gray-600">
                <span className="text-orange-500 text-xl mr-2">✔</span>
                Foreign exchange, visas, and travel insurance services.
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
