// components/PastTourCard.tsx
import React from 'react';
import {PastTour} from '@/types/tour';
import FacebookPost from './FBPost'

interface PastTourCardProps {
    tour: PastTour;
    tourName: string;
}

const PastTourCard: React.FC<PastTourCardProps> = ({ tour, tourName }) => {
    return (
        <div className="upcoming-tour-card">
            <div className="upcoming-tour-content">
                <h4 className="upcoming-tour-name">{tourName}</h4>
                <div className="upcoming-tour-details">
                    <div className="tour-datetime">
                        <span className="date">📅 {tour.date}</span>
                        <span className="time">🕐 {tour.time}</span>
                    </div>
                </div>
                <FacebookPost
                    url={tour.eventUrl}
                    width={500}
                    className="w-full max-w-2xl bg-gray-100 p-4 rounded-lg shadow-md" />

            </div>
        </div>
    );
};


export default PastTourCard;
