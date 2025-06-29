import React from 'react';
import './team.tsx'

export default function ContactUs() {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#000',
      color: '#fff',
      width: '100%',
      overflowX: 'hidden',
    },
    header: {
      backgroundColor: '#fff',
      color: '#000',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      borderBottom: '1px solid #ccc',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    nav: {
      display: 'flex',
      gap: '20px',
      fontSize: '14px',
      fontWeight: 500,
    },
    hero: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding: '40px',
      boxSizing: 'border-box',
      width: '100%',
    },
    left: {
      flex: 1,
      minWidth: '300px',
      padding: '20px',
    },
    right: {
      flex: 1,
      minWidth: '300px',
      display: 'flex',
      justifyContent: 'center',
      padding: '20px',
    },
    headingSmall: {
      textTransform: 'uppercase',
      fontSize: '12px',
      color: '#ccc',
      marginBottom: '10px',
    },
    headingLarge: {
      fontSize: '36px',
      fontWeight: 'bold',
      lineHeight: 1.4,
    },
    form: {
      backgroundColor: '#fff',
      color: '#000',
      padding: '30px',
      borderRadius: '10px',
      width: '100%',
      maxWidth: '400px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
    },
    input: {
      width: '95%',
      padding: '10px',
      marginBottom: '15px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      backgroundColor: '#333',
      color: '#fff',
    },
    textarea: {
      width: '95%',
      padding: '10px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      resize: 'none',
      height: '100px',
      marginBottom: '15px',
      backgroundColor: '#333',
      color: '#fff',
    },
    button: {
      width: '20%',
      backgroundColor: '#000',
      color: '#fff',
      padding: '10px',
      fontSize: '14px',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    editLink: {
      fontSize: '12px',
      marginTop: '10px',
      color: '#007BFF',
      cursor: 'pointer',
      textDecoration: 'underline',
    },
    scrollSection: {
      backgroundColor: '#111',
      padding: '60px 20px',
      textAlign: 'center',
      color: '#aaa',
    },
    footer: {
      textAlign: 'center',
      padding: '20px',
      fontSize: '12px',
      backgroundColor: '#000',
      color: '#fff',
      borderTop: '1px solid #333',
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <img src="/LOGO.png" alt="Logo" style={{ height: '160px', width: '160px' }} />
        <nav style={styles.nav}>
          <a href="#">About</a>
          <a href="#">Practice Areas</a>
          <a href="team.tsx">Team</a>
          <a href="#">Contact Us</a>
        </nav>
      </header>

      {/* Hero Section (100vh) */}
      <section style={styles.hero}>
        <div style={styles.left}>
          <div style={styles.headingSmall}>Contact Us</div>
          <div style={styles.headingLarge}>
            Have <br />
            Questions? <br />
            Let's Talk!
          </div>
        </div>

        <div style={styles.right}>
          <form style={styles.form}>
            <input type="text" placeholder="Name" required style={styles.input} />
            <input type="email" placeholder="Email" required style={styles.input} />
            <input type="text" placeholder="Subject" required style={styles.input} />
            <textarea placeholder="Your message..." style={styles.textarea}></textarea>
            <button type="submit" style={styles.button}>Submit</button>
            <div style={styles.editLink}>Edit form</div>
          </form>
        </div>
      </section>
      <footer style={styles.footer}>
        © UICore 2025. All Rights Reserved.
      </footer>
    </div>
  );
}
