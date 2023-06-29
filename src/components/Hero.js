import React from "react";
import { hero, kicker } from "../styles/hero.module.css";

function Hero() {
  return (
    <section className={hero}>
      <h1 className={kicker}>LETS BUILD YOUR WEBSITE</h1>
    </section>
  );
}

export default Hero;
