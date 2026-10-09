import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders brand identity and copyright', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText(/All Rights Reserved/i)).toBeInTheDocument();
    expect(screen.getByText(/Registered NGO in the Republic of Ghana/i)).toBeInTheDocument();
  });

  it('renders essential navigation and safeguarding links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /Education & Teaching/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Child Protection Policy/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Volunteer Code of Conduct/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^Apply$/i })).toBeInTheDocument();
  });
});
