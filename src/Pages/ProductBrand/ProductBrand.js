import React from "react";

const ProductBrand = () => {
  return (
    <div>
      <section class="products">
        <div class="container px-4 py-5" id="hanging-icons">
          <h2 class="text-left fs-1 fw-bold text-secondary my-5 pb-2 border-bottom">
            Types of Foods
          </h2>
          <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div class="col d-flex align-items-start">
              <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
                <svg
                  //   xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="bi bi-egg-fried"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z" />
                </svg>
              </div>
              <div>
                <h2>Breakfast Food</h2>
                <p>
                  Breakfast kick-starts your metabolism, helping you burn
                  calories throughout the day. It also gives you the energy you
                  need to get things done and helps you focus at work or at
                  school.
                </p>
                {/* <button class="btn btn-primary"> Primary button </button> */}
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
                <svg
                  //   xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="bi bi-egg-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 10a6 6 0 0 1-12 0C2 5.686 5 0 8 0s6 5.686 6 10z" />
                </svg>
              </div>
              <div>
                <h2>Launch Food</h2>
                <p>
                  “Lunch” with no article is the most common form of having a
                  meal in the middle of the day. The word “lunch” is commonly
                  colocated with the verbs “to have”, “to eat” or “go(out) for”
                </p>
                {/* <button class="btn btn-primary"> Primary button </button> */}
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
                <svg
                  //   xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="bi bi-egg"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15a5 5 0 0 1-5-5c0-1.956.69-4.286 1.742-6.12.524-.913 1.112-1.658 1.704-2.164C7.044 1.206 7.572 1 8 1c.428 0 .956.206 1.554.716.592.506 1.18 1.251 1.704 2.164C12.31 5.714 13 8.044 13 10a5 5 0 0 1-5 5zm0 1a6 6 0 0 0 6-6c0-4.314-3-10-6-10S2 5.686 2 10a6 6 0 0 0 6 6z" />
                </svg>
              </div>
              <div>
                <h2>Dinner Food</h2>
                <p>
                  Dinner is the important meal in the daily or another cycle of
                  meals, typically requiring more formal culinary arrangements,
                  table trappings, and etiquette, and probably more abundant
                  foods and drinks.
                </p>
                {/* <button class="btn btn-primary"> Primary button </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductBrand;
