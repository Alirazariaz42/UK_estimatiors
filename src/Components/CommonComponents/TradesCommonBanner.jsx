import React, { useState } from "react";

export const TradesCommonBanner = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  return (
    <div>
      {" "}
      <div className=" Estimationbanner">
        <div data-aos={isLargeScreen ? "fade-left" : ""}>
          {" "}
          <p style={{ color: "#ffbf00" }} className="  dream it text-capitalize m-0">
            If you can dream it, we can build it
          </p>
          <p>
            Get expert estimating at the best prices! Enjoy discounts and
            top-notch service for all your project needs.
          </p>
          <button
            style={{ backgroundColor: "#ffbf00" }}
            className="btn btn-warning fw-semibold text-uppercase pe-4 ps-4 text-light"
          >
            GET Estimate
          </button>{" "}
        </div>
        <img
          data-aos={isLargeScreen ? "fade-down-right" : ""}
          className="cta__experience "
          src={require("../../Images/div.cta__experience.png")}
          alt=""
        />
      </div>
    </div>
  );
};
