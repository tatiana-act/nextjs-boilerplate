'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import MyConstants from './../lib/MyConstants'
import LanguageSwitcher from './LanguageSwitcher';

const Hero: React.FC = () => {
  const t = useTranslations('Hero');
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
        <button className="cta-button" onClick={() => scrollToSection(MyConstants.idTours)}>
          {t('tours')}
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
      </div>
    </section>
  );
};

export default Hero;
