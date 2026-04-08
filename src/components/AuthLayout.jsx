import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

function AuthLayout({ authentication = true }) {
  const authStatus = useSelector((state) => state.auth.status);
   
  if (authentication && !authStatus) {
    return <Navigate to="/login" />;
  }

  if (!authentication && authStatus) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default AuthLayout;
