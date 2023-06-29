import React from "react";
import GithubIcon from "./svg/GithubIcon";
import LinkedinIcon from "./svg/LinkedinIcon";
import { footer, logo, social } from "../styles/footer.module.css";

function Footer() {
  return (
    <footer className={footer}>
      <div className={logo}>
        <span>bessa.dev</span>
        <small>All rights reserved.</small>
      </div>
      <div className={social}>
        <GithubIcon />
        <LinkedinIcon />
      </div>
    </footer>
  );
}

export default Footer;
