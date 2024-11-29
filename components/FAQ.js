'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes Era Tours unique?",
      answer: "We offer personalized travel experiences with expert local guides, ensuring both comfort and authenticity in every journey."
    },
    {
      question: "Can I customize my travel itinerary?",
      answer: "Yes, all our packages can be customized to match your preferences, schedule, and interests."
    },
    {
      question: "What are the benefits of booking a MICE package with Era Tours?",
      answer: "Our MICE packages include comprehensive event planning, venue selection, logistics management, and dedicated support throughout your event."
    },
    {
      question: "How flexible are the cancellation policies?",
      answer: "We offer flexible cancellation policies with full refunds available up to 7 days before departure for most packages."
    },
    {
      question: "What safety measures are in place for travelers?",
      answer: "We maintain strict safety protocols, work with verified partners, and provide 24/7 support for all our travelers."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}