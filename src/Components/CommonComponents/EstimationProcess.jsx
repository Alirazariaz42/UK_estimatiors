import React, { useState } from "react";

export const EstimationProcess = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  return (
    <div className=" mt-3 mb-3">
      <p className="text-center mt-3 mb-3 fs-3 fw-semibold">
        {" "}
        Estimation <span style={{ color: "#FFBF00" }}>Process</span>{" "}
      </p>

      <div className=" row m-0 w-100 justify-content-center">
        <div
          data-aos={isLargeScreen ? "fade-right" : ""}
          data-aos-delay="400"
          className=" col-lg-3 col-md-6 col-12 justify-content-center d-flex align-items-center"
        >
          {" "}
          <div>
            {" "}
            <img src={require("../../Images/CardImg1.png")} alt="" />
          </div>
        </div>
        <div
          data-aos={isLargeScreen ? "fade-down" : ""}
          data-aos-delay="600"
          className=" col-lg-3 col-md-6 col-12 justify-content-center d-flex align-items-center"
        >
          {" "}
          <div>
            {" "}
            <img src={require("../../Images/CardImg2.png")} alt="" />
          </div>
        </div>
        <div
          data-aos={isLargeScreen ? "fade-up" : ""}
          data-aos-delay="800"
          className=" col-lg-3 col-md-6 col-12 justify-content-center d-flex align-items-center"
        >
          {" "}
          <div>
            {" "}
            <img src={require("../../Images/CardImg3.png")} alt="" />
          </div>
        </div>
        <div
          data-aos={isLargeScreen ? "fade-left" : ""}
          data-aos-delay="1000"
          className=" col-lg-3 col-md-6 col-12 justify-content-center d-flex align-items-center"
        >
          {" "}
          <div>
            {" "}
            <img src={require("../../Images/CardImg4.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
