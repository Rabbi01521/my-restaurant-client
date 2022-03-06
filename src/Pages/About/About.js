import React from "react";
import { Container } from "react-bootstrap";
import icon from "../../images/ICON/Group 2.png";
import people1 from "../../images/Image/adult-blur-blurred-background-687824.png";
import people2 from "../../images/Image/chef-cook-food-33614.png";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import styles from "./About.module.css";

const About = () => {
  return (
    <div>
      <Header />
      <div>
        <div
          className={`d-flex align-items-center justify-content-center ${styles.aboutBanner}`}
        >
          <h1 className=" text-uppercase text-black fw-bold">About Us</h1>
        </div>
        <div className={`${styles.membersSection}`}>
          <Container>
            <div class="container px-4 py-5" id="custom-cards">
              <h2 class="pb-2 border-bottom">Team Members</h2>

              <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                <div class="col">
                  <div
                    class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                    style={{
                      backgroundImage: `url(${people1})`,
                    }}
                  >
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                      <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                        Chef Cook Food
                      </h2>
                      <ul class="d-flex list-unstyled mt-auto">
                        <li class="me-auto">
                          <img
                            src={icon}
                            alt="Bootstrap"
                            width="32"
                            height="32"
                            class="rounded-circle border border-white"
                          />
                        </li>
                        <li class="d-flex align-items-center me-3">
                          <svg class="bi me-2" width="1em" height="1em"></svg>
                          <small class="text-black">Earth</small>
                        </li>
                        <li class="d-flex align-items-center">
                          <svg class="bi me-2" width="1em" height="1em"></svg>
                          <small class="text-black">3d</small>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div
                    class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                    style={{
                      backgroundImage: `url(${people2})`,
                    }}
                  >
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                      <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                        Chef Cook Food
                      </h2>
                      <ul class="d-flex list-unstyled mt-auto">
                        <li class="me-auto">
                          <img
                            src={icon}
                            alt="Bootstrap"
                            width="32"
                            height="32"
                            class="rounded-circle border border-white"
                          />
                        </li>
                        <li class="d-flex align-items-center me-3">
                          <svg class="bi me-2" width="1em" height="1em"></svg>
                          <small class="text-black">Pakistan</small>
                        </li>
                        <li class="d-flex align-items-center">
                          <svg class="bi me-2" width="1em" height="1em"></svg>
                          <small class="text-black">4d</small>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div
                    class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                    style={{
                      backgroundImage: `url(${people1})`,
                    }}
                  >
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                      <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                        Chef Cook Food
                      </h2>
                      <ul class="d-flex list-unstyled mt-auto">
                        <li class="me-auto">
                          <img
                            src={icon}
                            alt="Bootstrap"
                            width="32"
                            height="32"
                            class="rounded-circle border border-white"
                          />
                        </li>
                        <li class="d-flex align-items-center me-3">
                          <svg class="bi me-2" width="1em" height="1em"></svg>
                          <small class="text-black">California</small>
                        </li>
                        <li class="d-flex align-items-center">
                          <svg class="bi me-2" width="1em" height="1em"></svg>
                          <small class="text-black">5d</small>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
