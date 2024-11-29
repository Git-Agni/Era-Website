'use client';

import Link from 'next/link';

export default function TopDestinations() {
  const destinations = [
    {
      name: "Rajasthan",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80",
      description: "Experience royal heritage",
      link: "/rajasthan" // Add link to Rajasthan page
    },
    {
      name: "Kerala",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80",
      description: "God's own country",
      link: "/kerala" // Add link to Kerala page
    },
    {
      name: "Goa",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80",
      description: "Beach paradise",
      link: "/goa" // Add link to Goa page
    },
    {
      name: "Ladakh",
      image: "/Assets/ladakh.jpg",
      description: "Mountain adventures",
      link: "/ladakh" // Add link to Ladakh page
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Top Destinations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <Link key={index} href={destination.link} passHref>
              <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{destination.name}</h3>
                    <p className="text-gray-200">{destination.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
