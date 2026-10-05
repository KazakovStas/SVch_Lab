import React, { useState } from 'react';
import candidatesData from '../data/candidates.json';
import CandidateCard from '../components/CandidateCard';
import Modal from '../components/Modal';

const CatalogPage = () => {
  const [candidates, setCandidates] = useState(candidatesData);
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  
  const [salaryMin, setSalaryMin] = useState('');
  const [salaryMax, setSalaryMax] = useState('');

  const handleDelete = (id) => {
    if (window.confirm('Вы уверены, что хотите удалить этого кандидата из базы?')) {
      setCandidates(candidates.filter(c => c.id !== id));
    }
  };

  const toggleSelect = (id) => {
    setSelectedIds(prevIds => 
      prevIds.includes(id) ? prevIds.filter(itemId => itemId !== id) : [...prevIds, id]
    );
  };

  const filteredCandidates = candidates.filter(candidate => {
    const salary = candidate.salary || 0;
    const min = salaryMin ? Number(salaryMin) : 0;
    const max = salaryMax ? Number(salaryMax) : Infinity;
    return salary >= min && salary <= max;
  });

  const clearFilters = () => {
    setSalaryMin('');
    setSalaryMax('');
  };

  return (
    <main className="catalog-main">
      <div className="container catalog-container">
        <aside className="filters-sidebar">
          <div className="filters-header">
            <h2>Фильтры</h2>
            <button className="clear-filters" onClick={clearFilters}>Очистить</button>
          </div>
          <div className="filter-group">
            <h3>Зарплата, ₽</h3>
            <div className="filter-range">
              <input 
                type="number" 
                placeholder="от" 
                value={salaryMin}
                onChange={(e) => setSalaryMin(e.target.value)}
              />
              <input 
                type="number" 
                placeholder="до" 
                value={salaryMax}
                onChange={(e) => setSalaryMax(e.target.value)}
              />
            </div>
          </div>
          <button className="apply-filters btn-primary">Применить</button>
        </aside>

        <div className="candidates-grid">
          {filteredCandidates.length === 0 ? (
            <p style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
              Кандидаты не найдены или удалены.
            </p>
          ) : (
            filteredCandidates.map(candidate => (
              <CandidateCard
                key={candidate.id}
                candidate={candidate}
                isSelected={selectedIds.includes(candidate.id)}
                onSelect={() => setSelectedCandidate(candidate)}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>
      </div>

     <Modal 
  isOpen={!!selectedCandidate} 
  onClose={() => setSelectedCandidate(null)} 
  candidate={selectedCandidate}
  onEdit={(updatedCandidate) => {
    setCandidates(candidates.map(c => 
      c.id === updatedCandidate.id ? updatedCandidate : c
    ));
    setSelectedCandidate(updatedCandidate);
  }}
  onDelete={handleDelete}
/>
    </main>
  );
};

export default CatalogPage;