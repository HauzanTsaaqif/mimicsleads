import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import GenerateLeads from './pages/GenerateLeads';
import EnrichmentPage from './pages/EnrichmentPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/generate_leads" element={<GenerateLeads />} />
        <Route path="/enrichment_page" element={<EnrichmentPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
