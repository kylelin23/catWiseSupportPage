import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_kz9xcfa";
const TEMPLATE_ID_1 = "template_mbh71i3";
const TEMPLATE_ID_2 = "template_zpr05bs";
const PUBLIC_KEY = "kha2bU1tDlmvdOBEj";

export default function CatWiseSupport() {
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    if (!data.get("name") || !data.get("email") || !data.get("message")) {
      setError("Please fill out all fields.");
      return;
    }

    setSending(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_1, form, PUBLIC_KEY);
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_2, form, PUBLIC_KEY);

      setSent(true);
      setError(null);
      form.reset();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <h1 style={styles.title}>CatWise Support</h1>

        <p style={styles.text}>
          Need help with CatWise? Send a message below for support, bug reports,
          or feedback.
        </p>

        {sent ? (
          <div style={styles.successBox}>
            <h2 style={styles.successTitle}>Message sent!</h2>
            <p style={styles.text}>Thanks for reaching out. I’ll respond soon.</p>
            <button style={styles.button} onClick={() => setSent(false)}>
              Send Another Message
            </button>
          </div>
        ) : (
          <form id="catwise-support-form" onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label} htmlFor="name">
              Name
            </label>
            <input
              style={styles.input}
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
            />

            <label style={styles.label} htmlFor="email">
              Email
            </label>
            <input
              style={styles.input}
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
            />

            <label style={styles.label} htmlFor="message">
              Message
            </label>
            <textarea
              style={styles.textarea}
              id="message"
              name="message"
              rows="5"
              placeholder="How can I help?"
            />

            {error && <p style={styles.error}>{error}</p>}

            <button style={styles.button} type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}

        <p style={styles.footer}>
          You can also email:{" "}
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
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    marginTop: "8px",
    color: "#374151",
  },
  input: {
    padding: "12px 14px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "16px",
    backgroundColor: "#ffffff",
    color: "#111827",
    colorScheme: "light",
    outline: "none",
    WebkitAppearance: "none",
  },
  textarea: {
    padding: "12px 14px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "16px",
    resize: "vertical",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#ffffff",
    color: "#111827",
    colorScheme: "light",
    outline: "none",
    WebkitAppearance: "none",
  },
  button: {
    marginTop: "16px",
    padding: "12px 16px",
    border: "none",
    borderRadius: "8px",
    background: "#2563eb",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    colorScheme: "light",
  },
  error: {
    color: "#dc2626",
    fontSize: "14px",
    margin: "4px 0 0",
  },
  successBox: {
    background: "#ecfdf5",
    border: "1px solid #a7f3d0",
    borderRadius: "12px",
    padding: "20px",
    marginTop: "20px",
  },
  successTitle: {
    margin: "0 0 8px",
    color: "#047857",
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