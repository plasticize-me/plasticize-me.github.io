import { PlasticizeLogo } from '../components/branding/PlasticizeLogo';
import { DemoIllustration } from '../components/illustrations/DemoIllustration';
import { MiniArtwork } from '../components/illustrations/MiniArtwork';
import { IconBadge } from '../components/ui/IconBadge';
import { ThemeToggle } from '../components/ui/ThemeToggle';
import { gameTiles, navItems } from '../data/landingContent';
import type { GameTile, Theme } from '../types/landing';

interface HeroSectionProps {
  theme: Theme;
  onToggleTheme: () => void;
}

function GameTileCard({ title, subtitle, artwork, tone }: GameTile) {
  return (
    <article className={`game-card game-card--${tone}`}>
      <div className={`game-card__art game-card__art--${tone}`}>
        <MiniArtwork kind={artwork} />
      </div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </article>
  );
}

export function HeroSection({ theme, onToggleTheme }: HeroSectionProps) {
  return (
    <section className="hero-card">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Plasticize home">
          <PlasticizeLogo size="header" />
        </a>

        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a className="button button--primary" href="#pricing">
            Get Started
          </a>
        </div>
      </header>

      <div className="hero-layout" id="top">
        <div className="hero-copy">
          <h1>Thoughtful cognitive games for growing minds</h1>
          <p className="hero-copy__lead">
            Plasticize builds premium, science-respecting cognitive games for children. We do not
            promise magic intelligence gains. We create engaging experiences that help children
            practice memory, language, logic, and other cognitive skills while helping parents see
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
          <span className="hero-orb hero-orb--one" aria-hidden="true" />
          <span className="hero-orb hero-orb--two" aria-hidden="true" />
          <span className="hero-device__sparkle hero-device__sparkle--top" aria-hidden="true" />
          <span className="hero-device__sparkle hero-device__sparkle--bottom" aria-hidden="true" />

          <div className="speech-bubble">
            <strong>Good morning</strong>
            <span>Friend!</span>
          </div>

          <DemoIllustration kind="blocks" />
          <DemoIllustration kind="plant" />

          <div className="device-frame">
            <div className="device-frame__camera" aria-hidden="true" />

            <div className="device-screen">
              <div className="device-screen__header">
                <div className="device-screen__title">
                  <PlasticizeLogo size="tiny" />
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
                  <GameTileCard key={tile.title} {...tile} />
                ))}
              </div>

              <div className="device-screen__footer">
                <div className="skill-chip">
                  <IconBadge name="play" tone="teal" />
                  <span>Age 4-8</span>
                </div>
                <div className="skill-chip">
                  <IconBadge name="practice" tone="mint" />
                  <span>Short Reward Sessions</span>
                </div>
                <div className="skill-chip">
                  <IconBadge name="understand" tone="coral" />
                  <span>Parent-Friendly Feedback</span>
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
                  <span>Short Overview</span>
                  <b>1/3</b>
                </li>
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
  );
}
