// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        {/* Extend here if needed */}
      </Routes>
    </Router>
  );
};

export default App;
