import { IconBadge } from '../components/ui/IconBadge';
import { SectionTitle } from '../components/ui/SectionTitle';
import { principles } from '../data/landingContent';

export function PrinciplesSection() {
  return (
    <section className="principles-section" id="about">
      <SectionTitle
        eyebrow="Built with care, not hype"
        title="Built with care, not hype"
        body="Plasticize respects science. We focus on practice, engagement, and measurable progress, not exaggerated claims. Our goal is to create thoughtful digital experiences children enjoy and parents can understand."
      />

      <div className="principles-grid">
        {principles.map((principle) => (
          <article className="principle-card" key={principle.title}>
            <IconBadge name={principle.icon} tone={principle.tone} />
            <h3>{principle.title}</h3>
            <p>{principle.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
