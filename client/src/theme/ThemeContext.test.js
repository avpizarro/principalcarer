import React from "react";
import { render, screen, act } from "@testing-library/react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { STORAGE_KEY, DARK, LIGHT } from "./theme";

let changeListener;

function mockMatchMedia(matches) {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches,
    media: query,
    addEventListener: jest.fn((event, listener) => {
      if (event === "change") {
        changeListener = listener;
      }
    }),
    removeEventListener: jest.fn(),
  }));
}

function fireSystemChange(matches) {
  mockMatchMedia(matches);
  act(() => {
    changeListener();
  });
}

function Probe() {
  const { theme } = useTheme();
  return <span data-testid="theme">{theme}</span>;
}

describe("ThemeProvider system-change behavior", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
    changeListener = undefined;
    mockMatchMedia(false);
  });

  test("live-updates the theme on system change when no manual override is stored", () => {
    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme")).toHaveTextContent(LIGHT);

    fireSystemChange(true);

    expect(screen.getByTestId("theme")).toHaveTextContent(DARK);
    expect(document.documentElement.getAttribute("data-theme")).toBe(DARK);
  });

  test("ignores system changes once a manual override is stored", () => {
    window.localStorage.setItem(STORAGE_KEY, LIGHT);

    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme")).toHaveTextContent(LIGHT);

    fireSystemChange(true);

    expect(screen.getByTestId("theme")).toHaveTextContent(LIGHT);
    expect(document.documentElement.getAttribute("data-theme")).toBe(LIGHT);
  });
});
