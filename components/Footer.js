'use client';

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';  // Import the Link component

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link href="/tnc" className="hover:text-blue-400">Terms & Conditions</Link></li>
              {/* New Links */}
              <li><Link href="/disclaimer" className="hover:text-blue-400">Disclaimer</Link></li>
              <li><Link href="/copyright" className="hover:text-blue-400">Copyright</Link></li>
            </ul>
          </div>

          {/* Additional Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Additional Services</h3>
            <ul className="space-y-2">
              <li><Link href="/mice" className="hover:text-blue-400">MICE</Link></li>
              <li><Link href="/short-tour" className="hover:text-blue-400">Short Tours</Link></li>
              <li><Link href="/language" className="hover:text-blue-400">Language Interpreter</Link></li>
              <li><Link href="/book-air-tickets" className="hover:text-blue-400">Book Air Tickets</Link></li>
              <li><Link href="/transport" className="hover:text-blue-400">Hire Transports</Link></li>
              {/* New Links */}
              <li><Link href="/food" className="hover:text-blue-400">Meals</Link></li>
              <li><Link href="/hotels" className="hover:text-blue-400">Book Hotels</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/certificate" className="hover:text-blue-400">Company Certificates</Link></li>
              <li><Link href="/testimonials" className="hover:text-blue-400">Testimonials</Link></li>
              <li><Link href="/travel-tips" className="hover:text-blue-400">Travel Tips</Link></li>
              <li><Link href="/map" className="hover:text-blue-400">Site Map</Link></li>
              {/* New Link */}
              <li><Link href="/enquiry" className="hover:text-blue-400">Send Enquiry</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact & Social</h3>
            <p className="mb-2">Phone: 91-11-45637449 / 91-9871806712</p>
            <p className="mb-2">Email: <a href="mailto:eratours@hotmail.com" className="hover:text-blue-400">eratours@hotmail.com</a></p><br />
            <p className="mb-4">
              Address: ERA TOURS & TRAVELS (I) PVT. LTD.<br />
              Office No. DGL 107, 01st Floor, The Galleria,<br />
              Mayur Vihar Phase 1 Extn. (Near Mayur Vihar Extn. Metro Station),
              New Delhi- 110091, India<br />
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
              <a href="#" className="hover:text-blue-400"><Twitter /></a>
              <a href="#" className="hover:text-blue-400"><Instagram /></a>
              <a href="#" className="hover:text-blue-400"><Linkedin /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Era Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
