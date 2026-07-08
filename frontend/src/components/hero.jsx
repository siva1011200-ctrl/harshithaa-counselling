import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero">

      {/* soft background blobs (kept but cleaner) */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="hero-container">

        <div className="hero-text">

          <span className="tagline">
            Counselling Psychologist
          </span>

          <h1>
            A Safe Space to Heal, Grow & Thrive
          </h1>

          <p>
            Compassionate counselling to help you understand yourself better,
            reduce emotional overwhelm, and move forward with clarity and confidence.
          </p>

          <div className="hero-buttons">

            <button
              onClick={() => navigate("/appointment")}
              className="primary-btn"
            >
              Book Session
            </button>

            <a href="#about" className="secondary-btn">
              Learn More
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;