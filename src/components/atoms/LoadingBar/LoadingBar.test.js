/**
 * @format
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import LoadingBar from "./LoadingBar";

describe("LoadingBar component", () => {
  test("renders the loading spinner", () => {
    render(<LoadingBar />);

    const loadingSpinner = screen.getByRole("status");
    expect(loadingSpinner).toBeInTheDocument();
    expect(loadingSpinner).toHaveClass("loading");
    expect(loadingSpinner).toHaveClass("loading-spinner");
    expect(loadingSpinner).toHaveClass("loading-lg");
    expect(loadingSpinner).toHaveClass("bg-primary");
  });

  test("centers the spinner on the screen", () => {
    render(<LoadingBar />);

    const container = screen.getByRole("status").parentElement;
    expect(container).toHaveClass("flex");
    expect(container).toHaveClass("justify-center");
    expect(container).toHaveClass("items-center");
    expect(container).toHaveClass("h-screen");
  });
});
