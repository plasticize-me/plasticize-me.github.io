import { MiniArtwork } from './MiniArtwork';

type DemoKind = 'kids' | 'plant' | 'blocks' | 'elephant';

export function DemoIllustration({ kind }: { kind: DemoKind }) {
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

  if (kind === 'elephant') {
    return (
      <div className="mascot-illustration" aria-hidden="true">
        <MiniArtwork kind="elephant" />
        <span className="mascot-illustration__star" />
      </div>
    );
  }

  return (
    <div className="kids-illustration" aria-hidden="true">
      <span className="kids-illustration__blob" />
      <span className="kids-illustration__leaf kids-illustration__leaf--left" />
      <span className="kids-illustration__leaf kids-illustration__leaf--right" />
      <span className="kids-illustration__child kids-illustration__child--left">
        <span className="kids-illustration__hair" />
      </span>
      <span className="kids-illustration__child kids-illustration__child--right">
        <span className="kids-illustration__hair kids-illustration__hair--dark" />
      </span>
      <span className="kids-illustration__laptop" />
      <span className="kids-illustration__spark kids-illustration__spark--one" />
      <span className="kids-illustration__spark kids-illustration__spark--two" />
    </div>
  );
}
