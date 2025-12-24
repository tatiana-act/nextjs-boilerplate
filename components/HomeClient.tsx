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
}

const HomeClient: React.FC<HomeClientProps> = ({ allTours, tours, upcomingTours }) => {
    return (
        <BookingManager allTours={allTours}>
            {(handleBookTour) => (
                <>
                    <ToursSection tours={tours} onBookTour={handleBookTour} />
                    <CalendarSection allTours={allTours} upcomingTours={upcomingTours} recentTours={pastTours}/>
                    <UpcomingToursSection allTours={allTours} upcomingTours={upcomingTours} onReserveSpot={handleBookTour} />
                </>
            )}
        </BookingManager>
    );
};

export default HomeClient;
