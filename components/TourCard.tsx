import React from 'react';
import { Tour } from '@/types/tour';

interface TourCardProps {
    tour: Tour;
    onBookTour: (tourId: string) => void;
}

const TourCard: React.FC<TourCardProps> = ({ tour, onBookTour }) => {
    const handleBookClick = () => {
        onBookTour(tour.id);
    };

    return (
        <div className="tour-card">
            <img src={tour.imageUrl} alt={tour.title} className="tour-image" />
            <div className="tour-content">
                <div className="tour-header">
                    <div>
                        <h3 className="tour-title">{tour.title}</h3>
                        <div className="tour-meta">
                            <span>⏱️ {tour.duration}</span>
                            {/*<span>🚶 {tour.difficulty}</span>*/}
                        </div>
                    </div>
                    {/*<div className="tour-price">${tour.price}</div>*/}
                </div>

                <p className="tour-description">{tour.description}</p>

                <div className="tour-highlights">
                    <h4 className="highlights-title">Вам понравится:</h4>
                    <ul className="highlights-list">
                        {tour.highlights.slice(0, 4).map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                        ))}
                    </ul>
                </div>

                {/*<div className="tour-highlights">
                    <h4 className="highlights-title">What's Included:</h4>
                    <ul className="highlights-list">
                        {tour.included.slice(0, 2).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>*/}

                <div className="meeting-point">
                    <strong>Место встречи:</strong> <a href={tour.meetingPointLink} target="_blank">📍{tour.meetingPoint}📍</a>
                </div>
                {
                <button className="book-button" onClick={handleBookClick}>
                    Запись на экскурсию
                </button>
                }
            </div>
        </div>
    );
};

export default TourCard;
