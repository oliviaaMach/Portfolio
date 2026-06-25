import "./Contact.css";
import Section from "../layout/Section";

type ContactProps = {
  variant?: "primary-bg" | "secondary-bg"
}

export default function Contact({ variant = "secondary-bg" }: ContactProps) {
  return (
    <Section className="contact" id="contact" variant={variant}>
      <div className="contact-container">
        <p className="section-label">Contact</p>

        <h2>Let's connect</h2>

        <p className="contact-text">
          I'm always open to opportunities where I can grow through collaboration
          and contribute to exciting projects.
        </p>

        <div className="contact-links">
          <a href="mailto:olivia.mach@outlook.com" className="primary-button">
            Email me
          </a>

          <a
            href="https://www.linkedin.com/in/olivia-mach-0b433811a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="https://github.com/oliviaaMach" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}
