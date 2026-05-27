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
          <a href="mailto:olivia.mach@outlook.com" className="primary-button">
            Email me
          </a>

          <a href="https://www.linkedin.com/in/olivia-mach-0b433811a/" target="_blank">
            LinkedIn
          </a>

          <a href="https://github.com/oliviaaMach" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}