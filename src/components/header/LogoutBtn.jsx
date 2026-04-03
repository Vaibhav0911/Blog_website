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
        className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutBtn;
