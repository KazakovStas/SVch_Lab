import React from 'react';

const Header = ({ orgName }) => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-nav">
          <a href="/" className="logo">
            <span>ЛИЦА</span>
            <div className="logo-icon"></div>
          </a>
          <nav className="main-nav desktop-nav">
            <ul>
              <li><a href="/">Найти кандидата</a></li>
              <li><a href="/">Биржа проектов</a></li>
              <li><a href="/">Попасть в базу</a></li>
            </ul>
          </nav>
        </div>
        <div className="search-auth">
          <div className="search-box">
            <img src="/img/Search.png" alt="Поиск" className="search-icon" />
            <input type="text" className="search-input" placeholder="Поиск по навыкам..." />
          </div>
          <button className="login-btn">Войти</button>
        </div>
      </div>
      <div className="header-bottom">
        <p className="org-name">Организация: {orgName}</p>
      </div>
    </header>
  );
};

export default Header;