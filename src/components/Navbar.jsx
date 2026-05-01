import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="navbar-logo" aria-label="Home">
        <span className="logo-bracket">&lt;</span>PK<span className="logo-bracket">/&gt;</span>
      </a>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l.label}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          </li>
        ))}
        <li>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="nav-resume-btn"
          >
            Resume ↗
          </a>
        </li>
      </ul>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(v => !v)}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
