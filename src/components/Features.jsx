const features = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="var(--gold)" strokeWidth="1.5" width="64" height="64">
        <circle cx="32" cy="32" r="28"/>
        <path d="M32 18 C26 18 20 24 20 30 C20 38 32 46 32 46 C32 46 44 38 44 30 C44 24 38 18 32 18Z"/>
        <circle cx="32" cy="30" r="5"/>
        <path d="M20 44 Q26 40 32 46 Q38 40 44 44"/>
      </svg>
    ),
    title: "Des produits frais et de saison !",
    desc: "Toutes nos créations sont faites maison. Nos cuisiniers s'appliquent à mettre à jour la carte, chaque saison avec la même exigence du goût.",
    bold: "faites maison",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="var(--gold)" strokeWidth="1.5" width="64" height="64">
        <circle cx="32" cy="32" r="28"/>
        <circle cx="32" cy="32" r="18"/>
        <line x1="32" y1="14" x2="32" y2="8"/>
        <line x1="32" y1="32" x2="44" y2="22"/>
        <line x1="50" y1="26" x2="54" y2="22"/>
        <line x1="52" y1="30" x2="56" y2="30"/>
      </svg>
    ),
    title: "Évènement de dernière minute ?",
    desc: "Profitez de notre service traiteur jusqu'à 72 heures avant le début de votre évènement. Nous garantissons une prestation haut de gamme.",
    bold: "72 heures avant",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="var(--gold)" strokeWidth="1.5" width="64" height="64">
        <circle cx="32" cy="32" r="28"/>
        <circle cx="32" cy="22" r="8"/>
        <path d="M16 48 C16 38 48 38 48 48"/>
        <path d="M10 42 C10 35 22 32 22 32"/>
        <path d="M54 42 C54 35 42 32 42 32"/>
        <circle cx="14" cy="26" r="5"/>
        <circle cx="50" cy="26" r="5"/>
      </svg>
    ),
    title: "Des équipes passionnées !",
    desc: "Une brigade expérimentée, des viennoiseries fournies par un meilleur ouvrier de France et des vins sélectionnés par notre caviste.",
    bold: "brigade expérimentée",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="var(--gold)" strokeWidth="1.5" width="64" height="64">
        <circle cx="32" cy="32" r="28"/>
        <rect x="18" y="16" width="28" height="36" rx="3"/>
        <line x1="24" y1="26" x2="40" y2="26"/>
        <line x1="24" y1="33" x2="40" y2="33"/>
        <line x1="24" y1="40" x2="34" y2="40"/>
        <path d="M36 38 L42 44 L46 38"/>
      </svg>
    ),
    title: "Votre devis en quelques clics !",
    desc: "N'attendez plus votre devis traiteur, vous l'avez sous les yeux ! Vous pouvez faire et refaire votre devis à loisir, l'imprimer et le valider.",
    bold: "devis à loisir",
  },
];

export default function Features() {
  return (
    <section style={{
      background: "#1A1A1A",
      padding: "80px 24px",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "56px", maxWidth: "800px", margin: "0 auto 56px" }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 600,
          color: "var(--white)",
          lineHeight: 1.2,
          marginBottom: "20px",
        }}>
          Organisez vos événements traiteur<br />
          <em style={{ color: "var(--gold)", fontStyle: "italic" }}>haut de gamme</em> en 5 minutes
        </h2>
        <p style={{
          fontSize: "clamp(13px, 1.5vw, 15px)",
          color: "rgba(255,255,255,0.7)",
          lineHeight: 1.8,
          fontFamily: "'Jost', sans-serif",
          fontWeight: 300,
        }}>
          El Yassamine révolutionne la prise de commande traiteur en vous mettant à disposition
          une plateforme <strong style={{ color: "var(--white)", fontWeight: 500 }}>adaptée à toutes les attentes</strong> et des
          menus élaborés à partir de <strong style={{ color: "var(--white)", fontWeight: 500 }}>produits frais et de saison.</strong>
        </p>
      </div>

      {/* Cards grid */}
      <div className="features-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}>
        {features.map((f, i) => (
          <FeatureCard key={i} feature={f} />
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function FeatureCard({ feature }) {
  return (
    <div style={{
      background: "rgba(201,168,76,0.08)",
      border: "1px solid rgba(201,168,76,0.3)",
      borderRadius: "12px",
      padding: "32px 28px",
      display: "flex",
      gap: "24px",
      alignItems: "flex-start",
      transition: "background 0.3s, transform 0.3s",
    }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "rgba(201,168,76,0.14)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(201,168,76,0.08)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Icon */}
      <div style={{ flexShrink: 0, opacity: 0.9 }}>
        {feature.icon}
      </div>

      {/* Text */}
      <div>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(18px, 2vw, 22px)",
          fontWeight: 500,
          color: "var(--white)",
          marginBottom: "12px",
          lineHeight: 1.3,
        }}>{feature.title}</h3>
        <p style={{
          fontSize: "13px",
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.65)",
          fontFamily: "'Jost', sans-serif",
          fontWeight: 300,
        }}>
          {feature.desc.split(feature.bold).map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>{part}<strong style={{ color: "var(--white)", fontWeight: 500 }}>{feature.bold}</strong></span>
            ) : <span key={i}>{part}</span>
          )}
        </p>
      </div>
    </div>
  );
}