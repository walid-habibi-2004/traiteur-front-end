import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const images = Array.from({ length: 33 }, (_, i) => ({
  id: i + 1,
  src: `/blog/${i + 1}.jpeg`,
  alt: `Réalisation ${i + 1}`,
}));

export default function BlogPage() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Navbar />
      <section className="blog-page" style={{ background: "var(--cream)" }}>
        <div style={{ marginBottom: "clamp(2rem, 5vw, 4rem)" }}>

          <div style={{ textAlign: "center" }}>
            <p className="section-eyebrow" style={{
              textTransform: "uppercase", color: "var(--gold)", fontSize: "16px",
              marginBottom: "16px", fontFamily: "'Jost', sans-serif",
            }}>Nos réalisations</p>
            <h1 className="blog-title" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300, color: "var(--charcoal)",
            }}>
              La <em style={{ color: "var(--gold)" }}>Galerie</em>
            </h1>
            <div style={{ width: "40px", height: "1px", background: "var(--gold)", margin: "24px auto 0" }} />
          </div>
        </div>

        <div className="blog-grid">
          {images.map((img) => (
            <ImageCard key={img.id} img={img} onClick={() => setSelected(img)} />
          ))}
        </div>

        {selected && (
          <Lightbox
            img={selected}
            onClose={() => setSelected(null)}
            onPrev={() => setSelected(images[selected.id - 2] || images[images.length - 1])}
            onNext={() => setSelected(images[selected.id] || images[0])}
          />
        )}
      </section>
      <Contact />
      <Footer />
    </>

  );
}

function ImageCard({ img, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        overflow: "hidden",
        aspectRatio: "1 / 1",
        cursor: "pointer",
        position: "relative",
      }}
      onMouseEnter={e => {
        e.currentTarget.querySelector("img").style.transform = "scale(1.07)";
        e.currentTarget.querySelector(".overlay").style.opacity = "1";
      }}
      onMouseLeave={e => {
        e.currentTarget.querySelector("img").style.transform = "scale(1)";
        e.currentTarget.querySelector(".overlay").style.opacity = "0";
      }}
    >
      <img src={img.src} alt={img.alt} style={{
        width: "100%", height: "100%",
        objectFit: "cover",
        transition: "transform 0.5s ease",
        display: "block",
      }} />
      <div className="overlay" style={{
        position: "absolute", inset: 0,
        background: "rgba(0,0,0,0.35)",
        display: "flex", alignItems: "center", justifyContent: "center",
        opacity: 0, transition: "opacity 0.3s ease",
      }}>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(0.875rem, 2.5vw, 1.125rem)", color: "white",
          letterSpacing: "2px", fontStyle: "italic", padding: "0 0.5rem",
          textAlign: "center",
        }}>{img.alt}</span>
      </div>
    </div>
  );
}

function Lightbox({ img, onClose, onPrev, onNext }) {
  return (
    <div
      className="lightbox"
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,0.92)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      <button
        type="button"
        className="lightbox__nav lightbox__nav--prev"
        onClick={e => { e.stopPropagation(); onPrev(); }}
        aria-label="Image précédente"
        style={{
          background: "none", border: "1px solid rgba(201,168,76,0.5)",
          color: "var(--gold)", fontSize: "24px", cursor: "pointer",
        }}
      >‹</button>

      <img
        src={img.src}
        alt={img.alt}
        className="lightbox__img"
        onClick={e => e.stopPropagation()}
        style={{ boxShadow: "0 0 60px rgba(0,0,0,0.8)" }}
      />

      <button
        type="button"
        className="lightbox__nav lightbox__nav--next"
        onClick={e => { e.stopPropagation(); onNext(); }}
        aria-label="Image suivante"
        style={{
          background: "none", border: "1px solid rgba(201,168,76,0.5)",
          color: "var(--gold)", fontSize: "24px", cursor: "pointer",
        }}
      >›</button>

      <button
        type="button"
        className="lightbox__close"
        onClick={onClose}
        aria-label="Fermer"
        style={{
          background: "none", border: "none",
          color: "rgba(255,255,255,0.6)", fontSize: "32px",
          cursor: "pointer", lineHeight: 1,
        }}
      >×</button>

      <div style={{
        position: "absolute", bottom: "clamp(0.75rem, 2vw, 1.5rem)",
        left: "50%", transform: "translateX(-50%)",
        fontFamily: "'Jost', sans-serif",
        fontSize: "11px", letterSpacing: "3px",
        color: "rgba(255,255,255,0.4)",
      }}>
        {img.id} / {images.length}
      </div>
    </div>
  );
}
