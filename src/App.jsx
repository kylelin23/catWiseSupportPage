export default function CatWiseSupport() {
  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <h1 style={styles.title}>CatWise Support</h1>

        <p style={styles.text}>
          Need help with CatWise? Reach out below for support, bug reports,
          or feedback.
        </p>

        <a href="mailto:catwise78@gmail.com" style={styles.button}>
          Email Support
        </a>

        <p style={styles.footer}>
          You can also email:{" "}
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    color: "#1f2937",
    colorScheme: "light",
  },
  card: {
    width: "100%",
    maxWidth: "560px",
    background: "#ffffff",
    borderRadius: "16px",
    padding: "32px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    colorScheme: "light",
  },
  title: {
    fontSize: "32px",
    margin: "0 0 12px",
    color: "#111827",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    margin: "0 0 24px",
    color: "#4b5563",
  },
  button: {
    display: "inline-block",
    textAlign: "center",
    marginTop: "8px",
    padding: "12px 16px",
    border: "none",
    borderRadius: "8px",
    background: "#2563eb",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    textDecoration: "none",
    colorScheme: "light",
  },
  footer: {
    marginTop: "24px",
    fontSize: "14px",
    color: "#6b7280",
  },
  link: {
    color: "#2563eb",
    textDecoration: "none",
  },
};