import { useEffect, useRef } from "react";
// import heroImage from "/hero.jpg";

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    setTimeout(() => {
      el.style.transition = "opacity 1.2s ease, transform 1.2s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 200);
  }, []);

  return (
    <section id="hero" className="hero">
      <div style={{
        position: "absolute", inset: 0,
        background: `
          linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%),
          url("https://res.cloudinary.com/dbbideahh/image/upload/v1780264398/ejevqsqde19xx0vbqjjt.jpg") center/cover no-repeat
        `,
      }} />

      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="hero__decor-line hero__decor-line--left" />
      <div className="hero__decor-line hero__decor-line--right" />

      <div ref={titleRef} className="hero__content">
        <p className="hero__eyebrow" style={{
          textTransform: "uppercase",
          color: "var(--gold)", fontWeight: 700, marginBottom: "24px",
          fontFamily: "'Jost', sans-serif",
        }}>Traiteur Haut de Gamme · Casablanca</p>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.25rem, 9vw, 6rem)", fontWeight: 300,
          color: "var(--white)", lineHeight: 1.05, marginBottom: "8px",
          letterSpacing: "2px",
        }}>
          L'Art de Recevoir
        </h1>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.25rem, 9vw, 6rem)", fontWeight: 300,
          color: "var(--gold)", lineHeight: 1.05, marginBottom: "32px",
          letterSpacing: "2px", fontStyle: "italic",
        }}>
          à la Marocaine
        </h1>

        <div style={{
          width: "60px", height: "1px",
          background: "var(--gold)", margin: "0 auto 32px",
        }} />

        <p className="hero__subtitle" style={{
          fontWeight: 300, lineHeight: 1.8,
          color: "rgba(255,255,255,0.8)", marginBottom: "48px",
          letterSpacing: "0.5px", maxWidth: "600px", margin: "0 auto 48px",
          fontFamily: "'Jost', sans-serif",
        }}>
          Mariages, buffets, événements corporate — nous créons des expériences
          culinaires inoubliables pour vos moments les plus précieux.
        </p>

        <div className="hero__cta-group">
          <a href="#services" className="hero__btn" style={{
            background: "var(--gold)", color: "var(--charcoal)",
            fontWeight: 500,
          }}
            onMouseEnter={e => e.target.style.background = "var(--gold-light)"}
            onMouseLeave={e => e.target.style.background = "var(--gold)"}
          >Nos Services</a>
          <a href="#contact" className="hero__btn" style={{
            background: "transparent", color: "var(--white)",
            fontWeight: 300,
            border: "1px solid rgba(255,255,255,0.5)",
          }}
            onMouseEnter={e => { e.target.style.borderColor = "var(--gold)"; e.target.style.color = "var(--gold)"; }}
            onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.5)"; e.target.style.color = "var(--white)"; }}
          >Contact</a>
        </div>
      </div>

      <div className="hero__scroll" style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
      }}>
        <span style={{
          fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase",
          color: "rgba(255,255,255,0.4)", fontFamily: "'Jost', sans-serif",
        }}>Découvrir</span>
        <div style={{
          width: "1px", height: "48px",
          background: "linear-gradient(to bottom, var(--gold), transparent)",
          animation: "scrollLine 2s ease-in-out infinite",
        }} />
      </div>

      <style>{`
        @keyframes scrollLine {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
      `}</style>
    </section>
  );
}
