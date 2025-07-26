import React from 'react';

interface HeroProps {
    onExploreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Открой для себя Остин</h1>
                <p>Join our expert-guided tours and explore hidden gems, rich history, and vibrant culture like never before</p>
                <button className="cta-button" onClick={onExploreClick}>
                    Наши экскурсии
                </button>
            </div>
        </section>
    );
};

export default Hero;
