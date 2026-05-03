import { DemoIllustration } from '../components/illustrations/DemoIllustration';

export function CtaSection() {
  return (
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

      <div className="cta-card__aside">
        <DemoIllustration kind="plant" />
        <DemoIllustration kind="blocks" />
      </div>
    </section>
  );
}
