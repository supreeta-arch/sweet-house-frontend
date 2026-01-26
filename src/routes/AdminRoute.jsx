import { Navigate } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";

export default function AdminRoute({ children }) {
  const { admin } = useAdmin();

  if (!admin) {
    return <Navigate to="/admin" replace />;
  }

  return children;
}
