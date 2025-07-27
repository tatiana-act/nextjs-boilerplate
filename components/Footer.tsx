import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <h3>Austin City Tours</h3>
                    <p>Лучшие впечатления начинаются здесь</p>
                    <div className="contact-info">
                        <div className="contact-item">
                            <span>📞</span>
                            <span>(512) 801-4114</span>
                        </div>
                        <div className="contact-item">
                            <span>📷</span>
                            <span><a href="https://instagram.com/austin.guide/" target="_blank" rel="noopener noreferrer">austin.guide</a></span>
                        </div>
                        {/*<div className="contact-item">
                            <span>📍</span>
                            <span>123 Tourism Street, City Center</span>
                        </div>*/}
                    </div>
                    <p>&copy; 2025 Austin City Tours</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
