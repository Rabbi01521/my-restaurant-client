import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <Header />
      <div
        className={`d-flex align-items-center justify-content-center ${styles.contactBanner}`}
      >
        <h1 className=" text-uppercase text-black fw-bold">Contact Us</h1>
      </div>
      <Container className="my-5">
        <div class={`${styles.box}`}>
          <h1>contact us</h1>
          <p>100 W. Lockwood, Webster Groves, MO 63119</p>
          <div class={`${styles.inputBox}`}>
            <input type="text" name="" autocomplete="off" />
            <label>Your Name</label>
          </div>
          <div class={`${styles.inputBox}`}>
            <input type="text" name="" autocomplete="off" />
            <label>Your Mail</label>
          </div>
          <div class={`${styles.inputBox}`}>
            <input type="text" name="" autocomplete="off" />
            <label>Your Message</label>
          </div>
          <input type="submit" name="" value="submit &#10142;" />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
