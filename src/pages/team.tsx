import React from 'react';
import styles from './Team.module.css';
import Navbar from '../components/Navbar';

const Team: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.imageWrapper}>
          <img
            src="/1.png"  
            alt="Advocate Kunal Patil"
            className={styles.profileImage}
          />
          <div className={styles.nameCaption}>Advocate Kunal Patil</div>
        </div>
        <div className={styles.content}>
          <div className={styles.heading}><h2>About Advocate Kunal Patil</h2></div>
          <div className={styles.section}>
            Advocate Kunal Patil has been practicing law since 2022. An esteemed alumnus of Campus Law Centre,
            Delhi University, and a graduate of Shri Ram College of Commerce, Delhi University, Kunal combines
            academic excellence with a passion for justice and client service.
          </div>
          <div className={styles.section}>
            <strong>Areas of Expertise</strong><br />
            Kunal specializes in a wide range of legal domains, providing expert counsel and representation
            across India. His practice areas include:
            <ul className={styles.list}>
              <li>Litigation before Supreme Court & High Courts in Mumbai, Delhi, and Calcutta</li>
            </ul>
          </div>
          <div className={styles.section}>
            <strong>Tribunal & Quasi-Judicial Authority Representation:</strong><br />
            <strong>Customs</strong>
            <ul className={styles.list}>
              <li className={styles.listItem}>Income Tax Appellate Tribunal (ITAT)</li>
              <li className={styles.listItem}>Customs, Excise & Service Tax Appellate Tribunal (CESTAT)</li>
              <li className={styles.listItem}>National Company Law Tribunal (NCLT)</li>
              <li className={styles.listItem}>Central Administrative Tribunal (CAT)</li>
              <li className={styles.listItem}>Consumer Forums</li>
              <li className={styles.listItem}>Company Law Tribunals</li>
              <li className={styles.listItem}>Debt Recovery Tribunals (DRT) & Debt Recovery Appellate Tribunals (DRAT)</li>
            </ul>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
       © UICore 2025. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Team;
