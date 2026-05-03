import type { ReactNode } from 'react';

const navItems = [
  { label: 'Games', href: '#games' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Parents', href: '#for-parents' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' }
];

const gameTiles = [
  { title: 'Memory Match', subtitle: 'Visual recall', icon: 'memory', tone: 'blue' },
  { title: 'Word Builder', subtitle: 'Listening practice', icon: 'language', tone: 'yellow' },
  { title: 'Logic Puzzles', subtitle: 'Pattern reasoning', icon: 'logic', tone: 'peach' },
  { title: 'Sequence Builder', subtitle: 'Step-by-step thinking', icon: 'clarity', tone: 'mint' }
];

const featureCards = [
  {
    title: 'Memory',
    body: 'Playful recall and attention-building activities',
    icon: 'memory',
    tone: 'blue'
  },
  {
    title: 'Language',
    body: 'Word, listening, and communication practice',
    icon: 'language',
    tone: 'violet'
  },
  {
    title: 'Logic',
    body: 'Pattern recognition, sequencing, and reasoning',
    icon: 'logic',
    tone: 'gold'
  },
  {
    title: 'Progress Clarity',
    body: 'Clear parent-friendly insights and reports',
    icon: 'clarity',
    tone: 'coral'
  }
];

const principles = [
  {
    title: 'Science-respecting',
    body: 'Grounded in research and best practices',
    icon: 'science',
    tone: 'mint'
  },
  {
    title: 'Child-friendly',
    body: 'Engaging, age-appropriate, and safe experiences',
    icon: 'heart',
    tone: 'coral'
  },
  {
    title: 'Parent visibility',
    body: 'Transparent insights that are easy to understand',
    icon: 'parents',
    tone: 'violet'
  },
  {
    title: 'Thoughtful design',
    body: 'Calm, minimal, and built for focus',
    icon: 'design',
    tone: 'gold'
  }
];

const overviewStats = [
  { title: 'Memory Progress', value: '+12%', note: 'in recall speed', tone: 'mint' },
  { title: 'Language Practice', value: '4', note: 'activities this week', tone: 'violet' },
  { title: 'Logic Challenges', value: '18', note: 'completed', tone: 'gold' },
  { title: 'Focus & Consistency', value: '85%', note: 'steady participation', tone: 'coral' }
];

const milestones = [
  { title: 'Memory Master', note: 'Completed 3 memory games', date: 'May 29' },
  { title: 'Word Explorer', note: 'Learnt 10 new words', date: 'May 24' },
  { title: 'Logic Legend', note: 'Completed 20 logic challenges', date: 'May 19' }
];

const steps = [
  {
    title: 'Play',
    body: 'Children engage with calm, well-designed cognitive games.',
    icon: 'play'
  },
  {
    title: 'Practice',
    body: 'Skills are reinforced through repetition and variety.',
    icon: 'practice'
  },
  {
    title: 'Understand',
    body: 'Parents get clear views of progress over time.',
    icon: 'understand'
  }
];

type IconName =
  | 'memory'
  | 'language'
  | 'logic'
  | 'clarity'
  | 'science'
  | 'heart'
  | 'parents'
  | 'design'
  | 'play'
  | 'practice'
  | 'understand';

function Icon({ name }: { name: IconName }) {
  const commonProps = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 1.8
  };

  switch (name) {
    case 'memory':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...commonProps} d="M7 9a4 4 0 0 1 7.8-1.2A3.5 3.5 0 1 1 16 15H8.5A3.5 3.5 0 1 1 9 8.1" />
          <path {...commonProps} d="M9.5 12.5h5M12 10v5" />
        </svg>
      );
    case 'language':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...commonProps} d="M5 6.5h14v8a3 3 0 0 1-3 3h-5l-4 3v-3H8a3 3 0 0 1-3-3z" />
          <path {...commonProps} d="M9 10h6M9 13h4" />
        </svg>
      );
    case 'logic':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...commonProps} d="M9 4h6a2 2 0 0 1 2 2v3h3v6a2 2 0 0 1-2 2h-3v3H9a2 2 0 0 1-2-2v-3H4V9a2 2 0 0 1 2-2h3V6a2 2 0 0 1 2-2z" />
          <path {...commonProps} d="M9 12h6M12 9v6" />
        </svg>
      );
    case 'clarity':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...commonProps} d="M5 18V9M10 18V6M15 18v-4M20 18V8" />
          <path {...commonProps} d="M4 19h17" />
        </svg>
      );
    case 'science':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...commonProps} d="M10 4v4l-4.5 7.5A3 3 0 0 0 8.1 20h7.8a3 3 0 0 0 2.6-4.5L14 8V4" />
          <path {...commonProps} d="M9 12h6" />
        </svg>
      );
    case 'heart':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            {...commonProps}
            d="M12 20s-7-4.4-7-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7 2.6C19 15.6 12 20 12 20z"
          />
        </svg>
      );
    case 'parents':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle {...commonProps} cx="8" cy="9" r="2.5" />
          <circle {...commonProps} cx="16.5" cy="8" r="2" />
          <path {...commonProps} d="M4.5 18a4 4 0 0 1 7 0M13 18a3.5 3.5 0 0 1 6 0" />
        </svg>
      );
    case 'design':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...commonProps} d="M15 4l5 5-9 9H6v-5z" />
          <path {...commonProps} d="M13 6l5 5" />
        </svg>
      );
    case 'play':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...commonProps} d="M12 21a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17z" />
          <path {...commonProps} d="M10 8.5l5 3.5-5 3.5z" />
        </svg>
      );
    case 'practice':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...commonProps} d="M7 12.5l3 3 7-8" />
          <path {...commonProps} d="M5 5h14v14H5z" />
        </svg>
      );
    case 'understand':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...commonProps} d="M5 16l4-5 4 3 6-7" />
          <path {...commonProps} d="M5 19h14" />
        </svg>
      );
  }
}

function IconBadge({
  name,
  tone,
  large = false
}: {
  name: IconName;
  tone: string;
  large?: boolean;
}) {
  return (
    <span className={`icon-badge icon-badge--${tone}${large ? ' icon-badge--large' : ''}`}>
      <Icon name={name} />
    </span>
  );
}

function DemoIllustration({ kind }: { kind: 'kids' | 'plant' | 'blocks' }) {
  if (kind === 'blocks') {
    return (
      <div className="toy-blocks" aria-hidden="true">
        <span className="toy-block toy-block--teal" />
        <span className="toy-block toy-block--gold" />
        <span className="toy-block toy-block--coral" />
      </div>
    );
  }

  if (kind === 'plant') {
    return (
      <div className="plant-illustration" aria-hidden="true">
        <span className="plant-pot" />
        <span className="plant-leaf plant-leaf--left" />
        <span className="plant-leaf plant-leaf--right" />
        <span className="plant-leaf plant-leaf--center" />
      </div>
    );
  }

  return (
    <div className="kids-illustration" aria-hidden="true">
      <span className="kids-illustration__blob" />
      <span className="kids-illustration__child kids-illustration__child--left">
        <span className="kids-illustration__hair" />
      </span>
      <span className="kids-illustration__child kids-illustration__child--right">
        <span className="kids-illustration__hair kids-illustration__hair--dark" />
      </span>
      <span className="kids-illustration__laptop" />
    </div>
  );
}

function Chart() {
  return (
    <svg viewBox="0 0 320 150" role="img" aria-label="Focus and consistency trend">
      <path
        d="M24 114C48 106 64 82 88 78s31 18 52 10 34-37 58-36 27 21 46 15 34-38 52-34"
        className="chart-line"
      />
      <path d="M24 114C48 106 64 82 88 78s31 18 52 10 34-37 58-36 27 21 46 15 34-38 52-34V136H24Z" className="chart-fill" />
      {[24, 92, 160, 228, 296].map((x) => (
        <line key={x} x1={x} y1="18" x2={x} y2="136" className="chart-grid" />
      ))}
    </svg>
  );
}

function AppCard({
  title,
  subtitle,
  icon,
  tone
}: {
  title: string;
  subtitle: string;
  icon: IconName;
  tone: string;
}) {
  return (
    <article className={`game-card game-card--${tone}`}>
      <IconBadge name={icon} tone={tone} large />
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </article>
  );
}

function SectionTitle({
  eyebrow,
  title,
  body
}: {
  eyebrow: string;
  title: string;
  body: ReactNode;
}) {
  return (
    <div className="section-copy">
      <span className="section-copy__eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export function App() {
  return (
    <main className="page">
      <div className="page__glow page__glow--one" aria-hidden="true" />
      <div className="page__glow page__glow--two" aria-hidden="true" />

      <section className="hero-card">
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Plasticize home">
            <span className="brand__wordmark">Plasticize</span>
          </a>

          <nav className="site-nav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button--primary" href="#pricing">
            Get Started
          </a>
        </header>

        <div className="hero-layout" id="top">
          <div className="hero-copy">
            <h1>Thoughtful cognitive games for growing minds</h1>
            <p className="hero-copy__lead">
              Plasticize builds premium, science-respecting cognitive games for children. We do not
              promise magic intelligence gains. We create engaging experiences that help children
              practice memory, language, and other cognitive skills while helping parents see
              progress more clearly.
            </p>

            <div className="hero-actions">
              <a className="button button--green" href="#games">
                Explore Games
              </a>
              <a className="button button--ghost" href="#for-parents">
                See Progress Demo
              </a>
            </div>
          </div>

          <div className="hero-device" aria-label="Plasticize game dashboard preview">
            <span className="hero-device__sparkle hero-device__sparkle--top" aria-hidden="true" />
            <span className="hero-device__sparkle hero-device__sparkle--bottom" aria-hidden="true" />

            <div className="speech-bubble">
              <strong>Good morning</strong>
              <span>Daniel logged in</span>
            </div>

            <DemoIllustration kind="blocks" />
            <DemoIllustration kind="plant" />

            <div className="device-frame">
              <div className="device-frame__camera" aria-hidden="true" />
              <div className="device-screen">
                <div className="device-screen__header">
                  <div>
                    <span className="device-screen__brand">Plasticize</span>
                    <h2>Choose a game</h2>
                  </div>

                  <div className="device-profile">
                    <span className="device-profile__avatar" aria-hidden="true" />
                    <div>
                      <strong>Alex</strong>
                      <span>Age 8</span>
                    </div>
                  </div>
                </div>

                <div className="game-grid">
                  {gameTiles.map((tile) => (
                    <AppCard
                      key={tile.title}
                      title={tile.title}
                      subtitle={tile.subtitle}
                      icon={tile.icon as IconName}
                      tone={tile.tone}
                    />
                  ))}
                </div>

                <div className="device-screen__footer">
                  <div className="skill-chip">
                    <IconBadge name="play" tone="teal" />
                    <span>Age 6+</span>
                  </div>
                  <div className="skill-chip">
                    <IconBadge name="practice" tone="mint" />
                    <span>Short focused sessions</span>
                  </div>
                  <div className="skill-chip">
                    <IconBadge name="understand" tone="coral" />
                    <span>Parent-friendly feedback</span>
                  </div>
                </div>
              </div>

              <aside className="device-summary">
                <div className="device-summary__ring">
                  <span>78%</span>
                </div>
                <strong>Daily Progress</strong>
                <ul>
                  <li>
                    <span>Memory</span>
                    <b>91%</b>
                  </li>
                  <li>
                    <span>Language</span>
                    <b>77%</b>
                  </li>
                  <li>
                    <span>Logic</span>
                    <b>84%</b>
                  </li>
                </ul>
                <a href="#for-parents">View full report</a>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-grid" id="games">
        {featureCards.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <IconBadge name={feature.icon as IconName} tone={feature.tone} />
            <div>
              <h2>{feature.title}</h2>
              <p>{feature.body}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="principles-section" id="about">
        <SectionTitle
          eyebrow="Built with care, not hype"
          title="Built with care, not hype"
          body="Plasticize respects science. We focus on practice, engagement, and measurable progress, not exaggerated claims. Our goal is to create thoughtful digital experiences children enjoy and parents can understand."
        />

        <div className="principles-grid">
          {principles.map((principle) => (
            <article className="principle-card" key={principle.title}>
              <IconBadge name={principle.icon as IconName} tone={principle.tone} />
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="overview-card" id="for-parents">
        <aside className="overview-sidebar">
          <span className="overview-sidebar__brand">Plasticize</span>
          <nav aria-label="Dashboard sections">
            <a href="#for-parents" className="is-active">
              Overview
            </a>
            <a href="#games">Skills</a>
            <a href="#how-it-works">Sessions</a>
            <a href="#pricing">Reports</a>
            <a href="#about">Settings</a>
          </nav>
          <div className="overview-profile">
            <span className="overview-profile__avatar" aria-hidden="true" />
            <div>
              <strong>Alex&apos;s Parent</strong>
              <span>View profile</span>
            </div>
          </div>
        </aside>

        <div className="overview-main">
          <div className="overview-main__header">
            <div>
              <span className="section-copy__eyebrow">Alex&apos;s Progress Overview</span>
              <h2>Overview of activity and skills this month.</h2>
            </div>

            <div className="overview-actions">
              <button type="button">This Month</button>
              <button type="button">Export Report</button>
            </div>
          </div>

          <div className="overview-stats">
            {overviewStats.map((stat) => (
              <article className={`overview-stat overview-stat--${stat.tone}`} key={stat.title}>
                <span>{stat.title}</span>
                <strong>{stat.value}</strong>
                <p>{stat.note}</p>
              </article>
            ))}
          </div>

          <div className="overview-panels">
            <article className="chart-card">
              <div className="chart-card__header">
                <div>
                  <h3>Focus & Consistency Over Time</h3>
                  <span>Weekly trend</span>
                </div>
                <a href="#pricing">View all</a>
              </div>
              <Chart />
              <div className="chart-card__labels" aria-hidden="true">
                <span>Apr 26</span>
                <span>May 2</span>
                <span>May 9</span>
                <span>May 16</span>
                <span>May 23</span>
              </div>
            </article>

            <article className="milestone-card">
              <div className="chart-card__header">
                <div>
                  <h3>Recent Milestones</h3>
                  <span>Learning highlights</span>
                </div>
                <a href="#pricing">View all</a>
              </div>

              <div className="milestone-list">
                {milestones.map((milestone, index) => (
                  <div className="milestone-item" key={milestone.title}>
                    <span className={`milestone-item__badge milestone-item__badge--${index + 1}`} />
                    <div>
                      <strong>{milestone.title}</strong>
                      <p>{milestone.note}</p>
                    </div>
                    <span>{milestone.date}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="steps-section" id="how-it-works">
        <SectionTitle
          eyebrow="How it works"
          title="How it works"
          body="Children practice through calm, repeated play while parents get a clearer picture of progress."
        />

        <div className="steps-grid">
          {steps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <span className="step-card__number">{index + 1}</span>
              <div className="step-card__icon">
                <IconBadge name={step.icon as IconName} tone={index === 0 ? 'blue' : index === 1 ? 'gold' : 'mint'} large />
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-card" id="pricing">
        <DemoIllustration kind="kids" />

        <div className="cta-card__copy">
          <span className="section-copy__eyebrow">Support learning with clarity and care</span>
          <h2>Support learning with clarity and care</h2>
          <p>
            Discover premium cognitive games designed for children and progress tools designed for
            parents.
          </p>
          <a className="button button--green" href="#top">
            Start with Plasticize
          </a>
        </div>

        <DemoIllustration kind="plant" />
      </section>
    </main>
  );
}
