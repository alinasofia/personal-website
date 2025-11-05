// src/components/SideNav.js
export default function SideNav() {
  return (
    <nav className="side-nav" aria-label="Section navigation">
    <a href ="#top" className="side-nav__item">Home</a>
      <a href="#about" className="side-nav__item">About</a>
      <a href="#work" className="side-nav__item">Work</a>
      <a href="#projects" className="side-nav__item">Projects</a>
      <a href="#contact" className="side-nav__item">Contact</a>
    </nav>
  );
}
