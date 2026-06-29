export default function Privacy() {
  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <h1 style={styles.title}>CatWise Privacy Policy</h1>
        <p style={styles.updated}>Last Updated: June 2026</p>

        <p style={styles.text}>
          CatWise respects your privacy. This Privacy Policy explains what
          information CatWise may collect and how it is used.
        </p>

        <h2 style={styles.heading}>Information We Collect</h2>

        <p style={styles.text}>
          CatWise uses Mixpanel, a third-party analytics service, to collect
          information about how you use the app, such as which buttons you
          tap, which pages or screens you visit, and how you navigate through
          the app. This information is collected automatically as you use
          CatWise.
        </p>

        <p style={styles.text}>
          This analytics data is used solely to help us
          understand how CatWise is used so we can improve the app's design
          and functionality. Mixpanel may process this data on our behalf in
          accordance with its own privacy policy.
        </p>

        <h2 style={styles.heading}>How We Use Information</h2>

        <p style={styles.text}>
          Analytics information is used to understand how users interact with
          CatWise, identify which features are most useful, diagnose issues,
          and guide improvements to the app's experience over time.
        </p>

        <h2 style={styles.heading}>Data Sharing</h2>

        <p style={styles.text}>
          CatWise does not sell your personal information. Information may
          only be shared when needed to operate app features, such as with
          Mixpanel for analytics purposes, or to comply with legal
          requirements.
        </p>

        <h2 style={styles.heading}>Contact</h2>

        <p style={styles.text}>
          If you have questions about this Privacy Policy, contact:
          <br />
          <a href="mailto:catwise78@gmail.com" style={styles.link}>
            catwise78@gmail.com
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