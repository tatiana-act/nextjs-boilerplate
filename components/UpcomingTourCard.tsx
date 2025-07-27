// components/UpcomingTourCard.tsx
import React from 'react';
import { UpcomingTour } from '@/types/tour';

interface UpcomingTourCardProps {
    upcomingTour: UpcomingTour;
    tourName: string;
    // onReserveSpot: (tourId: string) => void;
}

const UpcomingTourCard: React.FC<UpcomingTourCardProps> = ({ upcomingTour, tourName }) => {
    /* const handleReserveClick = () => {
        onReserveSpot(upcomingTour.id);
    };

    const getAvailabilityStatus = (spots: number) => {
        if (spots <= 3) return { text: 'Almost Full!', class: 'availability-low' };
        if (spots <= 7) return { text: 'Filling Up', class: 'availability-medium' };
        return { text: 'Available', class: 'availability-high' };
    };

    const availability = getAvailabilityStatus(upcomingTour.availableSpots);
*/
    return (
        <div className="upcoming-tour-card">
            <div className="upcoming-tour-content">
                <h4 className="upcoming-tour-name">{tourName}</h4>
                <div className="upcoming-tour-details">
                    <div className="tour-datetime">
                        <span className="date">📅 {upcomingTour.date}</span>
                        <span className="time">🕐 {upcomingTour.time}</span>
                    </div>
                    {/*<div className="tour-availability">
            <span className={`availability-badge ${availability.class}`}>
              {availability.text}
            </span>
                        <span className="spots-remaining">
              {upcomingTour.availableSpots} spots left
            </span>
                    </div>
                    */}
                </div>
                {/*<button className="reserve-button" onClick={handleReserveClick}>
                    Reserve Spot
                </button>*/}
            </div>
        </div>
    );
};

export default UpcomingTourCard;
