'use client';
import React, { useState, useMemo } from 'react';
import { PastTourEvent, TourProgram } from '@/types/tour';
import RecentEventCard from './RecentEventCard';
import {useTranslations} from "next-intl";

interface PastToursSectionProps {
  pastTours: PastTourEvent[];
  tours: TourProgram[];
  locale: string;
}

const RecentEventsSection: React.FC<PastToursSectionProps> = ({
  pastTours,
  tours,
  locale
}) => {
  const [visibleCount, setVisibleCount] = useState(9);

  const allTours = useMemo(() => {
    return new Map(tours.map(tour => [tour.id, tour] as const));
  }, [tours]);

  const visibleTours = pastTours.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 9);
  };
  const t = useTranslations('Recent');

  return (
    <section className="section upcoming-tours-section">
      <div className="container">
        <h2 className="section-title">{t('title')}</h2>
        <div className="upcoming-tours-grid">
          {visibleTours.map(pastTour => (
            <RecentEventCard
              key={pastTour.id}
              tour={pastTour}
              tourName={allTours.get(pastTour.tourProgramId)?.title || ''}
              locale={locale}
            />
          ))}
        </div>
        {visibleCount < pastTours.length && (
          <div className="flex justify-center mt-8">
            <button onClick={handleLoadMore} className="cta-button">
              {t('load')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentEventsSection;
