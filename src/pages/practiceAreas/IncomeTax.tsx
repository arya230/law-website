import React from 'react';
import styles from './IncomeTax.module.css';
import Navbar from '../../components/Navbar';

export default function IncomeTax() {
  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.titleSection}>
          <h1>Direct Tax: Best Income Tax Lawyer-
            Advocate in Delhi</h1>
          <h2>Direct Tax:- Best Income Tax Lawyer, Advocate in Delhi</h2>
          <p>
            Our Direct Tax team, led by Advocate Ashish Panday, specializes in both Domestic Tax Law and International Tax Law.
            We offer a comprehensive range of tax advisory and litigation services tailored to meet the needs of businesses and
            organizations across various sectors.
          </p>
        </section>

        <section className={styles.practiceSection}>
          <h2>Income Tax Law Practice:</h2>
          <ul>
            <li><strong>Litigation Representation:</strong> Our team is experienced in handling litigation cases before all forums, including the Supreme Court, High Courts, ITAT, CIT, Tax Tribunals, and tax authorities. We bring a strong advocacy approach and a deep understanding of tax laws to protect your interests and resolve tax disputes effectively.</li>
            <li><strong>Tax Advisory and Consultancy:</strong> We provide expert advice and consultancy services on a wide range of domestic and international tax issues. Whether you require guidance on tax compliance, structuring transactions, or resolving complex tax matters, our team is here to assist you.</li>
            <li><strong>Strategic Tax Planning:</strong> Our tax experts collaborate with you to develop strategic tax plans that align with your business goals. We help you optimize your tax position, minimize risks, and enhance tax efficiency while staying compliant with tax regulations.</li>
            <li><strong>Transfer Pricing Services:</strong> We offer comprehensive transfer pricing services, including studies, compliance assessments, and representation. Our team ensures that your transfer pricing practices adhere to regulations and international standards, minimizing transfer pricing risks.</li>
            <li><strong>Compliance and Regulatory Support:</strong> Staying compliant with tax regulations is crucial. Our team assists you in navigating the complex landscape of tax compliance and regulatory requirements. We provide support in tax filings, submissions, and addressing regulatory inquiries.</li>
          </ul>
        </section>

        <section className={styles.footerSection}>
            <div className={styles.footerColumns}>
                <div className={styles.leftCol}>
                <h3>Income Tax</h3>
                <details>
                    <summary>Litigation</summary>
                    <div className={styles.answer}>
                    Drafting of replies/appeals and appearances before:
                    <ul>
                        <li>Adjudicating and Appellate authorities at Commissionerate level all over India</li>
                        <li>Tribunals all over India</li>
                        <li>All High Courts in India</li>
                        <li>Supreme Court of India</li>
                    </ul>
                    </div>
                </details>
                <details>
                    <summary>Advisory</summary>
                        <div className={styles.answer}>
                            <li>Advice and Opinion on Direct Tax issues</li>
                        </div>
                </details>
                <details>
                    <summary>Representation to GST Council and tax Authorities</summary>
                    <div className={styles.answer}>
                    Making representations before:
                    <ul>
                        <li>GST Council</li>
                        <li>Central Board of Indirect Taxes (CBIC)</li>
                        <li>Central and State GST authorities </li>
                    </ul>
                    </div>
                </details>
                <details>
                    <summary>Advance Ruling Authorities (AAR) and Appellate AAR</summary>
                        <div className={styles.answer}>
                            <li>Drafting of AAR applications and Appeals</li>
                            <li>Representation during hearings</li>
                        </div>
                </details>
                </div>
                <div className={styles.rightCol}>
                <p><strong>100+ ITR Filing Every Day</strong></p>
                <p><strong>100% Client Satisfaction</strong></p>
                <p><strong>5+ Years of Experience</strong></p>
                </div>
            </div>
        </section>
      </main>
      <footer className={styles.footer}>
        © UICore 2025. All Rights Reserved.
      </footer>

    </div>
  );
}
