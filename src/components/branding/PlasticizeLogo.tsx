import type { LogoSize } from '../../types/landing';

interface PlasticizeLogoProps {
  size?: LogoSize;
  showWord?: boolean;
}

export function PlasticizeLogo({
  size = 'header',
  showWord = true
}: PlasticizeLogoProps) {
  return (
    <span className={`plasticize-logo plasticize-logo--${size}`}>
      <svg className="plasticize-logo__mark" viewBox="0 0 88 78" aria-hidden="true">
        <path
          fill="#19b8b3"
          d="M35 4c-10.8 0-19.6 7.8-21 18.2C6 23.7 0 30.6 0 39.5 0 50.3 8.7 59 19.5 59H43c10.7 0 19.3-8.6 19.3-19.3 0-10-7.7-18.2-17.4-19.1C44.1 10.7 40.6 4 35 4Z"
        />
        <path fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="4.4" d="M11 43 25 29l14 14M25 29l17 0M25 29l0-14" />
        <circle cx="11" cy="43" r="4.8" fill="#fff" />
        <circle cx="25" cy="29" r="4.8" fill="#fff" />
        <circle cx="42" cy="29" r="4.8" fill="#fff" />
        <path fill="#0d3b84" d="M57 5c14.3 0 26 11.7 26 26v9.5H63.8a6.8 6.8 0 0 1-6.8-6.8Z" />
        <circle cx="69.5" cy="52.5" r="11.8" fill="#ff7d66" />
        <rect x="20" y="53" width="18.5" height="18.5" rx="4.6" fill="#ffc24f" />
        <path
          fill="#19b8b3"
          d="M53 43.5h14.7C76 43.5 82 49.5 82 57v15.5H69.5V59.3c0-3.2-2.5-5.7-5.7-5.7h-6.7c-3.2 0-5.7 2.5-5.7 5.7v13.2H39V57c0-7.5 6-13.5 14-13.5Z"
        />
      </svg>

      {showWord ? <span className="plasticize-logo__word">Plasticize</span> : null}
    </span>
  );
}
