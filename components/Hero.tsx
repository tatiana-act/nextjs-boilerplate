'use client';

import React, {useState} from 'react';
import { useTranslations } from 'next-intl';
import MyConstants from './../lib/MyConstants'
import LanguageSwitcher from './LanguageSwitcher';
import { Popup } from "reactjs-popup";
import BookingForm from "@/components/BookingForm";
import {TourProgram} from "@/types/tour";

interface HeroProps {
  allTours: Map<string, TourProgram>;
}

const Hero: React.FC<HeroProps> = ({ allTours }) => {
  const t = useTranslations('Hero');
  const tBooking = useTranslations('BookingForm');
  const [isBookingOpened, setBookingOpened] = useState(false);
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  const closeBookingPopup = () => {
    setBookingOpened(false);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
        <button className="cta-button" onClick={() => scrollToSection(MyConstants.idTours)}>
          {t('tours')}
        </button>
        <button className="cta-button" onClick={() => setBookingOpened(true)}>
          {t('makeOrder')}
        </button>
        <button className="cta-button" onClick={() => scrollToSection(MyConstants.idCalendar)}>
          {t('calendar')}
        </button>
        <button className="cta-button" onClick={() => scrollToSection(MyConstants.idContactInfo)}>
          {t('contacts')}
        </button>
        <br />
        <div className="absolute top-4 right-4 z-50 md:top-6 md:right-8">
          <LanguageSwitcher />
        </div>
        {isBookingOpened && (
            <div>
              <Popup open={isBookingOpened} closeOnDocumentClick onClose={closeBookingPopup}>
                <div className="modal">
                  <div className="tour-header">{tBooking('title')}</div>
                  <button className="close" onClick={closeBookingPopup}>
                    &times;
                  </button>
                  <BookingForm allTours={allTours} onClose={closeBookingPopup} />
                </div>
              </Popup>
            </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
