import type { ArtworkName } from '../../types/landing';

export function MiniArtwork({ kind }: { kind: ArtworkName }) {
  switch (kind) {
    case 'elephant':
      return (
        <svg viewBox="0 0 88 88" aria-hidden="true">
          <circle cx="30" cy="38" r="18" fill="#89c8f4" />
          <circle cx="58" cy="38" r="18" fill="#89c8f4" />
          <circle cx="44" cy="42" r="22" fill="#65b6eb" />
          <rect x="36" y="44" width="16" height="20" rx="8" fill="#65b6eb" />
          <circle cx="38" cy="40" r="2.5" fill="#24528d" />
          <circle cx="50" cy="40" r="2.5" fill="#24528d" />
          <path d="M39 49c4 4 10 4 14 0" fill="none" stroke="#24528d" strokeLinecap="round" strokeWidth="2.2" />
          <path d="M41 60h-8M55 60h8" fill="none" stroke="#65b6eb" strokeLinecap="round" strokeWidth="7" />
        </svg>
      );
    case 'robot':
      return (
        <svg viewBox="0 0 88 88" aria-hidden="true">
          <rect x="18" y="30" width="52" height="32" rx="14" fill="#ffcb55" />
          <rect x="24" y="26" width="40" height="28" rx="10" fill="#ffdf83" />
          <rect x="40" y="16" width="8" height="10" rx="4" fill="#5b8bd6" />
          <circle cx="44" cy="12" r="5" fill="#ff856f" />
          <circle cx="34" cy="40" r="4" fill="#24528d" />
          <circle cx="54" cy="40" r="4" fill="#24528d" />
          <path d="M34 52c6 5 14 5 20 0" fill="none" stroke="#24528d" strokeLinecap="round" strokeWidth="2.4" />
          <path d="M23 62h12M53 62h12" fill="none" stroke="#f0a925" strokeLinecap="round" strokeWidth="6" />
        </svg>
      );
    case 'fox':
      return (
        <svg viewBox="0 0 88 88" aria-hidden="true">
          <path d="M26 24 44 16l18 8-4 16 8 16-22 12-22-12 8-16Z" fill="#ff9f4a" />
          <path d="M33 26 44 32l11-6 7 17-18 21-18-21Z" fill="#ffbe75" />
          <path d="M35 48c5 3 13 3 18 0-4 7-14 10-18 0Z" fill="#fff" />
          <circle cx="37" cy="43" r="2.6" fill="#304268" />
          <circle cx="51" cy="43" r="2.6" fill="#304268" />
          <path d="M43 46h2l-1 4Z" fill="#304268" />
        </svg>
      );
    case 'castle':
      return (
        <svg viewBox="0 0 88 88" aria-hidden="true">
          <rect x="22" y="34" width="44" height="28" rx="6" fill="#f4c56d" />
          <rect x="28" y="24" width="10" height="38" rx="4" fill="#8dc9f5" />
          <rect x="50" y="24" width="10" height="38" rx="4" fill="#8dc9f5" />
          <path d="M28 24h10l-5 8ZM50 24h10l-5 8Z" fill="#6ec19f" />
          <rect x="40" y="42" width="8" height="20" rx="4" fill="#ff8b70" />
          <path d="M22 34h44" fill="none" stroke="#f7e2b5" strokeWidth="3" />
        </svg>
      );
    case 'progress':
      return (
        <svg viewBox="0 0 108 88" aria-hidden="true">
          <rect x="10" y="12" width="88" height="60" rx="12" fill="#f4fbff" stroke="#cfe4ec" strokeWidth="2" />
          <path d="M22 56 38 42l13 10 17-22 16 12" fill="none" stroke="#4da9a2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 66h58" fill="none" stroke="#d7e8ef" strokeWidth="3" />
          <path d="M24 28h24" fill="none" stroke="#8fb5df" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
  }
}
