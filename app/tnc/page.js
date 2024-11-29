'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Terms() {
  return (
    <div>
      <Navbar />
      
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Terms and Conditions Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Terms & Conditions - Your Agreement with Era Tours & Travels</h2>
          
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              The following <strong>Terms & Conditions</strong> govern the relationship between <strong>Era Tours & Travels (India) Pvt. Ltd.</strong> and its clients. By engaging with our services, you acknowledge that you have read, understood, and agreed to these terms. We strongly encourage you to read through this page carefully before proceeding with any bookings or transactions. If needed, you can download or print a copy of these Terms & Conditions for your reference.
            </p>

            <p className="text-lg leading-relaxed">
              Please note that all quotes provided by Era Tours & Travels are considered proposals. These quotes are not confirmed until the client approves the itinerary and makes a deposit as per the conditions outlined below. If a proposed booking cannot be made due to unforeseen circumstances, alternate options will be provided, which must also be confirmed in writing.
            </p>

            <div className="space-y-4">
              <p className="font-semibold">1. Advance Payment</p>
              <p className="text-lg leading-relaxed">
                A non-refundable advance of 25% of the total invoice amount is required (unless otherwise specified) to initiate reservations and send a status update. This deposit secures your booking and confirms your intent to proceed with the tour.
              </p>

              <p className="font-semibold">2. Balance Payment</p>
              <p className="text-lg leading-relaxed">
                The remaining balance can be settled through remittance or upon arrival in India (unless otherwise agreed upon). Detailed instructions will be provided on how to make this payment.
              </p>

              <p className="font-semibold">3. Payment Methods</p>
              <p className="text-lg leading-relaxed">
                Payments can be made via secure Visa, MasterCard, or American Express through our website, or by online transfer (NEFT - up to INR 02 Lakhs, RTGS - over INR 02 Lakhs). Bank account details for online payments will be shared once your payment method is selected. On arrival in India, payments can be made in USD, travelers' cheques, or credit/debit cards.
              </p>

              <p className="font-semibold">4. Amendment of Bookings</p>
              <p className="text-lg leading-relaxed">
                While we encourage you to finalize your plans before submitting an advance, Era Tours & Travels will attempt to accommodate reasonable amendments to your booking. However, changes may be subject to additional administrative or amendment fees.
              </p>

              <p className="font-semibold">5. Cancellation & Refund Policy</p>
              <p className="text-lg leading-relaxed">
                Cancellations must be notified in writing to Era Tours & Travels. Hotel cancellation policies and retention charges will apply as per the agreements with our hotel partners. The following cancellation fees apply:
              </p>

              <ul className="list-inside list-decimal ml-6 space-y-2">
                <li className="text-lg leading-relaxed"><strong>More than 60 days prior to the tour start date:</strong> 10% of the total tour cost or USD 150 per person, whichever is greater.</li>
                <li className="text-lg leading-relaxed"><strong>Between 30 to 60 days prior to the tour start date:</strong> 25% of the tour cost or USD 300 per person, whichever is greater.</li>
                <li className="text-lg leading-relaxed"><strong>Between 15 to 30 days prior to the tour start date:</strong> 50% of the tour cost or USD 600 per person, whichever is greater.</li>
                <li className="text-lg leading-relaxed"><strong>Less than 15 days prior to the tour start date:</strong> 100% of the tour cost.</li>
              </ul>

              <p className="font-semibold">6. Travel Arrangements</p>
              <p className="text-lg leading-relaxed">
                <strong>Check-in/Check-out Times:</strong> Standard check-in time in India is 14:00 hrs and check-out time is 12:00 hrs (noon). Early check-ins or late check-outs beyond standard times may incur additional charges. Please confirm your flight details if you need adjustments to your accommodation times and are willing to pay the extra fees.
              </p>

              <p className="font-semibold">7. Passports & Visas</p>
              <p className="text-lg leading-relaxed">
                Ensure that your passport is valid for at least 6 months from the date of travel and has sufficient blank pages. A valid visa must also be obtained for the purpose of the journey.
              </p>

              <p className="font-semibold">8. Air Bookings</p>
              <p className="text-lg leading-relaxed">
                Please reconfirm your flight bookings and notify us of any changes to your flight schedule or connecting flights. This will allow us to make necessary adjustments to your travel arrangements.
              </p>

              <p className="font-semibold">9. Travel Insurance</p>
              <p className="text-lg leading-relaxed">
                It is strongly recommended that travelers purchase adequate travel insurance from a reputable provider to cover potential risks such as illness, injury, lost baggage, flight cancellations, or other unforeseen incidents during the trip.
              </p>

              <p className="font-semibold">10. Changes to Confirmed Arrangements</p>
              <p className="text-lg leading-relaxed">
                While Era Tours & Travels strives to maintain confirmed arrangements, certain situations beyond our control may require adjustments to your itinerary for the safety and comfort of the guests.
              </p>

              <p className="font-semibold">11. Complaints & Claims</p>
              <p className="text-lg leading-relaxed">
                If you are dissatisfied with any aspect of your tour, please notify us or our representative immediately to resolve the issue. Any formal complaints or claims for compensation must be made in writing within 10 days of completing your tour. Supporting documents must accompany any claim.
              </p>

              <p className="font-semibold">12. Communication</p>
              <p className="text-lg leading-relaxed">
                For any inquiries, please contact us via email at <a href="mailto:eratours@hotmail.com" className="text-blue-600">eratours@hotmail.com</a> or by phone at (+91-11-23323190). If you do not receive a reply within 24 hours, please contact our 24-hour customer service helpline at +91-98 10531962.
              </p>

              <p className="font-semibold">13. Responsibility Disclaimer</p>
              <p className="text-lg leading-relaxed">
                Era Tours & Travels is not responsible for any loss, injury, or damage resulting from unforeseen events beyond our control, such as natural disasters, strikes, wars, or government actions. We are also not liable for any extra expenses incurred due to these circumstances.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
