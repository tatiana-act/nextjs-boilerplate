import React from 'react';
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
import CalendarSection from "@/components/CalendarSection";
import BookingManager from '@/components/BookingManager';

const Home: React.FC = () => {
  const allTours: Map<string, TourProgram> = new Map(
    tours.map(tour => [tour.id, tour] as const),
  );

  return (
    <main>
      <Hero />
      <BookingManager allTours={allTours}>
        {(handleBookTour) => (
          <>
            <ToursSection tours={tours} onBookTour={handleBookTour} />
              {/*<CalendarSection allTours={allTours} upcomingTours={upcomingTours} />*/}
            <UpcomingToursSection allTours={allTours} upcomingTours={upcomingTours} onReserveSpot={handleBookTour} />
          </>
        )}
      </BookingManager>
      <RecentEventsSection pastTours={pastTours} allTours={allTours} />
      <FAQSection faqs={faqs} />
      <Footer />
    </main>
  );
}

export default Home;