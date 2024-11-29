'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import WhyIndia from '../components/WhyIndia';
import CustomerRatings from '../components/CustomerRatings';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import EmotiveSection1 from '../components/EmotiveSection1';
import MICESection from '../components/MICESection';
import EmotiveSection2 from '../components/EmotiveSection2';
import TopDestinations from '../components/TopDestinations';
import ProductCategories from '../components/ProductCategories';

export default function Home() {
  const [mode, setMode] = useState('business'); // Default mode is 'business'

  // Load saved mode from localStorage on component mount
  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  // Handle mode change and save to localStorage
  const handleModeChange = (newMode) => {
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  return (
    <div className={`${mode}-mode min-h-screen`}>
      {/* Navbar with mode switch */}
      <Navbar mode={mode} setMode={handleModeChange} />

      {/* Hero Section */}
      <Hero mode={mode} />

      {/* Main Content */}
      {mode === 'business' ? (
        <>
          {/* Business Mode Sections */}
          <WhyIndia mode={mode} />
          <EmotiveSection1 mode={mode} />
          <WhyUs />
          <CustomerRatings />
          <MICESection />
          <EmotiveSection2 mode={mode} />
        </>
      ) : (
        <>
          {/* Leisure Mode Sections */}
          <WhyUs />
          <EmotiveSection1 mode={mode} />
          <TopDestinations />
          <CustomerRatings />
          <ProductCategories />
          <EmotiveSection2 mode={mode} />
        </>
      )}

      {/* Common Sections */}
      <FAQ />
      <Footer />
    </div>
  );
}
