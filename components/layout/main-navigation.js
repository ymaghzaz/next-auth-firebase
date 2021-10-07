import Link from "next/link";
import { getSession, useSession, signOut } from "next-auth/client";
import classes from "./main-navigation.module.css";

const MainNavigation = () => {
  const [session, loading] = useSession();

  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <div className={classes.logo}>Home</div>
        </a>
      </Link>
      <nav>
        <ul>
          {!session && (
            <li>
              <Link href="/SingIn">Login</Link>
            </li>
          )}

          {session && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
          {session && (
            <li>
              <button
                onClick={() => {
                  signOut();
                }}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
