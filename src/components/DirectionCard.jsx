import React from 'react';

const DirectionCard = ({ data }) => {
  return (
    <div className="direction-card">
      <div className="card-icon">
        <img src={data.icon} alt={data.title} />
      </div>
      <span className="card-title">{data.title}</span>
      {data.badge && <span className="card-badge">{data.badge}</span>}
    </div>
  );
};

export default DirectionCard;