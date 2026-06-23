export default function Privacy() {
  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <h1 style={styles.title}>CatWise Privacy Policy</h1>
        <p style={styles.updated}>Last Updated: June 2026</p>

        <p style={styles.text}>
          This Privacy Policy explains what
          information CatWise may collect and how it is used.
        </p>

        <h2 style={styles.heading}>Information We Collect</h2>
        <p style={styles.text}>
          CatWise may collect information you voluntarily provide, such as
          community stories or other content submitted through
          the app.
        </p>

        <p style={styles.text}>
          CatWise may also use optional location information to help users find
          nearby cat shelters. Location access is only used when you allow it.
        </p>

        <h2 style={styles.heading}>How We Use Information</h2>
        <p style={styles.text}>
          Information is used to provide app features, improve the user
          experience, display community content, help users find nearby shelters,
          and respond to support requests.
        </p>

        <h2 style={styles.heading}>Data Sharing</h2>
        <p style={styles.text}>
          CatWise does not sell your personal information. Information may only
          be shared when needed to operate app features or comply with legal
          requirements.
        </p>

        <h2 style={styles.heading}>Contact</h2>
        <p style={styles.text}>
          If you have questions about this Privacy Policy, contact:
          <br />
          <a href="mailto:linkyle0924@gmail.com" style={styles.link}>
            linkyle0924@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f6f7fb",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    color: "#1f2937",
    colorScheme: "light",
  },
  card: {
    maxWidth: "760px",
    margin: "0 auto",
    background: "#ffffff",
    borderRadius: "16px",
    padding: "32px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  },
  title: {
    fontSize: "32px",
    margin: "0 0 8px",
    color: "#111827",
  },
  updated: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "24px",
  },
  heading: {
    fontSize: "20px",
    marginTop: "28px",
    marginBottom: "8px",
    color: "#111827",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#4b5563",
  },
  link: {
    color: "#2563eb",
    textDecoration: "none",
  },
};