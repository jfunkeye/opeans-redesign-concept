import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "./adminStore";

export default function AdminProtectedRoute() {
  if (!isLoggedIn()) {
    return <Navigate to="/admin" replace />;
  }
  return <Outlet />;
}