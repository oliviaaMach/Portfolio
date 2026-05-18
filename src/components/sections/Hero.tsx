import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-label">Frontend / Fullstack Developer Student</p>

          <h1>Olivia Mach</h1>

          <p className="hero-text">
            An upcoming full-stack developer
            <br />
            driven by <span className="creativity">Creativity</span> and{" "}
            <span className="code">code</span>
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              View projects
            </a>

            <a href="#contact" className="secondary-button">
              Contact me
            </a>
          </div>

          <div className="tech-stack">
            <span>JavaScript</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>CSS</span>
          </div>
        </div>

        <div className="hero-image">
          <img className="profile" src="/images/profile3.png" alt="Olivia Mach" />
        </div>
      </div>
    </section>
  );
}
