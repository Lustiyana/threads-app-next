/**
 * @format
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormContent from './FormContent';

// eslint-disable-next-line no-undef
describe('FormContent component', () => {
  // eslint-disable-next-line no-undef
  test('renders the content-editable div correctly', () => {
    render(<FormContent onInput={() => {}} />);

    const formContentElement = screen.getByRole('textbox');

    // eslint-disable-next-line no-undef
    expect(formContentElement).toBeInTheDocument();
    // eslint-disable-next-line no-undef
    expect(formContentElement).toHaveClass('border');
    // eslint-disable-next-line no-undef
    expect(formContentElement).toHaveClass('rounded-md');
    // eslint-disable-next-line no-undef
    expect(formContentElement).toHaveClass('h-24');
    // eslint-disable-next-line no-undef
    expect(formContentElement).toHaveClass('overflow-y-auto');
    // eslint-disable-next-line no-undef
    expect(formContentElement).toHaveClass('mb-4');
    // eslint-disable-next-line no-undef
    expect(formContentElement).toHaveAttribute('contenteditable', 'true');
  });

  // eslint-disable-next-line no-undef
  test('calls onInput function when input changes', () => {
    // eslint-disable-next-line no-undef
    const mockOnInput = jest.fn();
    render(<FormContent onInput={mockOnInput} />);

    const formContentElement = screen.getByRole('textbox');

    fireEvent.input(formContentElement, {
      target: { textContent: 'Hello World' },
    });

    // eslint-disable-next-line no-undef
    expect(mockOnInput).toHaveBeenCalledTimes(1);
  });
});
