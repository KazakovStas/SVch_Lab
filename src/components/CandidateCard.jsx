import React from 'react';
import { Link } from 'react-router-dom';

const CandidateCard = ({ candidate, isSelected, onSelect, onDelete }) => {
  
  const getBadgeClass = (tag) => {
    if (tag === 'fulltime') return 'badge-fulltime';
    if (tag === 'parttime') return 'badge-parttime';
    if (tag === 'remote') return 'badge-remote';
    return '';
  };

  const getBadgeText = (tag) => {
    if (tag === 'fulltime') return 'Полная занятость';
    if (tag === 'parttime') return 'Частичная занятость';
    if (tag === 'remote') return 'Удалённо';
    return tag;
  };

  return (
    <div 
      className={`candidate-card ${isSelected ? 'selected-card' : ''}`} 
      onClick={onSelect}
      style={{ cursor: 'pointer', position: 'relative' }}
    >
      
      <button 
        className="delete-btn"
        onClick={(e) => { 
          e.stopPropagation(); 
          onDelete(candidate.id); 
        }}
        style={{ 
          position: 'absolute', top: '10px', right: '10px', 
          background: '#ff4d4f', color: 'white', border: 'none', 
          borderRadius: '50%', width: '24px', height: '24px', 
          cursor: 'pointer', zIndex: 10, display: 'flex', 
          alignItems: 'center', justifyContent: 'center', fontSize: '18px'
        }}
        title="Удалить кандидата"
      >
        ×
      </button>

      <div className="candidate-badges">
        {candidate.tags?.map((tag, index) => (
          <span key={index} className={`badge ${getBadgeClass(tag)}`}>
            {getBadgeText(tag)}
          </span>
        ))}
      </div>
      
      <div className="candidate-avatar">
        {candidate.avatar?.startsWith('gradient-') ? (
          <div className="avatar-gradient" style={{ 
            width: '104px', height: '104px', borderRadius: '50%', 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            color: '#fff', fontSize: '36px', fontWeight: '700' 
          }}>
            {candidate.name.charAt(0).toUpperCase()}
          </div>
        ) : (
          <img src={candidate.avatar || '/img/default-avatar.png'} alt={candidate.name} />
        )}
      </div>
      
      <h3 className="candidate-name">{candidate.name}</h3>
      <p className="candidate-position">{candidate.position}</p>
      
      <div className="candidate-info">
        <p className="info-item">Опыт: {candidate.experience}</p>
        <p className="info-item">Зарплата: от {candidate.salary?.toLocaleString() || '0'} ₽</p>
      </div>
      
      <Link 
        to={`/profile/${candidate.id}`} 
        className="btn-candidate" 
        onClick={(e) => e.stopPropagation()} 
        style={{ textDecoration: 'none' }}
      >
        Посмотреть справку
      </Link>
    </div>
  );
};

export default CandidateCard;