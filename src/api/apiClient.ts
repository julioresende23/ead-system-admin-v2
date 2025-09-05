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
