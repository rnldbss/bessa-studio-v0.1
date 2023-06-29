import React from "react";
import { nav, logo, links } from "../styles/navbar.module.css";
import { Link } from "gatsby";

function Navbar() {
  return (
    <nav className={nav}>
      <div className={logo}>
        <span>bessa.dev</span>
      </div>
      <div className={links}>
        <Link>HOME</Link>
        <Link>WORKS</Link>
        <Link>CONTACT</Link>
      </div>
    </nav>
  );
}

export default Navbar;
