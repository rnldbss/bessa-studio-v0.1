import React from "react";
import Navbar from "./Navbar";
import Blob from "./Blob";
import Footer from "./Footer";
import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";

import "../styles/global.css";

function Layout({ children }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.8,
        ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      <div className="layout">
        <Blob />
        <div className="blur"></div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default Layout;
