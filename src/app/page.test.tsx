import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HomePage from './page';

describe('HomePage Assembly', () => {
  it('renders all assembled sections with semantic landmarks', () => {
    render(<HomePage />);

    // Header landmark
    expect(screen.getByRole('navigation', { name: /Main Navigation/i })).toBeInTheDocument();

    // Hero Section
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Give Back/i);

    // Intro Section
    expect(
      screen.getByRole('heading', { name: /Rooted in Ghanaian communities/i })
    ).toBeInTheDocument();

    // Focus Areas Section
    expect(
      screen.getByRole('heading', { name: /Community priorities shaped into/i })
    ).toBeInTheDocument();

    // How It Works Section
    expect(
      screen.getByRole('heading', { name: /Your journey from application to/i })
    ).toBeInTheDocument();

    // Impact Section
    expect(
      screen.getByRole('heading', { name: /Impact measured in lives, skills, and/i })
    ).toBeInTheDocument();

    // Stories Section
    expect(
      screen.getByRole('heading', { name: /Voices from volunteers and/i })
    ).toBeInTheDocument();

    // CTA Section
    expect(
      screen.getByRole('heading', { name: /Join hands with communities/i })
    ).toBeInTheDocument();

    // Footer landmark
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
