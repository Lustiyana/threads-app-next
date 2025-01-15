/**
 * @format
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Category from './Category';

// eslint-disable-next-line no-undef
describe('Category component', () => {
  // eslint-disable-next-line no-undef
  test('renders category text correctly', () => {
    render(<Category text='Technology' />);

    const categoryElement = screen.getByText(/#Technology/i);

    // eslint-disable-next-line no-undef
    expect(categoryElement).toBeInTheDocument();
  });

  // eslint-disable-next-line no-undef
  test('applies correct class', () => {
    render(<Category text='Science' />);

    const categoryElement = screen.getByText(/#Science/i);

    // eslint-disable-next-line no-undef
    expect(categoryElement).toHaveClass('inline-block');
    // eslint-disable-next-line no-undef
    expect(categoryElement).toHaveClass('px-4');
    // eslint-disable-next-line no-undef
    expect(categoryElement).toHaveClass('py-1');
    // eslint-disable-next-line no-undef
    expect(categoryElement).toHaveClass('mb-4');
    // eslint-disable-next-line no-undef
    expect(categoryElement).toHaveClass('text-sm');
    // eslint-disable-next-line no-undef
    expect(categoryElement).toHaveClass('border');
    // eslint-disable-next-line no-undef
    expect(categoryElement).toHaveClass('rounded-full');
  });
});
