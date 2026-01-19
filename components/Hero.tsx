'use client';

import React from 'react';
import MyConstants from './../lib/MyConstants'
import LanguageSwitcher from './LanguageSwitcher';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Открой для себя Остин</h1>
        <p>
          Присоединяйтесь к экскурсиям и откройте для себя скрытые жемчужины,
          богатую историю и яркую культуру нашего города!
        </p>
        <button className="cta-button" onClick={() => scrollToSection(MyConstants.idTours)}>
          Наши экскурсии
        </button>
        <button className="cta-button" onClick={() => scrollToSection(MyConstants.idCalendar)}>
          Календарь
        </button>
        <button className="cta-button" onClick={() => scrollToSection(MyConstants.idContactInfo)}>
          Контакты
        </button>
        <br />
        <LanguageSwitcher />
      </div>
    </section>
  );
};

export default Hero;
