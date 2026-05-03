import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { App } from './App';

describe('Plasticize landing page', () => {
  beforeEach(() => {
    const storage = new Map<string, string>();
    const localStorageMock = {
      getItem: vi.fn((key: string) => storage.get(key) ?? null),
      setItem: vi.fn((key: string, value: string) => {
        storage.set(key, value);
      }),
      removeItem: vi.fn((key: string) => {
        storage.delete(key);
      }),
      clear: vi.fn(() => {
        storage.clear();
      })
    };

    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      configurable: true
    });

    document.documentElement.removeAttribute('data-theme');
  });

  it('renders the redesigned homepage content', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /thoughtful cognitive games for growing minds/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/science-respecting cognitive games for children/i)
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /explore games/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /see progress demo/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^memory$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /built with care, not hype/i })).toBeInTheDocument();
    expect(screen.getByText(/alex's progress overview/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /how it works/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /start with plasticize/i })).toBeInTheDocument();
  });

  it('toggles dark mode and persists the chosen theme', async () => {
    const user = userEvent.setup();

    render(<App />);

    const toggle = screen.getByRole('button', { name: /switch to dark mode/i });
    await user.click(toggle);

    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(toggle).toHaveAttribute('aria-pressed', 'true');
    expect(window.localStorage.getItem('plasticize-theme')).toBe('dark');
  });
});
