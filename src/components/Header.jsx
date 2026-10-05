import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = ({ orgName }) => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-nav">

          <Link to="/" className="logo">
            <span>ЛИЦА</span>
            <div className="logo-icon"></div>
          </Link>
          
          <nav className="main-nav desktop-nav">
            <ul>
              <li><Link to="/catalog">Найти кандидата</Link></li>
              <li><Link to="/projects">Биржа проектов</Link></li>
              <li><Link to="/add">Попасть в базу</Link></li>
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