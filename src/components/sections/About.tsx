import "./About.css";
import Section from "../layout/Section";

type AboutProps = {
  variant?: "primary-bg" | "secondary-bg"
} 

export default function About({variant = "secondary-bg"}: AboutProps) {
  return (
    <Section className="about" id="about" variant={variant}>
      <div className="about-container">
        <div className="about-text">
          <p className="section-label">About me</p>

          <h2>Curious developer with a creative mindset</h2>

          <p>
            I’m currently studying to become a fullstack developer with a focus
            on JavaScript, TypeScript and React.
          </p>

          <p>
            I enjoy building clean, user-friendly interfaces and solving
            problems through code. Right now I’m looking for a LIA placement
            where I can grow, learn and contribute to real-world projects.
          </p>
        </div>

        <div className="about-extra">
          <div>
            <h3>Focus</h3>
            <p>Frontend development, UI, React & TypeScript</p>
          </div>

          <div>
            <h3>Learning</h3>
            <p>APIs, backend basics, team workflows</p>
          </div>

          <div>
            <h3>Strengths</h3>
            <p>Curiosity, creativity, problem solving</p>
          </div>
        </div>
      </div>
    </Section>
  );
}