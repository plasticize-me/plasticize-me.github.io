import type { ReactNode } from 'react';

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  body: ReactNode;
}

export function SectionTitle({ eyebrow, title, body }: SectionTitleProps) {
  return (
    <div className="section-copy">
      <span className="section-copy__eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
