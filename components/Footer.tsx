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
              <span>
                <a className='contact-item-link' href="tel:+15128014114">+1-512-801-4114</a>
              </span>
            </div>
            <div className="contact-item">
              <span>📷</span>
              <span>
                <a className='contact-item-link'
                  href="https://instagram.com/austin.guide/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  austin.guide
                </a>
              </span>
            </div>
            <div className="contact-item">
              <span>✈️</span>
              <span>
                <a className='contact-item-link'
                  href="https://t.me/austin_city_tours"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  telegram
                </a>
              </span>
            </div>
            <div className="contact-item">
              <span>💥</span>
              <span>
                <a className='contact-item-link'
                  href="https://www.facebook.com/groups/662224066870718/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook
                </a>
              </span>
            </div>
            {
              <div className="contact-item">
                <span>✉️</span>
                <span>
                  <a className='contact-item-link' href="mailto:tatiana.city.guide@gmail.com">
                    tatiana.city.guide@gmail.com
                  </a>
                </span>
              </div>
            }
          </div>
          <p>&copy; 2025 Austin City Tours</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
