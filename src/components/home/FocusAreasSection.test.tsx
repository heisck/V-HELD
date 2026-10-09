import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FocusAreasSection from './FocusAreasSection';

describe('FocusAreasSection Component', () => {
  it('renders section title and three core pillars', () => {
    render(<FocusAreasSection />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Where volunteers make a lasting difference in Ghana/i);
    expect(screen.getByRole('heading', { level: 3, name: /Education & Teaching/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Community Health & Wellbeing/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Youth Leadership Development/i })).toBeInTheDocument();
  });

  it('renders program navigation links for each pillar', () => {
    render(<FocusAreasSection />);
    expect(screen.getByRole('link', { name: /Explore Education Programmes/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Explore Health Programmes/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Explore Leadership Programmes/i })).toBeInTheDocument();
  });
});
