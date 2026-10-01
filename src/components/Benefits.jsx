import React from 'react';

const Benefits = () => {
  return (
    <section className="benefits-section">
      <div className="container benefits-container">
        <div className="benefits-left">
          <h2 className="section-title-left">Почему работодатели выбирают ЛИЦА?</h2>
          <div className="benefit-item">
            <img src="/img/yes.png" alt="Галочка" className="check-icon" />
            <div className="benefit-text">
              <h3 className="benefit-title">Проверка компетенций</h3>
              <p className="benefit-desc">
                Всех кандидатов собеседуют эксперты в своих областях.
              </p>
            </div>
          </div>
          <div className="benefit-item">
            <img src="/img/yes.png" alt="Галочка" className="check-icon" />
            <div className="benefit-text">
              <h3 className="benefit-title">Сотни кандидатов по подписке</h3>
              <p className="benefit-desc">
                Вы сможете самостоятельно связываться с кандидатами.
              </p>
            </div>
          </div>
          <div className="benefit-item">
            <img src="/img/yes.png" alt="Галочка" className="check-icon" />
            <div className="benefit-text">
              <h3 className="benefit-title">Еженедельное обновление базы</h3>
              <p className="benefit-desc">
                Мы проводим десятки собеседований еженедельно.
              </p>
            </div>
          </div>
        </div>
        <div className="benefits-right">
          <div className="subscription-card">
            <h3 className="sub-title">Кандидаты по подписке</h3>
            <div className="sub-price">4900 ₽ в месяц</div>
            <p className="sub-note">В 10-100 раз ниже стоимости любого подбора</p>
            <a href="/" className="btn btn-white">Выбрать кандидата</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;