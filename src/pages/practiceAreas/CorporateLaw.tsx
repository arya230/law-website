import React from 'react';
import './CorporateLaw.css';
import Navbar from '../../components/Navbar';
import laptopImg from '../../assets/lap.png';
import gstImg from '../../assets/gst.png'

const CorporateLaw: React.FC = () => {
  return (
  <>
    <Navbar />
    <section className="corporate-law-container">

      {/* Title Section */}
      <div className="section">
        <h1 className="title">Corporate Law &amp; NCLT Practice</h1>
        <p className="text">
          At <strong>Legum Attorney</strong>, we offer comprehensive corporate legal solutions tailored
          to meet the needs of businesses navigating India’s complex regulatory and commercial environment.
          With offices in <strong>Delhi</strong>, our experienced team is well-positioned to represent
          clients before the <strong>National Company Law Tribunal (NCLT)</strong> and other judicial and
          regulatory forums.
        </p>
      </div>

      {/* Expertise Section */}
      <div className="section">
        <h2 className="subtitle">Our Expertise</h2>
        <p className="text">
          We advise and represent clients across a wide spectrum of corporate matters, including but not limited to:
        </p>
        <ul className="expertise-list">
          <li>
            <strong>Corporate Restructuring & Mergers</strong><br />
            Advisory and legal support in mergers, demergers, amalgamations, and schemes of arrangement under the Companies Act and NCLT framework.
          </li>
          <li>
            <strong>Insolvency & Bankruptcy (IBC)</strong><br />
            Representing financial creditors, operational creditors, and corporate debtors in proceedings under the
            <strong> Insolvency and Bankruptcy Code, 2016.</strong>
          </li>
          <li>
            <strong>Oppression & Mismanagement</strong><br />
            Legal recourse under Sections 241 &amp; 242 of the Companies Act, 2013, including shareholder disputes, minority rights, and board-level conflicts.
          </li>
          <li>
            <strong>Winding Up & Liquidation</strong><br />
            Advising on voluntary and compulsory winding up procedures, representation before NCLT, and handling liquidator-related matters.
          </li>
          <li>
            <strong>Revival & Rehabilitation</strong><br />
            Structuring rehabilitation plans and settlement arrangements for distressed companies.
          </li>
          <li>
            <strong>Corporate Governance & Compliance</strong><br />
            Ongoing advisory on board procedures, shareholder rights, statutory filings, and compliance with SEBI, MCA, and ROC guidelines.
          </li>
          <li>
            <strong>Pre-litigation Advisory & Strategy</strong><br />
            Risk assessment, strategy formulation, and dispute avoidance mechanisms tailored to corporate conflicts.
          </li>
        </ul>
      </div>
    </section>
    <section className="law-details-wrapper">
      <h2 className="section-title">Corporate Law</h2>

      <div className="law-grid">
        <div className="accordion-box">
          <details open>
            <summary>Corporate Restructuring & Mergers</summary>
            <p>Advisory and legal support in mergers, demergers, amalgamations, and schemes of arrangement under the Companies Act and NCLT framework.</p>
          </details>
          <details>
            <summary>Insolvency & Bankruptcy (IBC)</summary>
            <p>Representing financial creditors, operational creditors, and corporate debtors in proceedings under the Insolvency and Bankruptcy Code, 2016.</p>
          </details>
          <details>
            <summary>Oppression & Mismanagement</summary>
            <p>Legal recourse under Sections 241 & 242 of the Companies Act, 2013, including shareholder disputes, minority rights, and board-level conflicts.</p>
          </details>
          <details>
            <summary>Winding Up & Liquidation</summary>
            <p>Advising on voluntary and compulsory winding up procedures, representation before NCLT, and handling liquidator-related matters.</p>
          </details>
        </div>

        <div className="image-box">
          <img src={gstImg} alt="GST" />
        </div>
      </div>

      <div className="law-grid">
        <div className="image-box">
          <img src={laptopImg} alt="Tax Form" />
        </div>

        <div>
          <h2 className="section-title">NCLT Practice</h2>
          <div className="accordion-box">
            <details open>
              <summary>Litigation</summary>
              <ul>
                <li>Representation of financial and operational creditors</li>
                <li>Corporate debtor advisory and defense</li>
                <li>CIRP, liquidation, and resolution plan submissions</li>
              </ul>
            </details>
            <details>
              <summary>Insolvency & Bankruptcy (IBC)</summary>
              <ul>
                <li>Representation of financial and operational creditors</li>
                <li>Corporate debtor advisory and defense</li>
                <li>CIRP, liquidation, and resolution plan submissions</li>
              </ul>
            </details>
            <details>
              <summary>Mergers, Amalgamations & Restructuring</summary>
              <ul>
                <li>Scheme approvals under Companies Act</li>
                <li>Cross-border M&A representation</li>
                <li>Tribunal sanction of corporate restructuring</li>
              </ul>
            </details>
            <details>
              <summary>Appeals Before NCLAT</summary>
              <ul>
                <li>Appeals against NCLT orders</li>
                <li>Emergency stay applications and appellate strategy</li>
                <li>Drafting of appeal memoranda and rejoinders</li>
              </ul>
            </details>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="law-footer">
        © UiCore 2025. All Rights Reserved.
      </footer>
    </section>
    </>
  );
};

export default CorporateLaw;