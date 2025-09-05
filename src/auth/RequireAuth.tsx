// src/auth/RequireAuth.tsx
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated, hasAnyRole, getUserRoles } from "@/api/auth-validation-api";

type Props = {
  children: JSX.Element;
  redirectTo?: string;        // when NOT authed (default "/login")
  allowedRoles?: string[] | string; // e.g. "Instructor" or ["Instructor", "Admin"]
};

const ROLE_HOME: Record<string, string> = {
  instructor: "/instructor-dashboard",
  student: "/student-dashboard",
};

function resolveFallbackByRoles(roles: string[] | undefined): string {
  if (!roles || roles.length === 0) return "/";
  for (const r of roles) {
    const to = ROLE_HOME[r.toLowerCase()];
    if (to) return to;
  }
  console.log(roles)
  return "/"; // default if some other role
}

export default function RequireAuth({
  children,
  redirectTo = "/login",
  allowedRoles,
}: Props) {
  const location = useLocation();
  const authed = isAuthenticated();

  if (!authed) {
    const next = `${location.pathname}${location.search || ""}${location.hash || ""}`;
    return <Navigate to={`${redirectTo}?next=${encodeURIComponent(next)}`} replace />;
  }

  if (allowedRoles && !hasAnyRole(allowedRoles)) {
    const roles = getUserRoles();           // ["Instructor"] or ["Student"] etc.
    console.log(roles)
    const fallback = resolveFallbackByRoles(roles);
    return <Navigate to={fallback} replace />;
  }

  return children;
}
