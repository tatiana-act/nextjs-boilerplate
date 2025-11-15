// components/UpcomingToursSection.tsx
import React from 'react';
import { PastTourEvent, TourProgram } from '@/types/tour';
import RecentEventCard from './RecentEventCard';

interface PastToursSectionProps {
  pastTours: PastTourEvent[];
  allTours: ReadonlyMap<string, TourProgram>;
}

const RecentEventsSection: React.FC<PastToursSectionProps> = ({
  pastTours,
  allTours,
}) => {
  return (
    <section className="section upcoming-tours-section">
      <div className="container">
        <h2 className="section-title">Прошедшие экскурсии</h2>
        {/*<p className="section-subtitle">Reserve your spot for these scheduled tours</p>*/}
        <div className="upcoming-tours-grid">
          {pastTours.map(pastTour => (
            <RecentEventCard
              key={pastTour.id}
              tour={pastTour}
              tourName={allTours.get(pastTour.tourProgramId)?.title || ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentEventsSection;
