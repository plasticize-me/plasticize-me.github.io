export type Theme = 'light' | 'dark';

export type Tone = 'blue' | 'violet' | 'gold' | 'coral' | 'mint' | 'peach' | 'teal';

export type LogoSize = 'header' | 'sidebar' | 'compact' | 'tiny';

export type IconName =
  | 'memory'
  | 'language'
  | 'logic'
  | 'clarity'
  | 'science'
  | 'heart'
  | 'parents'
  | 'design'
  | 'play'
  | 'practice'
  | 'understand';

export type ArtworkName = 'elephant' | 'robot' | 'fox' | 'castle' | 'progress';

export interface NavItem {
  label: string;
  href: string;
}

export interface GameTile {
  title: string;
  subtitle: string;
  artwork: ArtworkName;
  tone: Tone;
}

export interface FeatureCard {
  title: string;
  body: string;
  icon: IconName;
  tone: Tone;
}

export interface PrincipleCard {
  title: string;
  body: string;
  icon: IconName;
  tone: Tone;
}

export interface OverviewMenuItem {
  label: string;
  href: string;
  icon: IconName;
}

export interface OverviewStat {
  title: string;
  value: string;
  note: string;
  tone: Exclude<Tone, 'teal' | 'peach'>;
}

export interface Milestone {
  title: string;
  note: string;
  date: string;
}

export interface Step {
  title: string;
  body: string;
  artwork: ArtworkName;
}
