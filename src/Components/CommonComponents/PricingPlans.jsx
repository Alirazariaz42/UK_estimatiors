import React, { useState } from "react";

export const PricingPlans = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  return (
    <div className=" container">
      <div className=" row m-0 w-100 justify-content-center">
        <div
          data-aos={isLargeScreen ? "fade-right" : ""}
          className="  col-xl-4 col-lg-6 col-12 justify-content-center d-flex align-items-center"
        >
          <div className=" position-relative">
            <button className=" position-absolute  pricingBtn  fw-semibold">
              Get Estimation
            </button>
            <img src={require("../../Images/price3.png")} alt="" />
          </div>
        </div>

        <div
          data-aos={isLargeScreen ? "fade-down" : ""}
          className=" col-xl-4 col-lg-6 col-12 col-12 justify-content-center d-flex align-items-center"
        >
          {" "}
          <div className=" position-relative">
            <button className=" position-absolute  pricingBtn2  fw-semibold">
              Get Estimation
            </button>
            <img src={require("../../Images/price.2.png")} alt="" />
          </div>
        </div>

        <div
          data-aos={isLargeScreen ? "fade-left" : ""}
          className=" col-xl-4 col-lg-6 col-12 col-12 justify-content-center d-flex align-items-center"
        >
          {" "}
          <div className=" position-relative">
            <button className=" position-absolute  pricingBtn  fw-semibold">
              Get Estimation
            </button>
            <img src={require("../../Images/price1.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
