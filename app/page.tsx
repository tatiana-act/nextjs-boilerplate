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
import { TourProgram } from '@/types/tour';
import UpcomingToursSection from '@/components/UpcomingSection';
import RecentEventsSection from '@/components/RecentEventsSection';
import Modal from '@/components/Modal';
import CalendarSection from "@/components/CalendarSection";

const Home : React.FC = () => {
    const [isContactsOpen, setContactsOpen] = useState(false)
    const [tourProgramName, setTourProgramName] = useState('');

  const scrollToSection = (sectionId : string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookTour = (tourProgramId: string) => {
      setTourProgramName(allTours.get(tourProgramId)?.title || '');
      setContactsOpen(true);
  };

  const allTours: Map<string, TourProgram> = new Map(
    tours.map(tour => [tour.id, tour] as const),
  );
  return (
    <main>
      <Hero onExploreClick={scrollToSection} />
      <ToursSection tours={tours} onBookTour={handleBookTour} />
      <CalendarSection allTours={allTours} upcomingTours={upcomingTours} onEventClick={handleBookTour}/>
      <UpcomingToursSection allTours={allTours} upcomingTours={upcomingTours} onReserveSpot={handleBookTour} />
      <Modal isOpen={isContactsOpen} tourName={tourProgramName} onClose={() => setContactsOpen(false)}>
      </Modal>
      <RecentEventsSection pastTours={pastTours} allTours={allTours} />
      <FAQSection faqs={faqs} />
      <Footer />
    </main>
  );
}

export default Home;