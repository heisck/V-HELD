import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ImpactSection from './ImpactSection';

describe('ImpactSection Component', () => {
  it('renders section headline and scorecard metrics', () => {
    render(<ImpactSection />);
    expect(
      screen.getByRole('heading', { name: /Impact measured in lives, skills, and/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/1,200\+/i)).toBeInTheDocument();
    expect(screen.getByText(/4,200\+/i)).toBeInTheDocument();
    expect(screen.getByText(/850\+/i)).toBeInTheDocument();
    expect(screen.getAllByText(/100%/i).length).toBeGreaterThan(0);
  });

  it('renders verified field audit badge and transparency details', () => {
    render(<ImpactSection />);
    expect(screen.getByText(/Non-Profit Field Audited/i)).toBeInTheDocument();
    expect(
      screen.getByText(/All initiatives verified by local community stakeholders/i)
    ).toBeInTheDocument();
  });
});
