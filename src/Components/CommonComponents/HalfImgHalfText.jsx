import React, { useEffect, useState } from "react";
import "./CommonStyle.css";
import AOS from "aos";
import "aos/dist/aos.css";
export const HalfImgHalfText = (props) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  return (
    <div>
      <div className=" row m-0 w-100 d-flex align-items-center justify-content-center mt-3 mb-3">
        <div
          data-aos={isLargeScreen ? "fade-down-right" : ""}
          className=" col-lg-5 col-md-12 d-flex align-items-center justify-content-center "
        >
          <img
            src={props.src}
            className={`HTHIwidth mt-sm-0 mt-4    ${props.className}`}
            alt=""
          />
        </div>
        <div
          data-aos={isLargeScreen ? "fade-down-left" : ""}
          className="col-lg-7 col-md-12  d-flex align-items-center justify-content-center"
        >
          <div> {props.text} </div>
        </div>
      </div>
    </div>
  );
};
