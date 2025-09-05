// src/api/auth-validation-api.ts
import { useEffect, useState } from "react";
import AuthApi from "./auth-api";

type AnyObj = Record<string, any>;
const TOKEN_KEY = "AUTH_TOKEN";

const isBrowser = () => typeof window !== "undefined";

/** Tenta extrair o token do payload da API ou do header Authorization */
function extractToken(res: any): string | null {
  const d = res?.data ?? {};
  const h = res?.headers ?? {};
  const headerAuth = (h?.authorization ?? h?.Authorization) as string | undefined;
 
  if (typeof d.data.token === "string") return d.data.token;
  if (typeof d.accessToken === "string") return d.accessToken;
  if (typeof d.jwt === "string") return d.jwt;
  if (headerAuth?.startsWith("Bearer ")) return headerAuth.slice(7);
  return null;
}

/**
 * Faz login usando /api/auth/signin (padrão) ou /api/auth/signin/loginApi.
 * Salva o token no localStorage quando presente.
 */
export async function login(
  credentials: AnyObj,
  options?: { variant?: "signin" | "signinApi" }
): Promise<{ token: string | null; data: any, user: any }> {
  const variant = options?.variant ?? "signin";
  const res =
    variant === "signinApi"
      ? await AuthApi.signinApi(credentials)
      : await AuthApi.signin(credentials);

  const token = extractToken(res);

  if (token && isBrowser()) {
    try {
      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem('USER_KEYS', JSON.stringify(res.data.data.payload));
   
    } catch {}
  } 
  return { token, data: res.data, user: res.data.data.payload };
}

/** Remove o token do localStorage (logout local). */
export function logout(): void {
  if (!isBrowser()) return;
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch {}
}

/** Helpers opcionais */
export function getToken(): string | null {
  if (!isBrowser()) return null;
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function isAuthenticated(): boolean {
  return !!getToken();
}

/** === NEW: user & roles helpers === */
export type UserPayload = {
  sub?: string;
  name?: string;
  username?: string;
  role?: string;
  roles?: string[];
  [k: string]: any;
};

export function getUser(): UserPayload | null {

  if (!isBrowser()) return null;
  try {
    const raw = JSON.parse(localStorage.getItem('USER_KEYS') || '{}');
    console.log(raw)
    if (!raw) return null;

    return raw as UserPayload;
  } catch {
    return null;
  }
}

export function getUserRoles(): string[] {
  const u = getUser();
    console.log(u)
  const roles = Array.isArray(u?.roles) && u!.roles.length > 0
    ? u!.roles
    : u?.role
      ? [u.role]
      : [];
      console.log(roles)
  return roles.map((r) => String(r).trim().toLowerCase());
}

export function hasAnyRole(allowed: string | string[]): boolean {
  const need = (Array.isArray(allowed) ? allowed : [allowed]).map((r) =>
    String(r).trim().toLowerCase()
  );
  const have = getUserRoles();
  return need.some((r) => have.includes(r));
}

/** === NEW: reactive hook for auth state (isLogedd) === */
export function useAuthStatus() {
  const [isLogedd, setIsLogedd] = useState<boolean>(isAuthenticated());

  useEffect(() => {
    const refresh = () => setIsLogedd(isAuthenticated());
    window.addEventListener("auth:login", refresh);
    window.addEventListener("auth:logout", refresh);
    // também atualiza ao focar a aba
    window.addEventListener("focus", refresh);

    return () => {
      window.removeEventListener("auth:login", refresh);
      window.removeEventListener("auth:logout", refresh);
      window.removeEventListener("focus", refresh);
    };
  }, []);

  return { isLogedd, setIsLogedd };
}
