import React, { useState } from "react";
// import "./CostEstimating.css";
import { HalfTextHalfImg } from "../../Components/CommonComponents/HalfTextHalfImg";
import { HalfImgHalfText } from "../../Components/CommonComponents/HalfImgHalfText";

import { TradesCommonBanner } from "../../Components/CommonComponents/TradesCommonBanner";
import { FourCirules } from "../../Components/CommonComponents/FourCirules";
import { Ourclients } from "../../Components/CommonComponents/Ourclients";
import { EstimationProcess } from "../../Components/CommonComponents/EstimationProcess";
export const Planning = () => {
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
        What is
        <span style={{ color: "#FFBF00" }}>Construction Master Plan</span>{" "}
      </p>
      <p>
        At <b style={{ color: "#FFBF00" }}>UK Estimators</b>, we provide
        comprehensive planning services that act as a roadmap for your
        construction projects. Our expert team creates detailed blueprints to
        guide project planning and execution, ensuring tasks are completed on
        time and within budget. Our solutions also address governmental and
        legal requirements, adapting to changes throughout the project
        lifecycle.
      </p>
    </div>
  );
  const text3 = (
    <div>
      <p className=" fs-4">
        Key Elements of
        <span style={{ color: "#ffbf00" }}> Effective Planning</span>
      </p>
      <p>
        <b>Clear Goals: </b> Set clear, achievable goals to guide the project.{" "}
        <br />
        <b>Scope Definition: </b> Define the project's boundaries, deliverables,
        and requirements. <br />
        <b> Work Breakdown: </b> Break the project into smaller, manageable
        tasks. <br />
        <b>Time Estimation: </b> Estimate the time needed for each task to
        create realistic schedules. <br />
        <b>Resource Management: </b> Assign and manage resources like manpower
        and materials effectively. <br />
        <b> Risk Mitigation:</b> Identify and minimize potential risks to avoid
        disruptions.
        <br />
        <b>Communication Framework: </b> Establish a communication plan for
        transparency and collaboration. <br />
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
        <div>
          <HalfImgHalfText
            className="widthAuto"
            text={text2}
            src={require("../../Images/PlanningHTHI2.png")}
          />
        </div>
      </div>
      <div>
        <TradesCommonBanner />
      </div>
      <div className=" container-md">
        <HalfTextHalfImg
          text={text3}
          src={require("../../Images/PlanningHTHI3.png")}
          // className="widthAuto"
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
