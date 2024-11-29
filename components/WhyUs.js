'use client';

import { Briefcase, Users, Hotel, Map } from 'lucide-react';

export default function WhyUs({ mode }) {
  const bgColor = mode === 'business' ? 'bg-gray-100' : 'bg-blue-50';
  
  const features = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Comprehensive Travel Solutions",
      description: "All-inclusive packages for sightseeing, hotels, transport, and meals."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Guidance",
      description: "Knowledgeable guides enhance your experience and assist with any changes."
    },
    {
      icon: <Hotel className="w-8 h-8" />,
      title: "Exceptional Accommodations",
      description: "Stay in top hotels that showcase India's rich culture and hospitality."
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "Personalized Experiences",
      description: "Tailored itineraries to immerse you in India's diverse beauty and traditions."
    }
  ];

  return (
    <section className={`${bgColor} py-16`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}