import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './App';

describe('Plasticize landing page', () => {
  it('renders the redesigned hero and parent-facing positioning', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /play that looks joyful and feels intentional/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/plasticize turns memory, language, and logic practice into calm web-first play/i)
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /three skill tracks with one visual language/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /what should be obvious in seconds/i })).toBeInTheDocument();
    expect(screen.getByText(/specific skills instead of vague brain-training claims/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /request early access/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /hello@plasticize\.me/i })).toBeInTheDocument();
  });
});
