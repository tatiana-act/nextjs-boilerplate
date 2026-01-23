import React, { useState, useRef, useEffect } from 'react';
import { TourProgram } from '@/types/tour';
import Image from 'next/image';

interface TourCardProps {
  tour: TourProgram;
  onBookTour: (tourId: string) => void;
  isCompact?: boolean;
}

const TourCard: React.FC<TourCardProps> = ({ tour, onBookTour, isCompact = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const longPressTimer = useRef<NodeJS.Timeout | null>(null);

  const handleBookClick = () => {
    onBookTour(tour.id);
  };

  const handleTouchStart = () => {
    if (!isCompact || isExpanded) return;
    longPressTimer.current = setTimeout(() => {
      setIsExpanded(true);
    }, 500);
  };

  const handleTouchEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
  };

  const toggleExpand = () => {
    let element : HTMLElement | null = null
    if (isExpanded) {
      const elementId = tour.id.valueOf() + 'tour-card';
      element = document.getElementById(elementId);
    }
    setIsExpanded(!isExpanded);
    if (element) {
      useEffect(() => {
        element.scrollIntoView({ behavior: 'smooth' });
        });
    }
  };

  const showDetails = !isCompact || isExpanded;

  return (
    <div className="tour-card" id={tour.id.valueOf() + 'tour-card'}>
      <div
        className="tour-image-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        // Prevent context menu on long press
        onContextMenu={(e) => e.preventDefault()}
      >
        <Image
          src={tour.imageUrl}
          alt={tour.title}
          className="tour-image"
          width={400}
          height={300}
        />
      </div>
      <div className="tour-content">
        <div className="tour-header">
          <div>
            <h3 className="tour-title">{tour.title}</h3>
            {showDetails && <div className="tour-meta">
              <span>⏱️ {tour.duration}</span>
              {/*<span>🚶 {tour.difficulty}</span>*/}
              </div>
            }
          </div>
          {/*<div className="tour-price">${tour.price}</div>*/}
        </div>

        {showDetails ? (
          <>
            <p className="tour-description">{tour.description}</p>

            <div className="tour-highlights">
              <h4 className="highlights-title">Вам понравится:</h4>
              <ul className="highlights-list">
                {tour.highlights.slice(0, 4).map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>

            {tour.extra && <div className="tour-highlights">{tour.extra}</div>}

            <div className="meeting-point">
              <strong>Место встречи:</strong>{' '}
              {tour.meetingPointLink.trim() === '' ? <span>{tour.meetingPoint}</span> :
                <a href={tour.meetingPointLink} target="_blank">
                  📍{tour.meetingPoint}📍
                </a>
              }
            </div>
            <div className="button-container">
              <button className="book-button" onClick={handleBookClick}>
                Запись на экскурсию
              </button>
            </div>
            {isCompact && (
              <div className="mt-4 text-center">
                <button onClick={toggleExpand} className="text-blue-500 hover:text-blue-700 underline text-sm">
                  Свернуть
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="mt-4 text-center">
            <button onClick={toggleExpand} className="text-blue-500 hover:text-blue-700 underline font-medium">
              Подробнее...
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TourCard;
