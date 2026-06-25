import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {year} Olivia Mach</p>

        <div className="footer-links">
          <a href="https://github.com/oliviaaMach" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/olivia-mach-0b433811a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:olivia.mach@outlook.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
