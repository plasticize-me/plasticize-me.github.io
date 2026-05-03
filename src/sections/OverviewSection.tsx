import { TrendChart } from '../components/charts/TrendChart';
import { PlasticizeLogo } from '../components/branding/PlasticizeLogo';
import { IconBadge } from '../components/ui/IconBadge';
import { milestones, overviewMenu, overviewStats } from '../data/landingContent';

export function OverviewSection() {
  return (
    <section className="overview-card" id="for-parents">
      <aside className="overview-sidebar">
        <div className="overview-sidebar__header">
          <PlasticizeLogo size="sidebar" />
        </div>

        <nav aria-label="Dashboard sections">
          {overviewMenu.map((item, index) => (
            <a key={item.label} href={item.href} className={index === 0 ? 'is-active' : ''}>
              <IconBadge name={item.icon} tone={index === 0 ? 'teal' : 'blue'} />
              <span>{item.label}</span>
            </a>
          ))}
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
            <TrendChart />
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
  );
}
