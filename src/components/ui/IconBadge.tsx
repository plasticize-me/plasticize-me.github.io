import type { IconName, Tone } from '../../types/landing';
import { Icon } from './Icon';

interface IconBadgeProps {
  name: IconName;
  tone: Tone;
  large?: boolean;
}

export function IconBadge({ name, tone, large = false }: IconBadgeProps) {
  return (
    <span className={`icon-badge icon-badge--${tone}${large ? ' icon-badge--large' : ''}`}>
      <Icon name={name} />
    </span>
  );
}
