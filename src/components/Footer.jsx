import React from 'react';

const Footer = ({ orgName }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-heading">ЛИЦА.КАНДИДАТЫ</h3>
            <ul className="footer-list">
              <li><a href="/">Найти кандидата</a></li>
              <li><a href="/">Попасть в базу</a></li>
              <li><a href="/">О сервисе</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">ЛИЦА.РАБОТА</h3>
            <ul className="footer-list">
              <li><a href="/">Рекрутинг</a></li>
              <li><a href="/">Конструктор подбора</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">О ПОРТАЛЕ</h3>
            <ul className="footer-list">
              <li><a href="/">Поддержка</a></li>
              <li><a href="/">Контакты</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copyright">{orgName}</span>
          <div className="footer-legal">
            <a href="/">Реквизиты</a>
            <span className="divider">|</span>
            <a href="/">Правовая информация</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;