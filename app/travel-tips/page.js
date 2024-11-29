'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function TravelTips() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const tips = [
    {
      title: 'Indian Visa',
      content: (
        <>
          <p className="text-lg leading-relaxed">
            All foreign nationals entering India are required to have a valid international passport and visa. You can apply for an e-Tourist Visa (eTV) online and receive authorization in advance.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Key Points to Remember:</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>Apply for eTV up to 4 days before your travel date.</li>
            <li>The visa allows a stay of up to 30 days with multiple entries.</li>
            <li>Only 150 countries are eligible for eTV, check eligibility before applying.</li>
            <li>Available at 16 international airports in India.</li>
          </ul>
          <p className="text-lg leading-relaxed mt-4">
            For more details on the process and to apply, visit: 
            <a href="https://indianvisaonline.gov.in/visa/tvoa.html" className="text-blue-600">Indian Visa Portal</a>.
          </p>
        </>
      ),
    },
    {
      title: 'Health Regulations',
      content: (
        <>
          <p className="text-lg leading-relaxed">
            Ensure you are healthy and safe during your trip by following these health guidelines:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>Carry a yellow fever vaccination certificate if traveling from endemic areas.</li>
            <li>Drink only bottled or purified water to avoid waterborne diseases.</li>
            <li>Eat only hygienic food to prevent foodborne illnesses.</li>
          </ul>
          <p className="text-lg leading-relaxed mt-4">
            India has excellent hospitals in major cities. It’s always a good idea to carry basic medication with you.
          </p>
        </>
      ),
    },
    {
      title: 'Weather & Clothing',
      content: (
        <>
          <h3 className="text-xl font-semibold text-gray-800">Understanding the Seasons:</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li><strong>Winter (Dec–Mar):</strong> Temperatures can drop to 10°C in the north. Light woolens recommended.</li>
            <li><strong>Summer (Apr–Jun):</strong> It can get hot with temperatures rising up to 45°C in some regions. Light cotton clothing is best.</li>
            <li><strong>Monsoon (Jul–Sep):</strong> Rainy season with high humidity. Waterproof clothes are essential.</li>
            <li><strong>Autumn (Oct–Nov):</strong> Mild temperatures, ideal for light clothing and outdoor activities.</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Packing Tips:</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>For summer, pack breathable cotton clothes.</li>
            <li>For winter, don't forget woolens and warm clothes for northern regions.</li>
            <li>Always carry sturdy shoes for long walks and exploring.</li>
          </ul>
          <p className="text-lg leading-relaxed mt-4">
            When visiting religious sites, it's customary to cover your head with a scarf or handkerchief.
          </p>
        </>
      ),
    },
    {
      title: 'Shopping Tips',
      content: (
        <>
          <p className="text-lg leading-relaxed">
            India is a shopping paradise, offering a wide variety of goods, from fabrics and silverware to antiques and spices. Here’s what you shouldn’t miss:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li><strong>Handcrafted Fabrics & Jewelry:</strong> Beautifully woven silks, cottons, and intricately designed jewelry.</li>
            <li><strong>Spices & Teas:</strong> Pick up authentic Indian spices and loose teas to take home.</li>
            <li><strong>Antiques:</strong> Be cautious when purchasing antiques—anything over 100 years old is restricted for export.</li>
            <li><strong>Traditional Art & Craft:</strong> Look out for local artwork, handicrafts, and sculptures.</li>
          </ul>
          <p className="text-lg leading-relaxed mt-4">
            Bargaining is common in local markets, so feel free to negotiate for a better deal. Always check prices at government-run emporiums for fixed pricing.
          </p>
        </>
      ),
    },
    {
      title: 'Customs & Currency',
      content: (
        <>
          <h3 className="text-xl font-semibold text-gray-800">Customs Regulations:</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>You must declare foreign currency in excess of $5,000 (cash or traveler's cheques) at customs.</li>
            <li>Any amount beyond $5,000 must be declared using a prescribed form.</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Currency in India:</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>The local currency is Indian Rupees (INR), with denominations of ₹5, ₹10, ₹20, ₹50, ₹100, ₹500, and ₹1000.</li>
            <li>Credit and debit cards (Visa, MasterCard, Amex) are widely accepted in hotels, restaurants, and shops.</li>
            <li>Currency exchange facilities are available in banks, hotels, and ATMs.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Transport & Guides',
      content: (
        <>
          <p className="text-lg leading-relaxed">
            Taxis and guides are readily available to help you navigate the country with ease:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>Taxis are available 24/7. You can call for an air-conditioned radio taxi at various phone numbers or book one through the hotel concierge.</li>
            <li>Always use official guides to ensure the best experience. Check their credentials before hiring.</li>
            <li>Be cautious when traveling alone at night. Stick to well-lit areas and public places.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Safety & Security',
      content: (
        <>
          <p className="text-lg leading-relaxed">
            Safety is a priority for every traveler, and being prepared can help you enjoy a worry-free trip:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>Stay aware of your surroundings and respect local customs.</li>
            <li>Avoid disclosing your travel plans to strangers.</li>
            <li>Keep valuables locked up and only carry necessary cash.</li>
            <li>Travel in groups, especially at night. Use trusted transport services.</li>
            <li>Always carry a copy of important documents like your passport and visa.</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        <section>
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Travel Tips For Your India Trip</h1>
          <div className="space-y-6">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full px-6 py-4 text-left flex justify-between items-center ${
                    openIndex === index
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-white text-gray-800'
                  } font-medium text-lg`}
                >
                  {tip.title}
                  <span
                    className={`transform transition-transform ${
                      openIndex === index ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 text-gray-700 bg-gray-50">
                    {tip.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
