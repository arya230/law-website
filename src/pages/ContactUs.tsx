import React from 'react';
import styles from './ContactUs.module.css';
import Navbar from '../components/Navbar';

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.left}>
          <div className={styles.headingSmall}>Contact Us</div>
          <div className={styles.headingLarge}>
            Have <br />
            Questions? <br />
            Let's Talk!
          </div>
        </div>

        <div className={styles.right}>
          <form className={styles.form}>
            <input type="text" placeholder="Name" required className={styles.input} />
            <input type="email" placeholder="Email" required className={styles.input} />
            <input type="text" placeholder="Subject" required className={styles.input} />
            <textarea placeholder="Your message..." className={styles.textarea}></textarea>
            <button type="submit" className={styles.button}>Submit</button>
            <div className={styles.editLink}>Edit form</div>
          </form>
        </div>
      </section>
      <footer className={styles.footer}>
        © UICore 2025. All Rights Reserved.
      </footer>
    </div>
  );
}
