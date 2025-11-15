// components/UpcomingToursSection.tsx
import React from 'react';
import { TourProgram, UpcomingTourEvent } from '@/types/tour';
import UpcomingTourCard from './UpcomingTourCard';

interface UpcomingToursSectionProps {
  upcomingTours: UpcomingTourEvent[];
  allTours: ReadonlyMap<string, TourProgram>;
  onReserveSpot: (tourId: string) => void;
}

const UpcomingToursSection: React.FC<UpcomingToursSectionProps> = ({
  upcomingTours,
  allTours,
  onReserveSpot
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
              tourName={allTours.get(upcomingTour.tourProgramId)?.title || ''}
              onReserveSpot={onReserveSpot}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingToursSection;
