'use client';

import React, {useState} from 'react';
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
import Modal from '@/components/Modal';

const Home : React.FC = () => {
    const [isContactsOpen, setContactsOpen] = useState(false)
    const [tourName, setTourName] = useState('');
  const scrollToSection = (sectionId : string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookTour = (currentTourId: string) => {
      setTourName(allTours.get(currentTourId)?.title || '');
      setContactsOpen(true);
    // Here you would typically integrate with a booking system
    // For now, we'll just show an alert

  };

  const allTours: Map<string, Tour> = new Map(
    tours.map(tour => [tour.id, tour] as const),
  );
  return (
    <main>
      <Hero onExploreClick={scrollToSection} />
      <ToursSection tours={tours} onBookTour={handleBookTour} />
      <UpcomingToursSection allTours={allTours} upcomingTours={upcomingTours} onReserveSpot={handleBookTour} />
      <Modal isOpen={isContactsOpen} tourName={tourName} onClose={() => setContactsOpen(false)}>
      </Modal>
      <PastToursSection pastTours={pastTours} allTours={allTours} />
      <FAQSection faqs={faqs} />
      <Footer />
    </main>
  );
}

export default Home;