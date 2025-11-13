import React from "react";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import "./Ourtrades.css";
import { TradeCard } from "../CommonComponents/TradeCard/TradeCard";
import { EstimationProcess } from "../CommonComponents/EstimationProcess";
import { Banner2 } from "../CommonComponents/Banner2";
export const Ourtrades = () => {
  const TradeArray = [
    {
      title: "General Requirements",
      description:
        "Comprehensive planning and site prep for smooth project execution.",
      image: require("../../Images/TradeCirculerImg.png"),
      Linkto: "/ /",
    },
    {
      title: "SiteWork Estimating",
      description:
        "Accurate estimates for excavation, grading, and site preparation to ensure project success.",
      image: require("../../Images/TradeCirculerImg2.png"),
      Linkto: "/ /",
    },
    {
      title: "Drywall Estimating",
      description:
        "Precise cost calculation for drywall installation, ensuring budget accuracy and efficiency.",
      image: require("../../Images/TradeCirculerImg3.png"),
      Linkto: "/ /",
    },
    {
      title: " Concrete Estimating",
      description:
        "Detailed cost projections for concrete work, ensuring reliable and accurate budgeting. ",
      image: require("../../Images/TradeCirculerImg4.png"),
      Linkto: "/ /",
    },
    {
      title: " Metals Estimating",
      description:
        " Accurate cost assessments for all metalwork, ensuring precision and budget control.",
      image: require("../../Images/TradeCirculerImg5.png"),
      Linkto: "/ /",
    },
    {
      title: "Lumber Takeoff ",
      description:
        "Ensuring efficient material usage and budgeting with exact quantity and cost calculations for lumber. ",
      image: require("../../Images/TradeCirculerImg6.png"),
      Linkto: "/ /",
    },
    {
      title: " Thermal and Moisture Protection",
      description:
        " Ensuring cost-effective building envelope solutions through precise material cost estimates.",
      image: require("../../Images/TradeCirculerImg7.png"),
      Linkto: "/ /",
    },
    {
      title: "HVAC Estimating ",
      description:
        " Cost-effective planning for heating, ventilation, and air conditioning systems.",
      image: require("../../Images/TradeCirculerImg8.png"),
      Linkto: "/ /",
    },
    {
      title: " MEP Estimating",
      description:
        "Precise cost assessments for mechanical, electrical, and plumbing systems, optimizing project budgets effectively. ",
      image: require("../../Images/TradeCirculerImg9.png"),
      Linkto: "/ /",
    },
    {
      title: "Commercial Estimating ",
      description:
        " Tailored cost evaluations for successful commercial project budgeting.",
      image: require("../../Images/TradeCirculerImg10.png"),
      Linkto: "/ /",
    },
    {
      title: " Industrial Estimating",
      description:
        "Detailed cost analysis for industrial projects, ensuring precise budgeting and project management. ",
      image: require("../../Images/TradeCirculerImg11.png"),
      Linkto: "/ /",
    },
    {
      title: " Residential estimating",
      description:
        " Precise budget planning for residential construction projects.",
      image: require("../../Images/TradeCirculerImg12.png"),
      Linkto: "/ /",
    },
    {
      title: "Interior and Exterior Finishes ",
      description:
        " Detailed cost estimates for comprehensive construction finishes.",
      image: require("../../Images/TradeCirculerImg13.png"),
      Linkto: "/ /",
    },
    {
      title: " Mechanical Estimating ",
      description:
        "Accurate cost assessments for mechanical systems, ensuring efficient project budgeting. ",
      image: require("../../Images/TradeCirculerImg14.png"),
      Linkto: "/ /",
    },
    {
      title: " Electrical Estimating  ",
      description:
        "Accurate cost calculations for electrical systems, ensuring budget precision.",
      image: require("../../Images/TradeCirculerImg115.png"),
      Linkto: "/ /",
    },
  ];
  const text = (
    <div>
      <h4>
        Your Gateway to Global Trade Solutions: Enhance Efficiency and Expand
        Opportunities
      </h4>
      <p>
        We specialize in various construction estimating trades including
        drywall, general requirements, metals, woods, and flooring. Our detailed
        assessments ensure accurate cost projections and efficient project
        planning. Whether you're renovating or building from scratch, trust our
        expertise to deliver precise estimates tailored to your needs. Contact
        us today to discuss how we can support your construction projects with
        reliable Construction estimating services.
      </p>
    </div>
  );
  return (
    <div style={{ paddingTop: "80px" }}>
      <div className=" container-md">
        <HalfTextHalfImg
          text={text}
          src={require("../../Images/TradesHTHI.png")}
        />

        <div
          style={{ flexWrap: "wrap", gap: "30px" }}
          className=" d-flex justify-content-center"
        >
          {TradeArray.map((trade) => {
            return (
              <TradeCard
                src={trade.image}
                redirect={trade.Linkto}
                title={trade.title}
                description={trade.description}
              />
            );
          })}
        </div>
        <Banner2 />
        <EstimationProcess />
      </div>
    </div>
  );
};
