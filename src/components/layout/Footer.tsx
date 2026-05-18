// src/components/layout/Footer.tsx
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2026 Olivia. Built with React, TypeScript & CSS.</p>

        <div className="footer-links">
          <a href="https://github.com/" target="_blank">
            GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}