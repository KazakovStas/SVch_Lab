import React from 'react';
import DirectionCard from './DirectionCard';

const Directions = ({ items }) => {
  return (
    <section className="directions-section">
      <div className="container directions-container">
        <h2 className="section-title">Выберите направление работы</h2>
        <div className="directions-grid">
          {items.map(item => (
            <DirectionCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directions;