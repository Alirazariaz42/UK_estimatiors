import React, { useState } from "react";
import "./CostructionTakeOff.css";
import { HalfTextHalfImg } from "../../Components/CommonComponents/HalfTextHalfImg";
import { HalfImgHalfText } from "../../Components/CommonComponents/HalfImgHalfText";

import { TradesCommonBanner } from "../../Components/CommonComponents/TradesCommonBanner";
import { FourCirules } from "../../Components/CommonComponents/FourCirules";
import { Ourclients } from "../../Components/CommonComponents/Ourclients";
import { EstimationProcess } from "../../Components/CommonComponents/EstimationProcess";

export const CostructionTakeOff = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const text = (
    <div>
      <h1 className=" fs-3">Construction Takeoff Services </h1>
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
        When planning your construction project, you need a reliable partner who
        understands your needs. That's where{" "}
        <b style={{ color: "#FFBF00" }}>UK Estimators</b> comes in. We offer
        accurate and hassle-free Construction Takeoff Services to ensure a
        smooth project start. Our services are affordable and backed by
        extensive experience, delivering the best results for you. <br />
        Our services include:
        <ul className=" fw-semibold">
          <li> Material Quantification</li>
          <li> Lumber Takeoffs</li>
          <li> Profit Percentage</li>
          <li> Taxes List</li>
          <li> Material Lists </li>
        </ul>
        Choose UK Estimators for dependable and detailed takeoff services at
        great prices.
      </p>
    </div>
  );
  const text3 = (
    <div>
      <p className=" fs-4">
        Construction
        <span style={{ color: "#ffbf00" }}>Takeoff Service Area</span>
      </p>
      <p>
        We assist clients nationwide with our estimating services. We calculate
        the materials and labor needed for your construction project. Our team
        reviews blueprints and lists materials in an easy-to-use format like
        Excel or Adobe. We're quick and precise, ensuring you have everything
        organized by location for easy site management.
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
        <p className=" text-center fs-4 fw-semibold">
          {" "}
          Primary <span style={{ color: "#FFBF00" }}>
            Takeoff Services
          </span>{" "}
        </p>
        <div className=" row w-100 m-0 justify-content-center">
          <div
            data-aos={isLargeScreen ? "fade-up-right" : ""}
            className=" col-md-6 col-12 d-flex justify-content-center"
          >
            {" "}
            <div>
              <img
                className="QuantitiesMeterial"
                src={require("../../Images/Quantities.png")}
                alt=""
              />
            </div>
          </div>
          <div
            data-aos={isLargeScreen ? "fade-up-left" : ""}
            className=" col-md-6 col-12 d-flex justify-content-center"
          >
            <div>
              <img
                className="QuantitiesMeterial"
                src={require("../../Images/Material.png")}
                alt=""
              />
            </div>
          </div>
        </div>

        <p className=" text-center fs-4 fw-semibold mt-4">
          {" "}
          Benefits of Construction{" "}
          <span style={{ color: "#FFBF00" }}>
            Cost Estimating Services
          </span>{" "}
        </p>
        <div>
          <HalfImgHalfText
            text={text2}
            src={require("../../Images/TakeoFFhthi2.png")}
          />
        </div>
      </div>
      <div>
        <TradesCommonBanner />
      </div>
      <div className=" container-md">
        <HalfImgHalfText
          text={text3}
          src={require("../../Images/TakeOffHTHI3.png")}
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
