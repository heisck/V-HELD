import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HowItWorksSection from './HowItWorksSection';

describe('HowItWorksSection Component', () => {
  it('renders section title and key pathway stages', () => {
    render(<HowItWorksSection />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Your volunteer journey/i);
    expect(screen.getByRole('heading', { level: 3, name: /Explore Programmes/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Apply Online/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Reflect & Grow/i })).toBeInTheDocument();
  });

  it('renders begin application link', () => {
    render(<HowItWorksSection />);
    expect(screen.getByRole('link', { name: /^Apply$/i })).toBeInTheDocument();
  });
});
