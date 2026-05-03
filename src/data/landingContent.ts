import type {
  FeatureCard,
  GameTile,
  Milestone,
  NavItem,
  OverviewMenuItem,
  OverviewStat,
  PrincipleCard,
  Step
} from '../types/landing';

export const navItems: NavItem[] = [
  { label: 'Games', href: '#games' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Parents', href: '#for-parents' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' }
];

export const gameTiles: GameTile[] = [
  { title: 'Memory Match', subtitle: 'Visual recall', artwork: 'elephant', tone: 'blue' },
  { title: 'Word Explorer', subtitle: 'Fun literacy', artwork: 'robot', tone: 'gold' },
  { title: 'Logic Puzzles', subtitle: 'Pattern play', artwork: 'fox', tone: 'peach' },
  { title: 'Sequence Builder', subtitle: 'Structured thinking', artwork: 'castle', tone: 'mint' }
];

export const featureCards: FeatureCard[] = [
  {
    title: 'Memory',
    body: 'Playful recall and attention-building activities',
    icon: 'memory',
    tone: 'blue'
  },
  {
    title: 'Language',
    body: 'Word, listening, and communication practice',
    icon: 'language',
    tone: 'violet'
  },
  {
    title: 'Logic',
    body: 'Pattern recognition, sequencing, and reasoning',
    icon: 'logic',
    tone: 'gold'
  },
  {
    title: 'Progress Clarity',
    body: 'Clear parent-friendly insights and reports',
    icon: 'clarity',
    tone: 'coral'
  }
];

export const principles: PrincipleCard[] = [
  {
    title: 'Science-respecting',
    body: 'Grounded in research and best practices',
    icon: 'science',
    tone: 'mint'
  },
  {
    title: 'Child-friendly',
    body: 'Engaging, age-appropriate, and safe experiences',
    icon: 'heart',
    tone: 'coral'
  },
  {
    title: 'Parent visibility',
    body: 'Transparent insights that are easy to understand',
    icon: 'parents',
    tone: 'violet'
  },
  {
    title: 'Thoughtful design',
    body: 'Calm, minimal, and built for focus',
    icon: 'design',
    tone: 'gold'
  }
];

export const overviewMenu: OverviewMenuItem[] = [
  { label: 'Overview', href: '#for-parents', icon: 'clarity' },
  { label: 'Skills', href: '#games', icon: 'memory' },
  { label: 'Sessions', href: '#how-it-works', icon: 'practice' },
  { label: 'Milestones', href: '#pricing', icon: 'heart' },
  { label: 'Reports', href: '#pricing', icon: 'understand' },
  { label: 'Settings', href: '#about', icon: 'design' }
];

export const overviewStats: OverviewStat[] = [
  { title: 'Memory Progress', value: '+12%', note: 'in recall speed', tone: 'mint' },
  { title: 'Language Practice', value: '4', note: 'activities this week', tone: 'violet' },
  { title: 'Logic Challenges', value: '18', note: 'completed', tone: 'gold' },
  { title: 'Focus & Consistency', value: '85%', note: 'steady participation', tone: 'coral' }
];

export const milestones: Milestone[] = [
  { title: 'Memory Master', note: 'Completed 3 memory games', date: 'May 29' },
  { title: 'Word Explorer', note: 'Learned 10 new words', date: 'May 24' },
  { title: 'Logic Legend', note: 'Completed 20 logic challenges', date: 'May 19' }
];

export const steps: Step[] = [
  {
    title: 'Play',
    body: 'Children engage with calm, well-designed cognitive games.',
    artwork: 'elephant'
  },
  {
    title: 'Practice',
    body: 'Skills are reinforced through repetition and variety.',
    artwork: 'robot'
  },
  {
    title: 'Understand',
    body: 'Parents get clear views of progress over time.',
    artwork: 'progress'
  }
];
