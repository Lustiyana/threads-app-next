/**
 * @format
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

// eslint-disable-next-line no-undef
describe('Button component', () => {
  // eslint-disable-next-line no-undef
  test('renders button with correct children text', () => {
    // eslint-disable-next-line react/no-children-prop
    render(<Button onClick={() => {}} children='Click Me' />);

    const button = screen.getByText(/Click Me/i);
    // eslint-disable-next-line no-undef
    expect(button).toBeInTheDocument();
  });

  // eslint-disable-next-line no-undef
  test('fires onClick event when clicked', () => {
    // eslint-disable-next-line no-undef
    const handleClick = jest.fn();
    // eslint-disable-next-line react/no-children-prop
    render(<Button onClick={handleClick} children='Click Me' />);

    const button = screen.getByText(/Click Me/i);

    fireEvent.click(button);

    // eslint-disable-next-line no-undef
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // eslint-disable-next-line no-undef
  test('applies outline class when outline prop is true', () => {
    // eslint-disable-next-line react/no-children-prop
    render(<Button onClick={() => {}} children='Click Me' outline={true} />);

    const button = screen.getByText(/Click Me/i);
    // eslint-disable-next-line no-undef
    expect(button).toHaveClass('btn-outline');
  });

  // eslint-disable-next-line no-undef
  test('does not apply outline class when outline prop is false', () => {
    // eslint-disable-next-line react/no-children-prop
    render(<Button onClick={() => {}} children='Click Me' outline={false} />);

    const button = screen.getByText(/Click Me/i);
    // eslint-disable-next-line no-undef
    expect(button).not.toHaveClass('btn-outline');
  });

  // eslint-disable-next-line no-undef
  test('applies full class when full prop is true', () => {
    // eslint-disable-next-line react/no-children-prop
    render(<Button onClick={() => {}} children='Click Me' full={true} />);

    const button = screen.getByText(/Click Me/i);
    // eslint-disable-next-line no-undef
    expect(button).toHaveClass('w-full');
  });

  // eslint-disable-next-line no-undef
  test('does not apply full class when full prop is false', () => {
    // eslint-disable-next-line react/no-children-prop
    render(<Button onClick={() => {}} children='Click Me' full={false} />);

    const button = screen.getByText(/Click Me/i);
    // eslint-disable-next-line no-undef
    expect(button).not.toHaveClass('w-full');
  });

  // eslint-disable-next-line no-undef
  test('applies correct type attribute', () => {
    // eslint-disable-next-line react/no-children-prop
    render(<Button onClick={() => {}} children='Click Me' type='submit' />);

    const button = screen.getByText(/Click Me/i);
    // eslint-disable-next-line no-undef
    expect(button).toHaveAttribute('type', 'submit');
  });
});
