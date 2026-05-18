import "./Contact.css";
import Section from "../layout/Section";

type ContactProps = {
  variant?: "primary-bg" | "secondary-bg"
} 

export default function Contact({variant = "secondary-bg"}: ContactProps) {
  return (
    <Section className="contact" id="contact" variant= {variant}>
      <div className="contact-container">
        <p className="section-label">Contact</p>

        <h2>Let’s connect</h2>

        <p className="contact-text">
          I’m currently looking for a LIA placement and junior opportunities.
          Feel free to contact me if you think I could be a good fit.
        </p>

        <div className="contact-links">
          <a href="mailto:your.email@example.com" className="primary-button">
            Email me
          </a>

          <a href="https://www.linkedin.com/" target="_blank">
            LinkedIn
          </a>

          <a href="https://github.com/" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}