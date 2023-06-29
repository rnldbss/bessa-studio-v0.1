import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { blob } from "../styles/blob.module.css";

const Blob = () => {
  const [viewportSize, setViewportSize] = useState({
    width: 0,
    height: 0,
  });

  const ballRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
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

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);

      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    const updateAnimation = (time, deltaTime) => {
      const delta = deltaTime * fpms;
      const dt = 1.0 - Math.pow(1.0 - speed, delta);

      pos.current.x += (mouse.current.x - pos.current.x) * dt;
      pos.current.y += (mouse.current.y - pos.current.y) * dt;
      xSet(pos.current.x);
      ySet(pos.current.y);
    };

    gsap.ticker.add(updateAnimation);

    const handleResize = () => {
      if (typeof window !== "undefined") {
        setViewportSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove);
        gsap.ticker.remove(updateAnimation);
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    pos.current.x = viewportSize.width / 2;
    pos.current.y = viewportSize.height / 2;
  }, [viewportSize]);

  return <div className={blob} ref={ballRef} />;
};

export default Blob;

// const Blob = () => {
//   const [viewportSize, setViewportSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   const ballRef = useRef(null);
//   const pos = useRef({ x: viewportSize.width / 2, y: viewportSize.height / 2 });
//   const mouse = useRef({ x: pos.current.x, y: pos.current.y });
//   const speed = 0.04;

//   const fpms = 60 / 1000;

//   useEffect(() => {
//     gsap.to(ballRef.current, {
//       rotation: "+=360",
//       duration: 25,
//       repeat: -1,
//     });

//     const ball = ballRef.current;
//     const xSet = gsap.quickSetter(ball, "x", "px");
//     const ySet = gsap.quickSetter(ball, "y", "px");

//     const handleMouseMove = (e) => {
//       mouse.current.x = e.x;
//       mouse.current.y = e.y;
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     const updateAnimation = (time, deltaTime) => {
//       const delta = deltaTime * fpms;
//       const dt = 1.0 - Math.pow(1.0 - speed, delta);

//       pos.current.x += (mouse.current.x - pos.current.x) * dt;
//       pos.current.y += (mouse.current.y - pos.current.y) * dt;
//       xSet(pos.current.x);
//       ySet(pos.current.y);
//     };

//     gsap.ticker.add(updateAnimation);

//     const handleResize = () => {
//       setViewportSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       gsap.ticker.remove(updateAnimation);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return <div className={blob} ref={ballRef} />;
// };

// export default Blob;

// const Blob = () => {
//   const ballRef = useRef(null);
//   const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
//   const mouse = useRef({ x: pos.current.x, y: pos.current.y });
//   const speed = 0.04;

//   const fpms = 60 / 1000;

//   useEffect(() => {
//     gsap.to(ballRef.current, {
//       rotation: "+=360",
//       duration: 25,
//       repeat: -1,
//     });

//     const ball = ballRef.current;
//     const xSet = gsap.quickSetter(ball, "x", "px");
//     const ySet = gsap.quickSetter(ball, "y", "px");

//     const handleMouseMove = (e) => {
//       mouse.current.x = e.x;
//       mouse.current.y = e.y;
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     const updateAnimation = (time, deltaTime) => {
//       const delta = deltaTime * fpms;
//       const dt = 1.0 - Math.pow(1.0 - speed, delta);

//       pos.current.x += (mouse.current.x - pos.current.x) * dt;
//       pos.current.y += (mouse.current.y - pos.current.y) * dt;
//       xSet(pos.current.x);
//       ySet(pos.current.y);
//     };

//     gsap.ticker.add(updateAnimation);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       gsap.ticker.remove(updateAnimation);
//     };
//   }, []);

//   return <div className={blob} ref={ballRef} />;
// };

// export default Blob;
