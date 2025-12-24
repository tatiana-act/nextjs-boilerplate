'use client';
import React, { useState, useMemo } from 'react';
import { PastTourEvent, TourProgram } from '@/types/tour';
import RecentEventCard from './RecentEventCard';

interface PastToursSectionProps {
  pastTours: PastTourEvent[];
  tours: TourProgram[];
}

const RecentEventsSection: React.FC<PastToursSectionProps> = ({
  pastTours,
  tours,
}) => {
  const [visibleCount, setVisibleCount] = useState(9);

  const allTours = useMemo(() => {
    return new Map(tours.map(tour => [tour.id, tour] as const));
  }, [tours]);

  const visibleTours = pastTours.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 9);
  };

  return (
    <section className="section upcoming-tours-section">
      <div className="container">
        <h2 className="section-title">Прошедшие экскурсии</h2>
        {/*<p className="section-subtitle">Reserve your spot for these scheduled tours</p>*/}
        <div className="upcoming-tours-grid">
          {visibleTours.map(pastTour => (
            <RecentEventCard
              key={pastTour.id}
              tour={pastTour}
              tourName={allTours.get(pastTour.tourProgramId)?.title || ''}
            />
          ))}
        </div>
        {visibleCount < pastTours.length && (
          <div className="flex justify-center mt-8">
            <button onClick={handleLoadMore} className="cta-button">
              Показать еще
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentEventsSection;
