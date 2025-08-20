// components/UpcomingToursSection.tsx
import React from 'react';
import { PastTour, Tour } from '@/types/tour';
import PastTourCard from './PastTourCard';

interface PastToursSectionProps {
  pastTours: PastTour[];
  allTours: ReadonlyMap<string, Tour>;
}

const PastToursSection: React.FC<PastToursSectionProps> = ({
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
            <PastTourCard
              key={pastTour.id}
              tour={pastTour}
              tourName={allTours.get(pastTour.tourId)?.title || ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastToursSection;
