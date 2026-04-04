import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthLayout({ children, authentication = true }) {
  const [loader, setLoader] = useState(true);
  const authState = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    if (authentication && authState != authentication) navigate("/login");
    else if (!authentication && authState != authentication) navigate("/");
    setLoader(false);
  }, [authState, authentication, navigate]);

  return loader ? <h1> Loading </h1> : <>{children}</>;
}

export default AuthLayout;
