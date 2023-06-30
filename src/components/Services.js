import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Spline from "@splinetool/react-spline";
import {
  services,
  servicesTitle,
  cardWrapper,
  card,
  cardText,
  cardImg,
} from "../styles/services.module.css";

function Services() {
  gsap.registerPlugin(ScrollTrigger);
  const servicesRef = useRef();

  useLayoutEffect(() => {
    gsap.from(servicesRef.current, {
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top bottom",
        end: "center bottom",
        scrub: 1,
      },
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
          <div className={cardText}>
            <h3>Custom Website</h3>
            <p>
              Your brand deserves to shine in the digital space. Invest in a
              custom website tailored to your business goals and target
              audience. I combine creativity, expertise, and attention to detail
              to create a website that not only looks stunning but also drives
              results, elevating your brand above the competition.
            </p>
          </div>
          <div className={cardImg}>
            <Spline scene="https://prod.spline.design/qPr6SkCR0GknjHm9/scene.splinecode" />
          </div>
        </div>
        <div className={card}>
          <div className={cardText}>
            <h3>High-performing Website</h3>
            <p>
              In a world of short attention spans, high-performing websites are
              a must. Capture and engage your audience with blazing fast-loading
              pages, intuitive navigation, and compelling design. Ensure your
              website is responsive, seamlessly adapting to any device, and
              keeping visitors hooked. Drive your business forward with a
              website that maximizes user experience and boosts conversions.
            </p>
          </div>
          <div className={cardImg}>
            <Spline scene="https://prod.spline.design/I0byPTXI1KPHzd9Y/scene.splinecode" />
          </div>
        </div>{" "}
        <div className={card}>
          <div className={cardText}>
            <h3>Easy to Manage</h3>
            <p>
              Experience the perfect blend of power and simplicity with high-end
              CMS (Content Management System). We empower you to effortlessly
              manage your website with intuitive controls and a user-friendly
              interface. Focus on your content while we handle the technical
              complexities, ensuring a seamless experience for both you and your
              visitors.
            </p>
          </div>
          <div className={cardImg}> </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
