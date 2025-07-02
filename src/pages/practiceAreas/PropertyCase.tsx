import React from 'react';
import styles from './GstTaxLawFirm.module.css';
import Navbar from '../../components/Navbar';


export default function GstTaxLawFirm() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.titleSection}>
          <h1>Top Lawyers For Property Case in Delhi</h1>
        </section>
        <div className={styles.imageWrapper}>
          <img
            src="/4.png"  
            alt="Lawyer"
            className={styles.profileImage}
          /></div>
        <h1>Our Services</h1>
        <ul className = {styles.middle}>
            <li><strong>Property Ownership Disputes: </strong>We handle cases related to conflicting property claims, boundary disputes, and issues arising from unclear property titles. Our goal is to establish and protect your rightful ownership.</li>
            <li><strong>Landlord-Tenant Disputes: </strong>If you are facing challenges with your tenant or landlord, our legal experts can assist in resolving conflicts related to lease agreements, eviction, and property maintenance.</li>
            <li><strong>Real Estate Fraud: </strong>We specialize in cases involving fraudulent property transactions, misrepresentation, and illegal property transfers. Our team works diligently to uncover the truth and safeguard your property rights.</li>
            <li><strong>Construction Disputes: </strong>We provides comprehensive legal support in matters related to construction disputes, ensuring that your rights are protected in cases involving contractors, builders, and construction defects.</li>
            <li><strong>Succession and Inheritance Disputes: </strong>In situations where property disputes arise due to succession and inheritance issues, our attorneys are well-versed in navigating the legal complexities to secure a fair resolution.</li>
        </ul>
        </main>
      <footer className={styles.footer}>
        © UICore 2025. All Rights Reserved.
      </footer>

    </div>
  );
}
