/**
 * @format
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingBar from './LoadingBar';

// eslint-disable-next-line no-undef
describe('LoadingBar component', () => {
  // eslint-disable-next-line no-undef
  test('renders the loading spinner', () => {
    render(<LoadingBar />);

    const loadingSpinner = screen.getByRole('status');
    // eslint-disable-next-line no-undef
    expect(loadingSpinner).toBeInTheDocument();
    // eslint-disable-next-line no-undef
    expect(loadingSpinner).toHaveClass('loading');
    // eslint-disable-next-line no-undef
    expect(loadingSpinner).toHaveClass('loading-spinner');
    // eslint-disable-next-line no-undef
    expect(loadingSpinner).toHaveClass('loading-lg');
    // eslint-disable-next-line no-undef
    expect(loadingSpinner).toHaveClass('bg-primary');
  });

  // eslint-disable-next-line no-undef
  test('centers the spinner on the screen', () => {
    render(<LoadingBar />);

    const container = screen.getByRole('status').parentElement;
    // eslint-disable-next-line no-undef
    expect(container).toHaveClass('flex');
    // eslint-disable-next-line no-undef
    expect(container).toHaveClass('justify-center');
    // eslint-disable-next-line no-undef
    expect(container).toHaveClass('items-center');
    // eslint-disable-next-line no-undef
    expect(container).toHaveClass('h-screen');
  });
});
