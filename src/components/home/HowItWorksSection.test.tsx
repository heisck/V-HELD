import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HowItWorksSection from './HowItWorksSection';

describe('HowItWorksSection Component', () => {
  it('renders section headline, step formula cards, and 7-step pathway', () => {
    render(<HowItWorksSection />);
    expect(
      screen.getByRole('heading', { name: /Your journey from application to/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Explore & Apply/i)).toBeInTheDocument();
    expect(screen.getByText(/Connect & Prepare/i)).toBeInTheDocument();
    expect(screen.getByText(/Arrive, Serve & Flourish/i)).toBeInTheDocument();
    expect(screen.getByText(/The 7-Step Volunteer Pathway/i)).toBeInTheDocument();
  });

  it('renders arrival visual image with proper alt text', () => {
    render(<HowItWorksSection />);
    const arrivalImg = screen.getByAltText(
      /Volunteers arriving in Ghana warmly welcomed by host coordinators/i
    );
    expect(arrivalImg).toBeInTheDocument();
  });

  it('renders action link leading to application', () => {
    render(<HowItWorksSection />);
    const applyLinks = screen.getAllByRole('link', { name: /Apply/i });
    expect(applyLinks.length).toBeGreaterThan(0);
    expect(applyLinks[0]).toHaveAttribute('href', '/apply');
  });
});
