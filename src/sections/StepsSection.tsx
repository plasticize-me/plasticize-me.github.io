import { DemoIllustration } from '../components/illustrations/DemoIllustration';
import { MiniArtwork } from '../components/illustrations/MiniArtwork';
import { SectionTitle } from '../components/ui/SectionTitle';
import { steps } from '../data/landingContent';
import type { Step } from '../types/landing';

function StepCard({ step, index }: { step: Step; index: number }) {
  return (
    <article className="step-card">
      <span className={`step-card__number step-card__number--${index + 1}`}>{index + 1}</span>
      <div className={`step-art step-art--${step.artwork}`}>
        <MiniArtwork kind={step.artwork} />
      </div>
      <h3>{step.title}</h3>
      <p>{step.body}</p>
    </article>
  );
}

export function StepsSection() {
  return (
    <section className="steps-section" id="how-it-works">
      <SectionTitle
        eyebrow="How it works"
        title="How it works"
        body="Children practice through calm, repeated play while parents get a clearer picture of progress."
      />

      <div className="steps-layout">
        <DemoIllustration kind="elephant" />

        <div className="steps-grid">
          {steps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
