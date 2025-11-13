import React, { useState } from "react";

export const FourCirules = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  return (
    <div>
      <div style={{ backgroundColor: "#FFF9E5" }} className=" pt-3 pb-3">
        <p className=" text-center fs-3">Why Our Services?</p>
        <div className=" d-flex justify-content-center flex-wrap ">
          <div
            data-aos={isLargeScreen ? "fade-left" : ""}
            data-aos-delay="100"
            data-aos-duration="500"
          >
            <img
              className="scale0"
              src={require("../../Images/1o4.webp")}
              alt=""
            />{" "}
          </div>
          <div
            data-aos={isLargeScreen ? "fade-left" : ""}
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <img
              className="scale0"
              src={require("../../Images/2o4.webp")}
              alt=""
            />{" "}
          </div>
          <div
            data-aos={isLargeScreen ? "fade-left" : ""}
            data-aos-delay="500"
            data-aos-duration="500"
          >
            <img
              className="scale0"
              src={require("../../Images/3o4.webp")}
              alt=""
            />{" "}
          </div>
          <div
            data-aos={isLargeScreen ? "fade-left" : ""}
            data-aos-delay="700"
            data-aos-duration="500"
          >
            <img
              className="scale0"
              src={require("../../Images/4o4.webp")}
              alt=""
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
