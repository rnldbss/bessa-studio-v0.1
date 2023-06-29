import React from "react";
import {
  services,
  servicesTitle,
  cardWrapper,
  card,
} from "../styles/services.module.css";

function Services() {
  return (
    <section className={services}>
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
          {" "}
          <h3>development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sit
            rem voluptate labore eligendi optio ducimus vero fugiat illum
            dolore?
          </p>
        </div>
        <div className={card}>
          {" "}
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
