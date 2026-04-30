import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './App';

describe('Plasticize landing page', () => {
  it('renders the main positioning copy', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /play that helps thinking grow/i })).toBeInTheDocument();
    expect(screen.getByText(/memory, language, and logic/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /contact us/i })).toHaveLength(2);
  });
});
