export default function ProjectsSection() {
  return (
    <section id="projects" className="content-block">
      <h2>Projects</h2>
      <div style={{ display: "grid", gap: "16px" }}>
        <div className="card">
          <h3>Sorting Visualizer</h3>
          <p>Interactive animations comparing bubble, insertion, merge, and quick sort.</p>
        </div>
        <div className="card">
          <h3>Pixel Pomodoro</h3>
          <p>Cozy timer with tasks, breaks, and localStorage.</p>
        </div>
        <div className="card">
          <h3>Mini Portfolio</h3>
          <p>This site! Built with pixel art + clickable room.</p>
        </div>
      </div>
    </section>
  );
}
