// components/UpcomingTourCard.tsx
import React from 'react';
import { UpcomingTour } from '@/types/tour';
import { formatDateToUserLocale } from '@/lib/utils';

interface UpcomingTourCardProps {
  upcomingTour: UpcomingTour;
  tourName: string;
  // onReserveSpot: (tourId: string) => void;
}

const UpcomingTourCard: React.FC<UpcomingTourCardProps> = ({
  upcomingTour,
  tourName,
}) => {
  const handleReserveClick = () => {
      document.getElementById(upcomingTour.tourId + "tour-card")?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="upcoming-tour-card" onClick={handleReserveClick} >
      <div className="upcoming-tour-content">
        <h4 className="upcoming-tour-name">{tourName}</h4>
        <div className="upcoming-tour-details">
          <div className="tour-datetime">
            <span className="date">
              📅 {formatDateToUserLocale(upcomingTour.date)}
            </span>
            <span className="time">🕐 {upcomingTour.time}</span>
          </div>
          {upcomingTour.price !== undefined && (<div className="tour-price">💲 {upcomingTour.price} долларов</div>)}
        </div>
      </div>
    </div>
  );
};

export default UpcomingTourCard;
