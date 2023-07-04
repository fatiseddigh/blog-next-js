import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const Header = () => {
  const { user } = useAuth();
  return (
    <header className="bg-white shadow-md py-2 mb-5 px-5 md:px-0">
      <div className="container mx-auto xl:max-w-screen-xl">
        <nav className="flex justify-between">
          <ul className="flex items-center gap-x-4">
            <li>
              <Link href="/" className="py-2 block">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="py-2 block">
                Blogs
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-x-4">
            {user ? (
              <Link href="/profile" className="py-2 block">
                Profile - {user.name}
              </Link>
            ) : (
              <>
                <Link href="/signin" className="py-2 block">
                  Sign in
                </Link>{" "}
                <Link href="/signup" className="py-2 block">
                  Signup
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
