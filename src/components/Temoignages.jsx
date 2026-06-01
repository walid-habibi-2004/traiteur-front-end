import { useState } from "react";

const temoignages = [
  {
    name: "Fatima Benali",
    role: "Mariée — Casablanca",
    text: "El Yassamine a rendu notre mariage absolument magique. La cuisine était sublime, la décoration à couper le souffle. Nos invités en parlent encore des mois après !",
    stars: 5,
  },
  {
    name: "Karim El Fassi",
    role: "Directeur RH — OCP Group",
    text: "Pour notre séminaire annuel, El Yassamine a assuré un buffet d'une qualité exceptionnelle. Professionnalisme, ponctualité, et saveurs inoubliables. Je recommande vivement.",
    stars: 5,
  },
  {
    name: "Nadia Chraibi",
    role: "Organisatrice d'événements",
    text: "Je fais appel à El Yassamine pour tous mes clients exigeants. Ils ne déçoivent jamais — la qualité, la présentation et le service sont toujours au rendez-vous.",
    stars: 5,
  },
];

export default function Temoignages() {
  const [active, setActive] = useState(0);
  const t = temoignages[active];

  const prev = () => setActive(active === 0 ? temoignages.length - 1 : active - 1);
  const next = () => setActive(active === temoignages.length - 1 ? 0 : active + 1);

  return (
    <section id="temoignages" className="section-padding" style={{
      background: "var(--cream)",
      position: "relative", overflow: "hidden",
    }}>

      {/* Big background quote */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(150px, 25vw, 300px)",
        fontWeight: 300,
        color: "var(--gold)", opacity: 0.04,
        lineHeight: 1, pointerEvents: "none", userSelect: "none",
      }}>"</div>

      <div style={{
        maxWidth: "760px", margin: "0 auto",
        padding: "0 24px", textAlign: "center",
        position: "relative", zIndex: 2,
      }}>

        {/* Eyebrow */}
        <p style={{
          textTransform: "uppercase", fontSize: "10px", letterSpacing: "6px",
          color: "var(--gold)", marginBottom: "16px", fontFamily: "'Jost', sans-serif",
        }}>Ce qu'ils disent</p>

        {/* Title */}
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300,
          color: "var(--charcoal)", marginBottom: "48px",
        }}>
          <em style={{ color: "var(--gold)" }}>Témoignages</em>
        </h2>

        {/* Stars */}
        <div style={{ marginBottom: "28px" }}>
          {"★".repeat(t.stars).split("").map((s, i) => (
            <span key={i} style={{ color: "var(--gold)", fontSize: "20px", marginRight: "4px" }}>{s}</span>
          ))}
        </div>

        {/* Quote */}
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 300,
          lineHeight: 1.7, color: "var(--charcoal)",
          fontStyle: "italic", marginBottom: "40px",
          transition: "opacity 0.3s",
        }}>
          "{t.text}"
        </p>

        {/* Author */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "20px", fontWeight: 500,
            color: "var(--charcoal)", letterSpacing: "1px",
          }}>{t.name}</div>
          <div style={{
            fontSize: "11px", letterSpacing: "2px",
            color: "var(--gold)", marginTop: "6px",
            fontFamily: "'Jost', sans-serif", fontWeight: 300,
          }}>{t.role}</div>
        </div>

        {/* Navigation: prev + dots + next */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px" }}>

          {/* Prev */}
          <button type="button" onClick={prev} style={{
            width: "44px", height: "44px",
            border: "1px solid rgba(201,168,76,0.5)",
            background: "transparent", color: "var(--gold)",
            fontSize: "22px", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.3s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--charcoal)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
          >‹</button>

          {/* Dots */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {temoignages.map((_, i) => (
              <button key={i} type="button" onClick={() => setActive(i)} style={{
                width: i === active ? "28px" : "8px",
                height: "2px", padding: 0, border: "none",
                background: i === active ? "var(--gold)" : "var(--cream-dark)",
                cursor: "pointer", transition: "all 0.3s",
              }} />
            ))}
          </div>

          {/* Next */}
          <button type="button" onClick={next} style={{
            width: "44px", height: "44px",
            border: "1px solid rgba(201,168,76,0.5)",
            background: "transparent", color: "var(--gold)",
            fontSize: "22px", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.3s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--charcoal)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
          >›</button>

        </div>
      </div>
    </section>
  );
}
