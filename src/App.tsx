import { useTheme } from './hooks/useTheme';
import { CtaSection } from './sections/CtaSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { HeroSection } from './sections/HeroSection';
import { OverviewSection } from './sections/OverviewSection';
import { PrinciplesSection } from './sections/PrinciplesSection';
import { StepsSection } from './sections/StepsSection';

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="page">
      <div className="page__glow page__glow--one" aria-hidden="true" />
      <div className="page__glow page__glow--two" aria-hidden="true" />

      <HeroSection theme={theme} onToggleTheme={toggleTheme} />
      <FeaturesSection />
      <PrinciplesSection />
      <OverviewSection />
      <StepsSection />
      <CtaSection />
    </main>
  );
}
