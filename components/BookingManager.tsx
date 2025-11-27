'use client';

import React, { useState } from 'react';
import Modal from './Modal';
import { TourProgram } from '@/types/tour';

interface BookingManagerProps {
    children: (handleBookTour: (tourProgramId: string) => void) => React.ReactNode;
    allTours: Map<string, TourProgram>;
}

const BookingManager: React.FC<BookingManagerProps> = ({ children, allTours }) => {
    const [isContactsOpen, setContactsOpen] = useState(false);
    const [tourProgramName, setTourProgramName] = useState('');

    const handleBookTour = (tourProgramId: string) => {
        setTourProgramName(allTours.get(tourProgramId)?.title || '');
        setContactsOpen(true);
    };

    return (
        <>
            {children(handleBookTour)}
            <Modal
                isOpen={isContactsOpen}
                tourName={tourProgramName}
                onClose={() => setContactsOpen(false)}
            />
        </>
    );
};

export default BookingManager;
