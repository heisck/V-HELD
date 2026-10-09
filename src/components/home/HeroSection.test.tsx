import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeroSection from './HeroSection';

describe('HeroSection Component', () => {
  it('renders the core headline and tagline', () => {
    render(<HeroSection />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Give Back/i);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Make a Difference/i);
  });

  it('renders dual action buttons', () => {
    render(<HeroSection />);
    expect(screen.getByRole('link', { name: /^Volunteer$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Explore Focus Areas/i })).toBeInTheDocument();
  });

  it('renders institutional trust indicators', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Registered Non-Profit in Ghana/i)).toBeInTheDocument();
    expect(screen.getByText(/Community-Led Placements/i)).toBeInTheDocument();
    expect(screen.getByText(/Local & International Cohorts/i)).toBeInTheDocument();
  });
});
