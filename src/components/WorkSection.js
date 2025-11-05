export default function WorkSection() {
  return (
    <section id="work" className="content-block">
      <h2>Work Experience</h2>
      <div style={{ display: "grid", gap: "14px" }}>
        <div className="card">
          <h3>Research Assistant · The RARE Lab</h3>
          <p>October 2025 – Present</p>
          <p>Collaborate on research exploring human-centered robotics, artificial intelligence, and augmented reality interfaces.
          Assist in designing and developing adaptive robotic systems that improve human-robot communication and interaction.
          Implement and test software prototypes using Python, C++, GitHub, and Linux-based tools for real-time data visualization and control.
          Support lab documentation, experiment setup, and integration of computer vision and AI-driven components in robotic platforms.</p>
        </div>
        <div className="card">
          <h3>Resident Assistant · USF Housing</h3>
          <p>Aug 2024 – Present</p>
          <p>Plan events, communicate with residents, and keep organized records — teamwork and leadership.
            Foster a safe, inclusive, and engaging living environment for 30+ residents through community programming, conflict mediation, and peer mentorship.</p>
        </div>
        <div className="card">
          <h3>Freelance Web Projects</h3>
          <p>Ongoing</p>
          <p>Design in Figma or other frameworks → build in HTML/CSS; cozy, accessible interfaces such as this portfolio.</p>
        </div>
      </div>
    </section>
  );
}
