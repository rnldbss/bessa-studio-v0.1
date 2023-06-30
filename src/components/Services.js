import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  services,
  servicesTitle,
  cardWrapper,
  card,
} from "../styles/services.module.css";

function Services() {
  gsap.registerPlugin(ScrollTrigger);
  const servicesRef = useRef();

  useLayoutEffect(() => {
    gsap.from(servicesRef.current, {
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top bottom",
        end: "center center",
        scrub: 1,
      },
      scale: 0.93,
    });
  }, []);
  return (
    <section className={services} ref={servicesRef}>
      <div className={servicesTitle}>
        <h2>you need a website</h2>
        <h2>you need a performing website</h2>
      </div>
      <div className={cardWrapper}>
        <div className={card}>
          <h3>planing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sit
            rem voluptate labore eligendi optio ducimus vero fugiat illum
            dolore?
          </p>
        </div>
        <div className={card}>
          <h3>development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sit
            rem voluptate labore eligendi optio ducimus vero fugiat illum
            dolore?
          </p>
        </div>
        <div className={card}>
          <h3>launch</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sit
            rem voluptate labore eligendi optio ducimus vero fugiat illum
            dolore?
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
