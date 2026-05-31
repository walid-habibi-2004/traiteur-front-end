import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const menus = [
  {
    id: 1,
    title: "Menu Machwi",
    desc: "Votre mariage, notre passion. Un service sur-mesure, raffiné et inoubliable pour célébrer votre plus beau jour avec goût et style.",
    image: "/menus/machwi.jpeg",
    tag: "MENU MACHWI",
  },
  {
    id: 2,
    title: "Menu Pastilla Poisson",
    desc: "Votre mariage, notre passion. Un service sur-mesure, raffiné et inoubliable pour célébrer votre plus beau jour avec goût et style.",
    image: "/menus/pastilla-poisson.jpeg",
    tag: "MENU PASTILLA POISSON",
  },
  {
    id: 3,
    title: "Menu Pastilla Poulet",
    desc: "Votre mariage, notre passion. Un service sur-mesure, raffiné et inoubliable pour célébrer votre plus beau jour avec goût et style.",
    image: "/menus/pastilla-poulet.jpeg",
    tag: "MENU PASTILLA POULET",
  },
  {
    id: 4,
    title: "Menu TAjine",
    desc: "Votre mariage, notre passion. Un service sur-mesure, raffiné et inoubliable pour célébrer votre plus beau jour avec goût et style.",
    image: "/menus/tajine.jpeg",
    tag: "MENU TAJINE",
  },
  {
    id: 5,
    title: "Menu Saumon royal",
    desc: "Votre mariage, notre passion. Un service sur-mesure, raffiné et inoubliable pour célébrer votre plus beau jour avec goût et style.",
    image: "/menus/saumon-royal.jpeg",
    tag: "MENU SAUMON ROYAL",
  },
  {
    id: 6,
    title: "Menu Salad royal",
    desc: "Votre mariage, notre passion. Un service sur-mesure, raffiné et inoubliable pour célébrer votre plus beau jour avec goût et style.",
    image: "/menus/salad-royal.jpeg",
    tag: "MENU SALAD ROYAL",
  },
  {
    id: 7,
    title: "Menu Poulet mhamar",
    desc: "Votre mariage, notre passion. Un service sur-mesure, raffiné et inoubliable pour célébrer votre plus beau jour avec goût et style.",
    image: "/menus/pouelt-mhamar.jpeg",
    tag: "MENU POULET MHAMAR",
  },
  {
    id: 8,
    title: "Menu Dessert glace",
    desc: "Votre mariage, notre passion. Un service sur-mesure, raffiné et inoubliable pour célébrer votre plus beau jour avec goût et style.",
    image: "/menus/dessert-glace.jpeg",
    tag: "MENU DESSERT GLACE",
  },
  {
    id: 9,
    title: "Menu Dessert fraise",
    desc: "Votre mariage, notre passion. Un service sur-mesure, raffiné et inoubliable pour célébrer votre plus beau jour avec goût et style.",
    image: "/menus/dessert-fraise.jpeg",
    tag: "MENU DESSERT FRAISE",
  },
];

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <section style={{
        padding: "120px 24px 80px",
        background: "var(--cream)",
        minHeight: "100vh",
      }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h1 className="blog-title" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300, color: "var(--charcoal)",
            }}>
              My <em style={{ color: "var(--gold)" }}>Menus</em>
            </h1>
          <div style={{
            width: "60px", height: "2px",
            background: "var(--gold)",
            margin: "16px auto 0",
          }} />
        </div>

        {/* Grid */}
        <div className="menu-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
          {menus.map(m => <MenuCard key={m.id} menu={m} />)}
        </div>
      </section>
      <Contact/>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .menu-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .menu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

function MenuCard({ menu }) {
  return (
    <div style={{
      background: "var(--white)",
      borderRadius: "4px",
      overflow: "hidden",
      boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 20px rgba(0,0,0,0.06)";
      }}
    >
      {/* Image container */}
      <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden" }}>
        {/* Corner decorations */}
        <div style={{ position: "absolute", top: "12px", left: "12px", width: "40px", height: "40px", borderTop: "1px solid var(--gold)", borderLeft: "1px solid var(--gold)", zIndex: 2 }} />
        <div style={{ position: "absolute", top: "12px", right: "12px", width: "40px", height: "40px", borderTop: "1px solid var(--gold)", borderRight: "1px solid var(--gold)", zIndex: 2 }} />
        <div style={{ position: "absolute", bottom: "12px", left: "12px", width: "40px", height: "40px", borderBottom: "1px solid var(--gold)", borderLeft: "1px solid var(--gold)", zIndex: 2 }} />
        <div style={{ position: "absolute", bottom: "12px", right: "12px", width: "40px", height: "40px", borderBottom: "1px solid var(--gold)", borderRight: "1px solid var(--gold)", zIndex: 2 }} />

        {/* Image */}
        <img src={menu.image} alt={menu.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />

        {/* Tag overlay */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
          padding: "32px 16px 16px",
          zIndex: 1,
        }}>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "11px", letterSpacing: "2px",
            textTransform: "uppercase",
            color: "var(--gold)", fontWeight: 500,
          }}>{menu.tag}</p>
        </div>
      </div>

      {/* Text */}
      <div style={{ padding: "20px 20px 24px" }}>
        <h3 style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "18px", fontWeight: 600,
          color: "var(--charcoal)", marginBottom: "10px",
        }}>{menu.title}</h3>
        <p style={{
          fontSize: "13px", lineHeight: 1.7,
          color: "var(--gold)", fontWeight: 300,
          fontFamily: "'Jost', sans-serif",
        }}>{menu.desc}</p>
      </div>
    </div>
  );
}