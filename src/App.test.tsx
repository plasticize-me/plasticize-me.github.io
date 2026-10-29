import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('old site', () => {
  it('points visitors to the new landing page and the app', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('خانه‌ی تازه');
    expect(screen.getByRole('link', { name: 'رفتن به سایت تازه' })).toHaveAttribute('href', 'https://plasticize.ir/');
    const start = new URL(screen.getByRole('link', { name: 'شروع رایگان بازی' }).getAttribute('href')!);
    expect(start.origin + start.pathname).toBe('https://app.plasticize.ir/start');
    expect(start.searchParams.get('src')).toBe('old_site');
    expect(screen.getByRole('link', { name: 'Visit the new site' })).toHaveAttribute('href', 'https://plasticize.ir/en/');
  });
});
