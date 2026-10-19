import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material'; 
import theme from './theme';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import AddCandidatePage from './pages/AddCandidatePage';

const App = () => {
  const orgName = "ООО «ЛИЦА»";

  return (
    <ThemeProvider theme={theme}> 
      <CssBaseline /> 
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
    </ThemeProvider>
  );
};

export default App;