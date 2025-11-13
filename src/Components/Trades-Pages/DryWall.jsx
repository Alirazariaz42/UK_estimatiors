import React, { useState } from "react";
import "./TradesStyle.css";
import { HalfImgHalfText } from "../CommonComponents/HalfImgHalfText";
import { Banner2 } from "../CommonComponents/Banner2";
import { Ourclients } from "../CommonComponents/Ourclients";
import { EstimationProcess } from "../CommonComponents/EstimationProcess";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import { TradesCommonBanner } from "../CommonComponents/TradesCommonBanner";
import { TradeCard } from "../CommonComponents/TradeCard2/TradeCard2";
export const DryWall = () => {
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
      <h1 className=" fs-2 text-capitalize">Drywall Estimating Services</h1>
      <p>
        Are you looking for precise Drywall estimates to avoid overquoting or
        underquoting on your bids? UK Estimators is here to help with our
        top-notch Drywall Estimating Services! With many years of experience in
        the construction industry, we provide detailed drywall estimates for
        residential, commercial, and retail projects. Our Drywall Estimating
        Services use the latest zip code-based pricing for materials and labor
        to ensure our estimates are accurate. We follow best practices set by
        industry leaders like the American Association of Cost Engineers (AACE)
        and the Australian Institute of Quantity Surveyors (AIQS), ensuring our
        services are reliable and professional.
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
      <p>
        Our Drywall Estimating Services Include:
        <ul>
          <li> Drywall and Gypsum Board Estimates</li>
          <li> Material & Labor Takeoffs with Manhours</li>
          <li> Acoustical Ceiling Estimates</li>
          <li> Wood and Metal Framing Estimates</li>
          <li> Budget and Bid Estimates</li>
          <li> Complete Bidding Assistance</li>
          <li> Change Order Management</li>
          <li>Drywall Project Management</li>
          <li> Subcontractor Marketing</li>
          <li>Project Lead Generation </li>
        </ul>
      </p>
    </div>
  );
  const [ActiveDiv, setActiveDiv] = useState({
    div: text3,
    src: require("../../Images/Photo1.png"),
  });

  const text8 = (
    <div>
      <p className=" text-center fs-4 fw-semibold ">
        Our Approach To{" "}
        <span style={{ color: "#ffb342" }}>Dry wall Estimating</span>
      </p>
      <p>
        {" "}
        At UK Estimators, we provide accurate and hassle-free drywall estimates.
        Our experts carefully review your plans and use advanced software to
        precisely measure walls, partitions, and ceilings. We then organize all
        quantities into detailed spreadsheets, including materials like
        sheetrock, screws, and clips. We use up-to-date, location-specific costs
        for materials and labor to ensure accurate pricing. Our estimates also
        include local labor rates, transportation, painting costs (if needed),
        and other necessary expenses. Additionally, we apply value engineering
        to maximize your profits.
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
        <div className=" mt-5 mb-5">
          <HalfTextHalfImg
            src={require("../../Images/div.elementor-widget-wrap.png")}
            text={text2}
          />
        </div>
      </div>

      <TradesCommonBanner />

      <div className=" container-md mt-5 mb-3">
        <p className=" text-center fs-4 fw-semibold ">
          Expert Drywall Estimating Services by{" "}
          <span style={{ color: "#ffb342" }}>Uk Estimators</span>
        </p>
        <p>
          At <b style={{ color: "#ffb342" }}> UK Estimators</b>, we specialize
          in providing precise and reliable drywall estimates for all your
          construction needs. Our services ensure you avoid overestimating or
          underestimating your bids
        </p>
        <HalfTextHalfImg
          src={require("../../Images/Frame 51550.png")}
          //   className="widthAuto"
          text={text6}
        />
        <p>
          {" "}
          We serve a diverse range of clients, including general contractors,
          drywall contractors, installation service providers, homeowners, and
          designers involved in residential, commercial, and retail projects. We
          focus on meeting bid deadlines, staying within budget, and accurately
          defining the project scope. Our detailed estimates and material
          takeoff sheets help drywall contractors win bids with profitable
          margins.
        </p>

        <div>
          <HalfImgHalfText
            src={require("../../Images/Group 888.png")}
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


      <div>
        <h1 className=" text-green-700" > hello ddear </h1>
      </div>
    </div>
  );
};
