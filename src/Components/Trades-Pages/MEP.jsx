import React, { useState } from "react";
import "./TradesStyle.css";
import { HalfImgHalfText } from "../CommonComponents/HalfImgHalfText";
import { Banner2 } from "../CommonComponents/Banner2";
import { Ourclients } from "../CommonComponents/Ourclients";
import { EstimationProcess } from "../CommonComponents/EstimationProcess";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import { TradesCommonBanner } from "../CommonComponents/TradesCommonBanner";
import { TradeCard } from "../CommonComponents/TradeCard2/TradeCard2";
export const MEP = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const [firstActive, setfirstActive] = useState("active");
  const [SecondActive, setSecondActive] = useState("");
  const [ThirdActive, setThirdtActive] = useState("");

  const ActivateFirst = (prop) => {
    if (prop === 0) {
      setfirstActive("active");
      setSecondActive("");
      setThirdtActive("");
      setActiveDiv({
        div: text3,
        src: require("../../Images/Photo1.png"),
      });
    } else if (prop === 1) {
      setfirstActive("");
      setSecondActive("active");
      setThirdtActive("");
      setActiveDiv({
        div: text4,
        src: require("../../Images/Photo2.png"),
      });
    } else if (prop === 2) {
      setfirstActive("");
      setSecondActive("");
      setThirdtActive("active");
      setActiveDiv({
        div: text5,
        src: require("../../Images/Photo3.png"),
      });
    }
  };
  const text = (
    <div>
      <h1 className=" fs-2 text-capitalize">MEP Estimating Services</h1>
      <p>
        Looking for reliable MEP estimating services? UK Estimators delivers
        fast, accurate, and cost-effective estimates within 24-48 hours. Our
        detailed takeoffs are crucial for contractors aiming to secure
        successful bids. With over a decade of expertise, we specialize in
        construction cost estimates and material takeoff services. <br />
        Key Features:
        <ul>
          <li>
            Fast Turnaround: Receive estimates within 24-48 hours to meet your
            bid deadlines.{" "}
          </li>
          <li>
            {" "}
            Accurate Assessments: Detailed and precise takeoffs ensure
            competitive bidding.{" "}
          </li>
          <li>
            {" "}
            Cost-Effective Solutions: Budget-friendly estimates tailored to your
            project needs.{" "}
          </li>
          <li>
            {" "}
            Expertise: Over 10 years of experience specializing in MEP
            estimating.{" "}
          </li>
        </ul>
        Contact UK Estimators today to streamline your bidding process with our
        comprehensive MEP estimating solutions.
      </p>
      <button className="GetAquoteBtn">
        <img
          className=" d-inline"
          src={require("../../Images/Vector (4).png")}
          alt=""
        />{" "}
        Get a quote
      </button>
      <button className="CallBtn">
        {" "}
        <img
          className=" d-inline"
          src={require("../../Images/Group (2).png")}
          alt=""
        />{" "}
        +1 917 300 1079.
      </button>
    </div>
  );
  const text2 = (
    <div>
      <p className=" fs-1 fw-bold text-capitalize">
        Why Choose <span style={{ color: "#ffbf00" }}>Our Trades</span>?
      </p>
      <p>
        <b className=" text-capitalize">advanced Technology</b> <br />
        We leverage cutting-edge technology and software to deliver precise and
        efficient estimates. Our use of advanced tools ensures high accuracy and
        efficiency, setting us apart in the industry.
        <br /> <b>Customer-Focused Service</b> <br />
        Your satisfaction is our priority. We work closely with you, maintaining
        open lines of communication and providing updates throughout the
        estimating process. Our commitment to exceptional customer service
        ensures a smooth and stress-free experience.
        <br /> <b>Cost Efficiency </b> <br />
        Our goal is to help you maximize your budget without compromising on
        quality. Through detailed and precise cost estimates, we identify
        potential savings and provide cost-effective solutions that keep your
        project within budget.
        <br /> <b>Flexible Trades</b> <br />
        At <b style={{ color: "#ffbf00" }}>UK Estimators</b>, we recognize that
        every project is unique. We provide customized estimating services that
        cater to your specific requirements, ensuring that each estimate
        reflects your project’s unique scope and challenges.
      </p>
      <div>
        <img
          className=" d-inline"
          src={require("../../Images/Frame 2050.png")}
          alt=""
        />
        <img
          className=" d-inline  ms-4"
          src={require("../../Images/Frame 2049.png")}
          alt=""
        />
      </div>
    </div>
  );
  const text3 = (
    <div>
      <img src={require("../../Images/Sub Text.png")} alt="" />
      <p className=" fs-5  fw-semibold mt-3">Commercial</p>
      <p>
        Accurate estimates are crucial for successful commercial construction
        projects. Our Commercial Construction Estimating services deliver
        precise cost estimates, essential for budgeting, financial planning,
        client quoting, and contractor negotiations. Utilizing advanced software
        and seasoned professionals, we ensure detailed analysis and accurate
        regional pricing for labor and materials. Our streamlined process
        adheres to industry best practices, facilitating easy review and
        submission to vendors.
      </p>
      <button className={` Project_ExpertiseBtn `}>Read More</button>
    </div>
  );
  const text4 = (
    <div>
      <img src={require("../../Images/Sub Text.png")} alt="" />
      <p className=" fs-5  fw-semibold mt-3">Residential</p>
      <p>
        Accurate estimates are crucial for successful commercial construction
        projects. Our Commercial Construction Estimating services deliver
        precise cost estimates, essential for budgeting, financial planning,
        client quoting, and contractor negotiations. Utilizing advanced software
        and seasoned professionals, we ensure detailed analysis and accurate
        regional pricing for labor and materials. Our streamlined process
        adheres to industry best practices, facilitating easy review and
        submission to vendors.
      </p>
      <button className={` Project_ExpertiseBtn `}>Read More</button>
    </div>
  );
  const text5 = (
    <div>
      <img src={require("../../Images/Sub Text.png")} alt="" />
      <p className=" fs-5  fw-semibold mt-3">Industrial</p>
      <p>
        Accurate estimates are crucial for successful commercial construction
        projects. Our Commercial Construction Estimating services deliver
        precise cost estimates, essential for budgeting, financial planning,
        client quoting, and contractor negotiations. Utilizing advanced software
        and seasoned professionals, we ensure detailed analysis and accurate
        regional pricing for labor and materials. Our streamlined process
        adheres to industry best practices, facilitating easy review and
        submission to vendors.
      </p>
      <button className={` Project_ExpertiseBtn `}>Read More</button>
    </div>
  );
  const text6 = (
    <div>
      <p className=" fw-semibold mb-1">Get Started</p>
      <p>
        Get Started Ready to simplify your MEP project with dependable
        estimating services? Reach out today to discuss your project needs or
        get a quote. Let us help you achieve project success with precise and
        efficient estimating solutions.
      </p>

      <p className=" fw-semibold mb-1">Client-Centric Approach</p>
      <p>
        We prioritize clear communication and collaboration throughout the
        estimation process. Our team closely collaborates with clients to grasp
        project requirements, delivering transparent estimates that empower
        informed decision-making.
      </p>
    </div>
  );
  const [ActiveDiv, setActiveDiv] = useState({
    div: text3,
    src: require("../../Images/Photo1.png"),
  });

  const text8 = (
    <div>
      <p className="  fs-4 fw-semibold ">
        Our Range Of MEP
        <span style={{ color: "#ffb342" }}>Estimating Services</span>
      </p>
      <p>
        <b style={{ color: "#ffb342" }}> Material Takeoffs:</b> Accurate
        assessments of MEP installation materials. <br />
        <b style={{ color: "#ffb342" }}>
          Bid Estimates & Bidding Assistance:{" "}
        </b>{" "}
        Detailed cost estimates to enhance competitiveness. <br />
        <b style={{ color: "#ffb342" }}>
          {" "}
          Preliminary Estimates & Feasibility Studies:
        </b>{" "}
        <br />
        <b style={{ color: "#ffb342" }}> </b>Assessments for project viability
        and budget planning. <br />
        <b style={{ color: "#ffb342" }}>Budget & Design Estimates: </b>Detailed
        estimates aligned with project design phases <br />
        <b style={{ color: "#ffb342" }}> Change Order Estimates:</b>Assessment
        of cost impacts during project execution. <br />
        <b style={{ color: "#ffb342" }}> Litigation Assistance: </b> Support for
        construction disputes with detailed cost analysis.
        <br />
        <b style={{ color: "#ffb342" }}> Project Cost Management: </b>{" "}
        Comprehensive management of project costs.
        <br />
        <b style={{ color: "#ffb342" }}> Project Lead Generation:</b> :
        Identification and pursuit of new project opportunities.
        <br />
        <b style={{ color: "#ffb342" }}>CPM Scheduling: </b>Optimization of
        project timelines and resource allocation. <br />
        <b style={{ color: "#ffb342" }}> MEP Drafting:</b> Technical drafting
        for accurate MEP system representation.
        <br />
      </p>
    </div>
  );
  return (
    <div style={{ paddingTop: "80px" }}>
      <div className="container-md">
        <HalfImgHalfText
          text={text}
          src={require("../../Images/drweallHTHI1.png")}
        />
      </div>
      <div className="  GreatExperience">
        <p
          style={{ color: "#FFBF00" }}
          className=" text-center fw-semibold fs-5 "
        >
          Great Experience in building
        </p>
        <div className=" container-md ">
          <div className=" mt-5 d-flex flex-wrap align-items-center justify-content-evenly">
            <TradeCard
              title="Plumbing Estimating Services"
              description="Custom plumbing cost estimates for your project."
              src={require("../../Images/img_01-1-175x197.jpg.png")}
            />

            <TradeCard
              title="Electrical Estimating Services"
              description="Personalized electrical estimating services for your needs."
              src={require("../../Images/img_03-175x197.jpg.png")}
            />

            <TradeCard
              title="Mechanical Sstimating Services"
              description="Customized mechanical estimating services to fit your needs."
              src={require("../../Images/img_02-175x197.jpg.png")}
            />
          </div>
        </div>
      </div>

      <div className=" container-md">
        <div className=" mt-5 mb-5">
          <HalfTextHalfImg
            src={require("../../Images/div.elementor-widget-wrap.png")}
            text={text2}
          />
        </div>
      </div>

      <TradesCommonBanner />

      <div className=" container-md mt-5 mb-3">
        <p className=" text-center fs-4 fw-semibold  ">Our Expertise</p>
        <p>
          At <b style={{ color: "#ffb342" }}> UK Estimators</b>, we specialize
          in precise estimates for Mechanical, Electrical, and Plumbing (MEP)
          projects. Our experienced team delivers customized solutions for
          contractors, architects, and developers. Each estimate is carefully
          tailored to optimize your project's budget and timeline with precision
          and expertise.
        </p>
        <HalfImgHalfText
          src={require("../../Images/Frame 1924 (1).png")}
          //   className="widthAuto"
          text={text6}
        />

        <div className=" mt-5">
          <HalfImgHalfText
            src={require("../../Images/Frame 1545.png")}
            text={text8}
          />
        </div>
      </div>

      <div className=" container-md mt-5">
        <Ourclients />
      </div>
      <div>
        <EstimationProcess />
      </div>
    </div>
  );
};
