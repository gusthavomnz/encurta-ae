import { Navigate, Outlet } from "react-router-dom";

function AuthGuard() {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default AuthGuard;
