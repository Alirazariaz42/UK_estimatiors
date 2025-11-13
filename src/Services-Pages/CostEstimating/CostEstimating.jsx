import React, { useState } from "react";
import "./CostEstimating.css";
import { HalfTextHalfImg } from "../../Components/CommonComponents/HalfTextHalfImg";
import { HalfImgHalfText } from "../../Components/CommonComponents/HalfImgHalfText";

import { TradesCommonBanner } from "../../Components/CommonComponents/TradesCommonBanner";
import { FourCirules } from "../../Components/CommonComponents/FourCirules";
import { Ourclients } from "../../Components/CommonComponents/Ourclients";
import { EstimationProcess } from "../../Components/CommonComponents/EstimationProcess";
export const CostEstimating = () => {
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
      <p>
        <b>Accurate Budgeting:</b> UK Estimators delivers precise estimates,
        enabling you to plan your budget effectively and avoid unexpected costs.
        <br />
        <b>Time Savings:</b> Outsource your estimating tasks to UK Estimators
        and save valuable time to focus on other crucial project aspects.
        <br />
        <b>Better Decision-Making:</b> With detailed cost breakdowns from UK
        Estimators, you can make informed decisions throughout the construction
        process.
        <br />
        <b>Competitive Edge:</b> Our accurate estimates provide a competitive
        advantage, helping you win more bids and secure profitable projects.
        <br />
        <b>Risk Reduction:</b> UK Estimators identifies potential cost risks
        early, helping you manage financial uncertainties and ensure project
        success.
        <br />
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
        <p className=" text-center fs-4 fw-semibold mt-3">
          {" "}
          Benefits of Construction{" "}
          <span style={{ color: "#FFBF00" }}>
            Cost Estimating Services
          </span>{" "}
        </p>
        <div>
          <HalfTextHalfImg
            text={text2}
            src={require("../../Images/SostEstimatioHTHI2.png")}
          />
        </div>
      </div>
      <div>
        <TradesCommonBanner />
      </div>
      <div className=" container-md">
        <HalfImgHalfText
          text={text3}
          src={require("../../Images/CostEstimationHtHI2.png")}
          className="widthAuto"
        />
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
