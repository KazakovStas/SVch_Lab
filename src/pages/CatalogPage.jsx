import React, { useState } from 'react';
import candidatesData from '../data/candidates.json'; 
import CandidateCard from '../components/CandidateCard';

const CatalogPage = () => {
  const [candidates, setCandidates] = useState(candidatesData);
  
  const [selectedIds, setSelectedIds] = useState([]);

  const handleDelete = (id) => {
    if (window.confirm('Вы уверены, что хотите удалить этого кандидата из базы?')) {
      setCandidates(candidates.filter(c => c.id !== id));
    }
  };

  const toggleSelect = (id) => {
    setSelectedIds(prevIds => 
      prevIds.includes(id) 
        ? prevIds.filter(itemId => itemId !== id) 
        : [...prevIds, id]
    );
  };

  return (
    <main className="catalog-main">
      <div className="container catalog-container">
        <aside className="filters-sidebar">
          <div className="filters-header">
            <h2>Фильтры</h2>
            <button className="clear-filters">Очистить</button>
          </div>
          <div className="filter-group">
            <h3>Зарплата, ₽</h3>
            <div className="filter-range">
              <input type="number" placeholder="от" />
              <input type="number" placeholder="до" />
            </div>
          </div>
          <button className="apply-filters btn-primary">Применить</button>
        </aside>

        <div className="candidates-grid">
          {candidates.length === 0 ? (
            <p style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
              Кандидаты не найдены или удалены.
            </p>
          ) : (
            candidates.map(candidate => (
              <CandidateCard
                key={candidate.id}
                candidate={candidate}
                isSelected={selectedIds.includes(candidate.id)}
                onSelect={() => toggleSelect(candidate.id)}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default CatalogPage;