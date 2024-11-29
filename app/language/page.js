'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function LanguageInterpreter() {
  return (
    <div>
      <Navbar />
      
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Language Interpreter Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Expert Language Interpreter Services for Your Travel Needs</h2>
          
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              Traveling to a foreign country can be a rewarding experience, but communication barriers can often hinder the journey. At Era Tours, we offer professional and highly skilled <strong>language interpreters</strong> who are dedicated to making your trip seamless and enriching.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800">Why Choose Our Language Interpreter Services?</h3>
            <p className="text-lg leading-relaxed">
              Our interpreters are not just language experts—they are also well-versed in local cultures and customs, ensuring you receive a personalized and comprehensive experience. Whether you're on a guided tour or need assistance during business meetings, we have the right expert for you.
            </p>

            <ul className="list-inside list-disc ml-6 space-y-2 text-lg leading-relaxed">
              <li><strong>Regional Guides</strong> - Explore the diverse regions of India with our regional experts, who specialize in North, South, East, and West India.</li>
              <li><strong>Linguistic Guides</strong> - Need assistance in specific languages? Our linguistic guides are fluent in multiple languages and can bridge the communication gap.</li>
              <li><strong>Monument-Specific Guides</strong> - Dive deep into the history and culture of India's iconic monuments with our specialized guides.</li>
              <li><strong>Tour Escorts</strong> - For larger groups or multi-day tours, our experienced tour escorts ensure smooth travel and logistics throughout your journey.</li>
            </ul>

            <p className="text-lg leading-relaxed">
              We always recommend using <strong>company-provided guides and interpreters</strong> to ensure quality, safety, and authenticity during your travels. Our guides are Government-approved and have the expertise to cater to your needs.
            </p>

            <p className="font-semibold text-lg leading-relaxed">
              <strong>As a policy, we exclusively use Government-certified guides and escorts to provide the best and safest experience for our clients.</strong>
            </p>

            <h3 className="text-2xl font-semibold text-gray-800">Book Your Language Interpreter Today!</h3>
            <p className="text-lg leading-relaxed">
              If you're looking for a professional language interpreter for your trip, we make booking easy! Simply <a href="/contact" className="text-blue-500 hover:text-blue-700">get in touch</a> with us in advance, and we will tailor our services to suit your travel needs. Whether it's a simple translation or an in-depth tour, our interpreters are ready to help you connect with the local culture.
            </p>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
