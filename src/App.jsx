import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components/index.js";
import { useEffect, useState } from "react";
import authServices from "./appwrite/auth.js";
import { login, logout } from "./store/authSlice.js";
import { useDispatch } from "react-redux";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authServices
      .getCurrentUser()
      .then((userData) => {
        if (userData)    dispatch(login(userData));
        else             dispatch(logout());
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <div>Loading..</div>
  ) : (
    <div className="bg-gray-700 h-[100vh] w-[100vw]">
      <div className="text-3xl text-white text-center">
        <Header />
        Hello
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
