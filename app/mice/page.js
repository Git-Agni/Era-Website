'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function MICEPage() {
  return (
    <div>
      <Navbar />
      
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Heading */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">MICE Services</h2>
        </section>

        {/* Meetings Section */}
        <section className="space-y-6 flex items-center">
          <div className="w-full md:w-1/2 mr-6">
            <h3 className="text-2xl font-semibold text-gray-800">Meetings</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              We offer comprehensive meeting solutions, collaborating with diverse organizations to deliver a seamless experience. From arranging venues in luxury hotels to handling all associated services, we ensure every detail is expertly managed.
            </p>
          </div>
          <div className="w-full md:w-1/2 ml-6">
            <img src="/Assets/m.jpg" alt="Meetings" className="w-3/4" />
          </div>
        </section>

        {/* Incentives Section */}
        <section className="space-y-6 flex items-center flex-row-reverse">
          <div className="w-full md:w-1/2 mr-6">
            <h3 className="text-2xl font-semibold text-gray-800">Incentives</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Motivation drives growth, and we understand how important it is to recognize the efforts of employees, suppliers, and clients. Our customized travel programs and tailored activities are designed to reward and motivate, enhancing relationships and driving success.
            </p>
          </div>
          <div className="w-full md:w-1/2 ml-6">
            <img src="/Assets/i.jpg" alt="Incentives" className="w-3/4" />
          </div>
        </section>

        {/* Conferences Section */}
        <section className="space-y-6 flex items-center">
          <div className="w-full md:w-1/2 mr-6">
            <h3 className="text-2xl font-semibold text-gray-800">Conferences</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Era Tours has built a reputation for handling international conferences, such as ASEAN meetings and specialized events like Rheumatology Conferences. Whether hosting at renowned hotels, convention centers, or unique venues near airports, we take pride in delivering flawless logistics and high-quality service.
            </p>
          </div>
          <div className="w-full md:w-1/2 ml-6">
            <img src="/Assets/c.jpg" alt="Conferences" className="w-3/4" />
          </div>
        </section>

        {/* Events Section */}
        <section className="space-y-6 flex items-center flex-row-reverse">
          <div className="w-full md:w-1/2 mr-6">
            <h3 className="text-2xl font-semibold text-gray-800">Events</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Since our founding in 1997, Era Tours has been delivering exceptional event management services. From exhibitions for industries like Pharma and Agriculture to other high-end sector needs, we handle all logistical details, including stall creation, catering, interpreters, media services, and more, ensuring a memorable event experience for all involved.
            </p>
          </div>
          <div className="w-full md:w-1/2 ml-6">
            <img src="/Assets/e.jpg" alt="Events" className="w-3/4" />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
