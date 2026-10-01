import React from 'react';
const Subscribe = ({ orgName }) => {
  return (
    <section className="subscribe-section">
      <div className="container subscribe-container">
        <div className="subscribe-image">
          <img src="/img/Scene 2.png" alt="Подписка на обновления" />
        </div>
        <div className="subscribe-form-wrapper">
          <h2 className="subscribe-title">Подписаться на обновления базы</h2>
          <p className="subscribe-description">
            Мы будем присылать вам информацию каждую неделю о новых кандидатах.
          </p>
          <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="form-input"
              placeholder="Ваше имя"
              required
            />
            <input
              type="email"
              className="form-input"
              placeholder="Email"
              required
            />
            <input
              type="tel"
              className="form-input"
              placeholder="Номер телефона"
              required
            />
            <button type="submit" className="btn-subscribe">
              Подписаться
            </button>
            <p className="form-agreement">
              Отправка формы означает согласие с{' '}
              <a href="/" className="agreement-link">
                Пользовательским соглашением
              </a>{' '}
              и{' '}
              <a href="/" className="agreement-link">
                Политикой конфиденциальности
              </a>
            </p>
          </form>
          <p className="subscribe-footer">
            Сервис {orgName} — ваш надёжный помощник в подборе.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;