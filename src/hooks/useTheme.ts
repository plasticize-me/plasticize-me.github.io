import { useEffect, useState } from 'react';
import type { Theme } from '../types/landing';
import { applyTheme, resolveInitialTheme } from '../theme/theme';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(resolveInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}
