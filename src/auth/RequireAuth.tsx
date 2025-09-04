import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "@/api/auth-validation-api";

type Props = {
  children: JSX.Element;
  redirectTo?: string; // default: "/login"
};

export default function RequireAuth({ children, redirectTo = "/login" }: Props) {
  const location = useLocation();
  const authed = isAuthenticated(); // lê do localStorage (browser)

  if (!authed) {
    const next = `${location.pathname}${location.search || ""}${location.hash || ""}`;
    return <Navigate to={`${redirectTo}?next=${encodeURIComponent(next)}`} replace />;
  }

  return children;
}
