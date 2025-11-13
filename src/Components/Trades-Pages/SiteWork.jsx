import React, { useState } from "react";
import "./TradesStyle.css";
import { HalfImgHalfText } from "../CommonComponents/HalfImgHalfText";
import { Banner2 } from "../CommonComponents/Banner2";
import { Ourclients } from "../CommonComponents/Ourclients";
import { EstimationProcess } from "../CommonComponents/EstimationProcess";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
export const SiteWork = () => {
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
      <h1 className=" fs-2 text-capitalize">Sitework Estimating Services</h1>
      <p>
        At <b style={{ color: "#ffbf00" }}>UK Estimators</b>, our Sitework
        Estimating Services are designed to meet the needs of all types of
        contractors and land developers. We understand the challenges in site
        development and offer reliable, cost-effective solutions to make your
        projects smoother. With UK Estimators, you get more than just estimates
        – you get a partner in your success. Our team uses the latest tools to
        provide accurate analysis of drawings and plans, delivering precise
        takeoffs for materials and labor within 24-48 hours. This helps you
        confidently lead bids and manage busy sites efficiently. Let UK
        Estimators handle your sitework estimating needs, so you can focus on
        what you do best. Contact us today to learn more.
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
      <p className=" fs-5 fw-semibold ">
        {" "}
        Scope of work in our{" "}
        <span style={{ color: "#ffb342" }}> Sitework Estimating Service</span>
      </p>
      <div className=" row m-0 w-100 justify-content-center">
        <div className=" col-md-6 col-12">
          <ul className=" fw-semibold">
            <li> Clearing & Demolition</li>
            <li> Earthwork</li>
            <li> Grading</li>
            <li> Drainage</li>
            <li> Utility Spoils</li>
            <li> Storm Sewer</li>
            <li>Water distribution</li>
            <li> Roadways</li>
            <li> Sidewalk </li>
            <li> Driveways </li>
            <li>Pavements </li>
          </ul>
        </div>
        <div className=" col-md-6 col-12">
          <ul>
            <li> Site Furnishing</li>
            <li> Concrete Flatwork</li>
            <li>Retaining Walls</li>
            <li> Climbing Walls</li>
            <li>Fences & Gates</li>
            <li> Landscaping</li>
            <li>Irrigation</li>
            <li> Fountains</li>
            <li> Gabions</li>
            <li> Docks</li>
            <li> Patio</li>
          </ul>
        </div>
      </div>
    </div>
  );
  const text7 = (
    <div>
      <p>
        <ul>
          <li> detailed breakdown of material takeoffs</li>
          <li> Expert assistance with surface grading</li>
          <li>
            Full estimation plan for landscaping, including soil volumes for
            hardscape, softscape, irrigation, and more
          </li>
          <li> Detailed analysis of earth volume and quantity lists</li>
          <li> Seamless conversion of topological data into Civil 2D</li>
        </ul>
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
          src={require("../../Images/Frame 2042.png")}
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
              Maximize Your Projects with Our &nbsp;
              <span style={{ color: "#ffbf00" }}>
                Sitework Estimating Services
              </span>
            </p>
            <p>
              Our team of expert estimators is dedicated to delivering
              exceptional services Specific to your needs. Take advantage of our
              specialized solutions and simplify your construction projects
              effortlessly. Here's what you can expect from our sitework
              estimator:
            </p>
            <HalfTextHalfImg
              src={require("../../Images/Frame 1924.png")}
              text={text7}
            />
            <p>
              Experience the difference with our sitework estimating services.
              Contact us today to learn more.
            </p>
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
          text={text6}
          src={require("../../Images/Rectangle 626.png")}
        />
      </div>
      <Banner2 />
      <div className=" container-md">
        <div>
          <HalfImgHalfText
            text={text8}
            src={require("../../Images/Frame 2066.png")}
          />
        </div>
        <Ourclients />
      </div>
      <div>
        <EstimationProcess />
      </div>
    </div>
  );
};
