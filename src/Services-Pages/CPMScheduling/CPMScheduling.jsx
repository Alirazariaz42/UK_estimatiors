import React, { useState } from "react";
// import "./CostEstimating.css";
import { HalfTextHalfImg } from "../../Components/CommonComponents/HalfTextHalfImg";
import { HalfImgHalfText } from "../../Components/CommonComponents/HalfImgHalfText";

import { TradesCommonBanner } from "../../Components/CommonComponents/TradesCommonBanner";
import { FourCirules } from "../../Components/CommonComponents/FourCirules";
import { Ourclients } from "../../Components/CommonComponents/Ourclients";
import { EstimationProcess } from "../../Components/CommonComponents/EstimationProcess";
export const CPMScheduling = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const text = (
    <div>
      <h1 className=" fs-3">Construction Cost Estimating Services </h1>
      <p>
        Uk Estimators is your trusted partner for precise and reliable
        construction cost estimating services. Our highly skilled team is
        dedicated to providing accurate estimates for projects of all sizes and
        complexities. From comprehensive blueprint analysis to timely delivery,
        we ensure every detail is meticulously accounted for. Our commitment to
        excellence guarantees client satisfaction at every step of the way.
        Whether you’re working on a small residential build or a large
        commercial project, choose Uk Estimators for unparalleled expertise and
        dependable service. Reach out to us at ukestimators@gmail.com or +1 917
        300 1079 to discuss your next project. <br />
        <span className=" fw-semibold ">
          Meeting Your Needs: Custom Construction Cost Estimating Services:
        </span>
        <div className=" d-flex justify-content-between mt-2 flex-sm-row flex-column ">
          <div>
            {" "}
            <ul className="   m-0 fw-semibold">
              <li className=" "> General Contractors</li>
              <li className=" ">investors</li>
              <li className=" ">owners</li>
            </ul>
          </div>
          <div>
            {" "}
            <ul className="   m-0 fw-semibold">
              <li className=" ">Subcontractors </li>
              <li className=" ">Architects</li>
              <li className=" ">Developers </li>
            </ul>
          </div>
          <div>
            {" "}
            <ul className="  m-0  fw-semibold">
              <li className=" ">Projects managers</li>
              <li className=" ">home builders </li>
              <li className=" ">vendors</li>
            </ul>
          </div>
        </div>
      </p>
    </div>
  );
  const text2 = (
    <div>
      <p className=" fs-4 fw-semibold mt-3">
        {" "}
        Scheduling
        <span style={{ color: "#FFBF00" }}> Software’s</span>{" "}
      </p>
      <p>
        Our experienced team excels in creating and managing schedules using
        advanced construction consulting software tools, ensuring precise
        project management.
      </p>
    </div>
  );
  const text3 = (
    <div>
      <p className=" fs-4">
        Our Construction{" "}
        <span style={{ color: "#ffbf00" }}>Cost Estimating Process</span>
      </p>
      <p>
        At <b style={{ color: "#ffbf00" }}>UK Estimators</b>, we focus on
        accurate, efficient, and client-centered construction cost estimating.
        With our expertise and advanced tools, we carefully analyze your project
        requirements to ensure comprehensive cost coverage. We promise timely
        estimates to facilitate smooth project planning and execution. Rely on
        us for reliable and transparent cost estimating services, ensuring the
        success of your project and your peace of mind.
      </p>
    </div>
  );
  return (
    <div style={{ paddingTop: "80px" }}>
      <div className=" container-md">
        <HalfTextHalfImg text={text} src={require("../../Images/CEHTHI.png")} />
      </div>
      <div>
        <FourCirules />
      </div>
      <div className=" container-md">
        {/* 
        <div>
         
        </div> */}
      </div>

      <div className=" container-md">
        <div>
          <div className=" row m-0 w-100 d-flex align-items-center justify-content-center mt-3 mb-3">
            <div
              data-aos={isLargeScreen ? "fade-down-right" : ""}
              className=" col-lg-3 col-md-12 d-flex align-items-center justify-content-center "
            >
              <img src={require("../../Images/CPMC1.png")} alt="" />
            </div>
            <div
              data-aos={isLargeScreen ? "fade-down-left" : ""}
              className="col-lg-9 col-md-12  d-flex align-items-center justify-content-center"
            >
              <div>
                {" "}
                <p
                  style={{ color: "#ffbf00" }}
                  className="  m-0 p-0 fs-4  text-capitalize"
                >
                  Project Planning Schedules
                </p>
                <p>
                  We assist clients nationwide with our estimating services. We
                  calculate the materials and labor needed for your construction
                  project. Our team reviews blueprints and lists materials in an
                  easy-to-use format like Excel or Adobe. We're quick and
                  precise, ensuring you have everything organized by location
                  for easy site management.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" row m-0 w-100 d-flex align-items-center justify-content-center mt-3 mb-3">
            <div
              data-aos={isLargeScreen ? "fade-down-right" : ""}
              className=" col-lg-9 col-md-12 order-lg-0 order-md-1 d-flex align-items-center justify-content-center "
            >
              <div className=" ps-lg-3">
                <p
                  style={{ color: "#ffbf00" }}
                  className="  m-0 p-0 fs-4  text-capitalize"
                >
                  Progress Schedule Updates & Monitoring
                </p>
                <p>
                  We ensure the contractor's schedule is regularly updated and
                  provide detailed progress reports to monitor the project's
                  status. Additionally, we create visual graphics that compare
                  actual production progress with the planned schedule.
                </p>
              </div>
            </div>
            <div
              data-aos={isLargeScreen ? "fade-down-left" : ""}
              className="col-lg-3 col-md-12 order-lg-1 order-md-0 d-flex align-items-center justify-content-center "
            >
              <div>
                <img src={require("../../Images/CPMC2.png")} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" row m-0 w-100 d-flex align-items-center justify-content-center mt-3 mb-3">
            <div
              data-aos={isLargeScreen ? "fade-down-right" : ""}
              className=" col-lg-3 col-md-12 d-flex align-items-center justify-content-center "
            >
              <img src={require("../../Images/CPMC3.png")} alt="" />
            </div>
            <div
              data-aos={isLargeScreen ? "fade-down-left" : ""}
              className="col-lg-9 col-md-12  d-flex align-items-center justify-content-center"
            >
              <div>
                {" "}
                <p
                  style={{ color: "#ffbf00" }}
                  className="  m-0 p-0 fs-4  text-capitalize"
                >
                  Benefits we Deliver to you
                </p>
                <p>
                  We maintain updated contractor schedules and offer detailed
                  progress reports to track project status. Our visual graphics
                  compare actual production progress with the planned schedule,
                  ensuring clarity and proactive management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <TradesCommonBanner />
      </div>
      <div className=" container-md">
        <HalfTextHalfImg text={text2} src={require("../../Images/tools.png")} />
      </div>
      <div>
        <Ourclients />
      </div>
      <div>
        <EstimationProcess />
      </div>
    </div>
  );
};
