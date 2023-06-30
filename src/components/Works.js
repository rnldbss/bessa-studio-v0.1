import React from "react";
import {
  works,
  card,
  cardText,
  cardTextDetails,
  cardImg,
} from "../styles/works.module.css";

function Works() {
  return (
    <section className={works}>
      <div className={card}>
        <div className={cardText}>
          <h3>Eden Sanctuary</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            minus doloremque itaque hic vitae ipsum a architecto enim, commodi
            explicabo consectetur, maiores ipsa! Illo officia, suscipit tempore
            accusantium minima quis.
          </p>
          <div className={cardTextDetails}>
            <p>
              launched <br /> 2023
            </p>
            <p>
              developed using <br /> Gatsby
            </p>
            <p>
              category <br /> retreat
            </p>
          </div>
          <a href="https://www.plantcopy.com">VISIT EDENSANCTUARY.SO</a>
        </div>
        <div className={cardImg}></div>
      </div>
      <div className={card}>
        <div className={cardText}>
          <h3>Plant Copy</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            minus doloremque itaque hic vitae ipsum a architecto enim, commodi
            explicabo consectetur, maiores ipsa! Illo officia, suscipit tempore
            accusantium minima quis.
          </p>
          <div className={cardTextDetails}>
            <p>
              launched <br /> 2023
            </p>
            <p>
              developed using <br /> Gatsby & Sanity
            </p>
            <p>
              category <br /> portfolio/blog
            </p>
          </div>
          <a href="https://www.plantcopy.com">VISIT PLANTCOPY.COM &#8599;</a>
        </div>
        <div className={cardImg}></div>
      </div>
    </section>
  );
}

export default Works;
