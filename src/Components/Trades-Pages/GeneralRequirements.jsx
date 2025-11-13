import React, { useState } from "react";
import "./TradesStyle.css";
import { HalfImgHalfText } from "../CommonComponents/HalfImgHalfText";
import { Banner2 } from "../CommonComponents/Banner2";
import { Ourclients } from "../CommonComponents/Ourclients";
import { EstimationProcess } from "../CommonComponents/EstimationProcess";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import { TradesCommonBanner } from "../CommonComponents/TradesCommonBanner";
export const GeneralRequirements = () => {
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
      <h1 className=" fs-2 text-capitalize">General Requirements</h1>
      <p>
        General requirements are crucial for any construction project. They
        ensure the project follows regulations and meets all needs. These
        requirements include detailed estimates for materials, labor, and
        equipment, helping you make smart decisions. Good communication and
        staying within the budget are key to the project's success and your
        satisfaction. General construction provides a clear and detailed
        understanding of what the client expects and needs. It explains exactly
        what the client wants. The General Conditions section of the contract
        clearly outlines the rights, responsibilities, and relationships of
        everyone involved. For more information, contact us at
        <a style={{ color: "#FFBF00" }} href="mailto: ukestimators@gmail.com">
          {" "}
          ukestimators@gmail.com
        </a>{" "}
        or call{" "}
        <a style={{ color: "#FFBF00" }} href="tel:+1 917 300 1079">
          +1 917 300 1079
        </a>
        .
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
      <p className=" fs-5 fw-semibold ">Vital Role of General Requirements</p>
      <p>
        At <b style={{ color: "#ffb342" }}>UK Estimators</b>, we understand that
        general requirements are crucial for the success of any construction
        project. They ensure compliance with regulations and address all project
        needs. Our services provide detailed estimates for materials, labor, and
        equipment, enabling you to make informed decisions. Through clear
        communication and adherence to budget constraints, we guarantee project
        success and client satisfaction.
      </p>
    </div>
  );
  const text8 = (
    <div>
      <p className=" fs-4 fw-bold text-capitalize">
        Earth Work Estimation Services
      </p>
      <p>
        To understand the costs of land preparation before construction, precise
        earthwork estimates are essential.{" "}
        <b style={{ color: "#ffb342" }}>Uk Estimators </b> provides timely and
        reliable estimates for earthwork volumes and material takeoffs, helping
        you meet your deadlines. Our estimates include:
        <ul>
          <li> Site excavation report </li>
          <li> Cut/Fill quantities </li>
          <li> Export/Import quantities </li>
          <li> Volume reports </li>
          <li> Topsoil spreads </li>
        </ul>
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
  const [ActiveDiv, setActiveDiv] = useState({
    div: text3,
    src: require("../../Images/Photo1.png"),
  });
  return (
    <div style={{ paddingTop: "80px" }}>
      <div className="container-md">
        <HalfImgHalfText
          text={text}
          src={require("../../Images/GeneralRequirements.png")}
        />
        <div className=" mt-5 mb-5">
          <HalfTextHalfImg
            src={require("../../Images/div.elementor-widget-wrap.png")}
            text={text2}
          />
        </div>
      </div>
      <div>
        <div className=" GrayBg">
          <div className=" container-md">
            <p className=" fw-semibold text-center fs-5">
              What Do Our&nbsp;
              <span style={{ color: "#ffbf00" }}>
                General Requirements Services Include?
              </span>
            </p>
            <div className=" row w-100 justify-content-center m-0 ">
              <div
                data-aos={isLargeScreen ? "fade-down-right" : ""}
                className=" col-md-6 col-12"
              >
                <p
                  style={{ color: "#ffbf00" }}
                  className=" m-2 fs-5 fw-semibold  "
                >
                  Project Objectives
                </p>
                <p>
                  . &nbsp; Clearly defined and measurable goals that the project
                  aims to achieve.
                </p>

                <p
                  style={{ color: "#ffbf00" }}
                  className=" m-2 fs-5 fw-semibold  "
                >
                  Scope of Work
                </p>
                <p>
                  . &nbsp; A detailed description of the tasks, deliverables,
                  and boundaries of the project.
                </p>

                <p
                  style={{ color: "#ffbf00" }}
                  className=" m-2 fs-5 fw-semibold  "
                >
                  Resource Allocation
                </p>
                <p>
                  . &nbsp; Identifying and assigning the necessary resources,
                  including manpower, materials, and equipment.
                </p>

                <p
                  style={{ color: "#ffbf00" }}
                  className=" m-2 fs-5 fw-semibold  "
                >
                  Quality Standards
                </p>
                <p>
                  . &nbsp; Specifications for the level of quality expected for
                  project deliverables
                </p>
              </div>
              <div
                data-aos={isLargeScreen ? "fade-up-left" : ""}
                className=" col-md-6 col-12"
              >
                <p
                  style={{ color: "#ffbf00" }}
                  className=" m-2 fs-5 fw-semibold  "
                >
                  Regulatory and Compliance Requirements
                </p>
                <p>
                  . &nbsp; Ensuring that the project adheres to legal and
                  regulatory standards.
                </p>

                <p
                  style={{ color: "#ffbf00" }}
                  className=" m-2 fs-5 fw-semibold  "
                >
                  Budget and Financial Constraints
                </p>
                <p>
                  . &nbsp; Defining the financial parameters and constraints
                  within which the project must operate.
                </p>

                <p
                  style={{ color: "#ffbf00" }}
                  className=" m-2 fs-5 fw-semibold  "
                >
                  Risk Management Plan
                </p>
                <p>
                  . &nbsp; Identifying potential risks, assessing their impact,
                  and outlining mitigation strategies.
                </p>

                <p
                  style={{ color: "#ffbf00" }}
                  className=" m-2 fs-5 fw-semibold  "
                >
                  Communication Plan
                </p>
                <p>
                  . &nbsp; Establishing channels and protocols for communication
                  among team members and stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" pt-4 pb-4  w-100 position-relative OurProjectExpertise"
        style={{ backgroundColor: "#FFB342", color: "#1C2752" }}
      >
        <div className="container-md">
          <p className=" text-center  fw-bold fs-1">Our Project Expertise</p>
          <p className=" text-center pe-md-5 ps-md-5 pe-0 ps-0 ">
            With extensive experience in diverse projects, Bidnet Estimating
            excels in delivering precise and reliable estimates. Our expertise
            ensures successful project outcomes across various sectors.
          </p>
          <div
            style={{ gap: "30px" }}
            className=" d-flex flex-wrap justify-content-center"
          >
            <button
              onClick={() => ActivateFirst(0)}
              className={` Project_ExpertiseBtn ${firstActive}`}
            >
              Commercial
            </button>
            <button
              onClick={() => ActivateFirst(1)}
              className={` Project_ExpertiseBtn ${SecondActive}`}
            >
              Residential
            </button>
            <button
              onClick={() => ActivateFirst(2)}
              className={` Project_ExpertiseBtn ${ThirdActive}`}
            >
              Industrial
            </button>
          </div>
        </div>
      </div>

      <div className="Project-ExpertiseDetails">
        <div>
          <HalfTextHalfImg text={ActiveDiv.div} src={ActiveDiv.src} />
        </div>
      </div>
      <div className=" container-md mt-5 mb-3">
        <HalfImgHalfText
          src={require("../../Images/pexels-alena-darmel-7642117 1.png")}
          className="widthAuto"
          text={text6}
        />
      </div>
      <TradesCommonBanner />
      <div className=" container-md">
        
        <Ourclients />
      </div>
      <div>
        <EstimationProcess />
      </div>
    </div>
  );
};
