import React, { useState, useRef, useEffect } from 'react';
import { TourProgram } from '@/types/tour';
import Image from 'next/image';
import {useTranslations} from "next-intl";

interface TourCardProps {
  tour: TourProgram;
  onBookTour: (tourId: string) => void;
  isCompact?: boolean;
}

const TourCard: React.FC<TourCardProps> = ({ tour, onBookTour, isCompact = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const longPressTimer = useRef<NodeJS.Timeout | null>(null);
  const prevExpanded = useRef(isExpanded);

  useEffect(() => {
    if (prevExpanded.current && !isExpanded) {
      const elementId = tour.id.valueOf() + 'tour-card';
      const element = document.getElementById(elementId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    prevExpanded.current = isExpanded;
  }, [isExpanded, tour.id]);

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
    setIsExpanded(!isExpanded);
  };

  const showDetails = !isCompact || isExpanded;
  const t = useTranslations('ToursSection');

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
              <h4 className="highlights-title">{t('youLike')}</h4>
              <ul className="highlights-list">
                {tour.highlights.slice(0, 4).map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>

            {tour.extra && <div className="tour-highlights">{tour.extra}</div>}

            <div className="meeting-point">
              <strong>{t('meetingPoint')}</strong>{' '}
              {tour.meetingPointLink.trim() === '' ? <span>{tour.meetingPoint}</span> :
                <a href={tour.meetingPointLink} target="_blank">
                  📍{tour.meetingPoint}📍
                </a>
              }
            </div>
            <div className="button-container">
              <button className="book-button" onClick={handleBookClick}>
                {t('reserve')}
              </button>
            </div>
            {isCompact && (
              <div className="mt-4 text-center">
                <button onClick={toggleExpand} className="text-blue-500 hover:text-blue-700 underline text-sm">
                  {t('collapse')}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="mt-4 flex justify-end">
            <button onClick={toggleExpand} className="book-button !w-auto">
              {t('expand')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TourCard;
