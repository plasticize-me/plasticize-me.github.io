import { IconBadge } from '../components/ui/IconBadge';
import { featureCards } from '../data/landingContent';

export function FeaturesSection() {
  return (
    <section className="feature-grid" id="games">
      {featureCards.map((feature) => (
        <article className="feature-card" key={feature.title}>
          <IconBadge name={feature.icon} tone={feature.tone} />
          <div>
            <h2>{feature.title}</h2>
            <p>{feature.body}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
