import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoins, faShield, faBolt, faArrowRight, faCopy, faCheck,
  faArrowUpRightFromSquare, faDownload, faBook, faCartShopping,
  faWallet, faMobileScreen, faGlobe, faChartLine,
  faChevronDown, faChevronUp, faUsers, faChartBar, faFileLines,
  faCircleCheck, faLayerGroup,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import logoAccountech from '../assets/logo.png';

// ─── Design tokens (same palette as Landing) ─────────────────────────────────
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
  indigo: '#6366F1',
  purple: '#8B5CF6',
};
const GRAD  = `linear-gradient(135deg,${C.green},${C.teal})`;
const GRAD2 = `linear-gradient(135deg,#0B2A28,${C.primary})`;
const GRAD_GOLD = `linear-gradient(135deg,${C.gold},#F97316)`;

const CONTRACT = '0xf6e28810b37019e93dc1a2db75eaf0b6cb211d97';
const POLYGONSCAN = `https://polygonscan.com/token/${CONTRACT}`;

// ─── Global styles ────────────────────────────────────────────────────────────
const G = `
  *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
  html { scroll-behavior:smooth; }
  body { background:#fff; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; -webkit-font-smoothing:antialiased; color:${C.text}; }

  @keyframes float   { 0%,100%{transform:translateY(0);}  50%{transform:translateY(-12px);} }
  @keyframes pulse   { 0%,100%{transform:scale(1);opacity:1;} 50%{transform:scale(.95);opacity:.75;} }
  @keyframes glow    { 0%,100%{box-shadow:0 0 8px ${C.teal}60;} 50%{box-shadow:0 0 24px ${C.teal}90;} }
  @keyframes shimmer { 0%{background-position:-200% center;} 100%{background-position:200% center;} }
  @keyframes spin    { to{transform:rotate(360deg);} }
  @keyframes fadeUp  { from{opacity:0;transform:translateY(24px);} to{opacity:1;transform:translateY(0);} }

  .tok-nav    { position:fixed; top:0; left:0; right:0; z-index:100; background:rgba(6,30,28,.94); backdrop-filter:blur(14px); border-bottom:1px solid rgba(255,255,255,.08); }
  .tok-sec    { padding:96px 24px 80px; }
  .tok-sec-sm { padding:72px 24px 64px; }
  .ct         { max-width:1060px; margin:0 auto; }
  .ct-sm      { max-width:760px; margin:0 auto; }
  .card       { background:#fff; border:1px solid ${C.border}; border-radius:20px; padding:28px; box-shadow:0 4px 24px rgba(0,0,0,.06); }
  .g2         { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:24px; }
  .g3         { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:20px; }
  .shimmer-txt { background:linear-gradient(90deg,${C.teal},${C.green},${C.gold},${C.teal}); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; animation:shimmer 3s linear infinite; }
  .anim-float { animation:float 4s ease-in-out infinite; }
  .anim-glow  { animation:glow 2.5s ease-in-out infinite; }
`;

// ─── Animation on scroll ─────────────────────────────────────────────────────
function useInView() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: .12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}
function A({ children, delay = 0, style = {} }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(22px)', transition: `opacity .6s ${delay}ms ease, transform .6s ${delay}ms ease`, ...style }}>
      {children}
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="tok-nav">
      <div style={{ maxWidth: 1060, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src={logoAccountech} alt="AccounTech AI" style={{ height: 34 }} />
          <span style={{ color: '#fff', fontWeight: 800, fontSize: 16, letterSpacing: '-.3px' }}>AccounTech AI</span>
        </a>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <a href="/#pricing" style={{ color: 'rgba(255,255,255,.75)', fontSize: 14, fontWeight: 600, textDecoration: 'none', padding: '6px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,.12)' }}>Tarifs</a>
          <a href="https://sccountechia.com/login" style={{ background: GRAD, color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', padding: '8px 18px', borderRadius: 10 }}>Accéder à l'ERP</a>
        </div>
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(CONTRACT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section style={{ background: GRAD2, position: 'relative', overflow: 'hidden', paddingTop: 64 }}>
      {/* Background orbs */}
      <div style={{ position: 'absolute', top: -80, right: -80, width: 480, height: 480, borderRadius: '50%', background: `radial-gradient(circle,${C.teal}22 0%,transparent 70%)`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -60, left: -60, width: 360, height: 360, borderRadius: '50%', background: `radial-gradient(circle,${C.gold}18 0%,transparent 70%)`, pointerEvents: 'none' }} />

      <div className="ct" style={{ padding: '80px 24px 88px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 28 }}>

          {/* Token logo + badge */}
          <div className="anim-float" style={{ position: 'relative' }}>
            <div className="anim-glow" style={{ width: 120, height: 120, borderRadius: '50%', overflow: 'hidden', border: `3px solid ${C.teal}60`, boxShadow: `0 0 40px ${C.teal}40`, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={logoAccountech} alt="ADOC Token" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
            </div>
            <div style={{ position: 'absolute', bottom: -6, right: -6, background: GRAD_GOLD, borderRadius: 10, padding: '3px 8px', fontSize: 11, fontWeight: 800, color: '#fff', letterSpacing: '.3px' }}>POLYGON</div>
          </div>

          {/* Title */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.14)', borderRadius: 20, padding: '5px 16px', fontSize: 13, color: C.tealLt, fontWeight: 700, marginBottom: 20, letterSpacing: '.3px' }}>
              <FontAwesomeIcon icon={faCoins} style={{ fontSize: 13 }} /> Token utilitaire · Réseau Polygon
            </div>
            <h1 style={{ fontSize: 'clamp(2.4rem,5vw,3.8rem)', fontWeight: 900, color: '#fff', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: 20 }}>
              Le Token <span className="shimmer-txt">ADOC</span>
            </h1>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.2rem)', color: 'rgba(255,255,255,.72)', maxWidth: 620, lineHeight: 1.75, margin: '0 auto' }}>
              Le carburant natif de l'ERP AccounTech AI. Chaque interaction avec nos agents IA — facturation, saisie, déclaration — est alimentée par le token ADOC. Simple, transparent, sans intermédiaire.
            </p>
          </div>

          {/* Contract address */}
          <div style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 16, padding: '16px 24px', maxWidth: 600, width: '100%' }}>
            <div style={{ fontSize: 12, color: C.tealLt, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.8px', marginBottom: 10 }}>
              🛡️ Adresse officielle du contrat (Polygon)
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
              <code style={{ fontSize: 'clamp(11px,2vw,13px)', color: C.tealLt, fontFamily: 'monospace', wordBreak: 'break-all', flex: 1, minWidth: 220 }}>{CONTRACT}</code>
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={copy} style={{ display: 'flex', alignItems: 'center', gap: 6, background: copied ? `${C.green}30` : 'rgba(255,255,255,.1)', border: `1px solid ${copied ? C.green : 'rgba(255,255,255,.2)'}`, borderRadius: 8, padding: '7px 14px', color: copied ? C.tealLt : '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all .2s' }}>
                  {copied ? <><FontAwesomeIcon icon={faCheck} /> Copié !</> : <><FontAwesomeIcon icon={faCopy} /> Copier</>}
                </button>
                <a href={POLYGONSCAN} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)', borderRadius: 8, padding: '7px 14px', color: '#fff', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Polygonscan
                </a>
              </div>
            </div>
            <div style={{ marginTop: 12, fontSize: 13, color: 'rgba(255,255,255,.55)', lineHeight: 1.6, textAlign: 'center' }}>
              L'unique adresse officielle du contrat ADOC sur Polygon est{' '}
              <code style={{ color: C.tealLt, fontSize: 12 }}>{CONTRACT}</code>{' '}
              — vérifiez toujours sur{' '}
              <a href={POLYGONSCAN} target="_blank" rel="noreferrer" style={{ color: C.tealLt, fontWeight: 700, textDecoration: 'none' }}>
                Polygonscan <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ fontSize: 11 }} />
              </a>
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#comment-acheter" style={{ display: 'flex', alignItems: 'center', gap: 8, background: GRAD, color: '#fff', padding: '14px 28px', borderRadius: 12, textDecoration: 'none', fontSize: 15, fontWeight: 700, boxShadow: `0 8px 24px ${C.teal}40` }}>
              <FontAwesomeIcon icon={faCartShopping} /> Obtenir des ADOC
            </a>
            <a href="#whitepaper" style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)', color: '#fff', padding: '14px 28px', borderRadius: 12, textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>
              <FontAwesomeIcon icon={faBook} /> Lire le Whitepaper
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



// ─── STATS RAPIDES ────────────────────────────────────────────────────────────
const STATS = [
  { icon: faLayerGroup,  val: 'Polygon',  label: 'Réseau blockchain',   color: C.indigo },
  { icon: faShield,      val: 'ERC-20',   label: 'Standard du contrat', color: C.teal   },
  { icon: faBolt,        val: '~0.001$',  label: 'Frais de transaction', color: C.green  },
  { icon: faGlobe,       val: 'ADOC',     label: 'Symbole du token',    color: C.gold   },
];

function StatsBar() {
  return (
    <section style={{ background: C.bgGray, borderBottom: `1px solid ${C.border}` }}>
      <div className="ct" style={{ padding: '32px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 16 }}>
          {STATS.map(({ icon, val, label, color }) => (
            <A key={label}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#fff', border: `1px solid ${C.border}`, borderRadius: 14, padding: '16px 20px' }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: `${color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', color, flexShrink: 0 }}><FontAwesomeIcon icon={icon} style={{ fontSize: 18 }} /></div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 900, color: C.text, letterSpacing: '-.3px' }}>{val}</div>
                  <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>{label}</div>
                </div>
              </div>
            </A>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── UTILITÉ DU TOKEN ─────────────────────────────────────────────────────────
const USAGES = [
  { icon: faBolt,       title: 'Carburant des agents IA',     desc: 'Chaque interaction avec IA Mansour — saisie d\'écritures, génération de factures, analyse financière — consomme une fraction de token ADOC depuis votre solde.', color: C.teal   },
  { icon: faFileLines,  title: 'Accès aux modules avancés',   desc: 'Les déclarations fiscales CGI 2025, le module paie (CSS, IPRES, IR, TRIMF) et le pointage des employés sont débloqués via votre solde ADOC.',               color: C.indigo },
  { icon: faUsers,      title: 'Multi-utilisateurs & cabinets', desc: 'L\'accès multi-utilisateurs illimité, le tableau de bord cabinet et le lien entreprise ↔ cabinet nécessitent un solde ADOC actif.',                         color: C.green  },
  { icon: faChartLine,  title: 'Abonnement Premium',           desc: 'En mode Premium, votre paiement mensuel en FCFA est automatiquement converti en tokens ADOC qui rechargent votre compte chaque mois.',                         color: C.gold   },
];

function Utility() {
  return (
    <section id="utilite" className="tok-sec" style={{ background: C.bg }}>
      <div className="ct">
        <A>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: `${C.teal}12`, border: `1px solid ${C.teal}30`, borderRadius: 20, padding: '5px 16px', fontSize: 12, color: C.teal, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 16 }}>
              <FontAwesomeIcon icon={faCoins} style={{ fontSize: 12 }} /> Utilité du Token
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 900, color: C.text, letterSpacing: '-1px', marginBottom: 16 }}>À quoi sert le token ADOC ?</h2>
            <p style={{ fontSize: 16, color: C.sub, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              L'ADOC est l'unique moyen de faire fonctionner les agents IA de l'ERP. Plus d'abonnement rigide : vous payez exactement ce que vous utilisez.
            </p>
          </div>
        </A>
        <div className="g2">
          {USAGES.map(({ icon, title, desc, color }, i) => (
            <A key={title} delay={i * 90}>
              <div style={{ background: '#fff', border: `1px solid ${C.border}`, borderRadius: 18, padding: '26px 24px', height: '100%', transition: 'box-shadow .25s, transform .25s' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 12px 40px ${color}20`; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ width: 50, height: 50, borderRadius: 14, background: `${color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', color, marginBottom: 16 }}><FontAwesomeIcon icon={icon} style={{ fontSize: 20 }} /></div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: C.text, marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, color: C.sub, lineHeight: 1.7 }}>{desc}</p>
              </div>
            </A>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MODÈLE ÉCONOMIQUE ────────────────────────────────────────────────────────
function Tokenomics() {
  const steps = [
    { n: '01', icon: faBolt,         title: 'Quota gratuit',         desc: 'Chaque nouveau compte reçoit 30 opérations automatisées offertes par mois. Aucune carte, aucun token requis pour démarrer.', color: C.teal   },
    { n: '02', icon: faCartShopping, title: 'Rechargez en ADOC',     desc: 'Une fois le quota gratuit épuisé, l\'agent IA vous invite à recharger. Achetez un pack de tokens ADOC en quelques clics depuis l\'ERP.', color: C.indigo },
    { n: '03', icon: faCoins,        title: 'Consommation à l\'acte', desc: 'Chaque écriture validée, facture générée ou déclaration produite consomme une fraction de token. Aucun frais si aucune activité.', color: C.green  },
    { n: '04', icon: faWallet,       title: 'Abonnement Premium',     desc: 'En Premium, payez en FCFA ou en euros. La plateforme convertit automatiquement en ADOC et recharge votre compte chaque mois.', color: C.gold   },
  ];

  return (
    <section id="tokenomics" className="tok-sec" style={{ background: C.bgGray }}>
      <div className="ct">
        <A>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: `${C.indigo}12`, border: `1px solid ${C.indigo}30`, borderRadius: 20, padding: '5px 16px', fontSize: 12, color: C.indigo, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 16 }}>
              <FontAwesomeIcon icon={faChartBar} style={{ fontSize: 12 }} /> Modèle économique
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 900, color: C.text, letterSpacing: '-1px', marginBottom: 16 }}>Comment fonctionne le modèle ADOC ?</h2>
            <p style={{ fontSize: 16, color: C.sub, maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
              Un cycle simple en 4 étapes. De la découverte gratuite à l'usage intensif professionnel.
            </p>
          </div>
        </A>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20, position: 'relative' }}>
          {steps.map(({ n, icon, title, desc, color }, i) => (
            <A key={n} delay={i * 100}>
              <div style={{ background: '#fff', border: `1px solid ${C.border}`, borderRadius: 18, padding: '26px 22px', height: '100%', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 16, right: 16, fontSize: 40, fontWeight: 900, color: `${color}0e`, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{n}</div>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: `${color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', color, marginBottom: 16 }}><FontAwesomeIcon icon={icon} style={{ fontSize: 18 }} /></div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: C.text, marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 13.5, color: C.sub, lineHeight: 1.7 }}>{desc}</p>
              </div>
            </A>
          ))}
        </div>

        {/* Avantage investisseur */}
        <A delay={160}>
          <div style={{ marginTop: 36, background: GRAD2, borderRadius: 20, padding: '32px 36px', display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <FontAwesomeIcon icon={faChartLine} style={{ fontSize: 24, color: C.tealLt }} />
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 8 }}>Effet réseau pour les détenteurs de tokens</div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,.72)', lineHeight: 1.75, maxWidth: 720 }}>
                Plus AccounTech AI acquiert d'utilisateurs grâce à la version gratuite, plus la demande réelle en tokens ADOC augmente sur le marché. Le token est utilitaire pur : son utilité est directement corrélée à l'adoption de l'ERP en Afrique de l'Ouest et au-delà.
              </p>
            </div>
          </div>
        </A>
      </div>
    </section>
  );
}

// ─── WHITEPAPER ───────────────────────────────────────────────────────────────
function Whitepaper() {
  return (
    <section id="whitepaper" className="tok-sec-sm" style={{ background: C.bg }}>
      <div className="ct-sm">
        <A>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: `${C.green}12`, border: `1px solid ${C.green}30`, borderRadius: 20, padding: '5px 16px', fontSize: 12, color: C.green, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 16 }}>
              <FontAwesomeIcon icon={faBook} style={{ fontSize: 12 }} /> Whitepaper
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 900, color: C.text, letterSpacing: '-1px', marginBottom: 16 }}>Livre Blanc ADOC</h2>
            <p style={{ fontSize: 16, color: C.sub, maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
              Tout le modèle économique, la gouvernance du token et les cas d'usage détaillés dans un document de référence.
            </p>
          </div>
        </A>
        <A delay={80}>
          <div style={{ background: `linear-gradient(135deg,${C.green}10,${C.teal}06)`, border: `1px solid ${C.green}30`, borderRadius: 22, padding: '36px', display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ width: 80, height: 100, background: GRAD, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 8px 24px ${C.teal}30` }}>
              <FontAwesomeIcon icon={faFileAlt} style={{ fontSize: 36, color: '#fff' }} />
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.teal, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 8 }}>Disponible en PDF</div>
              <h3 style={{ fontSize: 22, fontWeight: 900, color: C.text, marginBottom: 8, letterSpacing: '-.3px' }}>ADOC Token — Whitepaper v1.0</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
                {[
                  'Présentation du modèle Freemium Web3',
                  'Mécanisme de conversion FCFA → ADOC',
                  'Consommation par interaction IA',
                  'Gouvernance & sécurité du smart contract',
                  'Roadmap 2025-2027',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: C.sub }}>
                    <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: 14, color: C.green, flexShrink: 0 }} /> {item}
                  </li>
                ))}
              </ul>
              <a href="/adoc-whitepaper.pdf" download
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: GRAD, color: '#fff', padding: '12px 24px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700, boxShadow: `0 6px 20px ${C.teal}30` }}>
                <FontAwesomeIcon icon={faDownload} /> Télécharger le Whitepaper
              </a>
              <span style={{ display: 'block', fontSize: 12, color: C.muted, marginTop: 10 }}>PDF · Gratuit · Mis à jour juin 2025</span>
            </div>
          </div>
        </A>
      </div>
    </section>
  );
}

// ─── COMMENT ACHETER ──────────────────────────────────────────────────────────
const BUY_STEPS = [
  {
    icon: faBolt, step: '1', title: 'Via l\'ERP (méthode recommandée)',
    color: C.teal,
    items: [
      { label: 'Connectez-vous', desc: 'Accédez à votre espace sur accountech-ai.com' },
      { label: 'Tableau de bord → Tokens', desc: 'Cliquez sur "Recharger mon compte ADOC"' },
      { label: 'Choisissez votre pack', desc: '100, 500 ou 1 000 tokens ADOC selon votre usage' },
      { label: 'Payez en FCFA', desc: 'Carte bancaire, Wave, Orange Money, Free Money acceptés' },
    ],
    badge: 'Le plus simple · Recommandé',
    badgeColor: C.teal,
  },
  {
    icon: faGlobe, step: '2', title: 'Sur un échangeur décentralisé (DEX)',
    color: C.indigo,
    items: [
      { label: 'Installez MetaMask', desc: 'Portefeuille crypto compatible Polygon (metamask.io)' },
      { label: 'Ajoutez le réseau Polygon', desc: 'Chainlink ID : 137 — RPC officiel Polygon' },
      { label: 'Importez le token ADOC', desc: `Collez l'adresse : ${CONTRACT}` },
      { label: 'Échangez sur QuickSwap/Uniswap', desc: 'MATIC ou USDC → ADOC directement sur Polygon' },
    ],
    badge: 'Pour les utilisateurs Web3',
    badgeColor: C.indigo,
  },
];

function HowToBuy() {
  return (
    <section id="comment-acheter" className="tok-sec" style={{ background: C.bgGray }}>
      <div className="ct">
        <A>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: `${C.gold}12`, border: `1px solid ${C.gold}30`, borderRadius: 20, padding: '5px 16px', fontSize: 12, color: C.gold, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 16 }}>
              <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: 12 }} /> Guide d'achat
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 900, color: C.text, letterSpacing: '-1px', marginBottom: 16 }}>Comment obtenir des tokens ADOC ?</h2>
            <p style={{ fontSize: 16, color: C.sub, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Deux méthodes selon votre profil. L'achat via l'ERP ne demande aucune connaissance en crypto.
            </p>
          </div>
        </A>
        <div className="g2">
          {BUY_STEPS.map(({ icon, step, title, color, items, badge, badgeColor }, i) => (
            <A key={step} delay={i * 120}>
              <div style={{ background: '#fff', border: `1px solid ${C.border}`, borderRadius: 20, overflow: 'hidden', height: '100%', boxShadow: '0 4px 20px rgba(0,0,0,.06)' }}>
                <div style={{ background: `linear-gradient(135deg,${color}14,${color}06)`, padding: '26px 28px 22px', borderBottom: `1px solid ${color}20` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <div style={{ width: 46, height: 46, borderRadius: 12, background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', color }}><FontAwesomeIcon icon={icon} style={{ fontSize: 20 }} /></div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: badgeColor, background: `${badgeColor}14`, padding: '3px 10px', borderRadius: 10, display: 'inline-block', marginBottom: 4 }}>{badge}</div>
                      <h3 style={{ fontSize: 17, fontWeight: 900, color: C.text, letterSpacing: '-.3px' }}>{title}</h3>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '22px 28px 28px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {items.map(({ label, desc }, j) => (
                      <div key={label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                        <div style={{ width: 26, height: 26, borderRadius: 8, background: `${color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', color, fontSize: 12, fontWeight: 800, flexShrink: 0, marginTop: 1 }}>{j + 1}</div>
                        <div>
                          <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 3 }}>{label}</div>
                          <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.55 }}>{desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </A>
          ))}
        </div>

        {/* Note Mobile Money */}
        <A delay={140}>
          <div style={{ marginTop: 28, background: `linear-gradient(135deg,${C.green}10,${C.teal}06)`, border: `1px solid ${C.green}30`, borderRadius: 16, padding: '20px 28px', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <FontAwesomeIcon icon={faMobileScreen} style={{ fontSize: 22, color: C.green, flexShrink: 0 }} />
            <div>
              <div style={{ fontWeight: 800, color: C.text, fontSize: 15, marginBottom: 4 }}>Mobile Money disponible 🇸🇳 🇨🇮 🇲🇦</div>
              <div style={{ fontSize: 14, color: C.sub, lineHeight: 1.6 }}>Wave, Orange Money et Free Money sont acceptés directement depuis l'interface de l'ERP pour l'achat de tokens ADOC. Aucune connaissance en crypto requise.</div>
            </div>
          </div>
        </A>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQS = [
  { q: 'Est-ce que je dois connaître la crypto pour utiliser l\'ERP ?', a: 'Absolument pas. L\'achat de tokens ADOC via l\'ERP fonctionne comme n\'importe quel paiement en ligne (carte bancaire, Mobile Money). La blockchain est invisible pour l\'utilisateur final.' },
  { q: 'Que se passe-t-il si mon solde ADOC tombe à zéro ?', a: 'L\'agent IA vous informe poliment et suspend uniquement les opérations automatisées. Vos données, historiques et factures restent accessibles. Une simple recharge suffit pour reprendre.' },
  { q: 'Les tokens ADOC ont-ils une valeur spéculative ?', a: 'L\'ADOC est un token utilitaire conçu pour alimenter l\'ERP. Sa valeur repose sur la demande réelle des entreprises qui utilisent AccounTech AI. Nous ne promouvons aucun achat spéculatif.' },
  { q: 'Comment vérifier l\'authenticité du contrat ADOC ?', a: `Recherchez l'adresse ${CONTRACT} sur Polygonscan.com. Vérifiez que le nom du token est bien "ADOC" et que l'émetteur est AccounTech AI. Ne faites confiance qu'à cette adresse officielle.` },
  { q: 'En Premium, comment se passe la conversion FCFA → ADOC ?', a: 'Vous payez un montant fixe en FCFA ou en euros chaque mois. Notre plateforme convertit automatiquement ce montant en tokens ADOC au taux du marché et recharge votre compte. Tout est transparent dans votre tableau de bord.' },
  { q: 'Puis-je retransférer mes tokens ADOC à un autre compte ?', a: 'Oui. Les tokens ADOC étant un standard ERC-20 sur Polygon, vous pouvez les transférer librement entre portefeuilles depuis votre interface crypto (MetaMask, etc.).' },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="tok-sec-sm" style={{ background: C.bg }}>
      <div className="ct-sm">
        <A>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: `${C.purple}12`, border: `1px solid ${C.purple}30`, borderRadius: 20, padding: '5px 16px', fontSize: 12, color: C.purple, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 16 }}>
              Questions fréquentes
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 900, color: C.text, letterSpacing: '-1px' }}>Vos questions sur l'ADOC</h2>
          </div>
        </A>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {FAQS.map(({ q, a }, i) => (
            <A key={i} delay={i * 60}>
              <div style={{ background: '#fff', border: `1px solid ${open === i ? C.teal : C.border}`, borderRadius: 14, overflow: 'hidden', transition: 'border-color .2s', boxShadow: open === i ? `0 4px 20px ${C.teal}14` : 'none' }}>
                <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: C.text, lineHeight: 1.4 }}>{q}</span>
                  {open === i ? <FontAwesomeIcon icon={faChevronUp} style={{ fontSize: 14, color: C.teal, flexShrink: 0 }} /> : <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: 14, color: C.muted, flexShrink: 0 }} />}
                </button>
                {open === i && (
                  <div style={{ padding: '0 22px 18px', fontSize: 14, color: C.sub, lineHeight: 1.75 }}>{a}</div>
                )}
              </div>
            </A>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA FINAL ────────────────────────────────────────────────────────────────
function CtaFinal() {
  return (
    <section className="tok-sec-sm" style={{ background: C.bgGray }}>
      <div className="ct-sm">
        <A>
          <div style={{ background: GRAD2, borderRadius: 24, padding: 'clamp(36px,5vw,60px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -40, right: -40, width: 260, height: 260, borderRadius: '50%', background: `radial-gradient(circle,${C.teal}20,transparent 70%)`, pointerEvents: 'none' }} />
<h2 style={{ fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: 900, color: '#fff', letterSpacing: '-1px', marginBottom: 14 }}>
              Prêt à piloter votre entreprise à la voix ?
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.72)', marginBottom: 32, lineHeight: 1.7, maxWidth: 480, margin: '0 auto 32px' }}>
              Démarrez gratuitement avec 30 opérations offertes, rechargez en ADOC quand vous en avez besoin.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://sccountechia.com/login" style={{ display: 'flex', alignItems: 'center', gap: 8, background: GRAD, color: '#fff', padding: '14px 30px', borderRadius: 12, textDecoration: 'none', fontSize: 15, fontWeight: 700, boxShadow: `0 8px 28px ${C.teal}40` }}>
                Commencer gratuitement <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <a href="#comment-acheter" style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.22)', color: '#fff', padding: '14px 28px', borderRadius: 12, textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>
                <FontAwesomeIcon icon={faCartShopping} /> Acheter des ADOC
              </a>
            </div>
            <p style={{ marginTop: 20, fontSize: 13, color: 'rgba(255,255,255,.45)' }}>Aucune carte bancaire requise · Mobile Money accepté · Résiliable à tout moment</p>
          </div>
        </A>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: C.hero, padding: '32px 24px', borderTop: '1px solid rgba(255,255,255,.08)' }}>
      <div className="ct" style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={logoAccountech} alt="AccounTech AI" style={{ height: 28 }} />
          <span style={{ color: 'rgba(255,255,255,.6)', fontSize: 13 }}>© 2025 AccounTech AI · Token ADOC sur Polygon</span>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <a href="/" style={{ color: 'rgba(255,255,255,.5)', fontSize: 13, textDecoration: 'none' }}>Accueil</a>
          <a href="/#pricing" style={{ color: 'rgba(255,255,255,.5)', fontSize: 13, textDecoration: 'none' }}>Tarifs</a>
          <a href={POLYGONSCAN} target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,.5)', fontSize: 13, textDecoration: 'none' }}>Polygonscan ↗</a>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE PRINCIPALE ──────────────────────────────────────────────────────────
export default function TokenPage() {
  return (
    <>
      <style>{G}</style>
      <Navbar />
      <Hero />
      <StatsBar />
      <Utility />
      <Tokenomics />
      <Whitepaper />
      <HowToBuy />
      <FAQ />
      <CtaFinal />
      <Footer />
    </>
  );
}
