import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './App';

describe('Plasticize landing page', () => {
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
});
