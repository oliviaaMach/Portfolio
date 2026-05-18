import "./Header.css"

export default function Header () {
    return(
        <header className="header">
            <nav className="navbar">
                <a href="#home" className="logo">O.M</a>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <a href="/files/OliviaMach_CV.pdf" className="cv-button" download>
                    Download resume
                </a>
            </nav>
        </header>
    )
}