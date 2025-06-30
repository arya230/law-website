// src/components/HeroSection.tsx
import React from 'react';
import courtroomImg from '../assets/courtroom.jpg';
import logo from '../assets/logo.png';

import iconTax from '../assets/Income-Tax.png';
import iconCustoms from '../assets/Import-Custom-Acts.png';
import iconIP from '../assets/Intellactual-Property-law.png';
import iconService from '../assets/Group-3.png';
import iconCorporate from '../assets/Corporate-Matters.png';
import iconADR from '../assets/Alternative-Dispute-Resolution.png'
import iconFamily from '../assets/Family.png'
import './HeroSection.css';

const practiceItems = [
  { icon: iconTax, label: 'Income Tax, GST' },
  { icon: iconCustoms, label: 'Import & Export Customs Act' },
  { icon: iconIP, label: 'Intellectual Property Law' },
  { icon: iconService, label: 'Service, Employment and Labour Matters' },
  { icon: iconCorporate, label: 'Corporate Matters' },
  { icon: iconADR, label: 'Alternative Dispute Resolution' },
  { icon: iconFamily, label: 'Civil Family' },
];



const HeroSection: React.FC = () => { 

  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);

const faqs = [
  {
    question: "What areas of law does Legum Attorney specialize in?",
    answer: "We specialize in Taxation Law (GST, Customs, Income Tax), Trade Law, FEMA, Cryptocurrency Regulations, International White Collar Crimes, and various civil and criminal matters including Dispute Resolution, Intellectual Property, Corporate Law, Employment Law, Property, and Matrimonial Disputes."
  },
  {
    question: "Do you handle both civil and criminal cases?",
    answer: "Yes, we handle both civil and criminal litigation with dedicated teams."
  },
  {
    question: "Can Legum Attorney assist with international legal matters like extradition or import-export disputes?",
    answer: "Yes, we have experience in international law including extradition and cross-border disputes."
  },
  {
    question: "Do you provide legal services to businesses and corporations?",
    answer: "Absolutely. We have teams dedicated to corporate and company laws, employment compliance, and regulatory affairs."
  },
  {
    question: "What kind of support do you offer in cryptocurrency and digital law?",
    answer: "We offer regulatory advice, compliance, and litigation support for cryptocurrency and fintech cases."
  },
  {
    question: "How do I book a consultation with Legum Attorney?",
    answer: "You can book a consultation via our contact page or by calling our office directly."
  },
  {
    question: "What makes Legum Attorney different from other law firms?",
    answer: "We offer multidisciplinary legal services, highly specialized teams, and client-focused strategies."
  },
  {
    question: "Is my consultation confidential?",
    answer: "Yes. Client confidentiality is a core part of our ethics and professional practice."
  }
];

const toggleFaq = (index: number) => {
  setActiveIndex(activeIndex === index ? null : index);
};


  return (
    <>
      <section className="hero-section">
        <img src={courtroomImg} alt="Courtroom" className="hero-image" />
      </section>

      <section className="about-section">
        <div className="about-text">
          <h2>Law Fic Tax Practice</h2>
          <p>
            is a multi-disciplinary law firm specializing in Taxation Law, including Customs, GST, Income Tax,
            and Trade Law, FEMA, Cryptocurrency regulations, and International White Collar Crimes,
            including extradition cases and import-export disputes.
          </p>
          <p>
            Our expertise covers Dispute Resolution, Criminal & Civil Litigation, Service Matters, and Intellectual
            Property Rights (IPR). We have dedicated teams for Economic Offenses, White Collar & Blue Collar Crimes,
            Corporate & Company Laws, Labour & Employment Laws, Property & Land Laws, and Matrimonial Disputes,
            offering comprehensive legal solutions across industries.
          </p>
        </div>
        <div className="about-image">
          <img src={logo} alt="Law Icon" />
        </div>
      </section>

      <section className="practice-section">
        <h2>Legal Practices Areas</h2>
        <div className="practice-grid">
          {practiceItems.map((item, index) => (
            <div className="practice-item" key={index}>
              <img src={item.icon} alt={item.label} />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="faq-section">
  <h2>FAQs</h2>
  <div className="faq-container">
    {faqs.map((faq, index) => (
      <div className="faq-item" key={index}>
        <div className="faq-question" onClick={() => toggleFaq(index)}>
          <span>{activeIndex === index ? '−' : '+'}</span>
          {faq.question}
        </div>
        {activeIndex === index && (
          <div className="faq-answer">
            {faq.answer}
          </div>
        )}
      </div>
    ))}
  </div>
</section>
{/* Footer */}
<footer className="footer">
  <p>© UiCore 2025. All Rights Reserved.</p>
</footer>


    </>
  );
};

export default HeroSection;
