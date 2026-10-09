import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ImpactSection from './ImpactSection';

describe('ImpactSection Component', () => {
  it('renders section title and key impact metrics', () => {
    render(<ImpactSection />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Measured by lives touched/i);
    expect(screen.getByText('500+')).toBeInTheDocument();
    expect(screen.getByText('Volunteers Engaged')).toBeInTheDocument();
    expect(screen.getByText('24+')).toBeInTheDocument();
    expect(screen.getByText('Partner Communities')).toBeInTheDocument();
    expect(screen.getByText('4,500+')).toBeInTheDocument();
    expect(screen.getByText('Learners Supported')).toBeInTheDocument();
  });

  it('renders report navigation link', () => {
    render(<ImpactSection />);
    expect(screen.getByRole('link', { name: /Explore Impact Reports/i })).toBeInTheDocument();
  });
});
