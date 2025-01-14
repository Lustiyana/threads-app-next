/**
 * @format
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Category from "./Category";

describe("Category component", () => {
  test("renders category text correctly", () => {
    render(<Category text="Technology" />);

    const categoryElement = screen.getByText(/#Technology/i);

    expect(categoryElement).toBeInTheDocument();
  });

  test("applies correct class", () => {
    render(<Category text="Science" />);

    const categoryElement = screen.getByText(/#Science/i);

    expect(categoryElement).toHaveClass("inline-block");
    expect(categoryElement).toHaveClass("px-4");
    expect(categoryElement).toHaveClass("py-1");
    expect(categoryElement).toHaveClass("mb-4");
    expect(categoryElement).toHaveClass("text-sm");
    expect(categoryElement).toHaveClass("border");
    expect(categoryElement).toHaveClass("rounded-full");
  });
});
