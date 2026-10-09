import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WhyVolunteerSection from './WhyVolunteerSection';

describe('WhyVolunteerSection Component', () => {
  it('renders section title and key value pillars', () => {
    render(<WhyVolunteerSection />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Make your time matter/i);
    expect(screen.getByRole('heading', { level: 3, name: /Meaningful Community Impact/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Authentic Local Relationships/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Practical Skill Development/i })).toBeInTheDocument();
  });

  it('renders Who Can Volunteer callout with apply link', () => {
    render(<WhyVolunteerSection />);
    expect(screen.getByRole('heading', { level: 3, name: /Who can volunteer with V-HELD\?/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^Apply$/i })).toBeInTheDocument();
  });
});
