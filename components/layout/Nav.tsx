import { useRouter } from "next/router";
import classes from "./Nav.module.css";

function Nav() {
  const router = useRouter();
  return (
    <header className={classes.header}>
      <div className={classes.headerWrapper}>
        <div className={classes.logo} onClick={() => router.push("/")}>
          LOGO
        </div>
        <nav className={classes.navbar}>
          <ul>
            <li onClick={() => router.push("/")}>Kezdőoldal</li>
            <li onClick={() => router.push("/articles")}>Blog</li>
            <li onClick={() => router.push("/contact")}>Kapcsolat</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
