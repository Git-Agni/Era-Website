'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Copyright() {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Copyright Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Website Copyright Information</h2>
          <p className="text-gray-600 leading-7">
            All content on this website is copyrighted by M/S Era Tours & Travels (India) Pvt. Ltd. - © M/S Era Tours & Travels (India) Pvt. Ltd., 1997 (Contact: eratours@hotmail.com).<br /><br />
            Unauthorized reproduction or redistribution of any part or all of this content is prohibited, except under the following conditions:<br />
            • You may print or download extracts for personal, non-commercial use only.<br />
            • You may share the content with individual third parties for their personal use, provided that you acknowledge the website as the source of the material.<br /><br />
            Without express written permission from M/S Era Tours & Travels (India) Pvt. Ltd., you may not distribute, commercially exploit, or transmit the content. You are also prohibited from storing it in any other website or electronic retrieval system.<br /><br />
            For inquiries regarding permissions or usage of our content, please contact us at <a href="mailto:eratours@hotmail.com" className="text-blue-500">eratours@hotmail.com</a>.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}
