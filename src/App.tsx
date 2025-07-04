import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import ContactUs from './pages/ContactUs';
import Team from './pages/team';
import Income from './pages/practiceAreas/IncomeTax';
import CustomTradeLaw from './pages/practiceAreas/CustomTradeLaw';
import GSTTax from './pages/practiceAreas/GstTaxLawFirm';
import Propertycase from './pages/practiceAreas/PropertyCase';
import Corporate from './pages/practiceAreas/CorporateLaw';
import ServiceMatter from './pages/practiceAreas/ServiceMatter';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/IncomeTax" element={<Income />} />
        <Route path="/CustomTradeLaw" element={<CustomTradeLaw />} />
        <Route path="/gst" element={<GSTTax />} />
        <Route path="/property" element={<Propertycase />} />
        <Route path="/CorporateLaw" element={<Corporate />} />
        <Route path="/ServiceMatter" element={<ServiceMatter />} />
      </Routes>
    </Router>
  );
};

export default App;
