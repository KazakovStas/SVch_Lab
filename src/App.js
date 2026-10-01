import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
  const orgName = "ООО «ЛИЦА»";
  const mainTitle = "Нанимайте проверенных";
  
  const directionsData = [
    { id: 1, title: "Маркетинг", badge: "40+", icon: "/img/dir.png" },
    { id: 2, title: "Разработка", badge: "80+", icon: "/img/dev.png" },
    { id: 3, title: "Аналитика", badge: "", icon: "/img/ana.png" }
  ];

  return (
    <div className="App">
      <Header orgName={orgName} />
      <Hero mainTitle={mainTitle} />
      <main>
        <p>Направлений в базе: {directionsData.length}</p>
      </main>
    </div>
  );
};

export default App;