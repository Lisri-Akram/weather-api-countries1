import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountryPage from './components/CountryPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/country/:countryName" element={
            <>
              <Navbar />
              <CountryPage />
            </>
          } />
          <Route path="/" element={<Navigate to="/country/japan" replace />} />
          <Route path="*" element={<p> page not found </p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
