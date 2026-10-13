import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CtaSection from './CtaSection';

describe('CtaSection Component', () => {
  it('renders headline, action buttons, and trust indicators', () => {
    render(<CtaSection />);
    expect(
      screen.getByRole('heading', { name: /Join hands with communities/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Apply/i })).toHaveAttribute('href', '/apply');
    expect(screen.getByRole('link', { name: /Partner/i })).toHaveAttribute('href', '/partner');
    expect(screen.getByText(/Registered Non-Profit in Ghana/i)).toBeInTheDocument();
  });
});

