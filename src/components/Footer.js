export default function Footer() {
  return (
    <footer>
      <div>© {new Date().getFullYear()} Alina's Portfolio · Artwork and webpage created by Alina</div>
      <div className="socials">
        <a className="pixel-button" href="https://github.com/alinasofia" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="pixel-button" href="https://www.linkedin.com/in/alina-pineda" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="pixel-button" href="#contact">Say hi</a>
      </div>
    </footer>
  );
}
