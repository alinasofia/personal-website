// src/components/Scene.js
import windowImg from "../images/window.png";
import window2Img from "../images/window2.png";
import monitor from "../images/monitor.png";
import plant from "../images/plant.png";
import candle from "../images/candle.png";
import bookshelf from "../images/bookshelf.png";
import papers from "../images/papers.png";

export default function Scene() {
  return (
    <div className="scene-wrap">
      <section
        className="scene"
        aria-label="A pixel room with a desk, plant, monitor, and bookshelf."
      >
        {/* window 1 */}
        <div className="window" aria-hidden="true">
          <img src={windowImg} alt="Pixel window" className="window-img" />
        </div>

        {/* window 2 */}
        <div className="window2" aria-hidden="true">
          <img src={window2Img} alt="Second pixel window" className="window2-img" />
        </div>

        <div className="room-layer">
          {/* Monitor → Projects */}
          <a className="monitor" href="#projects" aria-label="Go to Projects">
            <img src={monitor} alt="Pixel monitor" className="monitor-img" />
          </a>

          {/* Plant → Contact */}
          <a className="plant" href="#contact" aria-label="Go to Contact">
            <img src={plant} alt="Pixel plant" className="plant-img" />
          </a>

          {/* Shelf → About */}
          <a className="shelf" href="#about" aria-label="Go to About">
            <img src={bookshelf} alt="Pixel bookshelf" className="shelf-img" />
          </a>

          {/* Papers → Work */}
          <a className="papers" href="#work" aria-label="Go to Work">
            <img src={papers} alt="Pixel papers" className="papers-img" />
          </a>

          {/* Candle (not clickable) */}
          <div className="candle" aria-hidden="true">
            <img src={candle} alt="Pixel candle" className="candle-img" />
          </div>
        </div>
      </section>
    </div>
  );
}
