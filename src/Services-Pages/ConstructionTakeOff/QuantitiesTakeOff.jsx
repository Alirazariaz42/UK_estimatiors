import React, { useState } from "react";
// import "./CostEstimating.css";
import { HalfTextHalfImg } from "../../Components/CommonComponents/HalfTextHalfImg";
import { HalfImgHalfText } from "../../Components/CommonComponents/HalfImgHalfText";
import { Banner2 } from "../../Components/CommonComponents/Banner2";
import { TradesCommonBanner } from "../../Components/CommonComponents/TradesCommonBanner";
import { FourCirules } from "../../Components/CommonComponents/FourCirules";
import { Ourclients } from "../../Components/CommonComponents/Ourclients";
import { EstimationProcess } from "../../Components/CommonComponents/EstimationProcess";
export const QuantitiesTakeOff = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const text = (
    <div>
      <h1 className=" fs-3">Quantity Takeoff Services </h1>
      <br />
      <p>
        At <b style={{ color: "#ffbf00" }}>UK Estimators</b>, we provide
        top-quality takeoff services for construction companies across the UK.
        Our skilled team uses the latest tools to deliver fast and accurate
        labor and material estimates. Whether it's a large-scale project or a
        quick turnaround, we can complete takeoff services within 24 hours when
        needed. With over 10 years of experience, we've successfully handled
        various projects, including remodeling and renovations. We review
        blueprints and list materials in easy-to-use formats like Excel and
        Adobe, ensuring everything is organized by location for easy site
        management. Choose UK Estimators for reliable and efficient takeoff
        services, keeping your project on track and within budget.
      </p>
    </div>
  );

  const text3 = (
    <div>
      <p className=" fs-4">
        Quantity Takeoff&nbsp;
        <span style={{ color: "#ffbf00" }}>Service Area</span>
      </p>
      <p>
        At <b style={{ color: "#ffbf00" }}>UK Estimators</b>, we offer
        nationwide Quantity Takeoff Services to clients across the UK. Whether
        you're bidding on a project or need estimates from any location, we're
        here to assist you. Specializing in calculating materials and labor for
        your construction projects, our team reviews blueprints and provides
        comprehensive material lists in user-friendly formats like Microsoft
        Excel or Adobe. We ensure fast and accurate estimates, organizing
        materials by location to enhance your team's efficiency.
      </p>
    </div>
  );
  return (
    <div style={{ paddingTop: "80px" }}>
      <div className=" container-md">
        <HalfTextHalfImg
          text={text}
          src={require("../../Images/QuantitiesTakeOffHTHI.png")}
        />
      </div>

      <div className=" container-md">
        <p className="  fs-3 fw-semibold mt-3">
          {" "}
          What Types of Quantity&nbsp;
          <span style={{ color: "#FFBF00" }}>
            Takeoff Services Do We Offer?
          </span>{" "}
        </p>
        <p>
          At <b style={{ color: "#FFBF00" }}>UK Estimators</b>, we specialize in
          detailed quantity takeoff services for general contractors,
          subcontractors, engineers, architects, and developers. Using advanced
          software, our expert team provides accurate and timely estimates for
          materials and quantities. Whether you need quick estimates within 24
          hours or detailed project evaluations, we're here to help at every
          step.
        </p>
        <div
          style={{ gap: "100px" }}
          className=" d-flex justify-content-center align-items-center flex-wrap"
        >
          <ul>
            <li>SiteWork Takeoff</li> <li>Masonry Takeoff</li>{" "}
            <li>Concrete Takeoff</li> <li>Drywall Takeoff</li>
          </ul>
          <ul>
            <li>Millwork Takeoff</li> <li>Cabinet Takeoff</li>{" "}
            <li>Mechanical Takeoff</li> <li>Mechanical Takeoff</li>
          </ul>
          <ul>
            <li>Painting Takeoff</li> <li>Insulation Takeoff</li>{" "}
            <li>Roofing Takeoff</li> <li>Lumber Takeoff</li>
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
          Quantity Takeoff Services. With nearly 10 years of experience, we
          provide accurate estimates and takeoff services, ensuring you're
          satisfied. <br /> Get quick quotes for your projects in just 5
          minutes, with 24/7 email support. Our live chat and phone support are
          always available through our website and social media like Facebook,
          Twitter, Instagram, and LinkedIn. Trust UK Estimators for quality
          services at competitive prices, including instant revisions. With 27
          years of experience serving real estate, construction, and retail
          clients, we prioritize customer satisfaction.
        </p>
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
