import React from 'react';
import MyConstants from './../lib/MyConstants'

interface HeroProps {
  onExploreClick: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Открой для себя Остин</h1>
        <p>
          Присоединяйтесь к экскурсиям и откройте для себя скрытые жемчужины,
          богатую историю и яркую культуру нашего города!
        </p>
        <button className="cta-button" onClick={() => onExploreClick(MyConstants.idTours)}>
          Наши экскурсии
        </button>
        <button className="cta-button" onClick={() => onExploreClick(MyConstants.idCalendar)}>
          Календарь
        </button>
        <button className="cta-button" onClick={() => onExploreClick(MyConstants.idFAQ)}>
          Ответы на вопросы
        </button>
      </div>
    </section>
  );
};

export default Hero;
