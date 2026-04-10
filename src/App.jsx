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
        if (userData)
          dispatch(
            login({
              userData: {
                $id: userData.$id,
                name: userData.name,
                email: userData.email,
              },
            }),
          );
        else dispatch(logout());
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  return loading ? (
    <div>Loading..</div>
  ) : (
    // <div className="bg-gray-300 h-[100vh] w-[100vw]">
    //   <div className="text-3xl text-white text-center">
    //     <Header />
    //     <main>
    //       <Outlet />
    //     </main>
    //     <Footer />
    //   </div>
    // </div>
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1 w-full">
          <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
