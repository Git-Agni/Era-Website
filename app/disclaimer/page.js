'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Disclaimer() {
  return (
    <div>
      <Navbar />
      
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Disclaimer Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Website Disclaimer</h2>
          
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              The information provided on the website <a href="http://www.eraindiatours.in" className="text-blue-600">www.eraindiatours.in</a> is intended for general informational purposes only. This content is provided by M/S Era Tours & Travels (India) Pvt. Ltd. While we strive to ensure that the information is accurate and up to date, we make no representations or warranties of any kind, whether express or implied, regarding the completeness, accuracy, reliability, suitability, or availability of the website, its content, products, services, or related graphics for any specific purpose.
            </p>

            <p className="text-lg leading-relaxed">
              Any reliance you place on the information on this website is at your own risk. In no event will M/S Era Tours & Travels (India) Pvt. Ltd. be liable for any loss or damage, including but not limited to indirect or consequential loss, loss of data, or loss of profits arising from the use of this website or the information it contains.
            </p>

            <p className="text-lg leading-relaxed">
              This website may contain links to third-party websites that are not under the control of M/S Era Tours & Travels (India) Pvt. Ltd. We have no control over the nature, content, or availability of these external sites. The inclusion of any links does not imply a recommendation or endorsement of the views expressed on these sites.
            </p>

            <p className="text-lg leading-relaxed">
              Every effort is made to ensure that the website remains operational without issues. However, M/S Era Tours & Travels (India) Pvt. Ltd. takes no responsibility for, and will not be liable for, the temporary unavailability of the website due to technical issues beyond our control.
            </p>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
