export default function ProjectsSection() {
  return (
    <section id="projects" className="content-block">
      <h2>Projects</h2>
      <div style={{ display: "grid", gap: "16px" }}>
        <div className="card">
          <h3>InCollege — Networking Platform</h3>
          <p>
            University “LinkedIn” built for CS coursework: login/registration, profile creation,
            job search, messaging, and menu navigation implemented in COBOL.
          </p>
        </div>

        <div className="card">
          <h3>Interactive Fibonacci Stock Chart (C#)</h3>
          <p>
            WinForms tool to select candlestick waves, draw Fibonacci levels, and simulate price
            movement with combo boxes, timers, and dynamic annotations.
          </p>
        </div>

        <div className="card">
          <h3>Parallel Text Compression Tool (C / pthreads)</h3>
          <p>
            Operating Systems project that scans a directory and compresses .txt files in parallel (≤20 threads),
            preserving output order and improving throughput.
          </p>
        </div>

        <div className="card">
          <h3>Pixel Portfolio Website (React)</h3>
          <p>
            The site you’re on! Pixel-inspired layout, room background, sections,
            reusable cards, and images! Worked with React, CSS, and Javascript.
          </p>
        </div>
      </div>
    </section>
  );
}
