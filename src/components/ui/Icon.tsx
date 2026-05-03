import type { IconName } from '../../types/landing';

export function Icon({ name }: { name: IconName }) {
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
