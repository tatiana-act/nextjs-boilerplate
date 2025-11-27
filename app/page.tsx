import React from 'react';
import Hero from '@/components/Hero';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { tours } from '@/data/tours';
import { faqs } from '@/data/faq';
import { upcomingTours } from '@/data/upcomingTours';
import pastTours from '@/data/RecentTours';
import { TourProgram } from '@/types/tour';
import RecentEventsSection from '@/components/RecentEventsSection';
import HomeClient from '@/components/HomeClient';

const Home: React.FC = () => {
  const allTours: Map<string, TourProgram> = new Map(
    tours.map(tour => [tour.id, tour] as const),
  );

  return (
    <main>
      <Hero />
      <HomeClient allTours={allTours} tours={tours} upcomingTours={upcomingTours} />
      <RecentEventsSection pastTours={pastTours} allTours={allTours} />
      <FAQSection faqs={faqs} />
      <Footer />
    </main>
  );
}

export default Home;