import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import IntroSection from './IntroSection';

describe('IntroSection Component', () => {
  it('renders mission and welcome title', () => {
    render(<IntroSection />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Rooted in Ghanaian communities/i);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/connecting hands across the world/i);
  });

  it('renders dual-track pathways for Ghanaian and international participants', () => {
    render(<IntroSection />);
    expect(screen.getByRole('heading', { level: 3, name: /Volunteering Within Ghana/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Volunteering in Ghana/i })).toBeInTheDocument();
  });
});
