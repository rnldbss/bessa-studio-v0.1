import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Draggable } from "gsap/all";
import { StaticImage } from "gatsby-plugin-image";
import {
  services,
  servicesTitle,
  cardWrapper,
  card,
  cardText,
  cardImg,
  blockImg,
  sliderContainer,
  sliderBall,
} from "../styles/services.module.css";

function Services() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(Draggable);

  const servicesRef = useRef();
  const sliderRef = useRef([null, null, null]);
  const sliderContainerRef = useRef(null);
  const draggables = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".light", {
        scrollTrigger: {
          trigger: ".light",
          start: "bottom bottom",
          scrub: 1,
        },
        yPercent: 100,
        xPercent: -10,
      });
      gsap.to(".block2", {
        scrollTrigger: {
          trigger: ".blockWrapper",
          start: "top bottom",

          end: "center center",
          scrub: 1,
        },
        yPercent: 100,
      });
      gsap.to(".block3", {
        scrollTrigger: {
          trigger: ".blockWrapper",
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
        },
        yPercent: 30,
      });
      gsap.to(".block4", {
        scrollTrigger: {
          trigger: ".blockWrapper",
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
        },
        yPercent: -25,
      });
    }, servicesRef);

    // gsap.from(servicesRef.current, {
    //   scrollTrigger: {
    //     trigger: servicesRef.current,
    //     start: "top bottom",
    //     end: "center bottom",
    //     scrub: 1,
    //   },
    // });
  }, []);
  useLayoutEffect(() => {
    const sliders = sliderRef.current;
    const container = sliderContainerRef.current;

    sliders.forEach((slider, index) => {
      draggables.current[index] = Draggable.create(slider, {
        type: "y",
        bounds: container,
        onDrag: () => updateSliderColor(index),
      });
    });

    return () => {
      draggables.current.forEach((draggable) => draggable.kill());
    };
  }, []);

  const updateSliderColor = (sliderIndex) => {
    const sliders = sliderRef.current;
    const container = sliderContainerRef.current;
    const containerHeight = container.offsetHeight;
    const slider = sliders[sliderIndex];
    const position =
      slider.getBoundingClientRect().top -
      container.getBoundingClientRect().top;
    const percentage = (position / containerHeight) * 100;

    gsap.to(container, {
      background: getSliderColor(percentage),
      ease: "power1.out",
      duration: 0.5,
    });
  };

  const getSliderColor = (percentage) => {
    if (percentage < 25) {
      return "linear-gradient(to bottom, #4776E6, #8E54E9)";
    } else if (percentage < 50) {
      return "linear-gradient(to bottom, #00d2ff, #3a7bd5)";
    } else if (percentage < 75) {
      return "linear-gradient(to bottom, #6441A5, #2a0845)";
    } else {
      return "linear-gradient(to bottom, #0575E6, #021B79)";
    }
  };

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
            <div
              className={sliderContainer}
              id="sliderBounds"
              ref={sliderContainerRef}
            >
              <div
                ref={(el) => (sliderRef.current[0] = el)}
                className={sliderBall}
              ></div>
              <div
                ref={(el) => (sliderRef.current[1] = el)}
                className={sliderBall}
              ></div>
              <div
                ref={(el) => (sliderRef.current[2] = el)}
                className={sliderBall}
              ></div>
            </div>
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
            <StaticImage className="light" src="../images/lightning.png" />
          </div>
        </div>
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
          <div className={`${cardImg} blockWrapper`}>
            <StaticImage className={blockImg} src="../images/block-1.png" />
            <StaticImage
              className={`${blockImg} block2`}
              src="../images/block-2.png"
            />
            <StaticImage
              className={`${blockImg} block4`}
              src="../images/block-4.png"
            />
            <StaticImage className={blockImg} src="../images/block-5.png" />{" "}
            <StaticImage
              className={`${blockImg} block3`}
              src="../images/block-3.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
