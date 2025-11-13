import React, { useState } from "react";

export const Banner = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  return (
    <div
      data-aos={isLargeScreen ? "flip-down" : ""}
      data-aos-delay="00"
      className=" bannerContainer"
    >
      <div class="paragraph-container">
        <p class="paragraph">
          Select our estimating services for
          <span class="loop-container">
            <span class="loop-word">accuracy</span>
            <span class="loop-word">affordability</span>
            <span class="loop-word">efficiency</span>
          </span>
        </p>
        <div className=" text-center">
          <button className=" fw-semibold btn btn-warning"> Get Started</button>
          <p className=" mb-0 mt-2">
            <img
              src={require("../../Images/Ellipse 5.png")}
              width={35}
              alt=""
            />
            <img
              src={require("../../Images/Ellipse 6.png")}
              width={35}
              alt=""
            />
          </p>
        </div>
      </div>
    </div>
  );
};
