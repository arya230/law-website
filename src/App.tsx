import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import ContactUs from './pages/ContactUs';
import Team from './pages/team';
import Income from './pages/practiceAreas/IncomeTax';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/IncomeTax" element={<Income />} />
      </Routes>
    </Router>
  );
};

export default App;
