// src/pages/Home.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import '../App.css';

const About: React.FC = () => {
  return (
    <div className='main-container'>
        <Navbar />
      <HeroSection />
    </div>
      
    
  );
};

export default About;
