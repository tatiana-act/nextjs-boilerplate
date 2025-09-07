// components/UpcomingToursSection.tsx
import React from 'react';
import { Tour, UpcomingTour } from '@/types/tour';
import UpcomingTourCard from './UpcomingTourCard';

interface UpcomingToursSectionProps {
  upcomingTours: UpcomingTour[];
  allTours: ReadonlyMap<string, Tour>;
}

const UpcomingToursSection: React.FC<UpcomingToursSectionProps> = ({
  upcomingTours,
  allTours,
}) => {
  return (
    <section className="section upcoming-tours-section" id="upcomingTours">
      <div className="container">
        <h2 className="section-title">Экскурсии в ближайшее время</h2>
        {/*<p className="section-subtitle">Reserve your spot for these scheduled tours</p>*/}
        <div className="upcoming-tours-grid">
          {upcomingTours.map(upcomingTour => (
            <UpcomingTourCard
              key={upcomingTour.id}
              upcomingTour={upcomingTour}
              tourName={allTours.get(upcomingTour.tourId)?.title || ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingToursSection;
