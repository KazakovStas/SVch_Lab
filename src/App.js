import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Directions from './components/Directions';
import Benefits from './components/Benefits';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer'; 

const App = () => {
  const orgName = "ООО «ЛИЦА»";
  const mainTitle = "Нанимайте проверенных";
  
  const directionsData = [
    { id: 1, title: "Маркетинг", badge: "40+", icon: "/img/dir.png" },
    { id: 2, title: "Разработка", badge: "80+", icon: "/img/dev.png" },
    { id: 3, title: "Аналитика", badge: "", icon: "/img/ana.png" },
    { id: 4, title: "Дизайн", badge: "", icon: "/img/dis.png" },
    { id: 5, title: "Продажи", badge: "", icon: "/img/sel.png" },
    { id: 6, title: "Топ-менеджмент", badge: "", icon: "/img/top.png" }
  ];

  return (
    <div className="App">
      <Header orgName={orgName} />
      <Hero mainTitle={mainTitle} />
      <Directions items={directionsData} />
      <Benefits />
      <Subscribe orgName={orgName} />
      <Footer orgName={orgName} /> 
    </div>
  );
};

export default App;