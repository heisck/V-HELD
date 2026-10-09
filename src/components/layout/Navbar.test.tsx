import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('renders brand identity and primary call to action', () => {
    render(<Navbar />);
    expect(screen.getByLabelText(/V-HELD Homepage/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Apply to Volunteer/i).length).toBeGreaterThan(0);
  });

  it('renders essential navigation links on desktop', () => {
    render(<Navbar />);
    expect(screen.getAllByText('Focus Areas')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Why Volunteer')[0]).toBeInTheDocument();
    expect(screen.getAllByText('How It Works')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Impact')[0]).toBeInTheDocument();
  });

  it('toggles mobile menu open and closed', () => {
    render(<Navbar />);
    const toggleButton = screen.getByLabelText(/Open Navigation Menu/i);
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.getByLabelText(/Close Navigation Menu/i)).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText(/Close Navigation Menu/i));
    expect(screen.getByLabelText(/Open Navigation Menu/i)).toBeInTheDocument();
  });
});
