import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import GenerateLeads from './pages/GenerateLeads';
import EnrichmentPage from './pages/EnrichmentPage';
import Settings from './pages/Settings';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/generate_leads" element={<GenerateLeads />} />
        <Route path="/enrichment_page" element={<EnrichmentPage />} />
        <Route path="/setting_page" element={<Settings />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
