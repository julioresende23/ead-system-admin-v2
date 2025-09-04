// src/api/auth-validation-api.ts
import AuthApi from "./auth-api";

type AnyObj = Record<string, any>;
const TOKEN_KEY = "AUTH_TOKEN";

const isBrowser = () => typeof window !== "undefined";

/** Tenta extrair o token do payload da API ou do header Authorization */
function extractToken(res: any): string | null {
  const d = res?.data ?? {};
  const h = res?.headers ?? {};
  const headerAuth = (h?.authorization ?? h?.Authorization) as string | undefined;

  if (typeof d.token === "string") return d.token;
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
): Promise<{ token: string | null; data: any }> {
  const variant = options?.variant ?? "signin";
  const res =
    variant === "signinApi"
      ? await AuthApi.signinApi(credentials)
      : await AuthApi.signin(credentials);

  const token = extractToken(res);

  if (token && isBrowser()) {
    try {
      localStorage.setItem(TOKEN_KEY, token);
    } catch {}
  }

  return { token, data: res.data };
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
