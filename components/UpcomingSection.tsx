// components/UpcomingToursSection.tsx
import React from 'react';
import { TourProgram, UpcomingTourEvent } from '@/types/tour';
import UpcomingTourCard from './UpcomingTourCard';
import { Locale } from "use-intl";
import { useTranslations } from "next-intl";

interface UpcomingToursSectionProps {
  upcomingTours: UpcomingTourEvent[];
  allTours: ReadonlyMap<string, TourProgram>;
  onReserveSpot: (tourId: string) => void;
  locale: string;
}

const UpcomingToursSection: React.FC<UpcomingToursSectionProps> = ({
  upcomingTours,
  allTours,
  onReserveSpot,
  locale
}) => {
  const t = useTranslations('Upcoming');
  return (
    <section className="section upcoming-tours-section" id="upcomingTours">
      <div className="container">
        <h2 className="section-title">{t('title')}</h2>
        {/*<p className="section-subtitle">Reserve your spot for these scheduled tours</p>*/}
        <div className="upcoming-tours-grid">
          {upcomingTours.map(upcomingTour => (
            <UpcomingTourCard
              key={upcomingTour.id}
              upcomingTour={upcomingTour}
              tourName={allTours.get(upcomingTour.tourProgramId)?.title || ''}
              onReserveSpot={onReserveSpot}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingToursSection;
