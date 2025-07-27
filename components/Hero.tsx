import React from 'react';

interface HeroProps {
    onExploreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Открой для себя Остин</h1>
                <p>Присоединяйтесь к экскурсиям и откройте для себя скрытые жемчужины, богатую историю и яркую культуру нашего города!</p>
                <button className="cta-button" onClick={onExploreClick}>
                    Наши экскурсии
                </button>
            </div>
        </section>
    );
};

export default Hero;
