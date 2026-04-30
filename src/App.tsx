const pillars = [
  {
    title: 'Memory',
    body: 'Recall, sequencing, and pattern recognition through short repeatable play.'
  },
  {
    title: 'Language',
    body: 'Vocabulary, recognition, and verbal confidence without heavy reading load.'
  },
  {
    title: 'Logic',
    body: 'Rules, sorting, and structured thinking presented as playful challenges.'
  }
];

const benefits = [
  {
    title: 'Specific skill focus',
    body: 'Each activity is tied to a clear cognitive ability instead of vague “brain training.”'
  },
  {
    title: 'Short, calm sessions',
    body: 'Designed for real family routines, with quick starts and low-friction repeat play.'
  },
  {
    title: 'Clear parent visibility',
    body: 'Parents can see what was practiced, how a child engaged, and where progress is emerging.'
  }
];

const standards = [
  'Ages 6–8 first',
  'Language-light wherever possible',
  'Careful claims and premium presentation',
  'Parent-facing progress, not addictive loops'
];

const parentOutcomes = [
  'A clearer view of strengths and improvement areas',
  'Useful screen time that feels intentional',
  'A calmer experience children can return to often'
];

export function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="topbar__brand" href="#top" aria-label="Plasticize home">
          <span className="topbar__mark" aria-hidden="true">
            P
          </span>
          <span>Plasticize</span>
        </a>
        <nav className="topbar__nav" aria-label="Primary">
          <a href="#approach">Approach</a>
          <a href="#skills">Skill tracks</a>
          <a href="#parents">For parents</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="topbar__cta" href="#contact">
          Contact us
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero__copy">
          <span className="eyebrow">Premium cognitive games for children</span>
          <h1>Play that builds thinking.</h1>
          <p className="hero__subline">
            Plasticize creates web-first games for ages 6–8 built around memory, language, and logic.
          </p>
          <p className="hero__description">
            Children get short, language-light play. Parents get a clearer view of what is being
            practiced and how progress is forming.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contact">
              Contact us
            </a>
            <a className="button button--secondary" href="#approach">
              Explore the product
            </a>
          </div>
          <div className="hero__trustband" aria-label="Plasticize brand principles">
            <span>Deep indigo system</span>
            <span>Scientific and careful</span>
            <span>Child-friendly, parent-clear</span>
          </div>
        </div>

        <aside className="hero__panel" aria-label="Plasticize product preview">
          <div className="product-shot">
            <div className="product-shot__header">
              <div>
                <span className="product-shot__eyebrow">Product preview</span>
                <strong>Practice session overview</strong>
              </div>
              <span className="product-shot__badge">Web-first</span>
            </div>

            <div className="product-shot__hero-card">
              <div>
                <span className="product-shot__label">Today&apos;s focus</span>
                <h2>Memory patterns</h2>
                <p>8-minute session with guided difficulty and calm feedback.</p>
              </div>
              <div className="score-pill">
                <span>Progress</span>
                <strong>82%</strong>
              </div>
            </div>

            <div className="product-shot__grid">
              <article className="mini-card mini-card--indigo">
                <span className="mini-card__label">Skill tracks</span>
                <strong>Memory · Language · Logic</strong>
                <p>Three visible areas parents can understand quickly.</p>
              </article>
              <article className="mini-card">
                <span className="mini-card__label">Parent summary</span>
                <strong>What was practiced</strong>
                <p>Recall speed, pattern accuracy, and repeat engagement.</p>
              </article>
              <article className="mini-card">
                <span className="mini-card__label">Experience rule</span>
                <strong>Useful, not noisy</strong>
                <p>Short sessions, careful claims, and low reading friction.</p>
              </article>
            </div>
          </div>

          <div className="hero__note">
            <span className="hero__note-label">Positioning</span>
            <p>
              Plasticize is not promising vague intelligence gains. It is designed to help children
              practice specific skills through focused digital play.
            </p>
          </div>
        </aside>
      </section>

      <section className="section-block" id="approach">
        <div className="section-block__header section-block__header--split">
          <div>
            <span className="eyebrow">Approach</span>
            <h2>Professional product framing, not a generic game site.</h2>
          </div>
          <p>
            The product direction is simple: specific skills, premium presentation, and information
            parents can trust at a glance.
          </p>
        </div>

        <div className="feature-grid">
          {benefits.map((item) => (
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
            <h2>Three abilities. Clear purpose.</h2>
            <p>
              The first Plasticize experience is organized around the skills parents already care
              about and children can practice through repeat play.
            </p>
          </div>

          <div className="standards-list">
            {pillars.map((pillar) => (
              <article className="standard-row" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="company-panel">
          <div className="company-panel__content company-panel__content--visual">
            <span className="eyebrow">Experience design</span>
            <h2>What the interface should communicate.</h2>
            <div className="interface-stack" aria-label="Interface design preview">
              <div className="interface-card interface-card--hero">
                <span className="interface-card__label">Session card</span>
                <strong>One clear task at a time</strong>
                <p>Children see a calm prompt, simple goal, and clean feedback loop.</p>
              </div>
              <div className="interface-card-row">
                <div className="interface-card">
                  <span className="interface-card__label">Difficulty</span>
                  <strong>Guided progression</strong>
                </div>
                <div className="interface-card">
                  <span className="interface-card__label">Reading load</span>
                  <strong>Kept intentionally light</strong>
                </div>
              </div>
              <div className="interface-card-row">
                <div className="interface-card">
                  <span className="interface-card__label">Feedback</span>
                  <strong>Encouraging, not noisy</strong>
                </div>
                <div className="interface-card">
                  <span className="interface-card__label">Parent signal</span>
                  <strong>Visible after play</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="company-panel__content">
            <span className="eyebrow">Product rules</span>
            <h2>What stays true.</h2>
            <ul className="checkpoint-list">
              {standards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-block section-block--split section-block--parents" id="parents">
        <div className="section-block__header">
          <span className="eyebrow">For parents</span>
          <h2>What parents should understand in seconds.</h2>
          <p>
            The value is not just that children play. The value is that parents can understand why
            the play matters.
          </p>
        </div>

        <div className="parent-panel">
          <div className="parent-panel__summary">
            <span className="parent-panel__eyebrow">Expected outcome</span>
            <ul className="parent-summary-list">
              {parentOutcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="parent-panel__metrics" aria-label="Parent-facing product metrics preview">
            <article className="metric-card">
              <span className="metric-card__label">Session length</span>
              <strong>5–10 min</strong>
            </article>
            <article className="metric-card">
              <span className="metric-card__label">Age wedge</span>
              <strong>6–8 first</strong>
            </article>
            <article className="metric-card">
              <span className="metric-card__label">Progress view</span>
              <strong>Simple and readable</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div>
          <span className="eyebrow">Contact</span>
          <h2>Interested in the early product?</h2>
          <p>Follow the direction, discuss the product, or reach out about collaboration.</p>
        </div>
        <a className="button button--primary" href="mailto:hello@plasticize.me">
          hello@plasticize.me
        </a>
      </section>

      <footer className="footer">
        <p>Plasticize · premium cognitive play for children</p>
        <ul className="footer__links">
          <li>
            <a href="#top">Top</a>
          </li>
          <li>
            <a href="#skills">Skill tracks</a>
          </li>
          <li>
            <a href="#parents">For parents</a>
          </li>
        </ul>
      </footer>
    </main>
  );
}
