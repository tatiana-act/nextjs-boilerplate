// components/UpcomingTourCard.tsx
import React from 'react';
import { UpcomingTourEvent } from '@/types/tour';
import { formatDateToUserLocale } from '@/lib/utils';
import { useTranslations } from "next-intl";

interface UpcomingTourCardProps {
  upcomingTour: UpcomingTourEvent;
  tourName: string;
  onReserveSpot: (tourId: string) => void;
  locale: string;
}

const UpcomingTourCard: React.FC<UpcomingTourCardProps> = ({
  upcomingTour,
  tourName,
  onReserveSpot,
  locale
}) => {
  const handleClick = () => {
    const elementId = upcomingTour.tourProgramId + 'tour-card';
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      const event = new CustomEvent('show-all-tours-and-scroll', {
        detail: { tourId: upcomingTour.tourProgramId },
      });
      window.dispatchEvent(event);
    }
  };
  const handleReserveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onReserveSpot(upcomingTour.tourProgramId);
  };
  const t = useTranslations('Upcoming');
  return (
    <div className="upcoming-tour-card" onClick={handleClick} id={'tour-card-' + upcomingTour.id.valueOf()}>
      <div className="upcoming-tour-content">
        <h4 className="upcoming-tour-name">{tourName}</h4>
        <div className="upcoming-tour-details">
          <div className="tour-datetime">
            <span className="date">
              📅 {formatDateToUserLocale(upcomingTour.date, locale)}
            </span>
            <span className="time">🕐 {upcomingTour.time}</span>
          </div>
          {upcomingTour.bonus && <div className="tour-highlights">{t(upcomingTour.bonus)}</div>}
          {upcomingTour.price !== undefined && (<div className="tour-price">💲 {upcomingTour.price}{t('currency')}</div>)}
        </div>
        <button className="book-button" onClick={handleReserveClick}>
          {t('join')}
        </button>
      </div>
    </div>
  );
};

export default UpcomingTourCard;
