import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FocusAreasSection from './FocusAreasSection';

describe('FocusAreasSection Component', () => {
  it('renders section headline, pillars, and value ledger', () => {
    render(<FocusAreasSection />);
    expect(
      screen.getByRole('heading', { name: /Community priorities shaped into/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Education & Teaching/i)).toBeInTheDocument();
    expect(screen.getByText(/Community Health & Wellbeing/i)).toBeInTheDocument();
    expect(screen.getByText(/Youth Leadership Development/i)).toBeInTheDocument();
    expect(screen.getByText(/Make Your Time Matter/i)).toBeInTheDocument();
  });

  it('renders images for each focus area with appropriate alt descriptions', () => {
    render(<FocusAreasSection />);
    expect(
      screen.getByAltText(/Ghanaian primary school pupils engaged in an interactive classroom lesson/i)
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(/Community healthcare volunteer and Ghanaian nurse conducting a friendly clinic health screening/i)
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(/Young Ghanaian adults collaborating in an active outdoor youth leadership/i)
    ).toBeInTheDocument();
  });

  it('renders exploration links for programmes', () => {
    render(<FocusAreasSection />);
    expect(screen.getByRole('link', { name: /Explore Education/i })).toHaveAttribute(
      'href',
      '/programmes#education'
    );
    expect(screen.getByRole('link', { name: /Explore Community/i })).toHaveAttribute(
      'href',
      '/programmes#health'
    );
    expect(screen.getByRole('link', { name: /Explore Youth/i })).toHaveAttribute(
      'href',
      '/programmes#leadership'
    );
  });
});
