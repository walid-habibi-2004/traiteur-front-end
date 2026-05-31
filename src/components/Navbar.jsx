import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "#services" },
    {label: "Menu", href: "/menu"},
    { label: "Galerie", href: "/blog" },
  ];

  const linkStyle = {
    color: "rgba(255,255,255,0.75)",
    textDecoration: "none",
    fontSize: "15px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontWeight: 400,
    transition: "color 0.3s",
    fontFamily: "'Jost', sans-serif",
  };

  return (
    <>
      <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`} style={{
        background: scrolled ? undefined : "transparent",
      }}>
        <a href="/" style={{ textDecoration: "none" }} onClick={closeMenu}>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span className="navbar__logo-title">Al Karama</span>
            <span className="navbar__logo-sub">Traiteur · Casablanca</span>
          </div>
        </a>

        {/* Hamburger — mobile & tablet */}
        <button
          type="button"
          className={`navbar__toggle${menuOpen ? " navbar__toggle--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>

        {/* Desktop nav — laptop+ */}
        <div className="navbar__desktop">
          {links.map(l => (
            <a key={l.label} href={l.href} style={linkStyle}
              onMouseEnter={e => e.target.style.color = "var(--gold)"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.75)"}
            >{l.label}</a>
          ))}
          <a href="#contact" className="navbar__cta">Contact</a>
        </div>
      </nav>

      {/* Mobile panel */}
      <div
        className={`navbar__mobile-panel${menuOpen ? " navbar__mobile-panel--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {links.map(l => (
          <a
            key={l.label}
            href={l.href}
            className="navbar__mobile-link"
            onClick={closeMenu}
          >{l.label}</a>
        ))}
        <a href="#contact" className="navbar__cta" onClick={closeMenu}>Contact</a>
      </div>
    </>
  );
}
