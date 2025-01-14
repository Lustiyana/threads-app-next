/**
 * @format
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  test("renders button with correct children text", () => {
    render(<Button onClick={() => {}} children="Click Me" />);

    const button = screen.getByText(/Click Me/i);
    expect(button).toBeInTheDocument();
  });

  test("fires onClick event when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} children="Click Me" />);

    const button = screen.getByText(/Click Me/i);

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies outline class when outline prop is true", () => {
    render(<Button onClick={() => {}} children="Click Me" outline={true} />);

    const button = screen.getByText(/Click Me/i);
    expect(button).toHaveClass("btn-outline");
  });

  test("does not apply outline class when outline prop is false", () => {
    render(<Button onClick={() => {}} children="Click Me" outline={false} />);

    const button = screen.getByText(/Click Me/i);
    expect(button).not.toHaveClass("btn-outline");
  });

  test("applies full class when full prop is true", () => {
    render(<Button onClick={() => {}} children="Click Me" full={true} />);

    const button = screen.getByText(/Click Me/i);
    expect(button).toHaveClass("w-full");
  });

  test("does not apply full class when full prop is false", () => {
    render(<Button onClick={() => {}} children="Click Me" full={false} />);

    const button = screen.getByText(/Click Me/i);
    expect(button).not.toHaveClass("w-full");
  });

  test("applies correct type attribute", () => {
    render(<Button onClick={() => {}} children="Click Me" type="submit" />);

    const button = screen.getByText(/Click Me/i);
    expect(button).toHaveAttribute("type", "submit");
  });
});
