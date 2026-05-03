const navItems = ['Home', 'Products', 'Resources', 'Contact'];

const trustStats = [
  { label: 'Sessions', value: '5–10 min' },
  { label: 'Age range', value: '6–8 first' },
  { label: 'Parent view', value: 'Clear recap' }
];

const orbitCards = [
  {
    title: 'Memory track',
    body: 'Short visual recall rounds with guided pacing.',
    tone: 'violet'
  },
  {
    title: 'Language track',
    body: 'Listening and vocabulary play with low reading load.',
    tone: 'blue'
  },
  {
    title: 'Logic track',
    body: 'Pattern sorting and rules-based challenges.',
    tone: 'dark'
  }
];

const featurePanels = [
  {
    eyebrow: 'Why it feels premium',
    title: 'One focused challenge at a time',
    body: 'The mock points toward a calm, editorial landing page: oversized typography, soft gradients, and a product preview that feels curated rather than gamey.'
  },
  {
    eyebrow: 'Why parents trust it',
    title: 'Specific practice, visible value',
    body: 'Plasticize should communicate skill-specific play, careful product framing, and parent-readable progress instead of noisy engagement mechanics.'
  }
];

const signals = [
  'Specific cognitive skills, not vague intelligence claims',
  'Web-first product with a calm, modern visual system',
  'Short repeatable sessions children can return to often',
  'Parent-facing summaries that stay legible at a glance'
];

export function App() {
  return (
    <main className="page-shell">
      <section className="landing-frame">
        <header className="topbar" id="home">
          <a className="brand" href="#home" aria-label="Plasticize home">
            <span className="brand__mark" aria-hidden="true">
              P
            </span>
            <span className="brand__copy">
              <strong>Plasticize</strong>
              <span>Cognitive play for children</span>
            </span>
          </a>

          <nav className="topbar__nav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>

          <a className="button button--ghost" href="#contact">
            Get in touch
          </a>
        </header>

        <section className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Premium landing concept for the Plasticize product</span>
            <h1>Play that builds thinking and still looks beautiful.</h1>
            <p className="hero-copy__lead">
              Plasticize turns memory, language, and logic practice into a calm web-first experience
              for children, with a parent view that stays clear.
            </p>
            <p className="hero-copy__body">
              This landing direction follows the supplied mock more closely: oversized headline,
              atmospheric gradients, layered product cards, and a cleaner premium composition.
            </p>

            <div className="hero-actions">
              <a className="button button--primary" href="mailto:hello@plasticize.me">
                Request early access
              </a>
              <a className="button button--secondary" href="#products">
                View product direction
              </a>
            </div>

            <dl className="stat-grid" aria-label="Plasticize highlights">
              {trustStats.map((item) => (
                <div className="stat-chip" key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="hero-visual" aria-label="Plasticize visual concept">
            <div className="showcase-card">
              <div className="showcase-card__topline">
                <span>Product concept</span>
                <span>Landing preview</span>
              </div>

              <div className="orbit-stage" aria-hidden="true">
                <div className="orbit-stage__halo orbit-stage__halo--outer" />
                <div className="orbit-stage__halo orbit-stage__halo--inner" />
                <div className="orbit-stage__core">
                  <span className="orbit-stage__label">Plasticize</span>
                  <strong>Memory · Language · Logic</strong>
                </div>
                <article className="floating-card floating-card--top">
                  <span className="mini-eyebrow">Today&apos;s focus</span>
                  <strong>Pattern memory</strong>
                  <p>8-minute guided practice</p>
                </article>
                <article className="floating-card floating-card--right">
                  <span className="mini-eyebrow">Progress</span>
                  <strong>82%</strong>
                  <p>calm feedback loop</p>
                </article>
                <article className="floating-card floating-card--bottom">
                  <span className="mini-eyebrow">Parent summary</span>
                  <strong>Clear after play</strong>
                  <p>recall speed · pattern accuracy</p>
                </article>
              </div>

              <div className="track-grid">
                {orbitCards.map((card) => (
                  <article className={`track-card track-card--${card.tone}`} key={card.title}>
                    <h2>{card.title}</h2>
                    <p>{card.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </section>

      <section className="panel-grid" id="products">
        {featurePanels.map((panel) => (
          <article className="feature-panel" key={panel.title}>
            <span className="eyebrow">{panel.eyebrow}</span>
            <h2>{panel.title}</h2>
            <p>{panel.body}</p>
          </article>
        ))}
      </section>

      <section className="signal-panel" id="resources">
        <div className="signal-panel__copy">
          <span className="eyebrow">Product principles</span>
          <h2>The landing should feel like a designed product brand, not a generic app template.</h2>
          <p>
            The strongest cues in the mock are composition and mood: deep indigo background,
            luminous cards, generous spacing, and a hero section that sells confidence before it
            explains details.
          </p>
        </div>

        <ul className="signal-list">
          {signals.map((signal) => (
            <li key={signal}>{signal}</li>
          ))}
        </ul>
      </section>

      <section className="contact-panel" id="contact">
        <div>
          <span className="eyebrow">Contact</span>
          <h2>Want the next pass even tighter to the mock?</h2>
          <p>Send another reference or annotated notes and I can keep iterating from this base.</p>
        </div>
        <a className="button button--primary" href="mailto:hello@plasticize.me">
          hello@plasticize.me
        </a>
      </section>
    </main>
  );
}
