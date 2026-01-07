import React, { useState, useEffect } from 'react';
import { TourProgram } from '@/types/tour';
import TourCard from './TourCard';

interface ToursSectionProps {
  tours: TourProgram[];
  onBookTour: (tourId: string) => void;
}

const ToursSection: React.FC<ToursSectionProps> = ({ tours, onBookTour }) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [increment, setIncrement] = useState(2);

  useEffect(() => {
    const threeColumnsMinWidth = 350 * 3 + 32 * 2 + 40;
    const minWidthQueryText = `(min-width: ${threeColumnsMinWidth}px)`
    const mediaQuery = window.matchMedia(minWidthQueryText);

    const handleResize = () => {
      if (mediaQuery.matches) { // 3 columns
        setIncrement(3);
      } else {
        setIncrement(2);
      }
    };

    // Initial check
    if (mediaQuery.matches) {
      setVisibleCount(6);
      setIncrement(3);
    } else {
      setVisibleCount(3);
      setIncrement(2);
    }

    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  useEffect(() => {
    const handleShowAllAndScroll = (event: Event) => {
      const customEvent = event as CustomEvent;
      const tourId = customEvent.detail?.tourId;
      if (tourId) {
        setVisibleCount(tours.length);
        setTimeout(() => {
          const elementId = tourId + 'tour-card';
          const element = document.getElementById(elementId);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    window.addEventListener('show-all-tours-and-scroll', handleShowAllAndScroll);
    return () =>
      window.removeEventListener(
        'show-all-tours-and-scroll',
        handleShowAllAndScroll
      );
  }, [tours.length]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + increment);
  };

  const visibleTours = tours.slice(0, visibleCount);

  return (
    <section id="tours" className="section">
      <div className="container">
        <h2 className="section-title">Наши экскурсии</h2>
        <div className="tours-grid">
          {visibleTours.map(tour => (
            <TourCard key={tour.id} tour={tour} onBookTour={onBookTour} />
          ))}
        </div>
        {visibleCount < tours.length && (
          <div className="flex justify-center mt-8">
            <button onClick={handleLoadMore} className="cta-button">
              Показать ещё туры
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default ToursSection;
