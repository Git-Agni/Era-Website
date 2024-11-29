import Link from 'next/link';

export default function EmotiveSection2({ mode }) {
  const businessContent = {
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80",
    title: "Create Lasting Business Connections",
    text: "Whether you're attending conferences or sealing deals, our services ensure seamless business travel.",
    buttonLink: "/north-india-tours",
  };

  const leisureContent = {
    image: "/Assets/jim.jpg",
    title: "Discover Paradise on Earth",
    text: "Immerse yourself in unforgettable leisure experiences tailored to your desires.",
    buttonLink: "/south-india-tours",
  };

  const content = mode === "business" ? businessContent : leisureContent;

  return (
    <section className="py-16 bg-blue-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={content.image}
            alt={mode === "business" ? "Business Travel Experience" : "Leisure Travel Experience"}
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="md:w-1/2 md:pr-12">
          <h2 className="text-4xl font-bold mb-6">{content.title}</h2>
          <p className="text-xl text-gray-600 mb-8">{content.text}</p>
          <Link href={content.buttonLink}>
            <button className="bg-indigo-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-colors">
              Start Planning
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
