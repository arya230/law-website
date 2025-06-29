import React from 'react';

const Team: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fff',
      color: '#000',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 60px',
      borderBottom: '1px solid #ccc',
    },
    logo: {
      height: '60px',
      width: '60px',
      objectFit: 'contain',
    },
    nav: {
      display: 'flex',
      gap: '30px',
      fontSize: '15px',
      fontWeight: 500,
    },
    main: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 40px',
      gap: '40px',
    },
    imageWrapper: {
      flex: '1 1 300px',
      textAlign: 'center',
    },
    profileImage: {
      width: '500px',
      height: '500px',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    nameCaption: {
      marginTop: '10px',
      fontWeight: 'bold',
    },
    content: {
      flex: '2 1 400px',
      maxWidth: '700px',
    },
    heading: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    section: {
      marginBottom: '20px',
      fontSize: '16px',
      lineHeight: 1.6,
    },
    list: {
      marginTop: '10px',
      paddingLeft: '20px',
    },
    listItem: {
      fontWeight: 'bold',
      marginBottom: '6px',
    },
    footer: {
      textAlign: 'center',
      padding: '20px',
      fontSize: '12px',
      borderTop: '1px solid #ccc',
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <img src="/LOGO.png" alt="Logo" style={styles.logo} />
        <nav style={styles.nav}>
          <a href="#">About</a>
          <a href="#">Practice Areas</a>
          <a href="#">Team</a>
          <a href="#">Contact Us</a>
        </nav>
      </header>

      {/* Main Section */}
      <main style={styles.main}>
        {/* Profile Image */}
        <div style={styles.imageWrapper}>
          <img
            src="1.png" 
            alt="Advocate Kunal Patil"
            style={styles.profileImage}
          />
          <div style={styles.nameCaption}>Advocate Kunal Patil</div>
        </div>

        {/* Bio Content */}
        <div style={styles.content}>
          <div style={styles.heading}><h2>About Advocate Kunal Patil</h2></div>
          <div style={styles.section}>
            Advocate Kunal Patil has been practicing law since 2022. An esteemed alumnus of Campus Law Centre,
            Delhi University, and a graduate of Shri Ram College of Commerce, Delhi University, Kunal combines
            academic excellence with a passion for justice and client service.
          </div>

          <div style={styles.section}>
            <strong>Areas of Expertise</strong><br />
            Kunal specializes in a wide range of legal domains, providing expert counsel and representation
            across India. His practice areas include:
            <ul style={styles.list}>
              <li>Litigation before Supreme Court & High Courts** in Mumbai, Delhi, and Calcutta</li>
            </ul>
          </div>

          <div style={styles.section}>
            <strong>Tribunal & Quasi-Judicial Authority Representation:</strong><br />
            <strong>Customs</strong>
            <ul style={styles.list}>
              <li style={styles.listItem}>Income Tax Appellate Tribunal (ITAT)</li>
              <li style={styles.listItem}>Customs, Excise & Service Tax Appellate Tribunal (CESTAT)</li>
              <li style={styles.listItem}>National Company Law Tribunal (NCLT)</li>
              <li style={styles.listItem}>Central Administrative Tribunal (CAT)</li>
              <li style={styles.listItem}>Consumer Forums</li>
              <li style={styles.listItem}>Company Law Tribunals</li>
              <li style={styles.listItem}>Debt Recovery Tribunals (DRT) & Debt Recovery Appellate Tribunals (DRAT)</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        © UICore 2025. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Team;
