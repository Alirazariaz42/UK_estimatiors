import React, { useState } from "react";
import "./TradesStyle.css";
import { HalfImgHalfText } from "../CommonComponents/HalfImgHalfText";
import { Banner2 } from "../CommonComponents/Banner2";
import { Ourclients } from "../CommonComponents/Ourclients";
import { EstimationProcess } from "../CommonComponents/EstimationProcess";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
export const Metals = () => {
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
      <h1 className=" fs-2 text-capitalize">Metals Estimating Services</h1>
      <p>
        At <b style={{ color: "#FFBF00" }}> UK Estimators</b> , we specialize in
        providing precise metal estimates tailored to your construction needs.
        We know how important metals are for both structural strength and
        aesthetic appeal. Rely on us for accurate estimates that match your
        project requirements. <br />
        Key Features:
        <ul>
          <li>
            {" "}
            Accurate Assessments: We thoroughly analyze your project plans and
            specifications.{" "}
          </li>
          <li>
            {" "}
            Advanced Tools: We use the latest software for precise digital
            takeoffs.{" "}
          </li>
          <li>
            {" "}
            Comprehensive Coverage: Our estimates include all the necessary
            metals for your project.{" "}
          </li>
          <li>
            {" "}
            Cost Analysis: We cover all costs, including transportation and
            equipment.{" "}
          </li>
          <li>
            {" "}
            Expertise: Our decades of experience ensure reliable projections.{" "}
          </li>
        </ul>
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
      <p className=" fs-5 fw-semibold ">Our Estimation Process</p>
      <p>
        At <b style={{ color: "#ffb342" }}>UK Estimators</b>, we specialize in
        providing precise concrete estimates tailored to your project. Using
        advanced tools like Bluebeam, Planswift, and OST, we calculate
        quantities digitally and organize data in Excel. Our 24/7 support
        ensures you have continuous assistance. We cover everything from
        concrete quantities needed for structures to costs for transportation
        and equipment. Additionally, we detail reinforcements like rebar, wire
        mesh, and dowels to ensure thorough planning.
      </p>
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
          src={require("../../Images/MetalsHTHI1.png")}
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
              The Range of&nbsp;
              <span style={{ color: "#ffbf00" }}>
                Metals Estimating Service
              </span>
            </p>
            <div className=" row w-100 justify-content-center m-0 ">
              <div
                data-aos={isLargeScreen ? "fade-down-right" : ""}
                className="  col-12"
              >
                <p
                  style={{ color: "#ffbf00" }}
                  className=" m-2 fs-5 fw-semibold  "
                >
                  Initial Consultation:
                </p>
                <p>
                  We begin by understanding your project goals, design
                  preferences, and budget. This helps us grasp the scope and
                  vision of your construction project.
                </p>

                <p
                  style={{ color: "#ffbf00" }}
                  className=" m-2 fs-5 fw-semibold  "
                >
                  Site Assessment:
                </p>
                <p>
                  If necessary, we perform a thorough site inspection to
                  consider factors like environmental conditions and structural
                  requirements that may impact metal selection.
                </p>

                <p
                  style={{ color: "#ffbf00" }}
                  className=" m-2 fs-5 fw-semibold  "
                >
                  Material Selection:
                </p>
                <p>
                  Based on your project needs, we recommend suitable metals,
                  taking into account factors like strength, corrosion
                  resistance, and your aesthetic preferences.
                </p>

                <p
                  style={{ color: "#ffbf00" }}
                  className=" m-2 fs-5 fw-semibold  "
                >
                  Detailed Estimation:
                </p>
                <p>
                  Our team provides a detailed cost analysis for each required
                  metal, including quantities and any additional charges such as
                  fabrication or finishing.
                </p>

                <p
                  style={{ color: "#ffbf00" }}
                  className=" m-2 fs-5 fw-semibold  "
                >
                  Presentation and Approval:
                </p>
                <p>
                  We present the estimate, answer your questions, and upon
                  approval, proceed with procurement.
                </p>

                <p
                  style={{ color: "#ffbf00" }}
                  className=" m-2 fs-5 fw-semibold  "
                >
                  Procurement and Quality Assurance:
                </p>
                <p>
                  We manage the procurement process to ensure materials meet
                  specified standards. Our team performs quality checks to
                  ensure they align with project requirements.
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
      {/* <div className=" container-md mt-5 mb-3">
        <HalfTextHalfImg
          src={require("../../Images/Frame 1924.png")}
          className="widthAuto"
          text={text6}
        />
      </div> */}
      {/* <Banner2 /> */}
      <div className=" container-md mt-5">
        <Ourclients />
      </div>
      <div>
        <EstimationProcess />
      </div>
    </div>
  );
};
