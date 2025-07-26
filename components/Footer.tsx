import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <h3>City Tours</h3>
                    <p>Your premier destination for unforgettable city experiences</p>
                    <div className="contact-info">
                        <div className="contact-item">
                            <span>📞</span>
                            <span>(555) 123-4567</span>
                        </div>
                        <div className="contact-item">
                            <span>✉️</span>
                            <span>info@citytours.com</span>
                        </div>
                        <div className="contact-item">
                            <span>📍</span>
                            <span>123 Tourism Street, City Center</span>
                        </div>
                    </div>
                    <p>&copy; 2024 City Tours. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
