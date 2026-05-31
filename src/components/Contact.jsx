import { Phone, Mail, MapPin } from "lucide-react";

function Instagram({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  );
}

function Facebook({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section-padding" style={{
      background: "var(--charcoal)",
    }}>
      <div className="container contact-grid">

        {/* Left — Info */}
        <div>
          <p className="section-eyebrow" style={{
            textTransform: "uppercase",
            color: "var(--gold)", marginBottom: "20px", fontFamily: "'Jost', sans-serif",
          }}>Nous contacter</p>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 300,
            color: "var(--white)", lineHeight: 1.1, marginBottom: "8px",
          }}>Organisez votre</h2>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 300,
            color: "var(--gold)", fontStyle: "italic", lineHeight: 1.1,
            marginBottom: "48px",
          }}>événement idéal</h2>

          {/* Infos */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {[
              { icon: Phone, label: "Téléphone", value: "+212 6 XX XX XX XX" },
              { icon: Mail, label: "Email", value: "contact@alkarama.ma" },
              { icon: MapPin, label: "Adresse", value: "Casablanca, Maroc" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{
                  width: "44px", height: "44px",
                  border: "1px solid rgba(201,168,76,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon size={16} color="var(--gold)" />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{
                    fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase",
                    color: "var(--gold)", marginBottom: "4px", fontFamily: "'Jost', sans-serif",
                  }}>{label}</div>
                  <div style={{
                    fontSize: "14px", color: "rgba(255,255,255,0.7)",
                    fontFamily: "'Jost', sans-serif", fontWeight: 300,
                    wordBreak: "break-word",
                  }}>{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Social */}
          <div style={{ display: "flex", gap: "12px", marginTop: "48px" }}>
            {[Instagram, Facebook].map((Icon, i) => (
              <a key={i} href="#" style={{
                width: "44px", height: "44px",
                border: "1px solid rgba(201,168,76,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "rgba(255,255,255,0.5)", textDecoration: "none",
                transition: "all 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Right — Map */}
        <div style={{
          border: "1px solid rgba(201,168,76,0.15)",
          overflow: "hidden",
          position: "relative",
          minHeight: "420px",
          display: "flex",
          flexDirection: "column",
        }}>
          {/* Map label */}
          <div style={{
            padding: "16px 24px",
            background: "rgba(255,255,255,0.03)",
            borderBottom: "1px solid rgba(201,168,76,0.15)",
            display: "flex", alignItems: "center", gap: "10px",
          }}>
            <MapPin size={14} color="var(--gold)" />
            <span style={{
              fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase",
              color: "var(--gold)", fontFamily: "'Jost', sans-serif",
            }}>Notre localisation</span>
          </div>

          {/* Iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.64720707573!2d-7.6898499!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sma!4v1700000000000"
            width="100%"
            height="100%"
            style={{
              border: "none",
              flexGrow: 1,
              minHeight: "340px",
              filter: "grayscale(30%) contrast(1.1)",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation Al Karama"
          />

          {/* Open in Maps button */}
          <a
            href="https://maps.app.goo.gl/QWuqWwiRKqKVwtY69"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "absolute", bottom: "20px", right: "20px",
              padding: "10px 20px",
              background: "var(--gold)", color: "var(--charcoal)",
              textDecoration: "none", fontSize: "10px",
              letterSpacing: "2px", textTransform: "uppercase",
              fontWeight: 500, fontFamily: "'Jost', sans-serif",
              display: "flex", alignItems: "center", gap: "8px",
              transition: "background 0.3s",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--gold-light)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--gold)"; }}
          >
            <MapPin size={13} />
            Ouvrir dans Maps
          </a>
        </div>

      </div>
    </section>
  );
}