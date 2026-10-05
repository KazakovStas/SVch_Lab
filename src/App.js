import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AddCandidatePage from './pages/AddCandidatePage';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';


const App = () => {
  const orgName = "ООО «ЛИЦА»";

  return (

    <Router>
      <div className="App">
        <Header orgName={orgName} />
   
          <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/catalog" element={<CatalogPage />} />
     <Route path="/add" element={<AddCandidatePage />} />  
   </Routes>

        <Footer orgName={orgName} />
      </div>
    </Router>
  );
};

export default App;