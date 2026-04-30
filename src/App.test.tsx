import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './App';

describe('Plasticize landing page', () => {
  it('renders the professional parent-facing positioning', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /play that builds thinking/i })).toBeInTheDocument();
    expect(
      screen.getByText(/plasticize creates web-first games for ages 6–8 built around memory, language, and logic/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/professional product framing, not a generic game site/i)).toBeInTheDocument();
    expect(screen.getByText(/what parents should understand in seconds/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /contact us/i })).toHaveLength(2);
  });
});
