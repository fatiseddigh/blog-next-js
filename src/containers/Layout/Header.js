import { useAuth, useAuthActions } from "@/context/AuthContext";
import Link from "next/link";

const Header = () => {
  const { user, loading } = useAuth();
  const dispatch = useAuthActions();
  return (
    <header className="md:px-0 w-full bg-gradient-to-r from-purple-50 to-purple-200  sticky top-0 z-30">
      <div
        className={` mt-0 py-4 mx-auto xl:max-w-screen-xl transition-all ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <nav className="flex justify-between">
          <ul className="flex items-center gap-x-4">
            <li>
              <Link
                href="/"
                className=" block text-lg  hover:text-slate-600 text-slate-900"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className=" block text-lg  hover:text-slate-600 text-slate-900"
              >
                Blogs
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-x-4">
            {user ? (
              <>
                <button
                  className="bg-red-500 rounded text-red-100 px-2 "
                  onClick={() => dispatch({ type: "SIGNOUT" })}
                >
                  logout
                </button>
                <Link href="/profile" className=" block">
                  Profile - <span className="text-sm">{user.name}</span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/signin"
                  className=" block text-lg  hover:text-slate-600 text-slate-900"
                >
                  Sign in
                </Link>{" "}
                <Link
                  href="/signup"
                  className=" block text-lg  hover:text-slate-600 text-slate-900"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
      <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
    </header>
  );
};

export default Header;
