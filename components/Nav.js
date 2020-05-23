import Link from "next/link";
import { useRouter } from "next/router";
import clz from "classnames";

import FASIcon from "./FASIcon";
import styles from "./Nav.module.css";

const navs = [
  { href: "/", icon: "home", text: "Home" },
  { href: "/author", icon: "id-card", text: "Author" },
];

export default function Nav() {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      {navs.map((nav) => (
        <Link href={nav.href} key={nav.text}>
          <a
            className={clz({
              [styles.active]: router.pathname === nav.href,
            })}
          >
            <FASIcon name={nav.icon} />
            <span>{nav.text}</span>
          </a>
        </Link>
      ))}
    </nav>
  );
}
