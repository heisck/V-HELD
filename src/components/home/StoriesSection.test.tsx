import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import StoriesSection from './StoriesSection';

describe('StoriesSection Component', () => {
  it('renders section title and story authors', () => {
    render(<StoriesSection />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Real people. Real relationships/i);
    expect(screen.getByText('Kwabena Mensah')).toBeInTheDocument();
    expect(screen.getByText('Dr. Elena Fischer')).toBeInTheDocument();
    expect(screen.getByText('Madam Akosua Boakye')).toBeInTheDocument();
  });

  it('renders link to read full stories', () => {
    render(<StoriesSection />);
    expect(
      screen.getByRole('link', { name: /Read More Field Narratives & Community Case Studies/i })
    ).toBeInTheDocument();
  });
});
