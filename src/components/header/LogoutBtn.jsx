import authServices from "../../appwrite/auth.js";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice.js";

function LogoutBtn() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    authServices
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch(() => {
        console.log("Error on logout user");
      });
  };

  return (
    <div>
      <button
        className="rounded-full bg-red-500/10 px-5 py-2.5 text-sm font-semibold text-red-300 transition duration-300 hover:bg-red-500 hover:text-white"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutBtn;
