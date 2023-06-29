import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { blob } from "../styles/blob.module.css";

const Blob = () => {
  const ballRef = useRef(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const mouse = useRef({ x: pos.current.x, y: pos.current.y });
  const speed = 0.04;

  const fpms = 60 / 1000;

  useEffect(() => {
    gsap.to(ballRef.current, {
      rotation: "+=360",
      duration: 25,
      repeat: -1,
    });

    const ball = ballRef.current;
    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    const handleMouseMove = (e) => {
      mouse.current.x = e.x;
      mouse.current.y = e.y;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const updateAnimation = (time, deltaTime) => {
      const delta = deltaTime * fpms;
      const dt = 1.0 - Math.pow(1.0 - speed, delta);

      pos.current.x += (mouse.current.x - pos.current.x) * dt;
      pos.current.y += (mouse.current.y - pos.current.y) * dt;
      xSet(pos.current.x);
      ySet(pos.current.y);
    };

    gsap.ticker.add(updateAnimation);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(updateAnimation);
    };
  }, []);

  return <div className={blob} ref={ballRef} />;
};

export default Blob;
