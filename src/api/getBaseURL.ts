// src/api/getBaseURL.ts
import { ENV_BASE_URL_MAP, HOST_ENV_RULES } from '../utils/globals';

declare global {
  interface Window {
    __APP_CONFIG__?: { API_BASE_URL?: string };
  }
}

function normalize(url?: string): string | undefined {
  return typeof url === 'string' && url.trim()
    ? url.replace(/\/+$/, '')
    : undefined;
}

function detectEnvFromHost(host?: string): keyof typeof ENV_BASE_URL_MAP {
  const h = (host ?? '').toLowerCase();
  for (const [regex, env] of HOST_ENV_RULES) {
    if (regex.test(h)) return env;
  }
  return 'prod';
}

export function getBaseURL(): string {
  // 1) Runtime override (works for any bundler)
  const runtime = normalize(typeof window !== 'undefined' ? window.__APP_CONFIG__?.API_BASE_URL : undefined);
  if (runtime) return runtime;

  // 2) Build-time envs (Vite or CRA)
  const vite = normalize((typeof import.meta !== 'undefined' ? (import.meta as any).env?.VITE_API_BASE_URL : undefined));
  if (vite) return vite;

  const cra = normalize(typeof process !== 'undefined' ? process.env.REACT_APP_API_BASE_URL : undefined);
  if (cra) return cra;

  // 3) Hostname-based detection
  const host = typeof window !== 'undefined' ? window.location.hostname : '';
  const env = detectEnvFromHost(host);
  const fromMap = normalize(ENV_BASE_URL_MAP[env]);
  if (fromMap) return fromMap;

  // 4) Final fallback
  return 'http://localhost:3000';
}
