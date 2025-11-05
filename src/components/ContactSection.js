export default function ContactSection() {
  return (
    <section id="contact" className="content-block" style={{ marginBottom: "60px" }}>
      <h2>Contact</h2>
      <p style={{ color: "#d2dbe6", marginBottom: "14px" }}>
        Want to get in touch? Just click below to send me an email!
      </p>
      <a
        href="mailto:alinapineda@usf.edu?subject=Hey%20Alina!&body=Hi%20Alina,%20I%20found%20your%20portfolio%20and..."
        className="pixel-button"
        style={{ fontSize: "14px" }}
      >
        Send me an E-Mail!
      </a>
    </section>

  );
}
