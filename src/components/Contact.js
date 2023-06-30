import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import SendIcon from "./svg/SendIcon";
import {
  contact,
  contactEmail,
  contactEmailSend,
  contactImg,
  sendIcon,
} from "../styles/contact.module.css";

function Contact() {
  return (
    <section className={contact}>
      <div className={contactEmail}>
        <h2>Ready?</h2>
        <div className={contactEmailSend}>
          <SendIcon sendIcon={sendIcon} />
          <h3>hello@bessa.dev</h3>
        </div>
      </div>
      <div className={contactImg}>
        <StaticImage src="../images/me.jpg" />
      </div>
    </section>
  );
}

export default Contact;
