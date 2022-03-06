import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import styles from "./TopSlider.module.css";

const TopSlider = () => {
  return (
    <div className="">
      <Carousel className={`${styles.slider}`}>
        <Carousel.Item className={`${styles.sliderItem}`}>
          <img
            className={`d-block w-100 ${styles.sliderImg}`}
            src="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Restaurants-in-Al-Warqaa-Cover-01-09.jpg"
            alt="First slide"
          />
          <Carousel.Caption className={`${styles.caption}`}>
            <h1>
              Best Upcoming Food
              <Typical
                steps={[" Pizza", 1000, " Mezzban", 1000, " Burger", 1000]}
                loop={Infinity}
                wrapper="p"
              />
            </h1>
            <p className="fs-4 ">Buy one Get one Free</p>
            <Link to="/food">
              <Button
                className={`text-white border border-2 px-4 py-2 ${styles.sliderBtn}`}
                variant="outside-light"
              >
                Order Now <i className="fas fa-angle-double-right"></i>
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={`${styles.sliderItem}`}>
          <img
            className={`d-block w-100 ${styles.sliderImg}`}
            src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/04/Restaurants-CoveR.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className={`${styles.caption}`}>
            <h1>Latest Offers In Pizza And Kacchi</h1>
            <p className="fs-4">Order Now And get 30% off</p>
            <Link to="/food">
              <Button
                className={`text-white border border-2 px-4 py-2 ${styles.sliderBtn}`}
                variant="outside-light"
              >
                Order Now <i className="fas fa-angle-double-right"></i>
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={`${styles.sliderItem}`}>
          <img
            className={`d-block w-100 ${styles.sliderImg}`}
            src="https://media-cdn.tripadvisor.com/media/photo-s/0a/9a/de/12/misal-pav.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className={`${styles.caption}`}>
            <h1>
              <Typical
                steps={[
                  "Best Food",
                  1000,
                  "Best Offer",
                  1000,
                  "Best Price",
                  1000,
                ]}
                loop={Infinity}
                wrapper="b"
              />
            </h1>
            <p className="fs-4">We have best and unique bikes.</p>
            <Link to="/food">
              <Button
                className={`text-white border border-2 px-4 py-2 ${styles.sliderBtn}`}
                variant="outside-light"
              >
                Order Now <i className="fas fa-angle-double-right"></i>
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TopSlider;
