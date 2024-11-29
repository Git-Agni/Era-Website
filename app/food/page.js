'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Disclaimer() {
  return (
    <div>
      <Navbar />
      
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Food on Tour Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Special Meals on Tour: A Culinary Journey Through India</h2>
          
          {/* Image at the top */}
          <div className="relative h-96">
            <img
              src="Assets/food.png" // Replace with your desired image URL
              alt="Indian Food"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              India, with its rich cultural diversity, offers an unparalleled variety of food choices that reflect its diverse heritage. Whether you’re a fan of spicy dishes, delicate vegetarian preparations, or savory non-vegetarian meals, there’s something for every palate.
            </p>

            <p className="text-lg leading-relaxed">
              Our tours provide a unique culinary experience that blends traditional Indian flavors with international cuisine. Expect to savor local specialties that range from aromatic biryanis to tangy curries, complemented by a variety of delightful desserts that will tantalize your taste buds.
            </p>

            <p className="text-lg leading-relaxed">
              For those looking for a broader gastronomic experience, you'll also find a range of international dining options. In major metropolitan cities, you can enjoy Continental, European, Chinese, Oriental, Muslim, Italian, Spanish, and other global cuisines, all available at top-rated restaurants.
            </p>

            <p className="text-lg leading-relaxed">
              When you travel with Era Tours, we ensure that your culinary experience is as exciting as your sightseeing adventures. Our curated meals introduce you to the flavors of India while also offering international favorites for those who want a familiar taste during their travels.
            </p>

            <p className="text-lg leading-relaxed">
              Join us on a journey not just through India’s landscapes, but through its incredible food culture. Taste the diversity, embrace the spices, and enjoy the delights that our special meals bring to your travel experience.
            </p>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
