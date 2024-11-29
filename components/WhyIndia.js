'use client';

import { Briefcase, Users, Hotel, Map } from 'lucide-react';

export default function WhyIndia({ mode }) {
  const bgColor = mode === 'business' ? 'bg-blue-50' : 'bg-green-50';

  const features = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Rich Cultural Heritage",
      description: "Explore India’s iconic landmarks like the Taj Mahal, Jaipur’s palaces, and ancient temples that tell stories of a vibrant history."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Diverse Natural Beauty",
      description: "From the snow-capped Himalayas to serene beaches in Goa, India offers breathtaking landscapes for every traveler."
    },
    {
      icon: <Hotel className="w-8 h-8" />,
      title: "World-Class Hospitality",
      description: "Experience luxury and comfort in India’s top-rated hotels and resorts, renowned for their warmth and exceptional service."
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "Authentic Culinary Delights",
      description: "Savor a wide range of cuisines, from spicy street food to rich regional flavors, showcasing India's culinary diversity."
    }
  ];

  return (
    <section className={`${bgColor} py-16`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Travel to India?
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          Discover the allure of India, a land where ancient traditions blend with modern innovations. Perfect for leisure and business travelers alike, India promises unforgettable experiences.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
