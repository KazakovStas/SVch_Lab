import React from 'react';
import './App.css';
import Header from './components/Header';

// Главный компонент - стрелочная функция
const App = () => {
  // Передача названия организации
  const orgName = "ООО «ЛИЦА»";
  
  // Передача основного заголовка
  const mainTitle = "Нанимайте проверенных кандидатов";
  
  // Передача массива объектов
  const directionsData = [
    { id: 1, title: "Маркетинг", badge: "40+", icon: "/img/dir.png" },
    { id: 2, title: "Разработка", badge: "80+", icon: "/img/dev.png" },
    { id: 3, title: "Аналитика", badge: "", icon: "/img/ana.png" }
  ];

  return (
    <div className="App">
      <Header orgName={orgName} />
      <main>
        <h1>{mainTitle}</h1>
        <p>Направлений в базе: {directionsData.length}</p>
      </main>
    </div>
  );
};

export default App;