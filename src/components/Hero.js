import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { hero, kicker, kickerWrapper } from "../styles/hero.module.css";

function Hero() {
  const heroRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let heroTl = gsap.timeline();
      heroTl.from("#firstSentence", {
        yPercent: 100,
        duration: 1.3,
        delay: 0.3,
        ease: "expo.out",
      });
      heroTl.from("#secondSentence", {
        yPercent: 100,
        duration: 1,
        ease: "expo.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={heroRef} className={hero}>
      <div className={kickerWrapper}>
        <h1 className={kicker}>
          <span id="firstSentence">Crafting Experiences</span>
        </h1>
      </div>
      <div className={kickerWrapper}>
        <h1 className={kicker}>
          <span id="secondSentence">where creativity and code converge</span>
        </h1>
      </div>
    </section>
  );
}

export default Hero;
