// shared.js — ZD Čistá, společné komponenty
// Načíst jako: <script type="text/babel" src="shared.js"></script>
// POZOR: vždy načítat PŘED stránkovým skriptem

const ZD_COLORS = {
  green: '#2D5016',
  greenLight: '#3a6620',
  wheat: '#D4A574',
  rust: '#A0522D',
  cream: '#FAF7F2',
  creamDark: '#F0EBE1',
  dark: '#1a2a0a',
  text: '#2A2A2A',
  muted: '#6B6B6B',
};

const ZD_NAV = [
  { label: 'O nás',          href: 'o-nas.html' },
  { label: 'Naše činnost',   href: 'cinnost.html' },
  { label: 'Pro členy',      href: 'pro-cleny.html' },
  { label: 'Projekty',       href: 'projekty.html' },
  { label: 'Pro veřejnost',  href: 'pro-verejnost.html' },
  { label: 'Kontakt',        href: 'kontakt.html' },
];

// ── Icons ──────────────────────────────────────────────────────────────────
const IcoMenu = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>;
const IcoX   = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const IcoArrow = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
const IcoChevron = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>;
const IcoPhone  = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.82 9.72 19.79 19.79 0 01.77 1.14 2 2 0 012.76 0h3a2 2 0 012 1.72c.18.96.45 1.9.7 2.81a2 2 0 01-.45 2.11L6.93 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.9.31 1.84.52 2.81.7A2 2 0 0122 14.92z"/></svg>;
const IcoMail   = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>;
const IcoPin    = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>;
const IcoDoc    = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>;
const IcoDown   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;
const IcoLeaf   = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 22c0 0 4-10 12-12C20 8 22 2 22 2s-2 8-8 12C8 18 2 22 2 22z"/><path d="M2 22L12 12"/></svg>;
const IcoTractor = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="17" r="3"/><circle cx="17" cy="18" r="2"/><path d="M10 17h4.5l2.5-4-3-4H8V17M4 17H2V9h6"/><path d="M14 9V7h3l2 4"/></svg>;
const IcoWheat  = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22V6M12 6C12 6 8 4 8 8s4 4 4 4M12 6c0 0 4-2 4 2s-4 4-4 4M12 14c0 0-4-2-4 2s4 4 4 4M12 14c0 0 4-2 4 2s-4 4-4 4"/></svg>;
const IcoPeople = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>;
const IcoCal    = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
const IcoInfo   = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>;
const IcoEU     = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 010 20M2 12h20"/></svg>;
const IcoBuild  = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="9" width="18" height="13" rx="1"/><path d="M1 9l11-7 11 7"/><path d="M9 22V13h6v9"/></svg>;
const IcoClock  = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const IcoMap    = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>;
const IcoCheck  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>;

// ── Logo ───────────────────────────────────────────────────────────────────
const ZDLogo = ({ dark = false }) => (
  <img
    src={dark ? 'uploads/logo1.svg' : 'uploads/logo3.svg'}
    alt="ZD Čistá – Zemědělské družstvo"
    style={{ height: 44, width: 'auto', display: 'block' }}
  />
);

// ── Header ─────────────────────────────────────────────────────────────────
// variant: 'transparent' (homepage hero), 'light' (subpages)
const ZDHeader = ({ activePage = '', variant = 'light' }) => {
  const [scrolled, setScrolled] = React.useState(variant === 'light');
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (variant === 'transparent') {
      const fn = () => setScrolled(window.scrollY > 40);
      window.addEventListener('scroll', fn);
      return () => window.removeEventListener('scroll', fn);
    }
  }, [variant]);

  const bg = scrolled ? 'rgba(250,247,242,0.97)' : 'transparent';
  const textColor = scrolled ? ZD_COLORS.text : 'rgba(255,255,255,0.92)';
  const shadow = scrolled ? '0 1px 20px rgba(0,0,0,0.08)' : 'none';
  const border = scrolled ? '1px solid rgba(212,165,116,0.2)' : 'none';

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: bg, backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: shadow, borderBottom: border, transition: 'all 0.3s',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="index.html" style={{ textDecoration: 'none' }}>
          <ZDLogo dark={scrolled} />
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 2, alignItems: 'center' }} className="zd-desktop-nav">
          {ZD_NAV.map(link => {
            const isActive = activePage === link.href;
            return (
              <a key={link.href} href={link.href} style={{
                padding: '8px 13px', textDecoration: 'none', fontSize: 14, fontWeight: 500,
                color: isActive ? ZD_COLORS.green : textColor,
                borderRadius: 6, transition: 'all 0.2s',
                background: isActive && scrolled ? 'rgba(45,80,22,0.08)' : 'transparent',
                borderBottom: isActive ? `2px solid ${ZD_COLORS.wheat}` : '2px solid transparent',
              }}
              onMouseEnter={e => e.currentTarget.style.background = scrolled ? 'rgba(45,80,22,0.08)' : 'rgba(255,255,255,0.12)'}
              onMouseLeave={e => e.currentTarget.style.background = isActive && scrolled ? 'rgba(45,80,22,0.08)' : 'transparent'}
              >{link.label}</a>
            );
          })}
          <a href="pro-cleny.html" style={{
            marginLeft: 8, padding: '9px 18px', background: ZD_COLORS.green,
            color: 'white', textDecoration: 'none', fontSize: 14, fontWeight: 600,
            borderRadius: 6, transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = ZD_COLORS.greenLight}
          onMouseLeave={e => e.currentTarget.style.background = ZD_COLORS.green}
          >Pro členy</a>
        </nav>

        {/* Mobile burger */}
        <button className="zd-burger" onClick={() => setMenuOpen(!menuOpen)} style={{
          background: 'none', border: 'none', cursor: 'pointer', padding: 4,
          color: textColor, display: 'none',
        }}>
          {menuOpen ? <IcoX /> : <IcoMenu />}
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: 'white', borderTop: '1px solid #f0ebe1', padding: '12px 24px 20px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}>
          {ZD_NAV.map(link => (
            <a key={link.href} href={link.href} style={{
              display: 'block', padding: '11px 0', textDecoration: 'none',
              color: activePage === link.href ? ZD_COLORS.green : ZD_COLORS.text,
              fontSize: 15, fontWeight: 500, borderBottom: '1px solid #f0ebe1',
            }}>{link.label}</a>
          ))}
          <a href="pro-cleny.html" style={{
            display: 'block', marginTop: 14, padding: '11px 20px',
            background: ZD_COLORS.green, color: 'white', textDecoration: 'none',
            fontSize: 14, fontWeight: 600, borderRadius: 6, textAlign: 'center',
          }}>Pro členy →</a>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .zd-desktop-nav { display: none !important; }
          .zd-burger { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

// ── Page Hero (subpages) ───────────────────────────────────────────────────
const ZDPageHero = ({ title, subtitle, breadcrumb = 'Domů', bg = ZD_COLORS.green }) => (
  <section style={{
    background: bg, paddingTop: 120, paddingBottom: 64, paddingLeft: 24, paddingRight: 24,
  }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
        <a href="index.html" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>{breadcrumb}</a>
        <IcoChevron />
        <span style={{ color: ZD_COLORS.wheat }}>{title}</span>
      </div>
      <h1 style={{ fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 800, color: 'white', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: subtitle ? 16 : 0 }}>
        {title}
      </h1>
      {subtitle && <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', maxWidth: 600, lineHeight: 1.65, marginTop: 12 }}>{subtitle}</p>}
    </div>
  </section>
);

// ── Eyebrow ────────────────────────────────────────────────────────────────
const ZDEyebrow = ({ children, light = false }) => (
  <div style={{
    display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '2px',
    textTransform: 'uppercase', color: light ? ZD_COLORS.wheat : ZD_COLORS.green,
    borderBottom: `2px solid ${ZD_COLORS.wheat}`, paddingBottom: 4, marginBottom: 14,
  }}>{children}</div>
);

// ── Section heading ────────────────────────────────────────────────────────
const ZDSectionHead = ({ eyebrow, title, light = false, center = false }) => (
  <div style={{ marginBottom: 48, textAlign: center ? 'center' : 'left' }}>
    <ZDEyebrow light={light}>{eyebrow}</ZDEyebrow>
    <h2 style={{
      fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, lineHeight: 1.15,
      letterSpacing: '-1px', color: light ? 'white' : ZD_COLORS.text, display: 'block',
    }}>{title}</h2>
  </div>
);

// ── Image placeholder ──────────────────────────────────────────────────────
const ZDImg = ({ label, style = {} }) => (
  <div style={{
    background: '#d4cfc5', display: 'flex', alignItems: 'center', justifyContent: 'center',
    position: 'relative', overflow: 'hidden', ...style,
  }}>
    <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg,transparent,transparent 20px,rgba(255,255,255,0.15) 20px,rgba(255,255,255,0.15) 22px)' }} />
    <span style={{ position: 'relative', fontFamily: 'Courier New,monospace', fontSize: 11, color: 'rgba(42,42,42,0.55)', textAlign: 'center', padding: '4px 10px', background: 'rgba(255,255,255,0.5)', borderRadius: 4, lineHeight: 1.5, maxWidth: 200 }}>{label}</span>
  </div>
);

// ── CTA Section ────────────────────────────────────────────────────────────
const ZDCtaSection = ({ title = 'Máte otázky?', subtitle = 'Kontaktujte nás telefonicky nebo e-mailem. Rádi vám poradíme.', btnLabel = 'Kontaktujte nás', btnHref = 'kontakt.html' }) => (
  <section style={{ background: ZD_COLORS.green, padding: '64px 24px' }}>
    <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ fontSize: 32, fontWeight: 800, color: 'white', letterSpacing: '-0.5px', marginBottom: 14 }}>{title}</h2>
      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, marginBottom: 28 }}>{subtitle}</p>
      <a href={btnHref} style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '13px 28px', background: 'white', color: ZD_COLORS.green,
        textDecoration: 'none', borderRadius: 8, fontSize: 15, fontWeight: 700,
        transition: 'all 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = ZD_COLORS.wheat; e.currentTarget.style.color = 'white'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = ZD_COLORS.green; }}
      >{btnLabel} <IcoArrow /></a>
    </div>
  </section>
);

// ── Footer ─────────────────────────────────────────────────────────────────
const ZDFooter = () => (
  <footer style={{ background: ZD_COLORS.dark, color: 'white', padding: '64px 24px 28px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>
        <div>
          <a href="index.html" style={{ display: 'block', marginBottom: 16 }}>
            <img src="uploads/logo3.svg" alt="ZD Čistá" style={{ height: 40, width: 'auto' }} />
          </a>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
            Zemědělské družstvo hospodaří ve Středočeském kraji od roku 1950.
          </p>
        </div>
        <div>
          <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: ZD_COLORS.wheat, marginBottom: 16 }}>Kontakt</h4>
          {[
            { icon: <IcoPin />, t: 'Čistá 173, 294 23 Čistá u Mladé Boleslavi' },
            { icon: <IcoPhone />, t: '601 576 687' },
            { icon: <IcoMail />, t: 'info@zdcista.cz' },
          ].map((r, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 10, alignItems: 'flex-start' }}>
              <span style={{ color: ZD_COLORS.wheat, flexShrink: 0, marginTop: 1 }}>{r.icon}</span>{r.t}
            </div>
          ))}
        </div>
        <div>
          <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: ZD_COLORS.wheat, marginBottom: 16 }}>Identifikace</h4>
          {[['IČO','00105368'],['DIČ','CZ00105368'],['Právní forma','Zemědělské družstvo'],['Kraj','Středočeský']].map(([k,v]) => (
            <div key={k} style={{ display: 'flex', gap: 10, fontSize: 13, marginBottom: 8 }}>
              <span style={{ color: 'rgba(255,255,255,0.35)', width: 80 }}>{k}</span>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{v}</span>
            </div>
          ))}
        </div>
        <div>
          <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: ZD_COLORS.wheat, marginBottom: 16 }}>Navigace</h4>
          {[['Domů','index.html'], ...ZD_NAV.map(n => [n.label, n.href])].map(([l,h]) => (
            <a key={h} href={h} style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', marginBottom: 8, transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = ZD_COLORS.wheat}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
            >{l}</a>
          ))}
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>© 2026 Zemědělské družstvo Čistá u Mladé Boleslavi. Všechna práva vyhrazena.</span>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>Ochrana osobních údajů &nbsp;·&nbsp; Cookies</span>
      </div>
    </div>
  </footer>
);

// ── Export ─────────────────────────────────────────────────────────────────
Object.assign(window, {
  ZD_COLORS, ZD_NAV,
  IcoMenu, IcoX, IcoArrow, IcoChevron, IcoPhone, IcoMail, IcoPin,
  IcoDoc, IcoDown, IcoLeaf, IcoTractor, IcoWheat, IcoPeople,
  IcoCal, IcoInfo, IcoEU, IcoBuild, IcoClock, IcoMap, IcoCheck,
  ZDLogo, ZDHeader, ZDPageHero, ZDEyebrow, ZDSectionHead, ZDImg, ZDCtaSection, ZDFooter,
});
