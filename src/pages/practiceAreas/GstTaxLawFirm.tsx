import React from 'react';
import styles from './GstTaxLawFirm.module.css';
import Navbar from '../../components/Navbar';


export default function GstTaxLawFirm() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.titleSection}>
          <h1>GST Tax Law Firm | GST Lawyer in Delhi, Mumbai</h1>
        <p>
          At Lawfictax, we are recognized as one of the top <strong>tax litigation firms</strong> 
          specializing in <strong>GST</strong> and <strong>VAT</strong> services across <strong>Delhi</strong>. 
          Our expert team delivers tailored solutions to meet your <strong>GST litigation</strong> 
          needs, ensuring compliance and favorable outcomes in complex tax matters.
        </p>
        </section>
        <div className={styles.imageWrapper}>
          <img
            src="/2.png"  
            alt="Lawyer"
            className={styles.profileImage}
          /></div>
        <h1>Our Key GST Litigation Services Include:</h1>
        <ul>
            <li><strong>Drafting and Responding to GST Notices: </strong> We expertly draft and respond to various <strong>GST notices</strong> and communications from tax authorities, providing detailed and persuasive arguments.</li>
            <li><strong>Appeals Filing and Representation: </strong>Our legal experts handle the complete process of <strong>GST appeals</strong>, preparing and filing on your behalf, ensuring strong advocacy at every stage of the process.</li>
            <li><strong>Responding to GST Summons: </strong>We offer adept representation and responses to <strong>GST summons</strong>, safeguarding your rights and providing guidance throughout proceedings.</li>
            <li><strong>GST Litigation Representation: </strong> Our skilled professionals have vast experience representing clients in all types of <strong>GST litigation</strong>, employing proven strategies to secure positive outcomes.</li>
            <li><strong>Assistance with Refund Claims: </strong> Our team provides expert guidance in managing disputed <strong>GST refund claims</strong>, ensuring swift resolution and maximum recovery.</li>
            <li><strong>GSTIN Restoration and Revocation of Registration: </strong>  We assist with <strong>GSTIN restoration</strong> and revocation of registration under GST, ensuring smooth and compliant operations.</li>
            <li><strong>Litigation Under Previous Indirect Tax Regimes: </strong> We also handle litigation under previous indirect tax regimes such as <strong>VAT</strong> and <strong>Service Tax</strong>, ensuring all tax disputes are efficiently managed.</li>
        </ul>
        <h1>Criminal Jurisdiction Matters:</h1>
            <p>We offer adept assistance in matters concerning GST criminal jurisdiction, including bail, prosecution, and compounding, safeguarding your interests throughout legal proceedings.</p>
        <h1>GST Litigation Process</h1>
            <p>The GST litigation process entails several stages and procedures aimed at resolving disputes between taxpayers and tax authorities:</p>
            <ul className={styles.middle}>
                <li>
                    <strong>Dispute at the Tax Authority Level:</strong>
                    <ul  className={styles.middle}>
                    <li><strong>Tax Notice:</strong> Tax authorities issue notices to taxpayers regarding disagreements or disputes under GST.</li>
                    <li><strong>Response:</strong> Taxpayers submit responses to the notices, presenting arguments and evidence with supporting documents.</li>
                    <li><strong>Adjudication:</strong> Tax authorities review the responses and supporting documents, reaching a decision on assessments, penalties, or other actions.</li>
                    </ul>
                </li>

                <li>
                    <strong>Appeal at the GST Appellate Authority Level:</strong>
                    <ul  className={styles.middle}>
                    <li><strong>Filing of Appeal:</strong> Taxpayers dissatisfied with tax authority decisions can file appeals within the specified timeframe.</li>
                    <li><strong>Appellate Authority Review:</strong> Appellate authorities review appeals, considering arguments, evidence, and documents submitted by both parties.</li>
                    <li><strong>Hearing:</strong> Appellate authorities may conduct hearings for clarification and deliberation.</li>
                    <li><strong>Decision:</strong> Appellate authorities deliver decisions, which may uphold, modify, or reverse previous determinations.</li>
                    </ul>
                </li>

                <li>
                    <strong>Further Appeal at the GST Appellate Tribunal (GSTAT):</strong>
                    <ul  className={styles.middle}>
                    <li><strong>Filing the Appeal:</strong> Taxpayers and tax authorities can appeal to the GSTAT if dissatisfied with appellate authority decisions.</li>
                    <li><strong>GSTAT Review:</strong> The GSTAT reviews appeals with submitted arguments, evidence, and records.</li>
                    <li><strong>Hearing:</strong> GSTAT may conduct hearings for thorough examination.</li>
                    <li><strong>Decision:</strong> The GSTAT delivers decisions, confirming, modifying, or reversing appellate authority rulings.</li>
                    </ul>
                </li>
            </ul>
            <h1>Supreme Court of India</h1>
                <ul className={styles.middle}>
                    <li><strong>Supreme Court of India</strong></li>
                    <li><strong>High Courts (Delhi, Bombay, Bangalore)</strong></li>
                </ul>
                    <p>At Legum Attorney, we are committed to providing robust legal representation and advisory services to navigate the complexities of GST litigation. Contact us today to learn more about how we can assist you.</p>
                    <p>Advocate Ashish Panday brings extensive expertise in customs and indirect tax law. He regularly appears before the Customs Tribunal in Mumbai, Delhi, Kolkata, and other parts of India in respect of customs and GST disputes. Best GST Advocate in Mumbai.</p>
                    <p>we have established a distinguished reputation in the field of <strong>Taxation Law</strong>, both <strong>domestically</strong> and on the <strong>international stage</strong>. Our unwavering commitment to delivering timely and effective <strong>tax solutions</strong> has allowed us to build long-lasting partnerships with our clients. Through consistent performance and a client-centric approach, we have successfully carved a niche in this dynamic area of law, providing comprehensive legal strategies that address complex tax challenges.</p>
        <div className={styles.imageWrapper}>
          <img
            src="/3.png"  
            alt="Lawyer"
            className={styles.profileImage1}
          /></div>      
      </main>
      <footer className={styles.footer}>
        © UICore 2025. All Rights Reserved.
      </footer>

    </div>
  );
}
