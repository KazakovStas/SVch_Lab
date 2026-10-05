import React from 'react';

const Modal = ({ isOpen, onClose, candidate }) => {
  if (!isOpen || !candidate) return null;

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <div className="modal-header">
          <span className="modal-logo-text">ЛИЦА</span>
          <span className="modal-logo-dot"></span>
          <span className="modal-logo-text">Кандидаты</span>
        </div>
        
        <h2 className="modal-title" style={{ marginBottom: '24px' }}>
          {candidate.name}
        </h2>
        
        <div style={{ textAlign: 'left', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
          <p style={{ marginBottom: '12px' }}><strong>Должность:</strong> {candidate.position}</p>
          <p style={{ marginBottom: '12px' }}><strong>Опыт:</strong> {candidate.experience}</p>
          <p style={{ marginBottom: '12px' }}><strong>Зарплатные ожидания:</strong> {candidate.salary?.toLocaleString()} ₽</p>
          <p style={{ marginBottom: '12px' }}><strong>Локация:</strong> {candidate.location || 'Не указана'}</p>
          <p style={{ marginBottom: '12px' }}><strong>Возраст:</strong> {candidate.age || 'Не указан'}</p>
          
          <h3 style={{ margin: '24px 0 12px', fontSize: '16px', color: 'var(--text-main)' }}>О себе:</h3>
          <p style={{ marginBottom: '12px' }}>{candidate.general_info || 'Информация отсутствует'}</p>
          
          <h3 style={{ margin: '24px 0 12px', fontSize: '16px', color: 'var(--text-main)' }}>Причина поиска работы:</h3>
          <p style={{ marginBottom: '12px' }}>{candidate.reason || 'Не указана'}</p>
          
          <p style={{ marginBottom: '12px' }}><strong>Telegram:</strong> {candidate.telegram || 'Не указан'}</p>
          <p style={{ marginBottom: '12px' }}><strong>Портфолио:</strong> {candidate.portfolio || 'Не указано'}</p>
        </div>
        
        <button 
          className="btn-primary btn-full" 
          onClick={onClose} 
          style={{ marginTop: '24px' }}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Modal;