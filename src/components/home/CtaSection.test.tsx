import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CtaSection from './CtaSection';

describe('CtaSection Component', () => {
  it('renders call to action heading and primary apply button', () => {
    render(<CtaSection />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Ready to give back and/i);
    expect(screen.getByRole('link', { name: /Apply to Volunteer/i })).toBeInTheDocument();
  });

  it('renders institutional partner button', () => {
    render(<CtaSection />);
    expect(screen.getByRole('link', { name: /Partner With Us/i })).toBeInTheDocument();
  });
});
