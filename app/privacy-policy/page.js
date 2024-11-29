'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Privacy Policy Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Privacy Policy - How We Protect Your Information</h2>
          
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              At <strong>ERA TOURS & TRAVELS (I) PVT. LTD.</strong>, we are committed to protecting and respecting your privacy. This privacy policy outlines how we collect, use, and safeguard the personal information you provide while visiting our website.
            </p>

            <p className="text-lg leading-relaxed">
              We strive to protect your personal data, including your name, email address, phone number, physical address, and other relevant information related to our services. The information you share with us is primarily used to maintain our database, provide you with updates about our products and services, and improve the overall user experience.
            </p>

            <p className="text-lg leading-relaxed">
              We may use cookies (which you can choose to accept or decline through your browser settings) to help us better understand your preferences and enhance your experience while using our website.
            </p>

            <p className="text-lg leading-relaxed">
              Our website may contain links to external websites that are beyond our control. We encourage you to exercise caution when navigating to these sites, as we are not responsible for their content or privacy practices.
            </p>

            <p className="text-lg leading-relaxed">
              Rest assured, we will not use or share the information you provide for commercial purposes without your explicit consent, unless required by law.
            </p>

            <p className="text-lg leading-relaxed">
              We recommend that you review this privacy policy periodically. If you have any questions or concerns regarding your personal information, please feel free to contact us at <a href="mailto:eraindiatours@hotmail.com" className="text-blue-600">eraindiatours@hotmail.com</a>. We will promptly address any issues or make necessary corrections to our records.
            </p>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
