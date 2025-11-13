import React, { useState } from "react";
// import "./CostEstimating.css";
import { HalfTextHalfImg } from "../../Components/CommonComponents/HalfTextHalfImg";
import { HalfImgHalfText } from "../../Components/CommonComponents/HalfImgHalfText";

import { TradesCommonBanner } from "../../Components/CommonComponents/TradesCommonBanner";
import { Banner2 } from "../../Components/CommonComponents/Banner2";
import { Ourclients } from "../../Components/CommonComponents/Ourclients";
import { EstimationProcess } from "../../Components/CommonComponents/EstimationProcess";
export const MaterialTakeOff = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const text = (
    <div>
      <h1 className=" fs-3">Material Takeoff Services </h1>
      <br />
      <p>
        At <b style={{ color: "#ffbf00" }}>UK Estimators</b>, we offer precise
        material takeoff services to streamline your construction projects. Our
        experienced team provides accurate estimates, helping you plan your
        budget efficiently. With 10 years of industry experience, we handle
        various projects, including renovations and new constructions. We ensure
        quick turnaround times, often delivering reports within 24 hours. Our
        detailed material lists and cost breakdowns help you submit competitive
        bids and start work without delay. By using our services, you save time
        and resources, ensuring you have everything you need from the start. Our
        professional approach guarantees reliable results and effective project
        management. Trust UK Estimators for all your material takeoff needs,
        regardless of project size or complexity.
      </p>
    </div>
  );

  const text3 = (
    <div>
      <p className=" fs-4">
        Material Takeoff&nbsp;
        <span style={{ color: "#ffbf00" }}>Service Area</span>
      </p>
      <p>
        At <b style={{ color: "#ffbf00" }}>UK Estimators</b>, supports clients
        across the UK with our Quantity Takeoff Services. Whether you're bidding
        on a project or need estimates from any location, we’ve got you covered.
        We specialize in calculating the materials and labor required for your
        construction projects. Our team reviews blueprints and provides a list
        of all necessary materials in easy-to-use formats like Microsoft Excel
        or Adobe. We ensure fast and accurate estimates, organizing materials by
        location to streamline your workflow.
      </p>
    </div>
  );
  return (
    <div style={{ paddingTop: "80px" }}>
      <div className=" container-md">
        <HalfTextHalfImg
          text={text}
          src={require("../../Images/MaterialHTHI1.png")}
        />
      </div>

      <div className=" container-md">
        <p className="  fs-3 fw-semibold mt-3">
          {" "}
          What Types of Material&nbsp;
          <span style={{ color: "#FFBF00" }}>
            Takeoff Services Do We Offer?
          </span>{" "}
        </p>
        <p>
          At <b style={{ color: "#FFBF00" }}>UK Estimators</b>, our experts
          provide excellent material takeoff services for your construction
          projects. We accurately measure and list all the materials you need.
          With our precise and efficient service, you can be sure of quality
          results. We offer material takeoff services for all kinds of projects,
          ensuring you have everything required to start and complete your
          project smoothly.
        </p>
        <div
          style={{ gap: "100px" }}
          className=" d-flex justify-content-center align-items-center flex-wrap"
        >
          <ul>
            <li>General Requirement</li> <li>SiteWorks</li> <li>Concrete</li>{" "}
            <li>Masonry</li>
          </ul>
          <ul>
            <li>Wood and Plastics</li> <li>Specialties</li> <li>Equipment</li>{" "}
            <li>Furnishings</li>
          </ul>
          <ul>
            <li>Metals</li> <li>Thermal and Moisture Protection</li>{" "}
            <li>Finishes</li> <li>Doors and Windows</li>
          </ul>
        </div>
      </div>
      <Banner2 />
      <div className=" container-md">
        <p className=" text-center fs-3 fw-semibold mt-3">
          {" "}
          Why Choose UK Estimators for{" "}
          <span style={{ color: "#FFBF00" }}>
            Quantity Takeoff Services?
          </span>{" "}
        </p>
        <p>
          At <b style={{ color: "#FFBF00" }}>UK Estimators</b>, we specialize in
          Material Takeoff Services. With nearly thirty years of experience, we
          provide accurate estimates and detailed material takeoff services,
          ensuring customer satisfaction. We offer quick quotes for all your
          projects and provide 24/7 email support. Our live chat and call
          support team is always available. Contact us through our website or
          social media platforms like Facebook, Twitter, Instagram, and
          LinkedIn. Trust UK Estimators for high-quality services at competitive
          prices, with instant revisions included. With decades of experience
          serving clients in real estate, construction, and retail, we always
          prioritize customer satisfaction.
        </p>
      </div>
      <div>
        <TradesCommonBanner />
      </div>
      <div className=" container-md">
        <HalfTextHalfImg
          text={text3}
          src={require("../../Images/MaterTakeOffHTHI3.png")}
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
