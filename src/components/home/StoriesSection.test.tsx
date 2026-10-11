import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import StoriesSection from './StoriesSection';

describe('StoriesSection Component', () => {
  it('renders section headline, testimonials, and verified tags', () => {
    render(<StoriesSection />);
    expect(
      screen.getByRole('heading', { name: /Voices from volunteers and/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Kwame Mensah/i)).toBeInTheDocument();
    expect(screen.getByText(/Sarah Jenkins/i)).toBeInTheDocument();
    expect(screen.getByText(/Dr. Ama Osei/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Verified Story/i).length).toBe(3);
  });

  it('renders participant portrait images with descriptive alt text', () => {
    render(<StoriesSection />);
    expect(screen.getByAltText(/Kwame Mensah/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Sarah Jenkins/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Dr. Ama Osei/i)).toBeInTheDocument();
  });

  it('renders link to read full stories', () => {
    render(<StoriesSection />);
    expect(screen.getByRole('link', { name: /Read Field Stories/i })).toHaveAttribute(
      'href',
      '/stories'
    );
  });
});
