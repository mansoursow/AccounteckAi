import React, { useEffect, useRef, useState } from 'react';
import {
  Brain, FileCheck, Calculator, Mic, ReceiptText, MessageSquare,
  Zap, BarChart3, Shield, Layers, Globe, Lock,
  FileText, Bot, CheckCheck, Check, Star, ArrowRight,
  Users, Building2, TrendingUp, Award,
  Phone, Mail, MapPin, Clock, Menu, X,
  CloudUpload, Wallet, FileX, Banknote,
} from 'lucide-react';
import clientImage from '../assets/image.png';
import DemoRequest from './DemoRequest';
import mansourImg from '../assets/mansour.jpg';
import khadimImg from '../assets/khadim_toure.jpg';
import marcImg from '../assets/j_marc.jpg';
import logoImg from '../assets/logo.png';
import drapeauSn from '../assets/drapeau_senegal.webp';
import drapeauCi from '../assets/drapeau_ci.jpg';
import adocLogo from '../assets/Adoc.jpg';
import akmLogo from '../assets/AKM_Audit.webp';
import ga2cLogo from '../assets/GA2C.jpg';
import dktuningLogo from '../assets/dktuning.webp';

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

  @keyframes float   { 0%,100%{transform:translateY(0);}  50%{transform:translateY(-10px);} }
  @keyframes pulse   { 0%,100%{transform:scale(1);opacity:1;} 50%{transform:scale(.95);opacity:.75;} }
  @keyframes blink   { 0%,100%{opacity:1;} 50%{opacity:0;} }
  @keyframes shimmer { 0%{background-position:-200% center;} 100%{background-position:200% center;} }
  @keyframes glow    { 0%,100%{box-shadow:0 0 6px ${C.teal}60;} 50%{box-shadow:0 0 18px ${C.teal}90;} }
  @keyframes spin          { to{transform:rotate(360deg);} }
  @keyframes slideInPopup  { from{opacity:0;transform:translateY(24px);} to{opacity:1;transform:translateY(0);} }
  @keyframes ticker        { from{transform:translateX(0);} to{transform:translateX(-50%);} }

  .ticker-track { display:flex; width:max-content; animation:ticker 22s linear infinite; }
  .ticker-track:hover { animation-play-state:paused; }
  .ticker-wrap  { overflow:hidden; position:relative; }
  .ticker-wrap::before,
  .ticker-wrap::after {
    content:''; position:absolute; top:0; bottom:0; width:80px; z-index:2; pointer-events:none;
  }
  .ticker-wrap::before { left:0;  background:linear-gradient(to right,#fff,transparent); }
  .ticker-wrap::after  { right:0; background:linear-gradient(to left,#fff,transparent); }

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
      {/* Dashed route */}
      <path d="M100,130 C180,80 280,180 340,160" stroke={C.teal} strokeWidth="1.5" fill="none" strokeDasharray="6,5" opacity=".45" />
      {/* Dakar */}
      <circle cx="100" cy="130" r="10" fill={C.green} opacity=".9" />
      <circle cx="100" cy="130" r="20" fill="none" stroke={C.green} strokeWidth="1.5" opacity=".45" />
      <circle cx="100" cy="130" r="34" fill="none" stroke={C.green} strokeWidth=".8" opacity=".2" />
      <text x="118" y="126" fill={C.green} fontSize="14" fontWeight="800" fontFamily="system-ui,sans-serif">Dakar</text>
      {/* Senegal flag */}
      <image href={drapeauSn} x="118" y="130" width="22" height="15" preserveAspectRatio="xMidYMid slice" />
      <text x="143" y="142" fill="#94A3B8" fontSize="11" fontFamily="system-ui,sans-serif">Sénégal <tspan fontSize="9">SN</tspan></text>
      {/* Abidjan */}
      <circle cx="340" cy="160" r="10" fill="#F59E0B" opacity=".9" />
      <circle cx="340" cy="160" r="20" fill="none" stroke="#F59E0B" strokeWidth="1.5" opacity=".45" />
      <circle cx="340" cy="160" r="34" fill="none" stroke="#F59E0B" strokeWidth=".8" opacity=".2" />
      <text x="358" y="156" fill="#F59E0B" fontSize="14" fontWeight="800" fontFamily="system-ui,sans-serif">Abidjan</text>
      {/* CI flag */}
      <image href={drapeauCi} x="358" y="160" width="22" height="15" preserveAspectRatio="xMidYMid slice" />
      <text x="383" y="172" fill="#94A3B8" fontSize="11" fontFamily="system-ui,sans-serif">Côte d'Ivoire <tspan fontSize="9">CI</tspan></text>
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
    { l: 'Comment ?',   h: '#comment' },
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
            <img src={logoImg} alt="AccounTech AI" style={{ height: 38, width: 'auto', objectFit: 'contain' }} />
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
              style={{ marginLeft: 10, background: GRAD, color: '#fff', padding: '9px 20px', borderRadius: 9, textDecoration: 'none', fontSize: 14, fontWeight: 700, transition: 'opacity .2s, transform .2s', display: 'inline-flex', alignItems: 'center', gap: 6 }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '.88'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none'; }}
            >
              <span style={{ background: 'rgba(255,255,255,0.25)', borderRadius: 4, padding: '1px 6px', fontSize: 10, fontWeight: 900, letterSpacing: '.3px' }}>GRATUIT</span>
              Accès immédiat
            </a>
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
  const words = ['automatisée', 'intelligente', 'conforme SYSCOHADA'];
  const tw = useTypewriter(words);

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      paddingTop: 96, paddingBottom: 80, position: 'relative', overflow: 'hidden',
    }}>
      {/* ── Video background ── */}
      <video
        autoPlay muted loop playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        src="/video.mp4"
      />
      {/* Dark overlay — keep text readable without hiding the video entirely */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(135deg, rgba(6,30,28,0.78) 0%, rgba(11,42,40,0.70) 60%, rgba(27,77,74,0.60) 100%)' }} />
      {/* Subtle dot grid on top */}
      <div className="bg-dots" style={{ position: 'absolute', inset: 0, opacity: .18, pointerEvents: 'none', zIndex: 2 }} />
      {/* Soft glow accents */}
      <div style={{ position: 'absolute', top: '8%', left: '5%',  width: 560, height: 560, borderRadius: '50%', background: `radial-gradient(circle,${C.teal}18,transparent 65%)`, filter: 'blur(60px)', pointerEvents: 'none', zIndex: 2 }} />
      <div style={{ position: 'absolute', bottom: '5%', right: '8%', width: 420, height: 420, borderRadius: '50%', background: `radial-gradient(circle,${C.green}12,transparent 65%)`, filter: 'blur(60px)', pointerEvents: 'none', zIndex: 2 }} />

      <div className="ct" style={{ position: 'relative', zIndex: 10, width: '100%', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 48 }}>
        {/* ── Text column ── */}
        <div style={{ flex: '0 0 auto', width: 'min(460px, 100%)' }}>
          <A>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
              <span className="badge-white">
                <Brain size={13} /> La comptabilité nouvelle génération en Afrique
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 800, background: '#22C55E', color: '#fff', letterSpacing: '.2px', boxShadow: '0 4px 16px rgba(34,197,94,0.45)' }}>
                GRATUIT
              </span>
            </div>
          </A>
          <A delay={80}>
            <h1 style={{ fontSize: 'clamp(34px,5vw,60px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: '-1.2px', marginBottom: 22 }}>
              La comptabilité{' '}
              <span style={{ color: C.tealLt }}>
                {tw}<span style={{ animation: 'blink 1s step-end infinite' }}>|</span>
              </span>
              <br />pour les PME<br />sénégalaises
            </h1>
          </A>
          <A delay={160}>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,.68)', lineHeight: 1.8, marginBottom: 36, maxWidth: 480 }}>
              AccounTech AI connecte entreprises et cabinets via l'IA Mansour.
              Ventes, achats, paie, déclarations — 100% conforme SYSCOHADA et CGI 2025.
            </p>
          </A>
          <A delay={230}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 36 }}>
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
          </A>
          <A delay={300}>
            <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap' }}>
              {['100% SYSCOHADA', 'CGI 2025', 'Hébergé au Sénégal'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <Check size={13} color={C.tealLt} />
                  <span style={{ color: 'rgba(255,255,255,.72)', fontSize: 13, fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>
          </A>

          {/* ── Présence géographique ── */}
          <A delay={370}>
            <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <span style={{ color: 'rgba(255,255,255,.45)', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.4px' }}>Disponible au</span>
              <div style={{ display: 'flex', gap: 10 }}>
                {[
                  { flag: drapeauSn, pays: 'Sénégal',        color: C.green },
                  { flag: drapeauCi, pays: "Côte d'Ivoire",  color: '#F59E0B' },
                ].map(({ flag, pays, color }) => (
                  <div key={pays} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 30, padding: '5px 14px 5px 5px', backdropFilter: 'blur(8px)' }}>
                    <img src={flag} alt={pays} style={{ width: 26, height: 18, objectFit: 'cover', borderRadius: 4, display: 'block' }} />
                    <span style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>{pays}</span>
                  </div>
                ))}
              </div>
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
          <StatItem target={5}     suffix="+"  label="Cabinets partenaires"  Icon={Users}         color={C.teal}   />
          <StatItem target={10000} suffix="+"  label="Écritures traitées"    Icon={BarChart3}     color={C.green}  />
          <StatItem target={98}    suffix="%"  label="Précision de l'IA"     Icon={Brain}         color="#6366F1"  />
          <StatItem target={24}    suffix="/7" label="Disponibilité Mansour" Icon={MessageSquare} color="#F59E0B"  />
        </div>

        {/* Bandeau GRATUIT */}
        <A delay={200}>
          <div style={{ marginTop: 36, background: 'linear-gradient(135deg,#059669,#0FA89E)', borderRadius: 16, padding: '18px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Zap size={22} color="#fff" /></div>
              <div>
                <div style={{ color: '#fff', fontWeight: 800, fontSize: 18 }}>AccounTech AI est 100% gratuit</div>
                <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, marginTop: 2 }}>Aucune carte bancaire requise · Accès immédiat · Toutes fonctionnalités incluses</div>
              </div>
            </div>
            <a href="https://sccountechia.com/login" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: C.primary, textDecoration: 'none', padding: '11px 26px', borderRadius: 10, fontWeight: 800, fontSize: 15, boxShadow: '0 4px 16px rgba(0,0,0,0.15)', whiteSpace: 'nowrap' }}>
              Commencer gratuitement <ArrowRight size={16} />
            </a>
          </div>
        </A>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PROBLÈMES
// ═══════════════════════════════════════════════════════════════════════════════
function Problemes() {
  const items = [
    { Icon: FileX,    color: '#EF4444', bg: '#FEF2F2', bd: '#FECACA30', num: '95%',  title: 'des PME sur Excel',          desc: 'Erreurs de saisie, historique non fiable, aucune vision financière en temps réel.' },
    { Icon: Wallet,   color: '#D97706', bg: '#FFFBEB', bd: '#FDE68A30', num: '<15%', title: 'accèdent au crédit bancaire', desc: 'Dossiers comptables incomplets, impossibles à présenter aux banques.' },
    { Icon: FileText, color: '#6366F1', bg: '#EEF2FF', bd: '#C7D2FE30', num: '0',    title: 'outil SYSCOHADA simple',      desc: 'Logiciels complexes et coûteux, sans lien numérique entre entreprise et cabinet.' },
  ];

  return (
    <section id="problemes" className="s bg-diag" style={{ background: C.bgGray, position: 'relative', overflow: 'hidden' }}>
      {/* Large decorative background text */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: 'clamp(120px,18vw,240px)', fontWeight: 900, color: 'rgba(239,68,68,.04)', letterSpacing: '-8px', whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none', zIndex: 0 }}>PROBLÈME</div>
      <div className="ct" style={{ position: 'relative', zIndex: 1 }}>
        <A><SHead badge="Le constat" title="Pourquoi la comptabilité reste un frein" sub="Les PME sénégalaises font face à des obstacles structurels qui bloquent leur croissance." /></A>
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
    { num: '06', Icon: Globe,      color: C.teal,    title: 'Prix en FCFA, marché local',         desc: 'Conçu pour la réalité des PME sénégalaises. Support en français et wolof.' },
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
// AVIS — section sombre avec grands guillemets décoratifs
// ═══════════════════════════════════════════════════════════════════════════════
function Avis() {
  const avis = [
    { ini: 'MD', color: C.teal,   name: 'Marie Diallo',   role: 'Gérante · Tech Solutions SARL, Dakar',  txt: 'Mansour gère tout en quelques secondes. Enfin une solution qui connecte mon commerce à mon comptable sans paperasse.' },
    { ini: 'AS', color: '#818CF8',name: 'Amadou Sow',     role: 'Expert-comptable · Cabinet Sow, Dakar', txt: 'Je ne fais plus que de la révision et du conseil. Gain de temps énorme sur la saisie — zéro erreur de déversement.' },
    { ini: 'FN', color: '#A78BFA',name: 'Fatou Ndiaye',   role: 'Gérante · Distribution Plus, Thiès',    txt: 'Le module paie est bluffant. Bulletins, déclarations CSS et IPRES générés automatiquement pour mes 8 employés.' },
    { ini: 'IB', color: '#FCD34D',name: 'Ibrahima Baldé', role: 'DAF · Groupe Baldé & Fils, Ziguinchor', txt: 'La précision IA sur les écritures d\'achat est impressionnante. Zéro erreur depuis 3 mois.' },
  ];

  return (
    <section id="avis" className="s" style={{ background: C.dark2, position: 'relative', overflow: 'hidden' }}>
      {/* Huge decorative quote */}
      <div style={{ position: 'absolute', top: -40, left: 16, fontSize: 'clamp(180px,22vw,300px)', fontWeight: 900, color: 'rgba(255,255,255,.025)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none', fontFamily: 'Georgia,serif' }}>"</div>
      <div style={{ position: 'absolute', bottom: -40, right: 16, fontSize: 'clamp(180px,22vw,300px)', fontWeight: 900, color: 'rgba(255,255,255,.025)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none', fontFamily: 'Georgia,serif', transform: 'rotate(180deg)' }}>"</div>

      <div className="ct" style={{ position: 'relative', zIndex: 1 }}>
        <A><SHead badge="Avis clients" title="Ils nous font confiance" sub="Des entreprises et cabinets sénégalais partagent leur expérience." light /></A>
        <div className="g2">
          {avis.map(({ ini, color, name, role, txt }, i) => (
            <A key={name} delay={i * 90}>
              <div style={{ background: 'rgba(255,255,255,.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,.09)', borderRadius: 18, padding: 28, height: '100%', transition: 'background .25s, transform .25s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.09)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.05)'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ display: 'flex', gap: 3, marginBottom: 18 }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill={C.gold} color={C.gold} />)}
                </div>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,.7)', lineHeight: 1.82, fontStyle: 'italic', marginBottom: 24 }}>"{txt}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', flexShrink: 0, background: `${color}20`, border: `2px solid ${color}45`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, color }}>{ini}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: 15 }}>{name}</div>
                    <div style={{ color: 'rgba(255,255,255,.38)', fontSize: 13, marginTop: 2 }}>{role}</div>
                  </div>
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
// CABINETS PARTENAIRES — Sénégal & Côte d'Ivoire
// ═══════════════════════════════════════════════════════════════════════════════
function CabinetsPartenaires() {
  const pays = [
    { drapeau: drapeauSn, nom: 'Sénégal',       tag: 'Hub principal · Marché de lancement', color: C.green,    bgGrad: `linear-gradient(135deg,${C.green}16,${C.teal}08)`,      desc: 'Présents à Dakar, Thiès, Saint-Louis et au-delà. Nous accompagnons PME et cabinets comptables sénégalais depuis le lancement.', stats: [{ v: '5+', l: 'cabinets actifs' }, { v: '2025', l: 'depuis' }], points: ['SYSCOHADA — Plan comptable OHADA natif','CGI 2025 et retenues à la source intégrés','Module paie sénégalais (CSS, IPRES, IR, TRIMF)','Support en wolof et en français','Données hébergées à Dakar'] },
    { drapeau: drapeauCi, nom: "Côte d'Ivoire", tag: 'Abidjan · Expansion en cours',         color: '#F59E0B',  bgGrad: 'linear-gradient(135deg,#F59E0B16,#F59E0B06)',           desc: "AccounTech AI s'étend à la Côte d'Ivoire avec des adaptations au contexte fiscal ivoirien, porté par notre expert basé à Abidjan.", stats: [{ v: '2025', l: 'lancement prévu' }, { v: 'OHADA', l: 'compatible' }], points: ['SYSCOHADA — Plan comptable OHADA natif','Code général des impôts ivoirien','Module paie adapté DGT Côte d\'Ivoire','Support en français','Référent local : Marc (Abidjan)'] },
  ];

  return (
    <section id="partenaires" className="s" style={{ background: C.bg, position: 'relative', overflow: 'hidden' }}>
      <div className="ct" style={{ position: 'relative', zIndex: 1 }}>
        <A><SHead badge="Réseau partenaire" title="Présents au Sénégal & en Côte d'Ivoire" sub="AccounTech AI se déploie dans l'espace OHADA pour accompagner les PME d'Afrique de l'Ouest." /></A>

        {/* Map illustration */}
        <A style={{ marginBottom: 40 }}>
          <div style={{ background: C.bgGray, border: `1px solid ${C.border}`, borderRadius: 20, padding: '24px 36px' }}>
            <CoordMap />
          </div>
        </A>

        <div className="g2">
          {pays.map(({ drapeau, nom, tag, color, bgGrad, desc, stats, points }, i) => (
            <A key={nom} cls={i === 0 ? 'lp-inl' : 'lp-inr'} delay={i * 100}>
              <div className="card" style={{ overflow: 'hidden', height: '100%' }}>
                <div style={{ background: bgGrad, padding: '28px 28px 22px', borderBottom: `1px solid ${color}18` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
                    {/* Real flag image */}
                    <div style={{ width: 62, height: 42, borderRadius: 8, overflow: 'hidden', border: `2px solid ${color}30`, boxShadow: `0 4px 14px rgba(0,0,0,0.12)`, flexShrink: 0 }}>
                      <img src={drapeau} alt={nom} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    </div>
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

        {/* ── Sociétés partenaires carousel ── */}
        <A delay={120}>
          <div style={{ marginTop: 56 }}>
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '6px 16px', borderRadius: 20, fontSize: 13, fontWeight: 600, background: `${C.teal}12`, border: `1px solid ${C.teal}28`, color: C.teal, marginBottom: 14 }}>
                <Award size={13} color={C.teal} /> Sociétés partenaires
              </div>
              <p style={{ color: C.muted, fontSize: 15 }}>Ils font confiance à AccounTech AI pour leur gestion comptable.</p>
            </div>

            {/* Carousel infini */}
            <div className="ticker-wrap">
              <div className="ticker-track">
                {/* Liste × 2 pour boucle seamless */}
                {[adocLogo, akmLogo, ga2cLogo, dktuningLogo, adocLogo, akmLogo, ga2cLogo, dktuningLogo].map((logo, idx) => {
                  const infos = [
                    { nom: 'Adoc Consulting',     desc: 'Cabinet d\'expertise comptable', drp: drapeauSn, pays: 'Sénégal' },
                    { nom: 'AKM Audit & Conseil', desc: 'Cabinet d\'expertise comptable', drp: drapeauSn, pays: 'Sénégal' },
                    { nom: 'GA2C',                desc: 'Cabinet d\'expertise comptable', drp: drapeauSn, pays: 'Sénégal' },
                    { nom: 'DK Tuning',           desc: 'Société partenaire',             drp: drapeauSn, pays: 'Sénégal' },
                  ];
                  const { nom, desc, drp, pays } = infos[idx % 4];
                  return (
                    <div key={idx} style={{ flexShrink: 0, width: 200, margin: '0 14px', background: '#fff', border: `1px solid ${C.border}`, borderRadius: 18, padding: '24px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', cursor: 'default' }}>
                      <div style={{ width: 72, height: 72, borderRadius: 14, overflow: 'hidden', border: `1px solid ${C.border}`, background: C.bgGray, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={logo} alt={nom} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 6 }} />
                      </div>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 800, color: C.text, marginBottom: 3 }}>{nom}</div>
                        <div style={{ fontSize: 12, color: C.muted, marginBottom: 8 }}>{desc}</div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                          <img src={drp} alt={pays} style={{ width: 16, height: 11, objectFit: 'cover', borderRadius: 2 }} />
                          <span style={{ fontSize: 11, color: C.muted }}>{pays}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </A>
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
function Equipe() {
  const membres = [
    { photo: mansourImg, pos: 'center 5%',  drapeau: drapeauSn, nom: 'Mouhamadou Mansour Sow',  role: 'Expert Comptable Stagiaire', pays: 'Sénégal',        color: C.green,    specialite: 'Comptabilité & Fiscalité',  bio: 'Expert en normes SYSCOHADA et fiscalité sénégalaise. Référent métier pour le module comptabilité, les déclarations fiscales et la conformité CGI 2025.' },
    { photo: marcImg,    pos: 'center 8%',  drapeau: drapeauCi, nom: 'J. Marc Arthur KOUASSI',  role: 'Expert Comptable Stagiaire', pays: "Côte d'Ivoire",  color: '#F59E0B',  specialite: 'Fiscalité ivoirienne',      bio: "Spécialiste des pratiques comptables et fiscales ivoiriennes. Coordonne l'adaptation d'AccounTech AI pour le marché de Côte d'Ivoire." },
    { photo: khadimImg,  pos: 'center 3%',  drapeau: drapeauSn, nom: 'Khadim Touré',            role: 'Développeur IA',             pays: 'Sénégal',        color: C.teal,     specialite: 'Intelligence Artificielle', bio: "Architecte de l'IA Mansour. Développe les modèles d'extraction OCR, de reconnaissance comptable, l'assistant vocal et l'interface produit." },
  ];

  return (
    <section id="equipe" className="s" style={{ background: C.bg }}>
      <div className="ct">
        <A><SHead badge="L'équipe" title="Les experts derrière AccounTech AI" sub="Une équipe pluridisciplinaire alliant expertise comptable africaine et ingénierie IA." /></A>
        <div className="g3">
          {membres.map(({ photo, pos, drapeau, nom, role, pays, color, specialite, bio }, i) => (
            <A key={nom} delay={i * 120}>
              <div className="card" style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* Gradient header strip */}
                <div style={{ background: `linear-gradient(135deg,${color}22,${color}08)`, padding: '32px 28px 22px', borderBottom: `1px solid ${color}15`, position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: -18, right: -18, width: 80, height: 80, borderRadius: '50%', background: `${color}10`, pointerEvents: 'none' }} />

                  {/* Photo circle with flag overlay */}
                  <div style={{ position: 'relative', display: 'inline-block', marginBottom: 16, isolation: 'isolate' }}>
                    <div style={{ width: 130, height: 130, borderRadius: '50%', overflow: 'hidden', border: `3px solid ${color}`, boxShadow: `0 0 0 5px ${color}28, 0 8px 28px rgba(0,0,0,0.18)`, transform: 'translateZ(0)' }}>
                      <img
                        src={photo}
                        alt={nom}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: pos,
                          display: 'block',
                        }}
                      />
                    </div>
                    {/* Country flag badge */}
                    <div style={{ position: 'absolute', bottom: 6, right: 2, width: 32, height: 32, borderRadius: '50%', overflow: 'hidden', border: '2.5px solid #fff', boxShadow: '0 3px 10px rgba(0,0,0,0.28)', transform: 'translateZ(0)' }}>
                      <img src={drapeau} alt={pays} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    </div>
                  </div>

                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 10, fontWeight: 700, color, background: `${color}14`, border: `1px solid ${color}28`, padding: '2px 10px', borderRadius: 20, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '.3px' }}>
                    <Award size={10} color={color} /> {specialite}
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: C.text, marginBottom: 3, letterSpacing: '-.2px' }}>{nom}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color }}>{role}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                    <img src={drapeau} alt={pays} style={{ width: 18, height: 12, objectFit: 'cover', borderRadius: 2, display: 'block' }} />
                    <span style={{ fontSize: 13, color: C.muted }}>{pays}</span>
                  </div>
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
    { Icon: Mail,   label: 'Email',    val: 'khadimt660@gmail.com',     href: 'mailto:khadimt660@gmail.com' },
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
// TÉMOIGNAGES VIDÉO
// ═══════════════════════════════════════════════════════════════════════════════
function TemoignagesVideo() {
  return (
    <section id="temoignages-video" className="s" style={{ background: C.bgGray }}>
      <div className="ct">
        <A>
          <SHead
            badge="Témoignages"
            title="Ils utilisent AccounTech AI"
            sub="Découvrez comment AccounTech AI transforme la gestion comptable en Afrique de l'Ouest."
          />
        </A>

        <A>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            {/* Video card */}
            <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,0.18)', border: `1px solid ${C.border}`, background: '#000', position: 'relative', aspectRatio: '16/9' }}>
              <iframe
                style={{ width: '100%', height: '100%', display: 'block', border: 'none' }}
                src="https://www.youtube.com/embed/LfRel6w5TwA?rel=0&modestbranding=1"
                title="Témoignage AccounTech AI"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* CTA below video */}
            <div style={{ marginTop: 36, textAlign: 'center' }}>
              <p style={{ fontSize: 17, color: C.sub, marginBottom: 20 }}>
                Convaincu ? Rejoignez les cabinets et PME qui ont déjà automatisé leur comptabilité.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
                <a
                  href="https://sccountechia.com/login"
                  className="btn-primary"
                  style={{ textDecoration: 'none' }}
                >
                  Tester gratuitement <ArrowRight size={18} />
                </a>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 10, fontSize: 15, fontWeight: 600, color: C.teal, background: `${C.teal}12`, border: `1px solid ${C.teal}30`, cursor: 'pointer' }}
                >
                  Parler à l'équipe
                </button>
              </div>
            </div>
          </div>
        </A>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONVERSION POPUP — apparaît après 9 secondes
// ═══════════════════════════════════════════════════════════════════════════════
function ConversionPopup() {
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed) return;
    const t = setTimeout(() => setShow(true), 9000);
    return () => clearTimeout(t);
  }, [closed]);

  if (!show || closed) return null;

  return (
    <div style={{ position: 'fixed', bottom: 90, right: 24, zIndex: 9998, maxWidth: 360, width: 'calc(100vw - 48px)', background: C.hero, borderRadius: 20, boxShadow: '0 24px 64px rgba(0,0,0,0.5)', border: `1px solid ${C.teal}35`, padding: '24px 26px', animation: 'slideInPopup 0.4s ease' }}>
      <button
        onClick={() => { setShow(false); setClosed(true); }}
        style={{ position: 'absolute', top: 12, right: 14, background: 'none', border: 'none', color: 'rgba(255,255,255,0.45)', cursor: 'pointer', fontSize: 22, lineHeight: 1 }}
      >×</button>

      <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 18 }}>
        <div style={{ width: 46, height: 46, borderRadius: 13, background: GRAD, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Zap size={22} color="#fff" />
        </div>
        <div>
          <div style={{ color: '#fff', fontWeight: 800, fontSize: 16, marginBottom: 5 }}>Testez AccounTech AI</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.55 }}>
            Automatisez votre comptabilité dès aujourd'hui. Gratuit, sans carte bancaire requise.
          </div>
        </div>
      </div>

      <a
        href="https://sccountechia.com/login"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: GRAD, color: '#fff', textDecoration: 'none', padding: '13px 20px', borderRadius: 11, fontWeight: 700, fontSize: 15, transition: 'opacity .2s' }}
        onMouseEnter={e => e.currentTarget.style.opacity = '.88'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        Commencer gratuitement <ArrowRight size={16} />
      </a>
      <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, textAlign: 'center', marginTop: 12 }}>
        Rejoignez 5+ cabinets et PME au Sénégal & Côte d'Ivoire
      </p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// STICKY BAR — apparaît après scroll
// ═══════════════════════════════════════════════════════════════════════════════
function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9997, background: C.hero, borderTop: `2px solid ${C.teal}40`, padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, backdropFilter: 'blur(12px)' }}>
        <div style={{ color: '#fff', fontWeight: 600, fontSize: 15 }}>
          <span style={{ color: '#5EEAD4', fontWeight: 800 }}>AccounTech AI</span> — Comptabilité automatisée par l'IA, conforme SYSCOHADA & CGI 2025
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button
            onClick={() => setShowDemo(true)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '10px 20px', borderRadius: 9, fontSize: 14, fontWeight: 700, color: '#fff', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer' }}
          >
            Demander une démo
          </button>
          <a
            href="https://sccountechia.com/login"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: GRAD, color: '#fff', textDecoration: 'none', padding: '10px 22px', borderRadius: 9, fontWeight: 700, fontSize: 14 }}
          >
            Tester gratuitement <ArrowRight size={15} />
          </a>
        </div>
      </div>

      {showDemo && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', padding: '24px 16px' }}>
          <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 24px 80px rgba(0,0,0,0.3)', width: '100%', maxWidth: 640, position: 'relative', padding: 28 }}>
            <button onClick={() => setShowDemo(false)} style={{ position: 'absolute', top: 14, right: 16, background: 'none', border: 'none', color: '#3d6e70', fontSize: 26, cursor: 'pointer', lineHeight: 1 }}>&times;</button>
            <div style={{ overflowY: 'auto', maxHeight: '80vh' }}>
              <DemoRequest />
            </div>
          </div>
        </div>
      )}
    </>
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
              <img src={logoImg} alt="AccounTech AI" style={{ height: 40, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </div>
            <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.36)', lineHeight: 1.75, maxWidth: 220, marginBottom: 18 }}>La comptabilité automatisée pour les PME sénégalaises.</p>
            <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
              {['SYSCOHADA','CGI 2025','OHADA','Odoo'].map(b => (
                <span key={b} style={{ fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 5, background: `${C.teal}16`, border: `1px solid ${C.teal}28`, color: C.tealLt }}>{b}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: '.6px', textTransform: 'uppercase', marginBottom: 18 }}>Produit</h4>
            {[['IA Mansour','#ia-mansour'],['Pour qui ?','#pour-qui'],['Comment ça marche','#comment'],['Garanties','#garanties']].map(([l,h]) => (
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
              <a href="mailto:khadimt660@gmail.com" style={{ color: C.tealLt, textDecoration: 'none', display: 'block', marginBottom: 6 }}>khadimt660@gmail.com</a>
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
      <Problemes />
      <PourQui />
      <Wave from={C.bgGray} to={C.hero} />
      <IaMansour />
      <Wave from={C.hero} to={C.bgGray} />
      <HowItWorks />
      <Differenciateurs />
      <Wave from={C.bg} to={C.dark2} />
      <Avis />
      <Wave from={C.dark2} to={C.bg} />
      <CabinetsPartenaires />
      <Garanties />
      <Equipe />
      <TemoignagesVideo />
      <Contact />
      <CTAFinal />
      <Footer />
      <ConversionPopup />
      <StickyBar />
    </div>
  );
}
