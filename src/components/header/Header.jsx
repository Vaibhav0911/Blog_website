import { Link, useNavigate } from "react-router-dom";
import { LogoutBtn, Logo, Container } from "../index.js";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-lg">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="rounded-lg transition duration-300 hover:scale-[1.02] focus:outline-none"
            >
              <Logo width="70px" />
            </Link>
          </div>

          {/* Navigation */}
          <ul className="ml-auto flex items-center gap-2 md:gap-3">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="rounded-full px-5 py-2.5 text-sm font-medium text-slate-300 transition duration-300 hover:bg-white/10 hover:text-white"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null,
            )}

            {authStatus && (
              <li className="ml-2">
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
