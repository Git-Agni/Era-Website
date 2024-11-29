import Link from 'next/link';

export default function EmotiveSection1({ mode }) {
  const businessContent = {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
    title: "Your Gateway to Global Opportunities",
    text: "Maximize your time with flexible itineraries that cater to your professional needs.",
    buttonLink: "/mice",
  };

  const leisureContent = {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80",
    title: "Relax and Rejuvenate on Your Dream Vacation",
    text: "Escape the daily grind with travel plans tailored for leisure and relaxation.",
    buttonLink: "/indian-tours",
  };

  const content = mode === "business" ? businessContent : leisureContent;

  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={content.image}
            alt={mode === "business" ? "Business Travel" : "Leisure Travel"}
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-bold mb-6">{content.title}</h2>
          <p className="text-xl text-gray-300 mb-8">{content.text}</p>
          <Link href={content.buttonLink}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
