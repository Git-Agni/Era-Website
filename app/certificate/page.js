'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Certificate() {
  return (
    <div>
      <Navbar />
      
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Company Certificates Section */}
        <section className="space-y-6">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-800 text-center uppercase">Company Certificates</h2>
          
          {/* Images */}
          <div className="flex flex-wrap justify-center gap-16">
            <img 
              src="/Assets/certificate1.png" 
              alt="Certificate 1" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
            <img 
              src="/Assets/certificate2.png" 
              alt="Certificate 2" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
