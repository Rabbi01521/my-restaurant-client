import React from "react";
import { Container } from "react-bootstrap";
import breakfast from "../../images/Breakfast/breakfast5.png";
import breakfast1 from "../../images/Dinner/dinner4.png";
import breakfast2 from "../../images/lunch/lunch5.png";
import styles from "./Facilities.module.css";

const Facilities = () => {
  return (
    <div className={`my-3 ${styles.statusSection}`}>
      <Container>
        <div className="text-left mx-auto ">
          <h2 className="text-secondary fw-bold">Why You Choose Us?</h2>
          <hr />
        </div>
        <div class="container px-4 py-5" id="custom-cards">
          <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div class="col">
              <div
                class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                style={{ backgroundImage: `url(${breakfast})` }}
              >
                <div class="d-flex flex-column h-100 p-5 pb-3 text-info text-shadow-1">
                  <h2 class="pt-5 mt-5 mb-4 display-4 lh-1 fw-bold">
                    FREE SHIPPING
                  </h2>
                </div>
              </div>
            </div>

            <div class="col">
              <div
                class="card card-cover h-100 overflow-hidden text-info bg-dark rounded-5 shadow-lg"
                style={{ backgroundImage: `url(${breakfast1})` }}
              >
                <div class="d-flex flex-column h-100 p-5 pb-3 text-info text-shadow-1">
                  <h2 class="pt-5 mt-5 mb-4 display-4 lh-1 fw-bold">
                    MONEY RETURN
                  </h2>
                </div>
              </div>
            </div>

            <div class="col">
              <div
                class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                style={{ backgroundImage: `url(${breakfast2})` }}
              >
                <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1 text-info">
                  <h2 class="pt-5 mt-5 mb-4 display-4 lh-1 fw-bold">
                    MEMBER DISCOUNT
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Facilities;
