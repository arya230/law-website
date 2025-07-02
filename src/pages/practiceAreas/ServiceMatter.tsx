import React from 'react';
import './ServiceMatter.css';
import Navbar from '../../components/Navbar';
import serviceImg from '../../assets/service.png'

const ServiceMatter: React.FC = () => {
  return (
    <>
    <Navbar/>  
    <section className="service-wrapper" style={{marginTop:"4rem"}}>
      <h1 className="service-title">Best CAT and Service Matters Lawyer</h1>

      <p className="service-text">
        The Central Administrative Tribunal (CAT) and Service Matters. These issues can range from promotions, disciplinary actions,
        transfers, and other administrative decisions that might affect your career. In such cases, having the
        <strong> Best lawyers in Delhi for CAT and Service Matters</strong> can make a significant difference in the outcome of your case.
      </p>

      <div className="service-image">
        <img src={serviceImg} alt="CAT and Service Matters Lawyer" />
      </div>

      <h2 className="service-subtitle">Central Administrative Tribunal (CAT)</h2>

      <p className="service-text">
        CAT is a quasi-judicial body that handles disputes between government employees and the government.
        It was established in 1985 under Article 323-A of the Indian Constitution.
        CAT has jurisdiction over matters related to recruitment and conditions of service of persons appointed
        to public services and posts.
      </p>
      <h2 className="service-subtitle">Service Matters</h2>

      <p className="service-text">
        Service Matters refer to disputes or issues related to the terms and conditions of employment of government employees. It includes promotions, disciplinary actions, transfers, and other administrative decisions that might affect an employee’s career..
      </p>
      </section>
      { /* New Bottom Section */}
        <section className="service-bottom-section">
          <h2 className="bottom-title">Services That We Offer:</h2>

          <p className="bottom-text">
            There are various issues in which an employee can take matters to court under the CAT. Irrespective of whatever may be your stand,
            you can plead with the court to take immediate action against your employer if it falls under the following:
          </p>

          <ul className="bottom-list">
            <li>Recruitment disputes on the joining terms</li>
            <li>Disputes over appointment, misconduct, and suspension</li>
            <li>Issues related to promotion and demotion</li>
            <li>Disputes that are subjected to transfer and posting</li>
            <li>ACR, CVC, and PCA matters</li>
            <li>Raising a voice against removal, suspension, and termination</li>
          </ul>

          <p className="bottom-text">
            The team at <strong>Legum Attorney</strong> – Chamber of experts comprises highly qualified and experienced lawyers
            who are well-versed in administrative law. They have a deep understanding of the legal framework governing CAT and Service Matters
            and have successfully represented clients in various courts, including the High Court of Delhi and the Supreme Court of India.
          </p>

          <p className="bottom-highlight">
            Best Customs &amp; Central Excise Lawyers in Delhi (India)
          </p>
        </section>
        {/* Footer */}
        <footer className="law-footer" style={{backgroundColor:"black"}}>
          © UiCore 2025. All Rights Reserved.
        </footer>
    
    
    </>
  );
};

export default ServiceMatter;
