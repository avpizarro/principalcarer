import {
  STORAGE_KEY,
  LIGHT,
  DARK,
  getSystemTheme,
  getStoredTheme,
  setStoredTheme,
  resolveInitialTheme,
  applyTheme,
} from "./theme";

function mockMatchMedia(matches) {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches,
    media: query,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
}

describe("theme", () => {
  beforeEach(() => {
    window.localStorage.clear();
    delete window.matchMedia;
    document.documentElement.removeAttribute("data-theme");
  });

  test("getSystemTheme returns dark when the OS prefers dark", () => {
    mockMatchMedia(true);
    expect(getSystemTheme()).toBe(DARK);
  });

  test("getSystemTheme returns light when the OS prefers light", () => {
    mockMatchMedia(false);
    expect(getSystemTheme()).toBe(LIGHT);
  });

  test("getSystemTheme defaults to light when matchMedia is unavailable", () => {
    expect(getSystemTheme()).toBe(LIGHT);
  });

  test("getStoredTheme returns null when nothing is stored", () => {
    expect(getStoredTheme()).toBeNull();
  });

  test("getStoredTheme returns a previously stored value", () => {
    window.localStorage.setItem(STORAGE_KEY, DARK);
    expect(getStoredTheme()).toBe(DARK);
  });

  test("getStoredTheme ignores invalid stored values", () => {
    window.localStorage.setItem(STORAGE_KEY, "not-a-theme");
    expect(getStoredTheme()).toBeNull();
  });

  test("setStoredTheme persists the value under the storage key", () => {
    setStoredTheme(DARK);
    expect(window.localStorage.getItem(STORAGE_KEY)).toBe(DARK);
  });

  test("resolveInitialTheme prefers a stored value over the system preference", () => {
    mockMatchMedia(false);
    window.localStorage.setItem(STORAGE_KEY, DARK);
    expect(resolveInitialTheme()).toBe(DARK);
  });

  test("resolveInitialTheme falls back to the system preference when nothing is stored", () => {
    mockMatchMedia(true);
    expect(resolveInitialTheme()).toBe(DARK);
  });

  test("applyTheme sets the data-theme attribute on the document root", () => {
    applyTheme(DARK);
    expect(document.documentElement.getAttribute("data-theme")).toBe(DARK);

    applyTheme(LIGHT);
    expect(document.documentElement.getAttribute("data-theme")).toBe(LIGHT);
  });
});
