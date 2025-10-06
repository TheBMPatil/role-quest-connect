import { Navigate } from "react-router-dom";
import { authStore } from "@/stores/authStore";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: ('student' | 'recruiter' | 'admin')[];
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const auth = authStore.getAuth();

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && auth.user && !allowedRoles.includes(auth.user.role)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
