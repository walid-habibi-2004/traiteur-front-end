const stats = [
  { number: "500+", label: "Événements réalisés" },
  { number: "12", label: "Années d'expérience" },
  { number: "98%", label: "Clients satisfaits" },
  { number: "72h", label: "Commande de dernière minute" },
];

export default function About() {
  return (
    <section id="about" className="section-padding" style={{
      background: "var(--cream)", overflow: "hidden",
    }}>
      <div className="container about-grid">
        <div className="about-collage">
          <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&q=80"
            alt="Cuisine"
            style={{
              position: "absolute", top: 0, left: 0,
              width: "75%", height: "70%", objectFit: "cover",
            }}
          />
          <img src="https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80"
            alt="Plat marocain"
            style={{
              position: "absolute", bottom: 0, right: 0,
              width: "60%", height: "55%", objectFit: "cover",
              border: "6px solid var(--cream)",
            }}
          />
          <div style={{
            position: "absolute", top: "50%", right: "5%",
            width: "clamp(50px, 12vw, 90px)", height: "clamp(50px, 12vw, 90px)",
            border: "1px solid var(--gold)",
            transform: "translateY(-50%) rotate(15deg)",
            opacity: 0.4,
          }} />
          <div className="about-collage__decor" style={{
            position: "absolute", bottom: "52%", left: "68%",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            color: "var(--gold)", opacity: 0.08,
            lineHeight: 1, pointerEvents: "none",
          }}>✦</div>
        </div>

        <div>
          <p className="section-eyebrow" style={{
            textTransform: "uppercase", fontSize: "14px",
            color: "var(--gold)", marginBottom: "20px", fontFamily: "'Jost', sans-serif",
          }}>Notre histoire</p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300,
            lineHeight: 1.1, marginBottom: "8px", color: "var(--charcoal)",
          }}>
            La Passion
          </h2>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300,
            lineHeight: 1.1, marginBottom: "32px",
            color: "var(--gold)", fontStyle: "italic",
          }}>
            de bien recevoir
          </h2>

          <p style={{
            fontSize: "clamp(0.875rem, 2vw, 0.9375rem)", lineHeight: 1.9, color: "var(--warm-gray)",
            fontWeight: 300, marginBottom: "24px", fontFamily: "'Jost', sans-serif",
          }}>
            Depuis plus de 12 ans, Al Karama est le traiteur de référence à Casablanca.
            Nous marions la richesse de la gastronomie marocaine à une élégance contemporaine
            pour créer des événements qui marquent les esprits.
          </p>
          <p style={{
            fontSize: "clamp(0.875rem, 2vw, 0.9375rem)", lineHeight: 1.9, color: "var(--warm-gray)",
            fontWeight: 300, marginBottom: "48px", fontFamily: "'Jost', sans-serif",
          }}>
            Chaque plat est préparé avec des produits frais, chaque décoration est pensée
            sur mesure, chaque moment est orchestré avec soin — parce que vos célébrations
            méritent le meilleur.
          </p>

          <div className="about-stats" style={{
            borderTop: "1px solid var(--cream-dark)", paddingTop: "40px",
          }}>
            {stats.map(s => (
              <div key={s.number}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 5vw, 2.625rem)", fontWeight: 400, color: "var(--gold)",
                  lineHeight: 1,
                }}>{s.number}</div>
                <div style={{
                  fontSize: "11px", letterSpacing: "1px",
                  color: "var(--warm-gray)", marginTop: "6px",
                  fontFamily: "'Jost', sans-serif", fontWeight: 300,
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
