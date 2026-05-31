export default function Footer() {
  return (
    <footer className="footer" style={{
      background: "#111",
      borderTop: "1px solid rgba(201,168,76,0.15)",
    }}>
      <div className="footer__brand">
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.125rem, 3vw, 1.375rem)", fontWeight: 600, letterSpacing: "3px",
          color: "var(--gold)", textTransform: "uppercase",
        }}>Al Karama</div>
        <div style={{
          fontSize: "9px", letterSpacing: "4px",
          color: "rgba(255,255,255,0.3)", marginTop: "4px",
          fontFamily: "'Jost', sans-serif",
        }}>Traiteur · Casablanca</div>
      </div>

      <p style={{
        fontSize: "14px", color: "rgba(255,255,255,0.3)",
        fontFamily: "'Jost', sans-serif", fontWeight: 300,
        letterSpacing: "1px",
      }}>
        © 2025 Al Karama · Tous droits réservés
      </p>

      <div className="footer__links">
        {["Accueil", "menu", "blog"].map(l => (
          <a key={l} href={`/${l.toLowerCase()}`} className="footer__link" style={{
            fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)", textDecoration: "none",
            fontFamily: "'Jost', sans-serif", transition: "color 0.3s",
          }}
            onMouseEnter={e => e.target.style.color = "var(--gold)"}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.3)"}
          >{l}</a>
        ))}
      </div>
    </footer>
  );
}
