import React from 'react';

const Hero = ({ mainTitle }) => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {mainTitle} <span className="highlight">кандидатов</span>
          </h1>
          <p className="hero-description">
            Мы уже со всеми провели собеседования и подтверждаем их профессионализм
          </p>
          <div className="hero-buttons">
            <a href="/" className="btn btn-primary">Выбрать кандидата</a>
            <a href="/" className="btn btn-secondary">Попасть в базу</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/img/Scene 1.png" alt="Собеседование кандидатов" />
        </div>
      </div>
    </section>
  );
};

export default Hero;