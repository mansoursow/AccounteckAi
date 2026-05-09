import { useState } from "react";
import { useTranslation } from "react-i18next";
import DemoRequest from "./DemoRequest";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #061E1C 0%, #0B2A28 55%, #1B4D4A 100%)",
      }}
    >
      {/* Ambient glow blobs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "-10%", left: "-5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(15,168,158,0.18) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", bottom: "-10%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(5,150,105,0.14) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: 1160, margin: "0 auto", padding: "100px 24px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="hero-grid">
        {/* Left: Text */}
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, background: "rgba(15,168,158,0.15)", border: "1px solid rgba(15,168,158,0.3)", color: "#5EEAD4", marginBottom: 24 }}>
            ✦ L'ERP comptable nouvelle génération
          </div>
          <h1 style={{ fontSize: "clamp(32px,4.5vw,58px)", fontWeight: 900, color: "#e0cfb7", lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.5px" }}>
            {t("hero.title")}
          </h1>
          <p style={{ fontSize: "clamp(16px,2vw,20px)", color: "#cf9077", lineHeight: 1.7, marginBottom: 36 }}>
            {t("hero.description")}
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
            <button
              onClick={() => setShowDemoForm(true)}
              style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg,#059669,#0FA89E)", color: "#fff", border: "none", borderRadius: 12, padding: "15px 32px", fontSize: 16, fontWeight: 700, cursor: "pointer", boxShadow: "0 8px 32px rgba(15,168,158,0.4)", transition: "transform .22s, box-shadow .22s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 44px rgba(15,168,158,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(15,168,158,0.4)"; }}
            >
              {t("hero.cta")} <ArrowRight size={18} />
            </button>
            <a
              href="https://sccountechia.com/login"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 28px", borderRadius: 12, fontSize: 15, fontWeight: 600, color: "#fff", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", textDecoration: "none", transition: "background .22s" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.14)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
            >
              Commencer gratuitement
            </a>
          </div>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, marginTop: 18 }}>
            ✓ Aucune carte bancaire &nbsp;·&nbsp; ✓ Données hébergées au Sénégal &nbsp;·&nbsp; ✓ Conforme SYSCOHADA
          </p>
        </div>

        {/* Right: Featured Video Player */}
        <div style={{ position: "relative" }}>
          {/* Glow behind video */}
          <div style={{ position: "absolute", inset: -24, borderRadius: 32, background: "radial-gradient(circle, rgba(15,168,158,0.25) 0%, transparent 70%)", filter: "blur(24px)", zIndex: 0 }} />
          <div style={{ position: "relative", zIndex: 1, borderRadius: 20, overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.1)", background: "#000", aspectRatio: "16/9" }}>
            <video
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              src="/video.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>
          {/* Badge below video */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: 16, gap: 16, flexWrap: "wrap" }}>
            {["50+ cabinets", "SYSCOHADA", "CGI 2025"].map(b => (
              <span key={b} style={{ fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 6, background: "rgba(15,168,158,0.14)", border: "1px solid rgba(15,168,158,0.3)", color: "#5EEAD4" }}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>

      {/* Modal DemoRequest */}
      {showDemoForm && (
        <div style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)", padding: "24px 16px" }}>
          <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 24px 80px rgba(0,0,0,0.3)", width: "100%", maxWidth: 640, position: "relative", padding: 28 }}>
            <button
              onClick={() => setShowDemoForm(false)}
              style={{ position: "absolute", top: 14, right: 16, background: "none", border: "none", color: "#3d6e70", fontSize: 26, cursor: "pointer", lineHeight: 1 }}
            >
              &times;
            </button>
            <div style={{ overflowY: "auto", maxHeight: "80vh" }}>
              <DemoRequest />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
