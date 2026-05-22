import React, { useEffect, useRef, useState } from 'react';
import {
  Brain, FileCheck, Calculator, Mic, ReceiptText, MessageSquare,
  Zap, BarChart3, Shield, Layers, Globe, Lock,
  FileText, Bot, CheckCheck, Check, ArrowRight,
  Users, Building2, TrendingUp, Award,
  Phone, Mail, MapPin, Clock, Menu, X,
  CloudUpload, Wallet, FileX, Banknote,
} from 'lucide-react';
import clientImage from '../assets/image.png';
import heroVideo   from '../assets/video.mp4';
import mansourPhoto  from '../assets/mansour.png';
import marcPhoto     from '../assets/j marc.jpg';
import khadimPhoto   from '../assets/khadim toure.png';
import logoAccountech from '../assets/logo.png';
import logoAKM       from '../assets/AKM Audit & Conseil.webp';
import logoAdoc      from '../assets/Adoc.jpg';
import logoGA2C      from '../assets/GA2C.jpg';
import logoDK        from '../assets/dktuning.webp';
import flagSenegal   from '../assets/Drapeau senegal.webp';
import flagCI        from '../assets/drapeau cote divoire.jpg';
import flagMaroc     from '../assets/morocco-flag-png-large.png';

const C = {
  hero:   '#061E1C',
  primary:'#1B4D4A',
  green:  '#059669',
  teal:   '#0FA89E',
  tealLt: '#5EEAD4',
  bg:     '#FFFFFF',
  bgSoft: '#F0FAF9',
  bgGray: '#F8FAFC',
  text:   '#0F172A',
  sub:    '#334155',
  muted:  '#64748B',
  border: '#E2E8F0',
  gold:   '#F59E0B',
  dark2:  '#0B2A28',
};
const GRAD = `linear-gradient(135deg,${C.green},${C.teal})`;
const GRAD2 = `linear-gradient(135deg,#0B2A28,${C.primary})`;

const G = `
  *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
  html { scroll-behavior:smooth; }
  body { background:#fff; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; -webkit-font-smoothing:antialiased; color:${C.text}; }

  @keyframes float        { 0%,100%{transform:translateY(0);}  50%{transform:translateY(-10px);} }
  @keyframes pulse        { 0%,100%{transform:scale(1);opacity:1;} 50%{transform:scale(.95);opacity:.75;} }
  @keyframes blink        { 0%,100%{opacity:1;} 50%{opacity:0;} }
  @keyframes shimmer      { 0%{background-position:-200% center;} 100%{background-position:200% center;} }
  @keyframes glow         { 0%,100%{box-shadow:0 0 6px ${C.teal}60;} 50%{box-shadow:0 0 18px ${C.teal}90;} }
  @keyframes spin         { to{transform:rotate(360deg);} }
  @keyframes scroll-left  { 0%{transform:translateX(0);} 100%{transform:translateX(-50%);} }

  .carousel-track         { display:flex; width:max-content; animation:scroll-left 28s linear infinite; }
  .carousel-track:hover   { animation-play-state:paused; }
  .carousel-wrap          { overflow:hidden; position:relative; }
  .carousel-wrap::before,
  .carousel-wrap::after   {
    content:''; position:absolute; top:0; bottom:0; width:100px; z-index:2; pointer-events:none;
  }
  .carousel-wrap::before       { left:0;  background:linear-gradient(to right, ${C.bgSoft}, transparent); }
  .carousel-wrap::after        { right:0; background:linear-gradient(to left,  ${C.bgSoft}, transparent); }
  .carousel-wrap-white::before { left:0;  background:linear-gradient(to right, ${C.bg}, transparent); }
  .carousel-wrap-white::after  { right:0; background:linear-gradient(to left,  ${C.bg}, transparent); }

  .lp-in   { opacity:0; transform:translateY(22px); transition:opacity .65s ease, transform .65s ease; }
  .lp-in.v { opacity:1; transform:translateY(0); }
  .lp-inl  { opacity:0; transform:translateX(-28px); transition:opacity .65s ease, transform .65s ease; }
  .lp-inl.v{ opacity:1; transform:translateX(0); }
  .lp-inr  { opacity:0; transform:translateX(28px);  transition:opacity .65s ease, transform .65s ease; }
  .lp-inr.v{ opacity:1; transform:translateX(0); }

  .s  { padding:96px 24px; }
  .ct { max-width:1100px; margin:0 auto; }
  .g2 { display:grid; grid-template-columns:1fr 1fr; gap:28px; }
  .g3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:24px; }
  .g4 { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }

  .card {
    background:#fff; border:1px solid ${C.border}; border-radius:16px;
    transition:transform .25s, box-shadow .25s, border-color .25s;
  }
  .card:hover { transform:translateY(-5px); box-shadow:0 16px 48px rgba(5,150,105,.12); border-color:${C.teal}55; }

  .btn-primary {
    display:inline-flex; align-items:center; gap:9px;
    background:${GRAD}; background-size:200% auto;
    color:#fff; border:none; border-radius:10px;
    padding:14px 30px; font-size:16px; font-weight:700;
    cursor:pointer; text-decoration:none;
    transition:transform .22s, box-shadow .22s, background-position .4s;
    position:relative; overflow:hidden;
  }
  .btn-primary::after {
    content:''; position:absolute; inset:0;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,.22),transparent);
    background-size:200% auto; opacity:0; transition:opacity .3s;
  }
  .btn-primary:hover { background-position:right center; transform:translateY(-2px); box-shadow:0 10px 32px ${C.teal}45; }
  .btn-primary:hover::after { opacity:1; animation:shimmer 1s linear infinite; }

  .badge-teal {
    display:inline-flex; align-items:center; gap:7px;
    padding:6px 14px; border-radius:20px; font-size:13px; font-weight:600;
    background:${C.teal}14; color:${C.teal}; border:1px solid ${C.teal}30;
  }
  .badge-white {
    display:inline-flex; align-items:center; gap:7px;
    padding:6px 14px; border-radius:20px; font-size:13px; font-weight:600;
    background:rgba(255,255,255,.14); color:#fff;
    border:1px solid rgba(255,255,255,.3); backdrop-filter:blur(6px);
  }
  .badge-dark {
    display:inline-flex; align-items:center; gap:7px;
    padding:6px 14px; border-radius:20px; font-size:13px; font-weight:600;
    background:rgba(15,168,158,.15); color:${C.tealLt};
    border:1px solid rgba(15,168,158,.3);
  }

  .prog-bar { position:fixed; top:0; left:0; right:0; height:3px; z-index:999; background:rgba(0,0,0,.05); }

  .nav-desktop { display:flex; }
  .nav-mob-btn { display:none; }

  .check-row { display:flex; align-items:flex-start; gap:10px; margin-bottom:12px; }
  .check-icon {
    width:20px; height:20px; border-radius:50%; flex-shrink:0; margin-top:1px;
    display:flex; align-items:center; justify-content:center;
  }

  /* dot-grid background helper */
  .bg-dots {
    background-image: radial-gradient(circle, rgba(15,168,158,.14) 1px, transparent 1px);
    background-size: 26px 26px;
  }
  /* diagonal stripe helper */
  .bg-diag {
    background-image: repeating-linear-gradient(
      -48deg, transparent, transparent 28px,
      rgba(15,168,158,.04) 28px, rgba(15,168,158,.04) 29px
    );
  }

  .hero-mockup { display:block; }

  @media(max-width:900px) { .hero-mockup { display:none !important; } }
  @media(max-width:960px)  { .g4 { grid-template-columns:1fr 1fr !important; } }
  @media(max-width:768px)  {
    .g2,.g3 { grid-template-columns:1fr !important; }
    .s { padding:64px 20px !important; }
    .nav-desktop { display:none !important; }
    .nav-mob-btn { display:flex !important; }
    .step-line   { display:none !important; }
  }
  @media(max-width:520px)  { .g4 { grid-template-columns:1fr !important; } }
`;

// ─── Hooks ────────────────────────────────────────────────────────────────────
function useInView(t = 0.1) {
  const r = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: t });
    if (r.current) o.observe(r.current);
    return () => o.disconnect();
  }, [t]);
  return [r, v];
}
function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const fn = () => setY(window.scrollY);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return y;
}
function useScrollProg() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const fn = () => {
      const el = document.documentElement;
      setP((window.scrollY / Math.max(1, el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return p;
}
function useCounter(target, active, dur = 1800) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let cur = 0;
    const step = target / (dur / 16);
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { setN(target); clearInterval(t); }
      else setN(Math.floor(cur));
    }, 16);
    return () => clearInterval(t);
  }, [active, target, dur]);
  return n;
}
function useTypewriter(words, speed = 95, pause = 2400) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState('');
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length];
    let timer;
    if (!del && txt === w)      timer = setTimeout(() => setDel(true), pause);
    else if (del && txt === '') { setDel(false); setI(x => x + 1); }
    else timer = setTimeout(() => setTxt(del ? txt.slice(0, -1) : w.slice(0, txt.length + 1)), del ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [txt, del, i, words, speed, pause]);
  return txt;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function A({ children, cls = 'lp-in', delay = 0, style = {} }) {
  const [r, v] = useInView();
  return (
    <div ref={r} className={`${cls}${v ? ' v' : ''}`} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  );
}
function SHead({ badge, title, sub, light = false }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 56 }}>
      <span className={light ? 'badge-dark' : 'badge-teal'}>{badge}</span>
      <h2 style={{ marginTop: 16, fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: light ? '#fff' : C.text, letterSpacing: '-.5px', lineHeight: 1.15 }}>{title}</h2>
      {sub && <p style={{ marginTop: 14, fontSize: 17, color: light ? 'rgba(255,255,255,.55)' : C.muted, maxWidth: 520, margin: '14px auto 0', lineHeight: 1.75 }}>{sub}</p>}
    </div>
  );
}
function CheckItem({ text, color = C.green, textColor }) {
  return (
    <div className="check-row">
      <div className="check-icon" style={{ background: `${color}16`, border: `1px solid ${color}30` }}>
        <Check size={12} color={color} />
      </div>
      <span style={{ fontSize: 14.5, color: textColor || C.sub, lineHeight: 1.6 }}>{text}</span>
    </div>
  );
}

function LogoImg({ src, fallback, color }) {
  const [err, setErr] = useState(false);
  if (err) return <span style={{ fontSize: 12, fontWeight: 900, color, textAlign: 'center', lineHeight: 1.1, padding: '0 4px' }}>{fallback}</span>;
  return <img src={src} alt={fallback} onError={() => setErr(true)} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 6 }} />;
}

// ─── Wave divider ─────────────────────────────────────────────────────────────
function Wave({ from, to }) {
  return (
    <div style={{ background: from, lineHeight: 0, overflow: 'hidden', marginTop: -1 }}>
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 56 }}>
        <path d="M0,28 C360,56 720,0 1080,28 C1260,42 1380,14 1440,28 L1440,56 L0,56 Z" fill={to} />
      </svg>
    </div>
  );
}

// ─── Coordinate map (Partenaires) ─────────────────────────────────────────────
function CoordMap() {
  return (
    <svg viewBox="0 0 460 280" style={{ width: '100%', height: 'auto', display: 'block' }}>
      {/* Grid */}
      {Array.from({ length: 14 }, (_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 22} x2="460" y2={i * 22} stroke={C.teal} strokeWidth=".5" opacity=".18" />
      ))}
      {Array.from({ length: 22 }, (_, i) => (
        <line key={`v${i}`} x1={i * 22} y1="0" x2={i * 22} y2="280" stroke={C.teal} strokeWidth=".5" opacity=".18" />
      ))}
      {/* Dashed routes */}
      <path d="M100,130 C180,80 280,180 340,160" stroke={C.teal} strokeWidth="1.5" fill="none" strokeDasharray="6,5" opacity=".45" />
      <path d="M230,38 C180,70 140,100 100,130" stroke="#C1272D" strokeWidth="1.5" fill="none" strokeDasharray="6,5" opacity=".35" />

      {/* ── Dakar (pulse) ── */}
      <circle cx="100" cy="130" r="10" fill={C.green} opacity=".9" />
      <circle cx="100" cy="130" r="10" fill="none" stroke={C.green} strokeWidth="2">
        <animate attributeName="r"       from="10" to="38" dur="2.2s" begin="0s"   repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.7" to="0" dur="2.2s" begin="0s"   repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="130" r="10" fill="none" stroke={C.green} strokeWidth="1.2">
        <animate attributeName="r"       from="10" to="38" dur="2.2s" begin="0.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.4" to="0" dur="2.2s" begin="0.8s" repeatCount="indefinite" />
      </circle>
      <text x="118" y="126" fill={C.green} fontSize="14" fontWeight="800" fontFamily="system-ui,sans-serif">Dakar</text>
      <text x="118" y="142" fill="#94A3B8" fontSize="11" fontFamily="system-ui,sans-serif">Sénégal 🇸🇳</text>

      {/* ── Abidjan (pulse) ── */}
      <circle cx="340" cy="160" r="10" fill="#F59E0B" opacity=".9" />
      <circle cx="340" cy="160" r="10" fill="none" stroke="#F59E0B" strokeWidth="2">
        <animate attributeName="r"       from="10" to="38" dur="2.2s" begin="0.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.7" to="0" dur="2.2s" begin="0.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="340" cy="160" r="10" fill="none" stroke="#F59E0B" strokeWidth="1.2">
        <animate attributeName="r"       from="10" to="38" dur="2.2s" begin="1.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.4" to="0" dur="2.2s" begin="1.2s" repeatCount="indefinite" />
      </circle>
      <text x="358" y="156" fill="#F59E0B" fontSize="14" fontWeight="800" fontFamily="system-ui,sans-serif">Abidjan</text>
      <text x="358" y="172" fill="#94A3B8" fontSize="11" fontFamily="system-ui,sans-serif">Côte d'Ivoire 🇨🇮</text>

      {/* ── Casablanca (pulse) ── */}
      <circle cx="230" cy="38" r="10" fill="#C1272D" opacity=".9" />
      <circle cx="230" cy="38" r="10" fill="none" stroke="#C1272D" strokeWidth="2">
        <animate attributeName="r"       from="10" to="38" dur="2.2s" begin="0.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.7" to="0" dur="2.2s" begin="0.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="230" cy="38" r="10" fill="none" stroke="#C1272D" strokeWidth="1.2">
        <animate attributeName="r"       from="10" to="38" dur="2.2s" begin="1.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.4" to="0" dur="2.2s" begin="1.6s" repeatCount="indefinite" />
      </circle>
      <text x="248" y="34" fill="#C1272D" fontSize="14" fontWeight="800" fontFamily="system-ui,sans-serif">Casablanca</text>
      <text x="248" y="50" fill="#94A3B8" fontSize="11" fontFamily="system-ui,sans-serif">Maroc 🇲🇦</text>
      {/* Accent dots */}
      {[[200,145],[145,180],[270,120],[390,190]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill={C.teal} opacity=".2" />
      ))}
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SCROLL PROGRESS
// ═══════════════════════════════════════════════════════════════════════════════
function ProgressBar() {
  const p = useScrollProg();
  return (
    <div className="prog-bar">
      <div style={{ height: '100%', width: `${p}%`, background: GRAD, transition: 'width .1s linear' }} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// NAVBAR
// ═══════════════════════════════════════════════════════════════════════════════
function Navbar() {
  const [open, setOpen] = useState(false);
  const y = useScrollY();
  const sc = y > 40;

  const links = [
    { l: 'Problèmes',   h: '#problemes' },
    { l: 'Pour qui',    h: '#pour-qui' },
    { l: 'IA Mansour',  h: '#ia-mansour' },
    { l: 'Tarifs',      h: '#pricing' },
    { l: 'Partenaires', h: '#partenaires' },
    { l: 'Équipe',      h: '#equipe' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: sc ? 'rgba(255,255,255,.96)' : 'transparent',
      backdropFilter: sc ? 'blur(16px)' : 'none',
      borderBottom: sc ? `1px solid ${C.border}` : 'none',
      transition: 'all .3s ease',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 66 }}>
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <img src={logoAccountech} alt="AccounTech AI" style={{ width: 34, height: 34, borderRadius: 9, objectFit: 'contain', background:'#fff' }} />
            <span style={{ color: sc ? C.text : '#fff', fontWeight: 800, fontSize: 17, letterSpacing: '-.3px', transition: 'color .3s' }}>
              AccounTech <span style={{ color: C.teal }}>AI</span>
            </span>
          </a>

          <div className="nav-desktop" style={{ gap: 2, alignItems: 'center' }}>
            {links.map(({ l, h }) => (
              <a key={h} href={h}
                style={{ color: sc ? C.sub : 'rgba(255,255,255,.82)', textDecoration: 'none', fontSize: 13.5, fontWeight: 500, padding: '7px 11px', borderRadius: 8, transition: 'color .2s' }}
                onMouseEnter={e => e.currentTarget.style.color = C.teal}
                onMouseLeave={e => e.currentTarget.style.color = sc ? C.sub : 'rgba(255,255,255,.82)'}
              >{l}</a>
            ))}
            <a href="https://sccountechia.com/login"
              style={{ marginLeft: 10, background: GRAD, color: '#fff', padding: '9px 20px', borderRadius: 9, textDecoration: 'none', fontSize: 14, fontWeight: 700, transition: 'opacity .2s, transform .2s' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '.88'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none'; }}
            >Accès gratuit</a>
          </div>

          <button className="nav-mob-btn" onClick={() => setOpen(o => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: sc ? C.teal : '#fff', padding: 4 }}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {open && (
          <div style={{ borderTop: `1px solid ${C.border}`, padding: '14px 0 22px', background: '#fff' }}>
            {links.map(({ l, h }) => (
              <a key={h} href={h} onClick={() => setOpen(false)}
                style={{ display: 'block', color: C.sub, textDecoration: 'none', padding: '12px 0', fontSize: 16, borderBottom: `1px solid ${C.border}` }}>
                {l}
              </a>
            ))}
            <a href="https://sccountechia.com/login"
              style={{ display: 'block', marginTop: 16, background: GRAD, color: '#fff', padding: 13, borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, textAlign: 'center' }}>
              Accès gratuit
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// HERO — 2 colonnes : texte | mockup
// ═══════════════════════════════════════════════════════════════════════════════
function Hero() {
  const words = ['conforme SYSCOHADA'];
  const tw = useTypewriter(words);

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      background: C.hero,
      display: 'flex', alignItems: 'center',
      paddingTop: 96, paddingBottom: 80, position: 'relative', overflow: 'hidden',
    }}>
      {/* ── Vidéo background ── */}
      <video autoPlay loop muted playsInline style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', opacity: 0.65, pointerEvents: 'none', zIndex: 0,
      }}>
        <source src={heroVideo} type="video/mp4" />
      </video>
      {/* Overlay semi-transparent : lisibilité du texte à gauche, vidéo visible à droite */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: `linear-gradient(to right, ${C.hero}BB 0%, ${C.hero}88 45%, ${C.hero}55 100%)`,
      }} />
      {/* Dot grid overlay */}
      <div className="bg-dots" style={{ position: 'absolute', inset: 0, opacity: .35, pointerEvents: 'none', zIndex: 2 }} />
      {/* Glow blobs */}
      <div style={{ position: 'absolute', top: '8%', left: '5%',  width: 560, height: 560, borderRadius: '50%', background: `radial-gradient(circle,${C.teal}22,transparent 65%)`, filter: 'blur(50px)', pointerEvents: 'none', zIndex: 2 }} />
      <div style={{ position: 'absolute', bottom: '5%', right: '8%', width: 420, height: 420, borderRadius: '50%', background: `radial-gradient(circle,${C.green}18,transparent 65%)`, filter: 'blur(50px)', pointerEvents: 'none', zIndex: 2 }} />

      <div className="ct" style={{ position: 'relative', zIndex: 5, width: '100%', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 48 }}>
        {/* ── Text column ── */}
        <div style={{ flex: '0 0 auto', width: 'min(460px, 100%)' }}>
          {/* ── Badge + pills ── */}
          <A>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
              <span className="badge-white">
                <Brain size={13} /> La comptabilité nouvelle génération en Afrique
              </span>
              <span style={{
                background: C.green, color: '#fff',
                fontSize: 11, fontWeight: 800, padding: '4px 12px',
                borderRadius: 20, letterSpacing: '.6px', textTransform: 'uppercase',
              }}>GRATUIT</span>
              <span style={{
                background: `${C.teal}22`, border: `1px solid ${C.teal}55`,
                color: C.tealLt, fontSize: 11, fontWeight: 700,
                padding: '4px 12px', borderRadius: 20, letterSpacing: '.3px',
              }}>Accès immédiat</span>
            </div>
          </A>

          {/* ── H1 ── */}
          <A delay={80}>
            <h1 style={{ fontSize: 'clamp(34px,5vw,60px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: '-1.2px', marginBottom: 22 }}>
              La comptabilité{' '}
              <span style={{ color: C.tealLt }}>
                {tw}<span style={{ animation: 'blink 1s step-end infinite' }}>|</span>
              </span>
              <br />pour les PME<br />
              <span style={{ color: C.tealLt }}>sénégalaises</span>
            </h1>
          </A>

          {/* ── Description ── */}
          <A delay={160}>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,.68)', lineHeight: 1.8, marginBottom: 36, maxWidth: 480 }}>
              AccounTech AI connecte entreprises et cabinets via l'IA Mansour.
              Ventes, achats, paie, déclarations — 100% conforme SYSCOHADA et CGI 2025.
            </p>
          </A>

          {/* ── CTAs ── */}
          <A delay={230}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
              <a href="https://sccountechia.com/login" className="btn-primary" style={{ fontSize: 16, padding: '15px 32px' }}>
                Essayer gratuitement <ArrowRight size={18} />
              </a>
              <a href="#ia-mansour" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 600,
                padding: '14px 24px', borderRadius: 10,
                border: '1.5px solid rgba(255,255,255,.26)',
                background: 'rgba(255,255,255,.07)', backdropFilter: 'blur(8px)', transition: 'all .22s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.14)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.07)'; }}
              >Découvrir Mansour</a>
            </div>
            {/* Lien démo vidéo */}
            <a href="#demo" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              color: 'rgba(255,255,255,.65)', textDecoration: 'none',
              fontSize: 13.5, fontWeight: 600, marginBottom: 20,
              transition: 'color .2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = C.tealLt; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,.65)'; }}
            >
              <span style={{
                width: 28, height: 28, borderRadius: '50%',
                background: `${C.teal}30`, border: `1.5px solid ${C.teal}60`,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <svg width="10" height="12" viewBox="0 0 10 12" fill={C.tealLt}><path d="M0 0l10 6-10 6z"/></svg>
              </span>
              Voir la démo vidéo — 3 min
            </a>
          </A>

          {/* ── Check ── */}
          <A delay={300}>
            <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap', marginBottom: 28 }}>
              {['100% SYSCOHADA'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <Check size={13} color={C.tealLt} />
                  <span style={{ color: 'rgba(255,255,255,.72)', fontSize: 13, fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>
          </A>
          <A delay={370}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,.38)', textTransform: 'uppercase', letterSpacing: '.6px' }}>Disponible au</span>
              {[
                { img: flagSenegal, label: 'Sénégal',       accent: C.green },
                { img: flagCI,      label: "Côte d'Ivoire", accent: '#F59E0B' },
                { img: flagMaroc,   label: 'Maroc',          accent: '#C1272D' },
              ].map(({ img, label, accent }) => (
                <div key={label} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: 'rgba(255,255,255,.07)',
                  border: `1px solid ${accent}40`,
                  borderRadius: 30, padding: '5px 14px 5px 6px',
                  backdropFilter: 'blur(8px)',
                  transition: 'background .2s, border-color .2s',
                  cursor: 'default',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${accent}18`; e.currentTarget.style.borderColor = `${accent}70`; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.07)'; e.currentTarget.style.borderColor = `${accent}40`; }}
                >
                  <img src={img} alt={label} style={{ width: 26, height: 18, objectFit: 'cover', borderRadius: 4, boxShadow: '0 1px 4px rgba(0,0,0,.35)', flexShrink: 0 }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' }}>{label}</span>
                </div>
              ))}
            </div>
          </A>
        </div>

        {/* ── Mockup column ── */}
        <div className="hero-mockup" style={{ flex: '1 1 0', minWidth: 0, maxWidth: 720 }}>
          <A cls="lp-inr" delay={350}>
            {/* Outer glow ring */}
            <div style={{
              position: 'relative',
              padding: 3,
              borderRadius: 20,
              background: `linear-gradient(135deg, ${C.teal}60, rgba(255,255,255,.08), ${C.green}40)`,
              boxShadow: `0 0 60px ${C.teal}30, 0 60px 120px rgba(0,0,0,.6)`,
              transform: 'perspective(1400px) rotateY(-8deg) rotateX(3deg)',
              transition: 'transform .55s ease, box-shadow .55s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'perspective(1400px) rotateY(-3deg) rotateX(1deg)';
                e.currentTarget.style.boxShadow = `0 0 90px ${C.teal}45, 0 60px 120px rgba(0,0,0,.6)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'perspective(1400px) rotateY(-8deg) rotateX(3deg)';
                e.currentTarget.style.boxShadow = `0 0 60px ${C.teal}30, 0 60px 120px rgba(0,0,0,.6)`;
              }}
            >
              <div style={{ borderRadius: 18, overflow: 'hidden', background: '#162132' }}>
                {/* Chrome bar */}
                <div style={{
                  background: '#0f1c2e',
                  padding: '12px 18px',
                  display: 'flex', alignItems: 'center', gap: 12,
                  borderBottom: '1px solid rgba(255,255,255,.06)',
                }}>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {['#EF4444','#F59E0B','#22C55E'].map(c => (
                      <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
                    ))}
                  </div>
                  <div style={{
                    flex: 1, background: '#162132', borderRadius: 6,
                    padding: '5px 14px', fontSize: 12, color: 'rgba(255,255,255,.28)',
                    fontFamily: 'monospace', letterSpacing: '.2px',
                  }}>
                    https://sccountechia.com/company/dashboard
                  </div>
                  <div style={{
                    fontSize: 11, fontWeight: 700, color: C.teal,
                    background: `${C.teal}18`, border: `1px solid ${C.teal}35`,
                    padding: '4px 11px', borderRadius: 6,
                    display: 'flex', alignItems: 'center', gap: 5,
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.teal, animation: 'glow 2s infinite' }} />
                    EN DIRECT
                  </div>
                </div>
                {/* Dashboard screenshot */}
                <img
                  src={clientImage}
                  alt="Tableau de bord AccounTech AI"
                  style={{ display: 'block', width: '100%', height: 'auto', maxHeight: 520, objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </div>
          </A>
        </div>
      </div>

      {/* Wave bottom */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 60 }}>
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,60 L0,60 Z" fill="#fff" />
        </svg>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// VIDEO DEMO
// ═══════════════════════════════════════════════════════════════════════════════
const YT_ID = 'LfRel6w5TwA';

function VideoDemo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="demo" className="s" style={{ background: C.bgSoft, paddingTop: 72, paddingBottom: 72 }}>
      <div className="ct">
        <A>
          <SHead
            badge="Démo produit"
            title="Voyez AccounTech AI en action"
            sub="En 3 minutes, découvrez comment AccounTech AI automatise votre comptabilité de bout en bout."
          />
        </A>

        {/* ── Lecteur vidéo ── */}
        <A delay={120}>
          <div style={{
            position: 'relative', maxWidth: 900, margin: '0 auto',
            borderRadius: 22, overflow: 'hidden',
            boxShadow: `0 8px 16px rgba(0,0,0,.08), 0 40px 100px rgba(5,150,105,.12)`,
            border: `1px solid ${C.border}`,
          }}>
            {!playing ? (
              /* ── Miniature cliquable ── */
              <div
                onClick={() => setPlaying(true)}
                style={{ position: 'relative', cursor: 'pointer', display: 'block', lineHeight: 0 }}
              >
                <img
                  src={`https://img.youtube.com/vi/${YT_ID}/maxresdefault.jpg`}
                  alt="Démo AccounTech AI — logiciel ERP comptabilité"
                  style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                  onError={e => { e.target.src = `https://img.youtube.com/vi/${YT_ID}/hqdefault.jpg`; }}
                />
                {/* Overlay sombre */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, rgba(6,30,28,.6) 0%, rgba(6,30,28,.35) 100%)',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', gap: 18,
                }}>
                  {/* Bouton play animé */}
                  <div style={{
                    width: 88, height: 88, borderRadius: '50%',
                    background: C.green,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 0 0 18px ${C.green}28, 0 0 0 36px ${C.green}12`,
                    animation: 'glow 2s infinite',
                    transition: 'transform .2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                  >
                    <svg width="30" height="34" viewBox="0 0 30 34" fill="white">
                      <path d="M2 2l26 15L2 32z"/>
                    </svg>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: '#fff', fontSize: 17, fontWeight: 800, letterSpacing: '-.2px' }}>
                      Voir la démo complète
                    </div>
                    <div style={{ color: 'rgba(255,255,255,.58)', fontSize: 13, marginTop: 5 }}>
                      3 min · Aucune inscription requise
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* ── iFrame YouTube ── */
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, background: '#000' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${YT_ID}?autoplay=1&rel=0&modestbranding=1&color=white`}
                  title="Démo AccounTech AI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                />
              </div>
            )}
          </div>
        </A>

        {/* ── Carousel partenaires ── */}
        <A delay={220}>
          <div style={{ marginTop: 52 }}>
            <p style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '.8px', marginBottom: 24 }}>
              Ils utilisent AccounTech AI
            </p>
            <div className="carousel-wrap">
              <div className="carousel-track">
                {[
                  { logo: logoAKM,  name: 'AKM Audit & Conseil', type: 'Cabinet d\'expertise comptable', flag: flagSenegal },
                  { logo: logoGA2C, name: 'GA2C',                 type: 'Cabinet d\'expertise comptable', flag: flagSenegal },
                  { logo: logoDK,   name: 'DK Tuning',            type: 'Société partenaire',             flag: flagSenegal },
                  { logo: logoAdoc, name: 'Adoc Consulting',       type: 'Cabinet d\'expertise comptable', flag: flagSenegal },
                  /* — copie pour boucle infinie — */
                  { logo: logoAKM,  name: 'AKM Audit & Conseil', type: 'Cabinet d\'expertise comptable', flag: flagSenegal },
                  { logo: logoGA2C, name: 'GA2C',                 type: 'Cabinet d\'expertise comptable', flag: flagSenegal },
                  { logo: logoDK,   name: 'DK Tuning',            type: 'Société partenaire',             flag: flagSenegal },
                  { logo: logoAdoc, name: 'Adoc Consulting',       type: 'Cabinet d\'expertise comptable', flag: flagSenegal },
                ].map(({ logo, name, type, flag }, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    background: '#fff', border: `1px solid ${C.border}`,
                    borderRadius: 16, padding: '14px 22px',
                    marginRight: 20, flexShrink: 0,
                    boxShadow: '0 2px 12px rgba(0,0,0,.05)',
                    minWidth: 240,
                  }}>
                    {/* Logo */}
                    <div style={{
                      width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                      overflow: 'hidden', border: `1px solid ${C.border}`,
                      background: C.bgGray,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <img src={logo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 4 }} />
                    </div>
                    {/* Infos */}
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: C.text, whiteSpace: 'nowrap' }}>{name}</div>
                      <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>{type}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 5 }}>
                        <img src={flag} alt="Sénégal" style={{ width: 16, height: 11, objectFit: 'cover', borderRadius: 2 }} />
                        <span style={{ fontSize: 11, fontWeight: 600, color: C.green }}>Sénégal</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </A>

        {/* ── CTA sous le carousel ── */}
        <A delay={300}>
          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <a href="https://sccountechia.com/login" className="btn-primary" style={{ fontSize: 15, padding: '14px 36px' }}>
              Essayer gratuitement — c'est gratuit <ArrowRight size={16} />
            </a>
          </div>
        </A>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// STATS
// ═══════════════════════════════════════════════════════════════════════════════
function StatItem({ target, suffix, label, Icon, color }) {
  const [r, v] = useInView(0.4);
  const n = useCounter(target, v);
  return (
    <div ref={r} style={{ textAlign: 'center', padding: '20px 16px' }}>
      <div style={{ width: 56, height: 56, borderRadius: 16, background: `${color}14`, border: `1px solid ${color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
        <Icon size={24} color={color} />
      </div>
      <div style={{ fontSize: 50, fontWeight: 900, color, lineHeight: 1, letterSpacing: '-2px' }}>{n}{suffix}</div>
      <div style={{ color: C.muted, fontSize: 14, marginTop: 10, fontWeight: 500 }}>{label}</div>
    </div>
  );
}
function Stats() {
  return (
    <section className="s" style={{ background: C.bg, borderBottom: `1px solid ${C.border}`, padding: '60px 24px' }}>
      <div className="ct">
        <div className="g4">
          <StatItem target={50}    suffix="+"  label="Cabinets partenaires"  Icon={Users}         color={C.teal}   />
          <StatItem target={10000} suffix="+"  label="Écritures traitées"    Icon={BarChart3}     color={C.green}  />
          <StatItem target={98}    suffix="%"  label="Précision de l'IA"     Icon={Brain}         color="#6366F1"  />
          <StatItem target={24}    suffix="/7" label="Disponibilité Mansour" Icon={MessageSquare} color="#F59E0B"  />
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PROBLÈMES
// ═══════════════════════════════════════════════════════════════════════════════
function Problemes() {
  const items = [
    { Icon: FileX,    color: '#EF4444', bg: '#FEF2F2', bd: '#FECACA30', num: '65%',  title: 'des PME sur Excel',          desc: 'Erreurs de saisie, historique non fiable, aucune vision financière en temps réel.' },
    { Icon: Wallet,   color: '#D97706', bg: '#FFFBEB', bd: '#FDE68A30', num: '<20%', title: 'accèdent au crédit bancaire', desc: 'Dossiers comptables incomplets, impossibles à présenter aux banques.' },
    { Icon: FileText, color: '#6366F1', bg: '#EEF2FF', bd: '#C7D2FE30', num: '0',    title: 'outil SYSCOHADA simple',      desc: 'Logiciels complexes et coûteux, sans lien numérique entre entreprise et cabinet.' },
  ];

  return (
    <section id="problemes" className="s bg-diag" style={{ background: C.bgGray, position: 'relative', overflow: 'hidden' }}>
      {/* Large decorative background text */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: 'clamp(120px,18vw,240px)', fontWeight: 900, color: 'rgba(239,68,68,.04)', letterSpacing: '-8px', whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none', zIndex: 0 }}>PROBLÈME</div>
      <div className="ct" style={{ position: 'relative', zIndex: 1 }}>
        <A><SHead badge="Le constat" title="Pourquoi la comptabilité reste un frein" sub="Les PME font face à des obstacles structurels qui bloquent leur croissance." /></A>
        <div className="g3">
          {items.map(({ Icon, color, bg, bd, num, title, desc }, i) => (
            <A key={title} delay={i * 110}>
              <div style={{ background: bg, border: `1.5px solid ${bd}`, borderRadius: 20, padding: '36px 28px', height: '100%', position: 'relative', overflow: 'hidden', transition: 'transform .25s, box-shadow .25s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 18px 48px ${color}14`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ position: 'absolute', top: -20, right: -10, fontSize: 110, fontWeight: 900, color: `${color}07`, lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>{num}</div>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${color}18`, border: `1px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Icon size={24} color={color} />
                </div>
                <div style={{ fontSize: 54, fontWeight: 900, color, lineHeight: 1, marginBottom: 10, letterSpacing: '-2px' }}>{num}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 10 }}>{title}</div>
                <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7 }}>{desc}</p>
              </div>
            </A>
          ))}
        </div>

        <A delay={200}>
          <div className="g2" style={{ marginTop: 20 }}>
            {[
              { Icon: Clock, color: '#0EA5E9', text: 'Saisie manuelle chronophage pour les experts-comptables, au détriment du conseil à valeur ajoutée.' },
              { Icon: Globe, color: C.teal,   text: 'Aucun lien numérique direct entre l\'entreprise et son cabinet comptable — tout passe encore par email.' },
            ].map(({ Icon, color, text }) => (
              <div key={text} style={{ background: '#fff', border: `1px solid ${C.border}`, borderRadius: 14, padding: '20px 24px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, borderRadius: 11, background: `${color}12`, border: `1px solid ${color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={18} color={color} />
                </div>
                <p style={{ fontSize: 14.5, color: C.sub, lineHeight: 1.65 }}>{text}</p>
              </div>
            ))}
          </div>
        </A>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// POUR QUI
// ═══════════════════════════════════════════════════════════════════════════════
function PourQui() {
  return (
    <section id="pour-qui" className="s" style={{ background: C.bg }}>
      <div className="ct">
        <A><SHead badge="Pour qui ?" title="Une solution pour toute la chaîne comptable" sub="AccounTech AI s'adapte à votre rôle, que vous soyez entreprise ou cabinet." /></A>
        <div className="g2">
          <A cls="lp-inl">
            <div style={{ border: `2px solid ${C.teal}30`, borderRadius: 22, overflow: 'hidden', height: '100%', boxShadow: `0 8px 32px ${C.teal}10` }}>
              <div style={{ background: GRAD, padding: '30px 28px 26px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,.1)', pointerEvents: 'none' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 46, height: 46, borderRadius: 13, background: 'rgba(255,255,255,.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Building2 size={22} color="#fff" />
                  </div>
                  <div>
                    <div style={{ color: '#fff', fontSize: 19, fontWeight: 800 }}>Entreprises & PME</div>
                    <div style={{ color: 'rgba(255,255,255,.65)', fontSize: 13 }}>Gérants, commerçants, restaurateurs</div>
                  </div>
                </div>
                <p style={{ color: 'rgba(255,255,255,.75)', fontSize: 14, lineHeight: 1.65 }}>
                  Pas besoin de compétences comptables. Enregistrez vos opérations simplement, l'IA fait le reste.
                </p>
              </div>
              <div style={{ background: '#fff', padding: 28 }}>
                {['Gestion des ventes et facturation PDF automatique','Gestion de caisse simplifiée',"Upload factures achats — l'IA extrait tout","Dashboard chiffre d'affaires et trésorerie en temps réel",'Rapprochement bancaire automatique'].map(f => <CheckItem key={f} text={f} color={C.teal} />)}
              </div>
            </div>
          </A>

          <A cls="lp-inr" delay={80}>
            <div style={{ border: '2px solid #6366F128', borderRadius: 22, overflow: 'hidden', height: '100%', boxShadow: '0 8px 32px rgba(99,102,241,.08)' }}>
              <div style={{ background: GRAD2, padding: '30px 28px 26px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,.06)', pointerEvents: 'none' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 46, height: 46, borderRadius: 13, background: 'rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Users size={22} color="#fff" />
                  </div>
                  <div>
                    <div style={{ color: '#fff', fontSize: 19, fontWeight: 800 }}>Cabinets comptables</div>
                    <div style={{ color: 'rgba(255,255,255,.55)', fontSize: 13 }}>Experts-comptables, comptables agréés</div>
                  </div>
                </div>
                <p style={{ color: 'rgba(255,255,255,.68)', fontSize: 14, lineHeight: 1.65 }}>
                  Réduisez la saisie à zéro. Concentrez-vous sur le conseil et la valeur ajoutée.
                </p>
              </div>
              <div style={{ background: '#fff', padding: 28 }}>
                {["Réception des écritures IA générées par les clients",'Validation en un clic avec pièces jointes liées','Export journaux Excel multi-journaux','Gestion multi-dossiers depuis un tableau de bord unique','Déversement direct vers Odoo ERP','Détection automatique d\'anomalies comptables','Module paie SYSCOHADA complet'].map(f => <CheckItem key={f} text={f} color="#6366F1" />)}
              </div>
            </div>
          </A>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// IA MANSOUR — section sombre
// ═══════════════════════════════════════════════════════════════════════════════
function IaMansour() {
  const items = [
    { Icon: FileCheck,     color: C.teal,    title: 'Extraction automatique (OCR + IA)',  desc: 'Analyse factures PDF et images. Génère les écritures SYSCOHADA sans aucune saisie.' },
    { Icon: Calculator,    color: '#6366F1', title: 'Calcul de paie automatique',          desc: 'CSS 5,6%, IPRES, IR barème sénégalais, TRIMF — bulletins + bordereaux déclaratifs.' },
    { Icon: Mic,           color: '#A78BFA', title: 'Assistant vocal 24/7',               desc: 'Posez vos questions comptables par micro, en français ou en wolof.' },
    { Icon: Brain,         color: '#F59E0B', title: 'Moteur SYSCOHADA / CGI 2025',        desc: 'Plans de comptes, TVA, retenues à la source — pleine conformité OHADA et CGI 2025.' },
    { Icon: ReceiptText,   color: C.green,   title: 'Génération de documents',            desc: 'Bulletins de paie, bordereaux CSS/IPRES/IR, factures, journaux Excel — automatiquement.' },
    { Icon: MessageSquare, color: C.tealLt,  title: 'Lien entreprise ↔ cabinet',          desc: 'Les écritures IA générées côté client arrivent directement dans l\'espace cabinet.' },
  ];

  return (
    <section id="ia-mansour" style={{ background: C.hero, position: 'relative', overflow: 'hidden' }}>
      {/* Background pattern */}
      <div className="bg-dots" style={{ position: 'absolute', inset: 0, opacity: .3, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle,${C.teal}14,transparent 65%)`, filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div className="s ct" style={{ position: 'relative', zIndex: 1 }}>
        <A><SHead badge="✦ IA Mansour" title="Rencontrez Mansour" sub="Votre expert comptable artificiel — disponible à toute heure, en français et en wolof." light /></A>

        {/* Profile card */}
        <A style={{ marginBottom: 28 }}>
          <div style={{ background: 'rgba(255,255,255,.05)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 20, padding: '28px 32px', display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
            <div style={{ width: 76, height: 76, borderRadius: '50%', background: GRAD, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, animation: 'pulse 3s ease-in-out infinite', boxShadow: `0 0 0 10px ${C.teal}18` }}>
              <Brain size={36} color="#fff" />
            </div>
            <div style={{ flex: 1, minWidth: 180 }}>
              <div style={{ color: '#fff', fontSize: 22, fontWeight: 800, marginBottom: 5, letterSpacing: '-.3px' }}>IA Mansour</div>
              <div style={{ color: 'rgba(255,255,255,.48)', fontSize: 14 }}>Expert Comptable IA · SYSCOHADA · CGI 2025 · Wolof & Français · 24/7</div>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {[['98%','Précision'],['24/7','Disponible'],['SYSCOHADA','Certifié'],['CGI 2025','Conforme']].map(([v,l]) => (
                <div key={v} style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.10)', borderRadius: 12, padding: '11px 18px', textAlign: 'center', minWidth: 72 }}>
                  <div style={{ color: C.tealLt, fontSize: 17, fontWeight: 900 }}>{v}</div>
                  <div style={{ color: 'rgba(255,255,255,.38)', fontSize: 11, marginTop: 3 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </A>

        <div className="g3">
          {items.map(({ Icon, color, title, desc }, i) => (
            <A key={title} delay={i * 80}>
              <div style={{ background: 'rgba(255,255,255,.05)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.09)', borderRadius: 16, padding: 26, height: '100%', transition: 'background .25s, border-color .25s, transform .25s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.09)'; e.currentTarget.style.borderColor = `${color}45`; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.09)'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 13, background: `${color}20`, border: `1px solid ${color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <Icon size={22} color={color} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 9 }}>{title}</h3>
                <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.48)', lineHeight: 1.75 }}>{desc}</p>
              </div>
            </A>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// COMMENT ÇA MARCHE
// ═══════════════════════════════════════════════════════════════════════════════
function HowItWorks() {
  const steps = [
    { n: '1', Icon: CloudUpload, color: C.green,   title: 'Importez vos pièces',          desc: 'Uploadez factures, reçus, relevés. L\'IA Mansour extrait et analyse tout via OCR.' },
    { n: '2', Icon: Bot,         color: '#6366F1', title: 'Mansour génère les écritures', desc: 'Règles SYSCOHADA, TVA, CGI 2025 — écritures créées en quelques secondes, sans saisie.' },
    { n: '3', Icon: CheckCheck,  color: C.teal,    title: 'Validez & exportez',           desc: 'Le cabinet valide en un clic. Journaux Excel, bulletins PDF, déclarations prêts.' },
  ];

  return (
    <section id="comment" className="s" style={{ background: C.bgGray }}>
      <div className="ct">
        <A><SHead badge="Comment ça marche" title="Trois étapes, zéro friction" sub="Du document brut à l'écriture validée, en quelques secondes." /></A>
        <div style={{ position: 'relative' }}>
          <div className="step-line" style={{ position: 'absolute', top: 68, left: '18%', right: '18%', height: 2, zIndex: 0, background: `linear-gradient(90deg,${C.green},${C.teal})`, borderRadius: 2 }} />
          <div className="g3" style={{ position: 'relative', zIndex: 1 }}>
            {steps.map(({ n, Icon, color, title, desc }, i) => (
              <A key={n} delay={i * 150}>
                <div style={{ textAlign: 'center', padding: '0 14px' }}>
                  <div style={{ width: 84, height: 84, borderRadius: '50%', background: `${color}12`, border: `2.5px solid ${color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', position: 'relative', boxShadow: `0 0 0 8px ${color}0C` }}>
                    <Icon size={32} color={color} />
                    <div style={{ position: 'absolute', top: -11, right: -11, width: 28, height: 28, borderRadius: '50%', background: color, color: '#fff', fontSize: 12, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{n}</div>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: C.text, marginBottom: 12 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.78 }}>{desc}</p>
                </div>
              </A>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CE QUI NOUS DIFFÉRENCIE
// ═══════════════════════════════════════════════════════════════════════════════
function Differenciateurs() {
  const items = [
    { num: '01', Icon: Shield,     color: C.teal,    title: 'Seul outil 100% SYSCOHADA natif',   desc: 'Plan comptable OHADA intégré en natif avec IA. Conforme dès le premier jour.' },
    { num: '02', Icon: Layers,     color: '#6366F1', title: 'Lien direct entreprise ↔ cabinet',  desc: 'Les données circulent sans ressaisie entre l\'entreprise et son expert-comptable.' },
    { num: '03', Icon: Banknote,   color: C.green,   title: 'Module paie sénégalais complet',     desc: 'CSS, IPRES, IR, TRIMF — tous les calculs du droit du travail automatisés.' },
    { num: '04', Icon: Mic,        color: '#8B5CF6', title: 'Interaction vocale avec Mansour',    desc: 'Unique sur le marché — posez vos questions par micro en français ou wolof.' },
    { num: '05', Icon: TrendingUp, color: '#F59E0B', title: 'Intégration Odoo ERP',              desc: 'Déversement direct des écritures validées vers Odoo pour les cabinets.' },
    { num: '06', Icon: Globe,      color: C.teal,    title: 'Prix en FCFA, marché local',         desc: 'Conçu pour la réalité des PME. Support en français et wolof.' },
  ];

  return (
    <section className="s" style={{ background: C.bg }}>
      <div className="ct">
        <A><SHead badge="Pourquoi AccounTech AI ?" title="Ce qui nous différencie" sub="Six avantages qu'aucun autre outil du marché ne réunit." /></A>
        <div className="g3">
          {items.map(({ num, Icon, color, title, desc }, i) => (
            <A key={num} delay={i * 80}>
              <div className="card" style={{ padding: 26, height: '100%', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: 46, height: 46, borderRadius: 12, background: `${color}14`, border: `1px solid ${color}28`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={20} color={color} />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color, letterSpacing: '.5px', textTransform: 'uppercase', marginBottom: 5 }}>#{num}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: C.text, marginBottom: 7 }}>{title}</h3>
                  <p style={{ fontSize: 13.5, color: C.muted, lineHeight: 1.65 }}>{desc}</p>
                </div>
              </div>
            </A>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PRICING
// ═══════════════════════════════════════════════════════════════════════════════
function Pricing() {
  const plans = [
    {
      name: 'Gratuit',
      price: '0',
      unit: 'FCFA / mois',
      tag: 'Pour démarrer',
      color: C.teal,
      grad: `linear-gradient(135deg,${C.teal}18,${C.green}08)`,
      highlight: false,
      features: [
        'ERP comptable complet (SYSCOHADA)',
        'Gestion des ventes & achats',
        'Dashboard chiffre d\'affaires',
        'Rapprochement bancaire',
        'Facturation PDF automatique',
        'Lien entreprise ↔ cabinet',
        'IA Mansour — assistant comptable',
        'Accès multi-utilisateurs (2)',
      ],
      cta: 'Commencer gratuitement',
      ctaHref: 'https://sccountechia.com/login',
    },
    {
      name: 'Pro',
      price: '19 800',
      unit: 'FCFA / mois',
      tag: 'Fonctionnalités avancées',
      color: '#6366F1',
      grad: 'linear-gradient(135deg,#6366F128,#8B5CF610)',
      highlight: true,
      features: [
        'Tout le plan Gratuit inclus',
        'Déclarations fiscales automatiques (CGI 2025)',
        'Module de pointage des employés',
        'Personnalisation des fonctionnalités',
        'Module paie complet (CSS, IPRES, IR, TRIMF)',
        'Export journaux multi-formats',
        'Accès multi-utilisateurs illimité',
        'Support prioritaire 24/7',
      ],
      cta: 'Essayer Pro',
      ctaHref: 'https://sccountechia.com/login',
    },
  ];

  return (
    <section id="pricing" className="s" style={{ background: C.bgGray }}>
      <div className="ct">
        <A><SHead badge="Tarifs" title="Simple, transparent, accessible" sub="L'ERP est gratuit. Passez Pro pour les déclarations fiscales automatiques et le module pointage." /></A>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 28, maxWidth: 780, margin: '0 auto' }}>
          {plans.map(({ name, price, unit, tag, color, grad, highlight, features, cta, ctaHref }, i) => (
            <A key={name} delay={i * 120}>
              <div style={{
                background: highlight ? '#fff' : '#fff',
                border: highlight ? `2px solid ${color}` : `1px solid ${C.border}`,
                borderRadius: 22, overflow: 'hidden', height: '100%',
                boxShadow: highlight ? `0 20px 60px ${color}20` : '0 4px 20px rgba(0,0,0,.06)',
                position: 'relative',
                transition: 'transform .25s, box-shadow .25s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = highlight ? `0 28px 72px ${color}30` : `0 16px 48px rgba(0,0,0,.1)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = highlight ? `0 20px 60px ${color}20` : '0 4px 20px rgba(0,0,0,.06)'; }}
              >
                {highlight && (
                  <div style={{ position: 'absolute', top: 18, right: 18, background: color, color: '#fff', fontSize: 11, fontWeight: 800, padding: '4px 12px', borderRadius: 20, letterSpacing: '.3px' }}>
                    RECOMMANDÉ
                  </div>
                )}
                <div style={{ background: grad, padding: '32px 30px 24px', borderBottom: `1px solid ${color}20` }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 10 }}>{tag}</div>
                  <div style={{ fontSize: 28, fontWeight: 900, color: C.text, marginBottom: 4, letterSpacing: '-.5px' }}>{name}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span style={{ fontSize: 42, fontWeight: 900, color, lineHeight: 1, letterSpacing: '-2px' }}>{price}</span>
                    <span style={{ fontSize: 14, color: C.muted, fontWeight: 500 }}>{unit}</span>
                  </div>
                </div>
                <div style={{ padding: '24px 30px 30px' }}>
                  <div style={{ marginBottom: 24 }}>
                    {features.map(f => <CheckItem key={f} text={f} color={color} />)}
                  </div>
                  <a href={ctaHref}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                      background: highlight ? `linear-gradient(135deg,${color},#8B5CF6)` : `${color}14`,
                      color: highlight ? '#fff' : color,
                      padding: '13px 24px', borderRadius: 11, textDecoration: 'none',
                      fontSize: 15, fontWeight: 700, border: highlight ? 'none' : `1.5px solid ${color}35`,
                      transition: 'opacity .2s, transform .2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none'; }}
                  >
                    {cta} <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </A>
          ))}
        </div>
        <A delay={200}>
          <p style={{ textAlign: 'center', marginTop: 28, fontSize: 13.5, color: C.muted }}>
            Aucune carte bancaire requise pour le plan gratuit · Résiliable à tout moment · Prix en FCFA
          </p>
        </A>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CABINETS PARTENAIRES — Sénégal & Côte d'Ivoire
// ═══════════════════════════════════════════════════════════════════════════════
function CabinetsPartenaires() {
  const pays = [
    { flagSrc: flagSenegal, nom: 'Sénégal', tag: 'Hub principal · Marché de lancement', color: C.green, bgGrad: `linear-gradient(135deg,${C.green}16,${C.teal}08)`, desc: 'Présents à Dakar, Thiès, Saint-Louis et au-delà. Nous accompagnons PME et cabinets comptables sénégalais depuis le lancement.', stats: [{ v: '5+', l: 'cabinets actifs' }, { v: '202', l: 'depuis' }], points: ['SYSCOHADA — Plan comptable OHADA natif','CGI 2025 et retenues à la source intégrés','Module paie sénégalais (CSS, IPRES, IR, TRIMF)','Support en wolof et en français','Données hébergées à Dakar'] },
    { flagSrc: flagCI, nom: "Côte d'Ivoire", tag: 'Abidjan · Expansion en cours', color: '#F59E0B', bgGrad: 'linear-gradient(135deg,#F59E0B16,#F59E0B06)', desc: "AccounTech AI s'étend à la Côte d'Ivoire avec des adaptations au contexte fiscal ivoirien, porté par notre expert basé à Abidjan.", stats: [{ v: '2026', l: 'lancement prévu' }, { v: 'OHADA', l: 'compatible' }], points: ['SYSCOHADA — Plan comptable OHADA natif','Code général des impôts ivoirien','Module paie adapté DGT Côte d\'Ivoire','Support en français','Référent local : Marc (Abidjan)'] },
    { flagSrc: flagMaroc, nom: 'Maroc', tag: 'Casablanca · Partenaire LYSO', color: '#C1272D', bgGrad: 'linear-gradient(135deg,#C1272D16,#C1272D06)', desc: "AccounTech AI entre sur le marché marocain grâce à notre partenaire LYSO (Lead Your Software), expert ERP basé à Casablanca. Facturation électronique et conformité FEG intégrées.", stats: [{ v: '2026', l: 'lancement' }, { v: 'FEG', l: 'compatible' }], points: ['Facturation électronique conforme DGI Maroc','Format d\'Échange Standardisé (FEG) natif','Intégration SAGE via LYSO','Code Général des Impôts marocain','Référent local : M. Jdiaa — LYSO Casablanca'] },
  ];

  return (
    <section id="partenaires" className="s" style={{ background: C.bg, position: 'relative', overflow: 'hidden' }}>
      <div className="ct" style={{ position: 'relative', zIndex: 1 }}>
        <A><SHead badge="Réseau partenaire" title="Présents au Sénégal, en Côte d'Ivoire & au Maroc" sub="AccounTech AI se déploie en Afrique de l'Ouest et au Maghreb pour accompagner les PME de la région." /></A>

        {/* Map illustration */}
        <A style={{ marginBottom: 40 }}>
          <div style={{ background: C.bgGray, border: `1px solid ${C.border}`, borderRadius: 20, padding: '24px 36px' }}>
            <CoordMap />
          </div>
        </A>

        <div className="g3">
          {pays.map(({ flagSrc, nom, tag, color, bgGrad, desc, stats, points }, i) => (
            <A key={nom} cls={i === 0 ? 'lp-inl' : 'lp-inr'} delay={i * 100}>
              <div className="card" style={{ overflow: 'hidden', height: '100%' }}>
                <div style={{ background: bgGrad, padding: '28px 28px 22px', borderBottom: `1px solid ${color}18` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
                    <img src={flagSrc} alt={nom} style={{ width: 52, height: 36, objectFit: 'cover', borderRadius: 6, boxShadow: '0 2px 8px rgba(0,0,0,.12)', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 22, fontWeight: 900, color: C.text, letterSpacing: '-.3px' }}>{nom}</div>
                      <div style={{ fontSize: 13, color, fontWeight: 700, marginTop: 3 }}>{tag}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 14.5, color: C.sub, lineHeight: 1.7, marginBottom: 18 }}>{desc}</p>
                  <div style={{ display: 'flex', gap: 12 }}>
                    {stats.map(({ v, l }) => (
                      <div key={l} style={{ background: '#fff', border: `1px solid ${color}25`, borderRadius: 10, padding: '10px 18px', textAlign: 'center', flex: 1 }}>
                        <div style={{ fontSize: 20, fontWeight: 900, color }}>{v}</div>
                        <div style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ padding: 28 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 14 }}>Couverture fonctionnelle</div>
                  {points.map(p => <CheckItem key={p} text={p} color={color} />)}
                </div>
              </div>
            </A>
          ))}
        </div>

        {/* Cabinets partenaires */}
        <A style={{ marginTop: 60 }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span className="badge-teal">Cabinets partenaires</span>
            <h3 style={{ marginTop: 14, fontSize: 'clamp(22px,3vw,32px)', fontWeight: 800, color: C.text, letterSpacing: '-.3px' }}>
              Ils nous font confiance
            </h3>
            <p style={{ marginTop: 10, fontSize: 15, color: C.muted, maxWidth: 540, margin: '10px auto 0', lineHeight: 1.65 }}>
              AccounTech AI est déployé dans des cabinets et sociétés partenaires reconnus au Sénégal, en Côte d'Ivoire et au Maroc.
            </p>
          </div>
        </A>
        {/* ── Carousel infini des partenaires ── */}
        <div className="carousel-wrap carousel-wrap-white" style={{ margin: '0 -24px' }}>
          <div className="carousel-track" style={{ alignItems: 'stretch', gap: 0 }}>
            {[
              { abbr: 'AKM',  logo: logoAKM,  name: 'AKM Audit & Conseil',      flagImg: flagSenegal, color: C.teal,    pays: 'Sénégal', desc: 'Cabinet d\'audit et de conseil basé à Dakar. Expert en normes SYSCOHADA et en accompagnement des PME sénégalaises.' },
              { abbr: 'GA2C', logo: logoGA2C,  name: 'GA2C',                      flagImg: flagSenegal, color: C.green,   pays: 'Sénégal', desc: 'Gestion, Audit, Comptabilité & Conseil — cabinet spécialisé dans l\'accompagnement des entreprises en croissance.' },
              { abbr: 'DKT',  logo: logoDK,    name: 'DK Tuning',                 flagImg: flagSenegal, color: '#F59E0B', pays: 'Sénégal', desc: 'Société partenaire basée au Sénégal. AccounTech AI accompagne DK Tuning dans la gestion et la digitalisation de son activité.' },
              { abbr: 'AAC',  logo: logoAdoc,  name: 'Adoc Audit & Conseil',      flagImg: flagSenegal, color: '#6366F1', pays: 'Sénégal', desc: 'Cabinet d\'audit et de conseil basé au Sénégal. Partenaire référent AccounTech AI pour l\'audit et le conseil.' },
              { abbr: 'LYSO', logo: null,       name: 'LYSO — Lead Your Software', flagImg: flagMaroc,   color: '#C1272D', pays: 'Maroc',   desc: 'Éditeur ERP marocain basé à Casablanca. Partenaire exclusif d\'AccounTech AI pour le déploiement au Maroc — facturation électronique, FEG et intégration SAGE.', contact: { nom: 'M. Jdiaa', email: 'jdia@trisoft-maroc.com', email2: 'jdiatrisoft@gmail.com', adresse: 'Centre Riad 61, Angle Avenue LALLA YACOUT et MOSTAFA EL MAANI, N°69 2ème étage, Casablanca' } },
              /* — copie pour boucle infinie — */
              { abbr: 'AKM2',  logo: logoAKM,  name: 'AKM Audit & Conseil',      flagImg: flagSenegal, color: C.teal,    pays: 'Sénégal', desc: 'Cabinet d\'audit et de conseil basé à Dakar. Expert en normes SYSCOHADA et en accompagnement des PME sénégalaises.' },
              { abbr: 'GA2C2', logo: logoGA2C,  name: 'GA2C',                      flagImg: flagSenegal, color: C.green,   pays: 'Sénégal', desc: 'Gestion, Audit, Comptabilité & Conseil — cabinet spécialisé dans l\'accompagnement des entreprises en croissance.' },
              { abbr: 'DKT2',  logo: logoDK,    name: 'DK Tuning',                 flagImg: flagSenegal, color: '#F59E0B', pays: 'Sénégal', desc: 'Société partenaire basée au Sénégal. AccounTech AI accompagne DK Tuning dans la gestion et la digitalisation de son activité.' },
              { abbr: 'AAC2',  logo: logoAdoc,  name: 'Adoc Audit & Conseil',      flagImg: flagSenegal, color: '#6366F1', pays: 'Sénégal', desc: 'Cabinet d\'audit et de conseil basé au Sénégal. Partenaire référent AccounTech AI pour l\'audit et le conseil.' },
              { abbr: 'LYSO2', logo: null,       name: 'LYSO — Lead Your Software', flagImg: flagMaroc,   color: '#C1272D', pays: 'Maroc',   desc: 'Éditeur ERP marocain basé à Casablanca. Partenaire exclusif d\'AccounTech AI pour le déploiement au Maroc — facturation électronique, FEG et intégration SAGE.', contact: { nom: 'M. Jdiaa', email: 'jdia@trisoft-maroc.com', email2: 'jdiatrisoft@gmail.com', adresse: 'Centre Riad 61, Angle Avenue LALLA YACOUT et MOSTAFA EL MAANI, N°69 2ème étage, Casablanca' } },
            ].map(({ abbr, logo, name, flagImg, color, pays, desc, contact }) => (
              <div key={abbr} style={{
                width: 310, flexShrink: 0, marginRight: 22,
                background: '#fff', border: `1px solid ${C.border}`, borderRadius: 18,
                padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 14,
                boxShadow: '0 2px 16px rgba(0,0,0,.06)',
                transition: 'box-shadow .25s, border-color .25s, transform .25s',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 12px 40px ${color}18`; e.currentTarget.style.borderColor = `${color}50`; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,.06)'; e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = 'none'; }}
              >
                {/* En-tête logo + nom */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
                  <div style={{
                    width: 60, height: 60, borderRadius: 14, flexShrink: 0, overflow: 'hidden',
                    background: `linear-gradient(135deg,${color}18,${color}06)`,
                    border: `1.5px solid ${color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {logo
                      ? <LogoImg src={logo} fallback={abbr.replace(/\d/g,'')} color={color} />
                      : <span style={{ fontSize: 11, fontWeight: 900, color, textAlign: 'center', lineHeight: 1.1, padding: '0 4px' }}>{abbr.replace(/\d/g,'')}</span>
                    }
                  </div>
                  <div>
                    <div style={{ fontSize: 14.5, fontWeight: 800, color: C.text, marginBottom: 4, lineHeight: 1.25 }}>{name}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color, fontWeight: 600 }}>
                      <img src={flagImg} alt={pays} style={{ width: 18, height: 13, objectFit: 'cover', borderRadius: 2 }} />
                      {pays}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.65, flex: 1 }}>{desc}</p>

                {/* Bloc contact LYSO */}
                {contact && (
                  <div style={{ width: '100%', background: `${color}07`, border: `1px solid ${color}20`, borderRadius: 10, padding: '11px 13px', display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '.5px' }}>Contact Maroc</div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: C.text }}>{contact.nom}</div>
                    <a href={`mailto:${contact.email}`} style={{ fontSize: 12, color, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}>
                      <Mail size={11} color={color} />{contact.email}
                    </a>
                    <a href={`mailto:${contact.email2}`} style={{ fontSize: 12, color, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}>
                      <Mail size={11} color={color} />{contact.email2}
                    </a>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 5, fontSize: 11, color: C.muted, lineHeight: 1.5 }}>
                      <MapPin size={11} color={C.muted} style={{ flexShrink: 0, marginTop: 1 }} />{contact.adresse}
                    </div>
                  </div>
                )}

                {/* Badge partenaire certifié */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, color, background: `${color}10`, border: `1px solid ${color}25`, padding: '4px 12px', borderRadius: 20 }}>
                  <Check size={10} color={color} /> Partenaire certifié
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// GARANTIES
// ═══════════════════════════════════════════════════════════════════════════════
function Garanties() {
  const items = [
    { Icon: Lock,     color: C.teal,    title: 'Données hébergées au Sénégal',             desc: 'Vos données restent sur des serveurs locaux. Conformité CDP Sénégal garantie.' },
    { Icon: Shield,   color: '#6366F1', title: 'Chiffrement de bout en bout',              desc: 'Données chiffrées en transit (TLS) et au repos (AES-256). Zéro accès tiers.' },
    { Icon: FileCheck,color: C.green,   title: 'Conforme OHADA & CGI 2025',               desc: 'Normes SYSCOHADA et Code Général des Impôts 2025 intégrées nativement.' },
    { Icon: Users,    color: '#F59E0B', title: 'Support humain disponible',               desc: 'Notre équipe répond sous 24h, lundi au vendredi. Pas seulement un chatbot.' },
    { Icon: Brain,    color: '#8B5CF6', title: 'Aucune donnée lue par AccounTech',        desc: 'Vos écritures restent strictement privées. Nous ne les consultons jamais.' },
    { Icon: Zap,      color: C.teal,    title: 'Mises à jour réglementaires auto',         desc: 'CGI, barèmes IR, taux CSS mis à jour dès les changements officiels.' },
  ];

  return (
    <section id="garanties" className="s bg-diag" style={{ background: C.bgGray }}>
      <div className="ct">
        <A><SHead badge="Vos garanties" title="Fiabilité & Sécurité" sub="AccounTech AI est conçu pour inspirer confiance à chaque étape." /></A>
        <div className="g3">
          {items.map(({ Icon, color, title, desc }, i) => (
            <A key={title} delay={i * 80}>
              <div style={{ display: 'flex', gap: 16, padding: '22px 24px', background: '#fff', border: `1px solid ${C.border}`, borderRadius: 16, transition: 'box-shadow .25s, border-color .25s, transform .25s' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 10px 36px ${color}14`; e.currentTarget.style.borderColor = `${color}40`; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = 'none'; }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${color}14`, border: `1px solid ${color}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={20} color={color} />
                </div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: C.text, marginBottom: 6 }}>{title}</h3>
                  <p style={{ fontSize: 13.5, color: C.muted, lineHeight: 1.65 }}>{desc}</p>
                </div>
              </div>
            </A>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ÉQUIPE
// ═══════════════════════════════════════════════════════════════════════════════
function TeamAvatar({ photo, ini, color }) {
  const [err, setErr] = useState(false);
  if (!err && photo) {
    return (
      <img
        src={photo} alt={ini}
        onError={() => setErr(true)}
        style={{ width: 88, height: 88, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${color}`, boxShadow: `0 0 0 6px ${color}18`, marginBottom: 14, display: 'block' }}
      />
    );
  }
  return (
    <div style={{ width: 88, height: 88, borderRadius: '50%', background: `${color}20`, border: `3px solid ${color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, fontSize: 26, fontWeight: 900, color, boxShadow: `0 0 0 6px ${color}18` }}>
      {ini}
    </div>
  );
}

function Equipe() {
  const membres = [
    { ini: 'MS', photo: mansourPhoto,  nom: 'Mouhamadou Mansour Sow',  role: 'Expert Comptable Stagiaire', pays: '🇸🇳 Sénégal',       color: C.green,   specialite: 'Comptabilité & Fiscalité',   bio: 'Expert en normes SYSCOHADA et fiscalité sénégalaise. Référent métier pour le module comptabilité, les déclarations fiscales et la conformité CGI 2025.' },
    { ini: 'JM', photo: marcPhoto,     nom: 'J. Marc Arthur KOUASSI',  role: 'Expert Comptable Stagiaire', pays: "🇨🇮 Côte d'Ivoire", color: '#F59E0B', specialite: 'Fiscalité ivoirienne',      bio: "Spécialiste des pratiques comptables et fiscales ivoiriennes. Coordonne l'adaptation d'AccounTech AI pour le marché de Côte d'Ivoire." },
    { ini: 'KT', photo: khadimPhoto,   nom: 'Khadim Touré',            role: 'Développeur IA',             pays: '🇸🇳 Sénégal',       color: C.teal,    specialite: 'Intelligence Artificielle', bio: "Architecte de l'IA Mansour. Développe les modèles d'extraction OCR, de reconnaissance comptable, l'assistant vocal et l'interface produit." },
  ];

  return (
    <section id="equipe" className="s" style={{ background: C.bg }}>
      <div className="ct">
        <A><SHead badge="L'équipe" title="Les experts derrière AccounTech AI" sub="Une équipe pluridisciplinaire alliant expertise comptable africaine et ingénierie IA." /></A>
        <div className="g3">
          {membres.map(({ ini, photo, nom, role, pays, color, specialite, bio }, i) => (
            <A key={nom} delay={i * 120}>
              <div className="card" style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* Gradient header strip */}
                <div style={{ background: `linear-gradient(135deg,${color}22,${color}08)`, padding: '28px 28px 20px', borderBottom: `1px solid ${color}18`, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <div style={{ position: 'absolute', top: -18, right: -18, width: 80, height: 80, borderRadius: '50%', background: `${color}10`, pointerEvents: 'none' }} />
                  <TeamAvatar photo={photo} ini={ini} color={color} />
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 10, fontWeight: 700, color, background: `${color}14`, border: `1px solid ${color}28`, padding: '2px 10px', borderRadius: 20, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '.3px' }}>
                    <Award size={10} color={color} /> {specialite}
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: C.text, marginBottom: 3, letterSpacing: '-.2px' }}>{nom}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color }}>{role}</div>
                  <div style={{ fontSize: 13, color: C.muted, marginTop: 2 }}>{pays}</div>
                </div>
                {/* Bio */}
                <div style={{ padding: '20px 24px', flex: 1 }}>
                  <p style={{ fontSize: 14, color: C.sub, lineHeight: 1.78 }}>{bio}</p>
                </div>
              </div>
            </A>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONTACT
// ═══════════════════════════════════════════════════════════════════════════════
function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', type: '', message: '' });
  const [sent, setSent] = useState(false);
  const up = k => v => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ nom: '', email: '', type: '', message: '' });
  };

  const infos = [
    { Icon: Mail,   label: 'Email',    val: 'sowmansour@accountech-ai.com',     href: 'mailto:sowmansour@accountech-ai.com' },
    { Icon: Phone,  label: 'Téléphone',val: '+221 77 586 08 29',         href: 'tel:+221775860829' },
    { Icon: MapPin, label: 'Adresse',  val: 'Dakar, Sénégal',            href: '#' },
    { Icon: Clock,  label: 'Horaires', val: 'Lun – Ven · 9h00 – 18h00', href: '#' },
  ];

  const inp = { width: '100%', padding: '11px 14px', border: `1px solid ${C.border}`, borderRadius: 9, fontSize: 15, color: C.text, background: '#fff', outline: 'none', fontFamily: 'inherit', transition: 'border-color .2s, box-shadow .2s' };

  return (
    <section id="contact" className="s" style={{ background: C.bgSoft }}>
      <div className="ct">
        <A><SHead badge="Contact" title="Parlons de votre projet" sub="Notre équipe vous répond sous 24h, du lundi au vendredi." /></A>
        <div className="g2" style={{ gap: 44 }}>
          <A cls="lp-inl">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {sent && <div style={{ background: '#ECFDF5', border: '1px solid #6EE7B7', borderRadius: 10, padding: '14px 18px', color: '#065F46', fontSize: 14, fontWeight: 600 }}>✅ Message envoyé ! Nous vous répondrons rapidement.</div>}
              {[['nom','text','Nom complet','Votre nom'],['email','email','Email','vous@exemple.com']].map(([k,t,l,p]) => (
                <div key={k}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: C.sub, marginBottom: 6 }}>{l}</label>
                  <input style={inp} type={t} required placeholder={p} value={form[k]} onChange={e => up(k)(e.target.value)}
                    onFocus={e => { e.target.style.borderColor = C.teal; e.target.style.boxShadow = `0 0 0 3px ${C.teal}20`; }}
                    onBlur={e => { e.target.style.borderColor = C.border; e.target.style.boxShadow = 'none'; }} />
                </div>
              ))}
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: C.sub, marginBottom: 6 }}>Vous êtes</label>
                <select style={inp} required value={form.type} onChange={e => up('type')(e.target.value)}
                  onFocus={e => { e.target.style.borderColor = C.teal; e.target.style.boxShadow = `0 0 0 3px ${C.teal}20`; }}
                  onBlur={e => { e.target.style.borderColor = C.border; e.target.style.boxShadow = 'none'; }}>
                  <option value="">Sélectionner…</option>
                  <option value="entreprise">Entreprise / PME</option>
                  <option value="cabinet">Cabinet comptable</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: C.sub, marginBottom: 6 }}>Message</label>
                <textarea style={{ ...inp, resize: 'vertical' }} required rows={5} placeholder="Décrivez votre besoin…" value={form.message} onChange={e => up('message')(e.target.value)}
                  onFocus={e => { e.target.style.borderColor = C.teal; e.target.style.boxShadow = `0 0 0 3px ${C.teal}20`; }}
                  onBlur={e => { e.target.style.borderColor = C.border; e.target.style.boxShadow = 'none'; }} />
              </div>
              <button type="submit" className="btn-primary" style={{ border: 'none', justifyContent: 'center', marginTop: 4 }}>
                Envoyer le message <ArrowRight size={18} />
              </button>
            </form>
          </A>

          <A cls="lp-inr" delay={80}>
            <div>
              <div style={{ background: C.hero, borderRadius: 20, padding: '32px 28px', marginBottom: 20 }}>
                <h3 style={{ color: '#fff', fontSize: 19, fontWeight: 800, marginBottom: 6 }}>Nos coordonnées</h3>
                <p style={{ color: 'rgba(255,255,255,.45)', fontSize: 14, marginBottom: 28 }}>Disponible du lundi au vendredi pour vous accompagner.</p>
                {infos.map(({ Icon, label, val, href }) => (
                  <div key={label} style={{ display: 'flex', gap: 14, marginBottom: 20 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 11, flexShrink: 0, background: `${C.teal}18`, border: `1px solid ${C.teal}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={17} color={C.tealLt} />
                    </div>
                    <div>
                      <div style={{ color: 'rgba(255,255,255,.35)', fontSize: 11, fontWeight: 600, marginBottom: 3 }}>{label}</div>
                      <a href={href} style={{ color: '#fff', fontSize: 14, textDecoration: 'none', transition: 'color .2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = C.tealLt}
                        onMouseLeave={e => e.currentTarget.style.color = '#fff'}
                      >{val}</a>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ background: '#fff', border: `1px solid ${C.teal}25`, borderRadius: 14, padding: '20px 24px' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.teal, marginBottom: 14, textTransform: 'uppercase', letterSpacing: '.4px' }}>Pourquoi nous faire confiance</div>
                {['Données hébergées et sécurisées au Sénégal','Aucune donnée consultée par AccounTech AI','Support humain — pas seulement un chatbot'].map(t => <CheckItem key={t} text={t} color={C.teal} />)}
              </div>
            </div>
          </A>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CTA FINAL
// ═══════════════════════════════════════════════════════════════════════════════
function CTAFinal() {
  return (
    <section className="s" style={{ background: C.bgGray }}>
      <div className="ct">
        <A>
          <div style={{ background: GRAD, borderRadius: 26, padding: 'clamp(48px,6vw,80px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,.08)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: -40, left: -40, width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,255,255,.06)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative' }}>
              <span className="badge-white" style={{ marginBottom: 22 }}>
                <Zap size={13} /> Accès gratuit — aucune carte bancaire requise
              </span>
              <h2 style={{ fontSize: 'clamp(26px,4.5vw,52px)', fontWeight: 900, color: '#fff', marginBottom: 16, letterSpacing: '-.5px', lineHeight: 1.1 }}>Essayez AccounTech AI gratuitement</h2>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,.7)', lineHeight: 1.75, maxWidth: 460, margin: '0 auto 40px' }}>
                Rejoignez 5+ cabinets et PME du Sénégal. Onboarding guidé par notre équipe.
              </p>
              <a href="https://sccountechia.com/login"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#fff', color: C.primary, padding: '16px 38px', borderRadius: 12, textDecoration: 'none', fontSize: 17, fontWeight: 700, boxShadow: '0 8px 30px rgba(0,0,0,.2)', transition: 'all .22s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,.28)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,.2)'; }}
              >Commencer gratuitement <ArrowRight size={20} /></a>
              <p style={{ color: 'rgba(255,255,255,.45)', fontSize: 13, marginTop: 20 }}>Données hébergées au Sénégal · Conforme SYSCOHADA & CGI 2025</p>
            </div>
          </div>
        </A>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════════════════════════════════════════
function Footer() {
  const year = new Date().getFullYear();
  const ls = { color: 'rgba(255,255,255,.38)', textDecoration: 'none', fontSize: 14, display: 'block', marginBottom: 10, transition: 'color .2s' };
  const hv = { onMouseEnter: e => e.currentTarget.style.color = C.tealLt, onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,.38)' };

  return (
    <footer style={{ background: C.hero, padding: '64px 24px 28px' }}>
      <div className="ct">
        <div className="g4" style={{ marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <img src={logoAccountech} alt="AccounTech AI" style={{ width: 34, height: 34, borderRadius: 9, objectFit: 'contain', background:'#fff' }} />
              <span style={{ color: '#fff', fontWeight: 800, fontSize: 17 }}>AccounTech <span style={{ color: C.tealLt }}>AI</span></span>
            </div>
            <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.36)', lineHeight: 1.75, maxWidth: 220, marginBottom: 18 }}>La comptabilité automatisée pour les PME.</p>
            <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
              {['SYSCOHADA','CGI 2025','OHADA','Odoo'].map(b => (
                <span key={b} style={{ fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 5, background: `${C.teal}16`, border: `1px solid ${C.teal}28`, color: C.tealLt }}>{b}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: '.6px', textTransform: 'uppercase', marginBottom: 18 }}>Produit</h4>
            {[['IA Mansour','#ia-mansour'],['Pour qui ?','#pour-qui'],['Tarifs','#pricing'],['Comment ça marche','#comment'],['Garanties','#garanties']].map(([l,h]) => (
              <a key={l} href={h} style={ls} {...hv}>{l}</a>
            ))}
          </div>
          <div>
            <h4 style={{ color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: '.6px', textTransform: 'uppercase', marginBottom: 18 }}>Réseau</h4>
            {[['Partenaires Sénégal','#partenaires'],["Partenaires Côte d'Ivoire",'#partenaires'],['Équipe','#equipe'],['Contact','#contact']].map(([l,h]) => (
              <a key={l} href={h} style={ls} {...hv}>{l}</a>
            ))}
          </div>
          <div>
            <h4 style={{ color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: '.6px', textTransform: 'uppercase', marginBottom: 18 }}>Contact</h4>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,.38)', lineHeight: 1.9 }}>
              <a href="mailto:sowmansour@accountech-ai.com" style={{ color: C.tealLt, textDecoration: 'none', display: 'block', marginBottom: 6 }}>sowmansour@accountech-ai.com</a>
              <a href="tel:+221775860829" style={{ color: 'rgba(255,255,255,.38)', textDecoration: 'none', display: 'block', marginBottom: 6 }}>+221 77 586 08 29</a>
              <span style={{ display: 'block' }}>Dakar, Sénégal</span>
              <span style={{ display: 'block', fontSize: 13 }}>Lun – Ven · 9h – 18h</span>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.07)', paddingTop: 22, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 14 }}>
          <span style={{ color: 'rgba(255,255,255,.24)', fontSize: 13 }}>© {year} AccounTech AI · Dakar, Sénégal & Abidjan, Côte d'Ivoire</span>
          <div style={{ display: 'flex', gap: 18 }}>
            {[['Mentions légales','#'],['CGU','#'],['Confidentialité','#']].map(([l,h]) => (
              <a key={l} href={h} style={{ color: 'rgba(255,255,255,.24)', textDecoration: 'none', fontSize: 13, transition: 'color .2s' }}
                onMouseEnter={e => e.currentTarget.style.color = C.tealLt}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.24)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// LANDING
// ═══════════════════════════════════════════════════════════════════════════════
export default function Landing() {
  return (
    <div style={{ color: C.text, fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif", WebkitFontSmoothing: 'antialiased' }}>
      <style>{G}</style>
      <ProgressBar />
      <Navbar />
      <Hero />
      <Stats />
      <VideoDemo />
      <Problemes />
      <PourQui />
      <Wave from={C.bgGray} to={C.hero} />
      <IaMansour />
      <Wave from={C.hero} to={C.bgGray} />
      <HowItWorks />
      <Differenciateurs />
      <Pricing />
      <CabinetsPartenaires />
      <Garanties />
      <Equipe />
      <Contact />
      <CTAFinal />
      <Footer />
    </div>
  );
}
