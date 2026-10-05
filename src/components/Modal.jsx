import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, candidate, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(candidate || {});

  React.useEffect(() => {
    setEditData(candidate || {});
    setIsEditing(false);
  }, [candidate]);

  if (!isOpen || !candidate) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onEdit(editData);
    setIsEditing(false);
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <div className="modal-header">
          <span className="modal-logo-text">ЛИЦА</span>
          <span className="modal-logo-dot"></span>
          <span className="modal-logo-text">Кандидаты</span>
        </div>
        
        {!isEditing ? (
          <>
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
            
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <button className="btn-primary" onClick={() => setIsEditing(true)} style={{ flex: 1 }}>
                Редактировать
              </button>
              {onDelete && (
                <button 
                  className="btn-secondary" 
                  onClick={() => { 
                    if (window.confirm('Удалить кандидата?')) {
                      onDelete(candidate.id);
                      onClose();
                    }
                  }} 
                  style={{ flex: 1, background: '#ff4d4f', color: 'white', border: 'none' }}
                >
                  Удалить
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <h2 className="modal-title" style={{ marginBottom: '24px' }}>
              Редактировать кандидата
            </h2>
            
            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '600' }}>Имя:</label>
                <input 
                  type="text" 
                  name="name" 
                  value={editData.name || ''} 
                  onChange={handleChange}
                  className="modal-input"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '600' }}>Должность:</label>
                <input 
                  type="text" 
                  name="position" 
                  value={editData.position || ''} 
                  onChange={handleChange}
                  className="modal-input"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '600' }}>Зарплата:</label>
                <input 
                  type="number" 
                  name="salary" 
                  value={editData.salary || ''} 
                  onChange={handleChange}
                  className="modal-input"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '600' }}>О себе:</label>
                <textarea 
                  name="general_info" 
                  value={editData.general_info || ''} 
                  onChange={handleChange}
                  className="modal-input"
                  rows="3"
                />
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <button className="btn-primary" onClick={handleSave} style={{ flex: 1 }}>
                Сохранить
              </button>
              <button className="btn-secondary" onClick={() => setIsEditing(false)} style={{ flex: 1 }}>
                Отмена
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;