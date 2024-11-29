'use client';

import Link from 'next/link';

export default function ProductCategories() {
  const categories = [
    {
      name: "Wildlife",
      image: "/Assets/tiger.jpg",
      description: "Explore India's diverse wildlife",
      places: ["Jim Corbett", "Ranthambore", "Kaziranga", "Bandipur"],
      link: "/wildlife-tour" // Add a link to the page for each category
    },
    {
      name: "Heritage",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80",
      description: "Discover ancient monuments",
      places: ["Taj Mahal", "Hawa Mahal", "Qutub Minar", "Hampi"],
      link: "/north-india-tours" // Add a link to the page for each category
    },
    {
      name: "Spiritual",
      image: "/Assets/buddh.jpg",
      description: "Experience spiritual India",
      places: ["Varanasi", "Rishikesh", "Tirupati", "Golden Temple"],
      link: "/pilgrimage-tour" // Add a link to the page for each category
    },
    {
      name: "Adventure",
      image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&q=80",
      description: "Thrilling experiences await",
      places: ["Manali", "Rishikesh", "Gulmarg", "Leh"],
      link: "/hill-stations" // Add a link to the page for each category
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Explore by Category</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link key={index} href={category.link} passHref>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.places.map((place, placeIndex) => (
                      <div key={placeIndex} className="text-sm text-gray-500 hover:text-blue-600 cursor-pointer">
                        → {place}
                      </div>
                    ))}
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
