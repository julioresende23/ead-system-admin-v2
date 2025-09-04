import { Navigate } from "react-router-dom";
import { isAuthenticated } from "@/api/auth-validation-api";

type Props = {
  children: JSX.Element;
  redirectTo?: string; // para onde mandar quem já está logado
};

export default function PublicOnlyRoute({ children, redirectTo = "/" }: Props) {
  if (isAuthenticated()) {
    return <Navigate to={redirectTo} replace />;
  }
  return children;
}
