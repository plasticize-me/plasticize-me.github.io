const abilities = [
  {
    title: 'Memory',
    body: 'Recall, sequencing, and pattern play.'
  },
  {
    title: 'Language',
    body: 'Recognition, vocabulary, and verbal confidence.'
  },
  {
    title: 'Logic',
    body: 'Rules, sorting, and structured thinking.'
  }
];

const principles = [
  'Ages 6–8 first',
  'Built for parents, not addictive loops',
  'Measured claims, visible practice'
];

const highlights = [
  {
    title: 'What it is',
    body: 'Short cognitive games for children.'
  },
  {
    title: 'Why it matters',
    body: 'Useful play with clearer learning intent.'
  },
  {
    title: 'What parents get',
    body: 'Simple progress they can actually read.'
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
          <h1>Play that builds thinking skills.</h1>
          <p className="hero__subline">
            Short games for memory, language, and logic — made for children and explained for parents.
          </p>
          <p className="hero__description">
            Plasticize turns screen time into focused practice: calm sessions, low friction, and progress
            parents can follow.
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
            <span>Ages 6–8</span>
            <span>Short sessions</span>
            <span>Parent clarity</span>
          </div>
        </div>

        <aside className="hero__panel" aria-label="Plasticize overview">
          <div className="hero-visual">
            <span className="hero-visual__badge">Web-first</span>
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
            <span className="hero__note-label">Why it feels different</span>
            <p>No hype. Just well-designed play that helps children practice and helps parents understand.</p>
          </div>
          <div className="hero__stats">
            <div className="stat-card">
              <span className="stat-card__label">Focus</span>
              <strong className="stat-card__value">3 skill tracks</strong>
            </div>
            <div className="stat-card">
              <span className="stat-card__label">Sessions</span>
              <strong className="stat-card__value">Built for quick repeats</strong>
            </div>
            <div className="stat-card">
              <span className="stat-card__label">Parent view</span>
              <strong className="stat-card__value">Clearer progress</strong>
            </div>
          </div>
        </aside>
      </section>

      <section className="section-block" id="approach">
        <div className="section-block__header">
          <span className="eyebrow">Approach</span>
          <h2>Informative for parents. Light for children.</h2>
          <p>Each part of the product answers a simple question: what is being practiced, how long does it take, and what should a parent notice?</p>
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
            <span className="eyebrow">Skill tracks</span>
            <h2>Three simple areas to grow.</h2>
            <p>Clear enough for parents to understand. Playful enough for children to repeat.</p>
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
            <h2>What stays true.</h2>
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
          <p>Want to follow the product or collaborate? Reach out.</p>
        </div>
        <a className="button button--primary" href="mailto:hello@plasticize.me">
          hello@plasticize.me
        </a>
      </section>

      <footer className="footer">
        <p>Plasticize · cognitive play for children</p>
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
