'use client';

import React from 'react';
import ToursSection from '@/components/ToursSection';
import CalendarSection from "@/components/CalendarSection";
import UpcomingToursSection from '@/components/UpcomingSection';
import BookingManager from '@/components/BookingManager';
import { TourProgram, UpcomingTourEvent } from '@/types/tour';
import pastTours from '@/data/RecentTours';


interface HomeClientProps {
    allTours: Map<string, TourProgram>;
    tours: TourProgram[];
    upcomingTours: UpcomingTourEvent[];
    locale: string;
}

const HomeClient: React.FC<HomeClientProps> = ({ allTours, tours, upcomingTours, locale }) => {
    return (
        <BookingManager allTours={allTours}>
            {(handleBookTour) => (
                <>
                    <ToursSection tours={tours} onBookTour={handleBookTour} />
                    <CalendarSection allTours={allTours} upcomingTours={upcomingTours} recentTours={pastTours} locale={locale} />
                    <UpcomingToursSection allTours={allTours} upcomingTours={upcomingTours} onReserveSpot={handleBookTour} locale={locale} />
                </>
            )}
        </BookingManager>
    );
};

export default HomeClient;
