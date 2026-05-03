const navItems = ['Overview', 'Programs', 'Progress', 'Contact'];

const stats = [
  { label: 'Weekly streak', value: '12 days' },
  { label: 'Skill focus', value: 'Memory · Logic' },
  { label: 'Session length', value: '8 min avg' }
];

const lessonCards = [
  {
    eyebrow: 'Today',
    title: 'Pattern Memory',
    body: 'A calm visual-sequencing game with guided difficulty and simple spoken prompts.'
  },
  {
    eyebrow: 'Parents see',
    title: 'Clear progress summaries',
    body: 'Accuracy, repetition, and confidence are surfaced without noisy game mechanics.'
  }
];

const pillars = [
  {
    title: 'Memory',
    body: 'Fast-repeat exercises for recall, sequencing, and visual retention.'
  },
  {
    title: 'Language',
    body: 'Word recognition and listening confidence with intentionally light reading load.'
  },
  {
    title: 'Logic',
    body: 'Sorting, matching, and rules-based play presented through approachable puzzles.'
  }
];

const parentSignals = [
  'Specific skills instead of vague brain-training claims',
  'Short sessions children can revisit without friction',
  'Premium presentation with calm, readable progress signals'
];

const timeline = [
  { step: '01', title: 'Warm-up', detail: 'Simple recognition to build confidence quickly.' },
  { step: '02', title: 'Focus challenge', detail: 'One clear task with adaptive difficulty.' },
  { step: '03', title: 'Parent recap', detail: 'Useful takeaways after the session ends.' }
];

export function App() {
  return (
    <main className="page-shell">
      <section className="hero-frame" id="top">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="Plasticize home">
            <span className="brand__mark" aria-hidden="true">
              P
            </span>
            <span className="brand__text">
              <strong>Plasticize</strong>
              <span>Cognitive play, carefully designed</span>
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
            Contact us
          </a>
        </header>

        <div className="hero-layout">
          <section className="hero-copy" id="overview">
            <span className="eyebrow">Premium cognitive games for children ages 6–8</span>
            <h1>Play that looks joyful and feels intentional.</h1>
            <p className="hero-copy__lead">
              Plasticize turns memory, language, and logic practice into calm web-first play with a
              parent view that stays clear.
            </p>
            <p className="hero-copy__body">
              The product is designed to feel more like a polished learning companion than a noisy
              arcade. Children get one focused task at a time. Parents get useful visibility after
              each session.
            </p>

            <div className="hero-copy__actions">
              <a className="button button--primary" href="mailto:hello@plasticize.me">
                Request early access
              </a>
              <a className="button button--secondary" href="#programs">
                Explore the product
              </a>
            </div>

            <dl className="stat-row" aria-label="Plasticize product highlights">
              {stats.map((item) => (
                <div className="stat-pill" key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <aside className="hero-visual" aria-label="Plasticize interface preview">
            <div className="device-card">
              <div className="device-card__topline">
                <span>Session overview</span>
                <span>Web-first</span>
              </div>

              <div className="device-card__hero">
                <div>
                  <span className="mini-eyebrow">Today&apos;s focus</span>
                  <h2>Pattern Memory</h2>
                  <p>Short rounds, guided pacing, and calm feedback for repeat play.</p>
                </div>
                <div className="device-score">
                  <span>Progress</span>
                  <strong>82%</strong>
                </div>
              </div>

              <div className="device-card__track" aria-hidden="true">
                <span className="device-card__track-fill" />
              </div>

              <div className="lesson-grid">
                {lessonCards.map((card) => (
                  <article className="lesson-card" key={card.title}>
                    <span className="mini-eyebrow">{card.eyebrow}</span>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </article>
                ))}
              </div>

              <div className="device-card__footer">
                <div>
                  <span className="mini-eyebrow">Design rule</span>
                  <strong>Useful, not noisy</strong>
                </div>
                <div className="orbital-group" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="content-grid" id="programs">
        <article className="panel panel--wide">
          <div className="panel__header">
            <span className="eyebrow">Programs</span>
            <h2>Three skill tracks with one visual language.</h2>
          </div>

          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <article className="pillar-card" key={pillar.title}>
                <span className="pillar-card__index">{pillar.title.slice(0, 1)}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
        </article>

        <article className="panel" id="progress">
          <div className="panel__header">
            <span className="eyebrow">Parent view</span>
            <h2>What should be obvious in seconds.</h2>
          </div>

          <ul className="signal-list">
            {parentSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="timeline-panel">
        <div className="panel__header timeline-panel__header">
          <div>
            <span className="eyebrow">Flow</span>
            <h2>A session structure that feels premium and calm.</h2>
          </div>
          <p>
            The interface direction is built around one focused challenge, low reading load, and a
            parent-facing recap that makes the value legible.
          </p>
        </div>

        <div className="timeline-grid">
          {timeline.map((item) => (
            <article className="timeline-card" key={item.step}>
              <span className="timeline-card__step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-panel" id="contact">
        <div>
          <span className="eyebrow">Contact</span>
          <h2>Want to see the early product direction?</h2>
          <p>Reach out to review the product, follow the build, or discuss collaboration.</p>
        </div>
        <a className="button button--primary" href="mailto:hello@plasticize.me">
          hello@plasticize.me
        </a>
      </section>
    </main>
  );
}
