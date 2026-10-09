import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HomePage from './page';

describe('HomePage Assembly', () => {
  it('renders all primary landing page sections and landmarks', () => {
    render(<HomePage />);

    // Header landmark
    expect(screen.getByRole('navigation', { name: /Main Navigation/i })).toBeInTheDocument();

    // Hero Section
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Give Back/i);

    // Intro Section
    expect(screen.getByRole('heading', { level: 2, name: /Rooted in Ghanaian communities/i })).toBeInTheDocument();

    // Focus Areas Section
    expect(screen.getByRole('heading', { level: 2, name: /Where volunteers make a lasting difference in Ghana/i })).toBeInTheDocument();

    // Why Volunteer Section
    expect(screen.getByRole('heading', { level: 2, name: /Make your time matter/i })).toBeInTheDocument();

    // How It Works Section
    expect(screen.getByRole('heading', { level: 2, name: /Your volunteer journey/i })).toBeInTheDocument();

    // Impact Section
    expect(screen.getByRole('heading', { level: 2, name: /Measured by lives touched/i })).toBeInTheDocument();

    // Stories Section
    expect(screen.getByRole('heading', { level: 2, name: /Real people. Real relationships/i })).toBeInTheDocument();

    // CTA Section
    expect(screen.getByRole('heading', { level: 2, name: /Ready to give back and/i })).toBeInTheDocument();

    // Footer landmark
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
