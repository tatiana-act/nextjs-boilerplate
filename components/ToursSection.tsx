import React from 'react';
import { Tour } from '@/types/tour';
import TourCard from './TourCard';

interface ToursSectionProps {
  tours: Tour[];
  onBookTour: (tourId: string) => void;
}

const ToursSection: React.FC<ToursSectionProps> = ({ tours, onBookTour }) => {
  return (
    <section id="tours" className="section">
      <div className="container">
        <h2 className="section-title">Наши экскурсии</h2>
        <div className="tours-grid">
          {tours.map(tour => (
            <TourCard key={tour.id} tour={tour} onBookTour={onBookTour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
