'use client';

import React from 'react';
import Hero from '@/components/Hero';
import ToursSection from '@/components/ToursSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { tours } from '@/data/tours';
import { faqs } from '@/data/faq';
import { upcomingTours } from '@/data/upcomingTours';
import pastTours from '@/data/RecentTours';
import { Tour } from '@/types/tour';
import UpcomingToursSection from '@/components/UpcomingSection';
import PastToursSection from '@/components/PastSection';

export default function Home() {
  const scrollToTours = () => {
    document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookTour = (tourId: string) => {
    // Here you would typically integrate with a booking system
    // For now, we'll just show an alert
    const tour = tours.find(t => t.id === tourId);
    if (tour) {
      alert(
        `Чтобы присоединиться к ${tour.title} присылайте заявки на мой почтовый адрес tatiana.city.guide@gmail.com или на мой номер 512-801-4114`,
      );
    }
  };

  const allTours: Map<string, Tour> = new Map(
    tours.map(tour => [tour.id, tour] as const),
  );
  return (
    <main>
      <Hero onExploreClick={scrollToTours} />
      <ToursSection tours={tours} onBookTour={handleBookTour} />
      <UpcomingToursSection allTours={allTours} upcomingTours={upcomingTours} />
      <PastToursSection pastTours={pastTours} allTours={allTours} />
      <FAQSection faqs={faqs} />
      <Footer />
    </main>
  );
}
