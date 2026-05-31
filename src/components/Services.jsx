const services = [
  {
    id: "01",
    title: "Mariages",
    subtitle: "Votre jour le plus précieux",
    desc: "Un mariage sur-mesure, de l'apéritif au dessert. Cuisine marocaine authentique ou fusion internationale — chaque détail pensé pour vous.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    tag: "My Wedding",
  },
  {
    id: "02",
    title: "Buffet",
    subtitle: "Généreux & Raffiné",
    desc: "Des buffets chaleureux et abondants pour toutes vos réceptions. Fraîcheur des produits, présentation élégante, saveurs inoubliables.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
    tag: "My Buffet",
  },
  {
    id: "03",
    title: "Menus",
    subtitle: "Sur Mesure",
    desc: "Menus personnalisés selon vos envies et votre budget. Tradition marocaine revisitée ou cuisine internationale, à vous de choisir.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    tag: "My Menu",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding" style={{
      background: "var(--charcoal)",
    }}>
      <div className="section-header">
        <p className="section-eyebrow" style={{
          textTransform: "uppercase",
          color: "var(--gold)", marginBottom: "16px", fontFamily: "'Jost', sans-serif",
        }}>Ce que nous offrons</p>
        <h2 className="section-title" style={{ color: "var(--white)" }}>
          Nos <em style={{ color: "var(--gold)" }}>Services</em>
        </h2>
        <div style={{ width: "40px", height: "1px", background: "var(--gold)", margin: "24px auto 0" }} />
      </div>

      <div className="services-grid">
        {services.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="service-card" style={{
      position: "relative", overflow: "hidden",
      aspectRatio: "4/3", cursor: "pointer",
    }}
      onMouseEnter={e => {
        if (window.matchMedia("(min-width: 1024px)").matches) {
          const overlay = e.currentTarget.querySelector(".s-overlay");
          const img = e.currentTarget.querySelector(".s-img");
          const content = e.currentTarget.querySelector(".s-content");
          overlay.style.opacity = 1;
          img.style.transform = "scale(1.08)";
          content.style.transform = "translateY(0)";
          content.style.opacity = 1;
        }
      }}
      onMouseLeave={e => {
        if (window.matchMedia("(min-width: 1024px)").matches) {
          const overlay = e.currentTarget.querySelector(".s-overlay");
          const img = e.currentTarget.querySelector(".s-img");
          const content = e.currentTarget.querySelector(".s-content");
          overlay.style.opacity = 0;
          img.style.transform = "scale(1)";
          content.style.transform = "translateY(20px)";
          content.style.opacity = 0;
        }
      }}
    >
      <img className="s-img" src={service.image} alt={service.title}
        style={{
          width: "100%", height: "100%", objectFit: "cover",
          transition: "transform 0.6s ease", display: "block",
        }}
      />

      <div style={{
        position: "absolute", top: "20px", left: "20px",
        padding: "4px 12px", border: "1px solid rgba(201,168,76,0.6)",
        fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase",
        color: "var(--gold)", background: "rgba(26,26,26,0.6)",
        fontFamily: "'Jost', sans-serif",
      }}>{service.tag}</div>

      <div style={{
        position: "absolute", bottom: "20px", right: "20px",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(2rem, 6vw, 3rem)", fontWeight: 300,
        color: "rgba(255,255,255,0.15)", lineHeight: 1,
      }}>{service.id}</div>

      <div className="s-overlay" style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.6) 60%, transparent 100%)",
        opacity: 0, transition: "opacity 0.4s ease",
      }} />

      <div className="s-content" style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "clamp(1rem, 3vw, 2rem) clamp(1rem, 2.5vw, 1.75rem)",
        transform: "translateY(20px)", opacity: 0,
        transition: "all 0.4s ease",
      }}>
        <p style={{
          fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase",
          color: "var(--gold)", marginBottom: "8px", fontFamily: "'Jost', sans-serif",
        }}>{service.subtitle}</p>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 400, color: "var(--white)",
          marginBottom: "12px",
        }}>{service.title}</h3>
        <p style={{
          fontSize: "13px", lineHeight: 1.7, color: "rgba(255,255,255,0.75)",
          fontWeight: 300, fontFamily: "'Jost', sans-serif",
        }}>{service.desc}</p>
      </div>
    </div>
  );
}
