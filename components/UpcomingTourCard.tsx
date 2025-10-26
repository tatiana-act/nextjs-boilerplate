// components/UpcomingTourCard.tsx
import React from 'react';
import { UpcomingTour } from '@/types/tour';
import { formatDateToUserLocale } from '@/lib/utils';

interface UpcomingTourCardProps {
  upcomingTour: UpcomingTour;
  tourName: string;
  onReserveSpot: (tourId: string) => void;
}

const UpcomingTourCard: React.FC<UpcomingTourCardProps> = ({
  upcomingTour,
  tourName,
  onReserveSpot
}) => {
  const handleClick = () => {
      document.getElementById(upcomingTour.tourId + "tour-card")?.scrollIntoView({ behavior: 'smooth' });
  };
    const handleReserveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onReserveSpot(upcomingTour.tourId);
    };

  return (
    <div className="upcoming-tour-card" onClick={handleClick} >
      <div className="upcoming-tour-content">
        <h4 className="upcoming-tour-name">{tourName}</h4>
        <div className="upcoming-tour-details">
          <div className="tour-datetime">
            <span className="date">
              📅 {formatDateToUserLocale(upcomingTour.date)}
            </span>
            <span className="time">🕐 {upcomingTour.time}</span>
          </div>
          {upcomingTour.bonus && <div className="tour-highlights">{upcomingTour.bonus}</div>}
          {upcomingTour.price !== undefined && (<div className="tour-price">💲 {upcomingTour.price} долларов</div>)}
        </div>
          <button className="book-button" onClick={handleReserveClick}>
              Присоединиться
          </button>
      </div>
    </div>
  );
};

export default UpcomingTourCard;
