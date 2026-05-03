import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './App';

describe('Plasticize landing page', () => {
  it('renders the landing structure based on the supplied visual direction', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /play that builds thinking and still looks beautiful/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/this landing direction follows the supplied mock more closely/i)
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /one focused challenge at a time/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /the landing should feel like a designed product brand, not a generic app template/i
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/specific cognitive skills, not vague intelligence claims/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /request early access/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /hello@plasticize\.me/i })).toBeInTheDocument();
  });
});
