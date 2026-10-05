import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCandidatePage = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    experience: '',
    salary: '',
    category: '',
    location: '',
    age: '',
    telegram: '',
    portfolio: '',
    general_info: '',
    reason: '',
    tags: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTagChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      tags: checked 
        ? [...prev.tags, value]
        : prev.tags.filter(tag => tag !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const existingCandidates = JSON.parse(localStorage.getItem('candidates') || '[]');
    
    const newCandidate = {
      id: String(Date.now()), 
      ...formData,
      salary: Number(formData.salary) || 0,
      avatar: 'img/default-avatar.png'
    };
    
    const updatedCandidates = [...existingCandidates, newCandidate];
    localStorage.setItem('candidates', JSON.stringify(updatedCandidates));
    
    alert('Кандидат успешно добавлен!');
    navigate('/catalog'); 
  };

  return (
    <main className="edit-profile-main">
      <div className="container edit-profile-container">
        <div className="edit-profile-card">
          <div className="edit-header">
            <h1>Добавить нового кандидата</h1>
            <p className="edit-subtitle">Заполните информацию о кандидате</p>
          </div>

          <form onSubmit={handleSubmit} className="edit-form">
            <div className="form-group">
              <label htmlFor="name">ФИО *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                placeholder="Например: Иванов Иван"
              />
            </div>

            <div className="form-group">
              <label htmlFor="position">Должность / Позиция *</label>
              <input 
                type="text" 
                id="position" 
                name="position" 
                value={formData.position}
                onChange={handleChange}
                required 
                placeholder="Например: Frontend-разработчик"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="experience">Опыт работы *</label>
                <input 
                  type="text" 
                  id="experience" 
                  name="experience" 
                  value={formData.experience}
                  onChange={handleChange}
                  required 
                  placeholder="Например: 3 года"
                />
              </div>
              <div className="form-group">
                <label htmlFor="salary">Зарплатные ожидания, ₽ *</label>
                <input 
                  type="number" 
                  id="salary" 
                  name="salary" 
                  value={formData.salary}
                  onChange={handleChange}
                  required 
                  placeholder="150000"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="category">Категория *</label>
              <select 
                id="category" 
                name="category" 
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Выберите категорию</option>
                <option value="marketing">Маркетинг</option>
                <option value="development">Разработка</option>
                <option value="design">Дизайн</option>
                <option value="sales">Продажи</option>
                <option value="analytics">Аналитика</option>
              </select>
            </div>

            <div className="form-group">
              <label>Формат работы</label>
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  name="tags" 
                  value="fulltime"
                  checked={formData.tags.includes('fulltime')}
                  onChange={handleTagChange}
                /> 
                <span>Полная занятость</span>
              </label>
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  name="tags" 
                  value="parttime"
                  checked={formData.tags.includes('parttime')}
                  onChange={handleTagChange}
                /> 
                <span>Частичная занятость</span>
              </label>
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  name="tags" 
                  value="remote"
                  checked={formData.tags.includes('remote')}
                  onChange={handleTagChange}
                /> 
                <span>Удалённо</span>
              </label>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="age">Возраст</label>
                <input 
                  type="text" 
                  id="age" 
                  name="age" 
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Например: 30 лет"
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Город</label>
                <input 
                  type="text" 
                  id="location" 
                  name="location" 
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Например: Москва"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="telegram">Telegram</label>
              <input 
                type="text" 
                id="telegram" 
                name="telegram" 
                value={formData.telegram}
                onChange={handleChange}
                placeholder="@username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="general_info">Общая информация</label>
              <textarea 
                id="general_info" 
                name="general_info" 
                rows="4"
                value={formData.general_info}
                onChange={handleChange}
                placeholder="Ключевые достижения, экспертиза..."
              ></textarea>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">Добавить кандидата</button>
              <button 
                type="button" 
                className="btn-secondary"
                onClick={() => navigate('/catalog')}
              >
                Отмена
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddCandidatePage;