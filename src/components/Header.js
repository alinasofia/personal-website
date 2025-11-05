// src/components/Header.js
import React from "react";
import avatar from "../images/avatar.png"; // ensure src/images/avatar.png exists

export default function Header() {
  return (
    <header aria-label="Top navigation">
      <div className="brand" aria-label="Brand">
        <img src={avatar} alt="Alina avatar" className="avatar-img" />
        <div>
          <h1>Alina's Portfolio</h1>
          <div style={{ fontSize: "13px", color: "#d2dbe6" }}>
            Computer Science • pixel cozy interface portfolio ✨
          </div>
        </div>
      </div>

      {/* Header Buttons: Resume, GitHub, LinkedIn */}
      <nav>
        <a
          className="pixel-button"
          href="https://github.com/alinasofia"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="pixel-button"
          href="https://www.linkedin.com/in/alina-pineda"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
                <a
          className="pixel-button"
          href="/Alina_Pineda_2025_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
