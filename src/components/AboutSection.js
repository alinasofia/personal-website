// ✅ Import your images first (React requires explicit imports)
import Coding from "../images/swe25.JPG";
import Research from "../images/adventures.jpeg";
import Peru from "../images/peru.jpeg";
import Farm from "../images/gaming.jpeg";

export default function AboutSection() {
  return (
    <section id="about" className="content-block">
      <h2>About Me</h2>
      <p>
        Hi! I’m <strong>Alina!</strong> A Computer Science student passionate about building playful,
        accessible, and interactive interfaces. I love combining creativity and technical skills to craft
        engaging user experiences. When I'm not coding, you can find me exploring art, gaming, or
        experimenting with new coding recipes. Welcome to my portfolio!
      </p>

      <div className="about-grid">
        <div className="about-card">
          <img src={Coding} alt="SWE25 Conference" />
          <p>Exploring new opportunities at conferences and making new connections!</p>
        </div>

        <div className="about-card">
          <img src={Research} alt="Adventures" />
          <p>Having adventures with my friends!</p>
        </div>

        <div className="about-card">
          <img src={Peru} alt="Travel" />
          <p>Traveling the world! Always one of my biggest dreams!</p>
        </div>

        <div className="about-card">
          <img src={Farm} alt="Hobbies" />
          <p>
            Reading, gaming, and finding cozy and creative balance beyond the code!
          </p>
        </div>
      </div>
    </section>
  );
}
