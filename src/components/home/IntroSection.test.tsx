import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import IntroSection from './IntroSection';

describe('IntroSection Component', () => {
  it('renders headline, narrative, and initial Ghanaian track details', () => {
    render(<IntroSection />);
    expect(
      screen.getByRole('heading', { name: /Rooted in Ghanaian communities/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Serve your communities across Ghana/i)).toBeInTheDocument();
  });

  it('switches to international volunteer track on tab click', () => {
    render(<IntroSection />);
    const intlTab = screen.getByRole('tab', { name: /International Volunteers/i });
    fireEvent.click(intlTab);

    expect(
      screen.getByText(/Experience Ghana through authentic service/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Airport reception and comprehensive cultural orientation/i)
    ).toBeInTheDocument();
  });

  it('renders showcase image with descriptive alt text', () => {
    render(<IntroSection />);
    const img = screen.getByAltText(/Ghanaian community leaders and volunteers collaborating/i);
    expect(img).toBeInTheDocument();
  });
});
