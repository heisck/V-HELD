import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HomePage from './page';

describe('HomePage Assembly', () => {
  it('renders top section, middle placeholder, and footer', () => {
    render(<HomePage />);

    // Header landmark
    expect(screen.getByRole('navigation', { name: /Main Navigation/i })).toBeInTheDocument();

    // Hero Section
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Give Back/i);

    // Middle placeholder
    expect(screen.getByText('ui to be built')).toBeInTheDocument();

    // Footer landmark
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
