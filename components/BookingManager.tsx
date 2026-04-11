'use client';

import React, { useState } from 'react';
import Modal from './Modal';
import ContactForm from './ContactForm';
import { useTranslations } from 'next-intl';
import { TourProgram } from '@/types/tour';

interface BookingManagerProps {
    children: (handleBookTour: (tourProgramId: string) => void) => React.ReactNode;
    allTours: Map<string, TourProgram>;
}

const BookingManager: React.FC<BookingManagerProps> = ({ children, allTours }) => {
    const tContact = useTranslations('ContactForm');
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
                title={tContact('title')}
                onClose={() => setContactsOpen(false)}
            >
                <ContactForm tourName={tourProgramName} onClose={() => setContactsOpen(false)} />
            </Modal>
        </>
    );
};

export default BookingManager;
