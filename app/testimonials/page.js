'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Testimonials() {
  const testimonials = [
    {
      title: "Vietnam Group Tour 2023",
      content:
        "It was an excellent trip managed brilliantly by dear Nayal and Era group. No words can probably express the enjoyment and experience of exploring new destinations, which we could see. Thanks, Nayal, for everything, and we are looking forward to the next exciting tour.",
      author: "Anita and Rajiv",
      designation: "",
    },
    {
      title: "Feeling Fresh and Ready for Another Trip",
      content:
        "Feeling absolutely fresh... ready for another trip. Sincere thanks to Nayal for organising and coordinating the entire trip, its itinerary, good food in Indian restaurants... Thanks to all the members of the group for excellent company and looking after each other.",
      author: "AVM Rajiv Gandotra",
      designation: "Air Vice Marshal (Retd.)",
    },
    {
      title: "Gratitude for the Wonderful Trip",
      content:
        "After reaching home, was tired enough due to my bad throat and could not even send you a 'Thank you' message. A wonderful time we all spent. God's grace.",
      author: "Naresh Chandra Gupta",
      designation: "",
    },
    {
      title: "A Tour Well Planned and Organized",
      content:
        "My wife Niru while talking about the tour to our friends and family always mentions that she has 13 people to help her, not one (me). About the tour, it was planned well, organised meticulously. Kudos to Nayal and Richa madam. We hope to see such tours soon in the near future.",
      author: "Shambhu Nath Singh",
      designation: "",
    },
    {
      title: "Mesmerizing Memories",
      content:
        "A memorable and mesmerising part of my life which I spent with you all along with my better half Rashmi. The itinerary included all major places of the cities we visited and providing sumptuous Indian food was an icing on the cake. Thanks a lot Richa mam and Nayal sir. Looking forward to the next trip.",
      author: "Surendra Mohan Sharma",
      designation: "",
    },
    {
      title: "Meticulously Planned",
      content:
        "Now after proper sleep feeling absolutely good.. It was a great trip, meticulously planned and executed. Many thanks to Nayal sahab.",
      author: "Dr. Pramod Kumar Mishra",
      designation: "Doctor",
    },
    {
      title: "Excellent Services",
      content:
        "Sightseeing, Hotels, Guide services, Food & Transport - ALL EXCELLENT. Guide is such a good guy with best experience, arranged the journey well & so kind to help us deal with changeable situations.",
      author: "Mr. Zheng Guogui",
      designation: "Coordinator of a high-level delegation from China (19 May 2015)",
    },
    {
      title: "Amazing Impressions of India",
      content:
        "After travelling in India for 12 days I can say it is impressive, India is color, Joy, happiness, spices, diversity, shine, serenity, cultural, spiritual, sun, bright, full of life, funny and interesting people, a country full of tradition and culture that I'm really glad to see and experience in some way. India surely took me to the extremes in every way, and I'm sure coming back.",
      author: "Ms. Jimena Egverra",
      designation: "Traveller from Columbia (25 May 2014)",
    },
    {
      title: "Incredible South India Experience",
      content:
        "Very thorough service, all requirements met, very skilled driver, and excellent hotels.",
      author: "Mr. Charlie Wang",
      designation: "Traveller from USA (24 Jan 2014)",
    },
    {
      title: "Transformative Trip to India",
      content:
        "If there is something that really impressed me from India, it's the power of smiles. It's amazing to see how people in deep poverty have time to smile. In the West, people keep complaining about their life, work, and family; they should come to India to realize how disgraceful they are. Second, I was impressed by the big influence of religion and spiritual life on the hearts of Indians. It's been a trip full of emotions and a discovery of an incredible culture that has changed me forever.",
      author: "Mr. Mario Gontoler Rahan",
      designation: "Freelance Traveller from Spain (25 May 2014)",
    },
    {
      title: "Royal Rajasthan Sector",
      content:
        "Travelling with you was great. I would like to travel with you again if I get a chance.",
      author: "Mr. Sidhartha Tan",
      designation: "Traveller from USA (5 Mar 2012)",
    },
    {
      title: "Perfect Driver and Great Staff",
      content:
        "The driver is perfect and really helped us a lot. During our experience in India, all the staff from Era Tours were nice and friendly. Thanks a lot.",
      author: "Mr. Li Rengui Genertec",
      designation:
        "President & Head of delegation from Exhibition & Advtg. Coy. Ltd., PR of China (24 Nov 2009)",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="max-w-4xl mx-auto p-6 space-y-12">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-800">Testimonials</h1>
        <p className="text-center text-gray-600 text-lg">
          Hear from our travelers about their unforgettable experiences with us!
        </p>

        {/* Testimonial Section */}
        <section className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border-t pt-6 space-y-4 first-of-type:border-t-0 first-of-type:pt-0"
            >
              <h2 className="text-2xl font-semibold text-orange-600">
                {testimonial.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
              <p className="text-gray-500 font-medium">
                — {testimonial.author}
              </p>
              {testimonial.designation && (
                <p className="text-gray-400 text-sm italic">
                  {testimonial.designation}
                </p>
              )}
            </div>
          ))}
        </section>
      </div>

      <Footer />
    </div>
  );
}
