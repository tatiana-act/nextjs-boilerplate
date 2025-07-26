'use client';

import React from 'react';
import Hero from '@/components/Hero';
import ToursSection from '@/components/ToursSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { tours } from '@/data/tours';
import { faqs } from '@/data/faq';

export default function Home() {
  const scrollToTours = () => {
    document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookTour = (tourId: string) => {
    // Here you would typically integrate with a booking system
    // For now, we'll just show an alert
    const tour = tours.find(t => t.id === tourId);
    if (tour) {
      alert(`Booking ${tour.title}! This would redirect to a booking system.`);
    }
  };

  return (
    <main>
      <Hero onExploreClick={scrollToTours} />
      <ToursSection tours={tours} onBookTour={handleBookTour} />
      <FAQSection faqs={faqs} />
      <Footer />
    </main>
  );
}