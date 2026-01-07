// components/UpcomingToursSection.tsx
import React from 'react';
import { Review } from 'types/review'
import { TourProgram } from "@/types/tour";
import ReviewCard from './ReviewCard';

interface ReviewSectionProps {
  reviews: Review[];
  allTours: ReadonlyMap<string, TourProgram>;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({
  reviews,
  allTours,
}) => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Отзывы и впечатления</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {reviews.map(((r) => {
            const tourTitle = allTours.get(r.tourProgramId)?.shortTitle
            return (
              <ReviewCard key={r.id} review={r} tourTitle={tourTitle} />
            )
          }))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
