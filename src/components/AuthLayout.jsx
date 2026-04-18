import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import  { useEffect, useState } from "react";

function AuthLayout({ authentication = true }) {

  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    //TODO: make it more easy to understand

    // if (authStatus ===true){
    //     navigate("/")
    // } else if (authStatus === false) {
    //     navigate("/login")
    // }

    //let authValue = authStatus === true ? true : false

    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return  loader ? <h1>Loading...</h1> :  <Outlet />;
}

export default AuthLayout;
