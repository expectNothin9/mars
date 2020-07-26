import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import clz from "classnames";

import FASIcon from "./FASIcon";

const StyledNav = styled.nav`
  display: flex;
  font-family: Lobster;
  align-items: center;

  a {
    --nav-i-box: 1.5rem;
    --nav-i: 1.25rem;
    --nav-h: 2rem;
    height: var(--nav-h);
    display: flex;
    align-items: center;

    color: var(--txt-secondary);
    text-decoration: none;
    border-bottom: 2px solid transparent;
  }
  a:hover {
    border-color: var(--mono);
  }
  a.active,
  a.active:hover {
    color: var(--txt-primary);
    border-color: var(--mono-dark);
  }
  a:not(:last-child) {
    margin-right: var(--space-md);
  }

  a i {
    width: var(--nav-i-box);
    height: var(--nav-i-box);
    font-size: var(--nav-i);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: var(--space-sm);
  }
`;

const navs = [
  { href: "/", icon: "home", text: "Home" },
  { href: "/weather", icon: "cloud-sun", text: "Weather" },
  { href: "/author", icon: "id-card", text: "Author" },
];

export default function Nav() {
  const router = useRouter();
  return (
    <StyledNav>
      {navs.map((nav) => (
        <Link href={nav.href} key={nav.text}>
          <a className={clz({ active: router.pathname === nav.href })}>
            <FASIcon name={nav.icon} />
            <span>{nav.text}</span>
          </a>
        </Link>
      ))}
    </StyledNav>
  );
}
