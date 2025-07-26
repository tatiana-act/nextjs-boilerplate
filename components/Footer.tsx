import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <h3>Austin City Tours</h3>
                    <p>Your premier destination for unforgettable city experiences</p>
                    <div className="contact-info">
                        <div className="contact-item">
                            <span>📞</span>
                            <span>(777) 309-7849</span>
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
                    <p>&copy; 2025 Austin City Tours. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
