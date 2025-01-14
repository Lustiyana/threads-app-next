/**
 * @format
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormContent from "./FormContent";

describe("FormContent component", () => {
  test("renders the content-editable div correctly", () => {
    render(<FormContent onInput={() => {}} />);

    const formContentElement = screen.getByRole("textbox");

    expect(formContentElement).toBeInTheDocument();
    expect(formContentElement).toHaveClass("border");
    expect(formContentElement).toHaveClass("rounded-md");
    expect(formContentElement).toHaveClass("h-24");
    expect(formContentElement).toHaveClass("overflow-y-auto");
    expect(formContentElement).toHaveClass("mb-4");
    expect(formContentElement).toHaveAttribute("contenteditable", "true");
  });

  test("calls onInput function when input changes", () => {
    const mockOnInput = jest.fn();
    render(<FormContent onInput={mockOnInput} />);

    const formContentElement = screen.getByRole("textbox");

    fireEvent.input(formContentElement, {
      target: { textContent: "Hello World" },
    });

    expect(mockOnInput).toHaveBeenCalledTimes(1);
  });
});
