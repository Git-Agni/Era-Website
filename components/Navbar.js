'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar({ mode, setMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-blue-800 text-white text-center py-2 text-sm font-medium">
        Approved By Ministry of Tourism, Govt. of India – Reg. No.: 5.TT.II ( 188 ) / 2000 – ITO
      </div>

      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
  <img
    src="/assets/logo.png"
    alt="Era Tours Logo"
    className="h-10 w-auto" // Adjusted the height and set width to auto for proportional scaling
  />
  <span className="ml-2 text-xl font-bold">Era Tours</span>
</Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about-us" className="text-gray-700 hover:text-blue-600">
                About Us
              </Link>
              <Link href="/hotels" className="text-gray-700 hover:text-blue-600">
                Hotels
              </Link>
              <Link href="/indian-tours" className="text-gray-700 hover:text-blue-600">
                Indian Tour
              </Link>
              <Link href="/international-tours" className="text-gray-700 hover:text-blue-600">
                International Tours
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact Us
              </Link>
            </div>

            {/* Toggle Mode */}
            {mode !== undefined && setMode !== undefined && (
              <div className="hidden md:flex items-center space-x-4">
                <span
                  className={`text-sm ${
                    mode === 'business' ? 'text-blue-600 font-medium' : 'text-gray-500'
                  }`}
                >
                  Business
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={mode === 'leisure'}
                    onChange={() => setMode(mode === 'business' ? 'leisure' : 'business')}
                  />
                  <div
                    className="w-14 h-7 bg-blue-600 rounded-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all"
                  ></div>
                </label>
                <span
                  className={`text-sm ${
                    mode === 'leisure' ? 'text-blue-600 font-medium' : 'text-gray-500'
                  }`}
                >
                  Leisure
                </span>
              </div>
            )}

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/about-us" className="block text-gray-700 hover:text-blue-600 py-2">
                About Us
              </Link>
              <Link href="/hotels" className="block text-gray-700 hover:text-blue-600 py-2">
                Hotels
              </Link>
              <Link href="/indian-tours" className="block text-gray-700 hover:text-blue-600 py-2">
                Indian Tour
              </Link>
              <Link href="/international-tours" className="block text-gray-700 hover:text-blue-600 py-2">
                International Tours
              </Link>
              <Link href="/contact" className="block text-gray-700 hover:text-blue-600 py-2">
                Contact Us
              </Link>
            </div>

            {mode !== undefined && setMode !== undefined && (
              <div className="px-4 py-3">
                <div className="flex items-center justify-center space-x-4">
                  <span
                    className={`text-sm ${
                      mode === 'business' ? 'text-blue-600 font-medium' : 'text-gray-500'
                    }`}
                  >
                    Business
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={mode === 'leisure'}
                      onChange={() => setMode(mode === 'business' ? 'leisure' : 'business')}
                    />
                    <div
                      className="w-14 h-7 bg-blue-600 rounded-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all"
                    ></div>
                  </label>
                  <span
                    className={`text-sm ${
                      mode === 'leisure' ? 'text-blue-600 font-medium' : 'text-gray-500'
                    }`}
                  >
                    Leisure
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </nav>
    </>
  );
}
