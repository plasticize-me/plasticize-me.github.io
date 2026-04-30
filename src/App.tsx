const abilities = [
  {
    title: 'Memory',
    body: 'Short games that train recall, sequencing, and pattern retention without feeling like drills.'
  },
  {
    title: 'Language',
    body: 'Language-light exercises that build recognition, vocabulary foundations, and playful verbal thinking.'
  },
  {
    title: 'Logic',
    body: 'Visual rules, sorting, and sequencing that help children practice structured thinking through play.'
  }
];

const principles = [
  'Built for ages 6–8 first',
  'Designed for parents, not ad-driven engagement loops',
  'Careful claims: practice and progress, not magic intelligence promises'
];

const highlights = [
  {
    title: 'Short sessions',
    body: 'Easy to start. Easy to repeat. Made for real family routines.'
  },
  {
    title: 'Clear progress',
    body: 'Parents should understand what was practiced and where a child is improving.'
  },
  {
    title: 'Low language load',
    body: 'Many interactions should work with minimal reading so play comes first.'
  }
];

export function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="topbar__brand" href="#top" aria-label="Plasticize home">
          Plasticize
        </a>
        <nav className="topbar__nav" aria-label="Primary">
          <a href="#approach">Approach</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="topbar__cta" href="#contact">
          Contact us
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero__copy">
          <span className="eyebrow">Children&apos;s cognitive games</span>
          <h1>Play that helps thinking grow.</h1>
          <p className="hero__subline">
            Premium, science-respecting games for children to practice memory, language, and logic.
          </p>
          <p className="hero__description">
            Plasticize is building a calmer kind of children&apos;s digital play: short sessions, clear
            progress, careful claims, and design that respects both children and parents.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contact">
              Contact us
            </a>
            <a className="button button--secondary" href="#approach">
              See the approach
            </a>
          </div>
          <div className="hero__trustband" aria-label="Product principles">
            <span>Ages 6–8 first</span>
            <span>Web-first</span>
            <span>Parent-aware</span>
          </div>
        </div>

        <aside className="hero__panel" aria-label="Plasticize overview">
          <div className="hero-visual">
            <span className="hero-visual__badge">Future play platform</span>
            <svg viewBox="0 0 520 420" role="img" aria-label="Abstract Plasticize visual">
              <defs>
                <linearGradient id="panel" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#8db5ff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#7f73ff" stopOpacity="0.36" />
                </linearGradient>
                <radialGradient id="glow" cx="50%" cy="45%" r="60%">
                  <stop offset="0%" stopColor="#d6e4ff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#d6e4ff" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect x="36" y="54" width="448" height="300" rx="28" fill="rgba(8, 16, 31, 0.9)" stroke="rgba(173, 196, 255, 0.18)" />
              <circle cx="370" cy="132" r="126" fill="url(#glow)" />
              <rect x="72" y="94" width="134" height="94" rx="18" fill="url(#panel)" />
              <rect x="224" y="94" width="220" height="42" rx="14" fill="rgba(129, 162, 255, 0.22)" />
              <rect x="224" y="150" width="166" height="28" rx="14" fill="rgba(129, 162, 255, 0.16)" />
              <rect x="72" y="214" width="110" height="110" rx="22" fill="rgba(129, 162, 255, 0.16)" />
              <rect x="198" y="214" width="110" height="110" rx="22" fill="rgba(133, 114, 255, 0.18)" />
              <rect x="324" y="214" width="120" height="110" rx="22" fill="rgba(103, 197, 255, 0.16)" />
              <path d="M115 141c24-30 51-31 70 0" fill="none" stroke="#ffffff" strokeOpacity="0.82" strokeWidth="8" strokeLinecap="round" />
              <circle cx="116" cy="142" r="10" fill="#f8fbff" />
              <circle cx="186" cy="142" r="10" fill="#f8fbff" />
              <path d="M98 274h58" stroke="#d5e4ff" strokeOpacity="0.72" strokeWidth="12" strokeLinecap="round" />
              <path d="M224 274h58" stroke="#e3dcff" strokeOpacity="0.72" strokeWidth="12" strokeLinecap="round" />
              <path d="M352 274h58" stroke="#d7f3ff" strokeOpacity="0.72" strokeWidth="12" strokeLinecap="round" />
            </svg>
          </div>
          <div className="hero__note">
            <span className="hero__note-label">Positioning</span>
            <p>
              Not “make your child smarter.” Better: thoughtful games that help children practice core
              thinking skills and help parents see progress more clearly.
            </p>
          </div>
          <div className="hero__stats">
            <div className="stat-card">
              <span className="stat-card__label">Focus</span>
              <strong className="stat-card__value">Memory · Language · Logic</strong>
            </div>
            <div className="stat-card">
              <span className="stat-card__label">Audience</span>
              <strong className="stat-card__value">Parents first</strong>
            </div>
            <div className="stat-card">
              <span className="stat-card__label">State</span>
              <strong className="stat-card__value">Landing now · play later</strong>
            </div>
          </div>
        </aside>
      </section>

      <section className="section-block" id="approach">
        <div className="section-block__header">
          <span className="eyebrow">Approach</span>
          <h2>Designed with restraint.</h2>
          <p>
            Plasticize is for parents who want children&apos;s screen time to feel thoughtful, not noisy.
            The product direction is simple: good games, clear learning intent, and careful language.
          </p>
        </div>
        <div className="feature-grid">
          {highlights.map((item) => (
            <article className="feature-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block section-block--split" id="skills">
        <div>
          <div className="section-block__header">
            <span className="eyebrow">First skill tracks</span>
            <h2>Three clear starting pillars.</h2>
            <p>
              The first Plasticize games are being shaped around three abilities that parents can
              understand and children can practice through short, repeatable play.
            </p>
          </div>
          <div className="standards-list">
            {abilities.map((ability) => (
              <article className="standard-row" key={ability.title}>
                <h3>{ability.title}</h3>
                <p>{ability.body}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="company-panel">
          <figure className="section-visual section-visual--tall" aria-hidden="true">
            <svg viewBox="0 0 520 520" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="tileA" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#6fb8ff" stopOpacity="0.84" />
                  <stop offset="100%" stopColor="#4a7cff" stopOpacity="0.18" />
                </linearGradient>
                <linearGradient id="tileB" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#b0a2ff" stopOpacity="0.72" />
                  <stop offset="100%" stopColor="#7c63ff" stopOpacity="0.16" />
                </linearGradient>
              </defs>
              <rect width="520" height="520" fill="#07101c" />
              <rect x="48" y="48" width="160" height="160" rx="28" fill="url(#tileA)" />
              <rect x="232" y="48" width="240" height="160" rx="28" fill="rgba(150, 175, 255, 0.12)" />
              <rect x="48" y="232" width="240" height="240" rx="28" fill="rgba(150, 175, 255, 0.1)" />
              <rect x="312" y="232" width="160" height="240" rx="28" fill="url(#tileB)" />
              <circle cx="128" cy="128" r="28" fill="#f5f8ff" fillOpacity="0.92" />
              <path d="M272 112h148" stroke="#e5edff" strokeOpacity="0.78" strokeWidth="18" strokeLinecap="round" />
              <path d="M272 152h96" stroke="#e5edff" strokeOpacity="0.52" strokeWidth="14" strokeLinecap="round" />
              <path d="M96 330c0-28 22-50 50-50s50 22 50 50-22 50-50 50-50-22-50-50Z" fill="none" stroke="#dce8ff" strokeWidth="16" strokeOpacity="0.66" />
              <path d="M336 334l44-46 52 62" fill="none" stroke="#f1edff" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </figure>
          <div className="company-panel__content">
            <span className="eyebrow">Product rules</span>
            <h2>What Plasticize should keep true.</h2>
            <ul className="checkpoint-list">
              {principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div>
          <span className="eyebrow">Contact</span>
          <h2>Interested early?</h2>
          <p>
            Plasticize is in its first shaping phase. If you care about thoughtful cognitive play for
            children, get in touch.
          </p>
        </div>
        <a className="button button--primary" href="mailto:hello@plasticize.me">
          hello@plasticize.me
        </a>
      </section>

      <footer className="footer">
        <p>Plasticize · children&apos;s cognitive games · landing v1</p>
        <ul className="footer__links">
          <li>
            <a href="#top">Top</a>
          </li>
          <li>
            <a href="#approach">Approach</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </footer>
    </main>
  );
}
