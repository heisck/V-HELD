import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('renders brand identity and punchy apply action', () => {
    render(<Navbar />);
    expect(screen.getByLabelText(/V-HELD Home/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /^Apply$/i }).length).toBeGreaterThan(0);
  });

  it('renders essential single-word navigation links on desktop', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: /^About$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^Focus$/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Volunteer/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^Partner$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^Contact$/i })).toBeInTheDocument();
  });

  it('toggles mobile menu drawer', () => {
    render(<Navbar />);
    const toggleButton = screen.getByLabelText(/Open Menu/i);
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.getByLabelText(/Close Menu/i)).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText(/Close Menu/i));
    expect(screen.getByLabelText(/Open Menu/i)).toBeInTheDocument();
  });
});
