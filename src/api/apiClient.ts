// src/api/apiClient.ts
import { Api } from "@julioresende23/ead-api-client";
import { getBaseURL } from './getBaseURL';

// You can keep using localStorage or swap to cookies/Redux as needed.
type TokenProvider = () => string | null;

/** Browser-only token reader (localStorage, optionally cookie). */
const tokenProviderFromBrowser: TokenProvider = () => {
  if (typeof window === "undefined") return null;
  try {
    const fromStorage = window.localStorage.getItem("AUTH_TOKEN");
    // If you want cookie fallback:
    // const fromCookie = document.cookie
    //   .split("; ")
    //   .find((row) => row.startsWith("AUTH_TOKEN="))
    //   ?.split("=")[1];
    return fromStorage /* ?? fromCookie ?? null */;
  } catch {
    return null;
  }
};

/** Resolve baseURL for React (Vite or CRA) with a runtime fallback. */
/* function getBaseURL(): string {
  // Vite: import.meta.env.VITE_API_BASE_URL
  // CRA: process.env.REACT_APP_API_BASE_URL
  // Runtime (optional): window.__APP_CONFIG__?.API_BASE_URL injected by index.html
  const vite = typeof import.meta !== "undefined" && (import.meta as any).env?.VITE_API_BASE_URL;
  const cra = typeof process !== "undefined" ? (process.env.REACT_APP_API_BASE_URL as string | undefined) : undefined;
  const runtime = typeof window !== "undefined" ? (window as any).__APP_CONFIG__?.API_BASE_URL : undefined;

  return (vite || cra || runtime || "http://localhost:3000").toString();
} */

/**
 * We pass a *TokenProvider* as the securityData, and the securityWorker
 * calls it at request time so the token is always fresh.
 */
export const api = new Api<TokenProvider>({
  baseURL: getBaseURL(),
  secure: true,
  securityWorker: (provider) => {
    try {
      const token = typeof provider === "function" ? provider() : null;
      return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
    } catch {
      return {};
    }
  },
});


// Use the browser token provider by default.
api.setSecurityData(tokenProviderFromBrowser);
