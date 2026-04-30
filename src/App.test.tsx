import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './App';

describe('Plasticize landing page', () => {
  it('renders the refined positioning copy', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /play that builds thinking skills/i })).toBeInTheDocument();
    expect(screen.getByText(/short games for memory, language, and logic/i)).toBeInTheDocument();
    expect(screen.getByText(/informative for parents\. light for children/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /contact us/i })).toHaveLength(2);
  });
});
