import React, { useState } from "react";
import "./Services.css";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
export const Services = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const text = (
    <div>
      <h4>
        {" "}
        Efficient Construction Estimating Services: Reliable Budget Planning for
        Your Projects
      </h4>
      <p>
        {" "}
        At <b style={{ color: "#ffbf00" }}>UK Estimators</b>, we're your trusted
        partners for construction estimating services across the UK.
        Specializing in accurate cost assessments and detailed material
        takeoffs, our team ensures thorough project planning and budget
        management. Whether it's residential or commercial projects, rely on our
        expertise to optimize your construction plans. Contact us at
        <a style={{ color: "#ffbf00" }} href="mailto:ukestimators@gmail.com">
          {" "}
          ukestimators@gmail.com
        </a>{" "}
        or{" "}
        <a style={{ color: "#ffbf00" }} href="tel:+1 917 300 1079">
          +1 917 300 1079
        </a>{" "}
        to discuss how we can assist you.
      </p>
    </div>
  );
  const text2 = (
    <div>
      <h4 className=" text-uppercase">Residential </h4>
      <p>
        {" "}
        For residential projects,{" "}
        <b style={{ color: "#FFBF00" }}>UK Estimators</b> offer services such as
        kitchen and bathroom renovations, roof replacements, garage and chimney
        demolitions, siding removal, and complete house clearing.{" "}
      </p>
    </div>
  );

  return (
    <div style={{ paddingTop: "80px" }}>
      <div className=" container-md">
        <HalfTextHalfImg
          text={text}
          src={require("../../Images/ServicesHTHI1.png")}
        />

        <div className="section3Container">
          <div className=" d-flex justify-content-around  align-items-center">
            <div
              data-aos={isLargeScreen ? "fade-up-left" : ""}
              data-aos-easing="ease-out"
              data-aos-duration="400"
              data-aos-delay="100"
              className=" circulecontainer"
            >
              <h6 className=" fs-6">10 Years Experience</h6>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetu eriam dicta? Eos dolores
                maiores quae.
              </p>
            </div>
            <div
              data-aos={isLargeScreen ? "fade-up-right" : ""}
              data-aos-easing="ease-out"
              data-aos-duration="400"
              data-aos-delay="200"
              className=" circulecontainer"
            >
              <h6 className=" fs-6">10 Years Experience</h6>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetu eriam dicta? Eos dolores
                maiores quae.
              </p>
            </div>
          </div>
          <div
            data-aos={isLargeScreen ? "zoom-out-up" : ""}
            data-aos-delay="500"
            data-aos-duration="300"
            className="CenteralLogo"
          >
            <img
              className="CenteralLogo"
              src={require("../../Images/CenteralLogo.png")}
              alt=""
            />
          </div>

          <div className=" d-flex justify-content-around  align-items-center  mt-4">
            <div
              data-aos={isLargeScreen ? "fade-down-left" : ""}
              data-aos-easing="ease-out"
              data-aos-duration="300"
              data-aos-delay="300"
              className=" circulecontainer"
            >
              <h6 className=" fs-6">10 Years Experience</h6>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetu eriam dicta? Eos dolores
                maiores quae.
              </p>
            </div>
            <div
              data-aos={isLargeScreen ? "fade-down-right" : ""}
              data-aos-easing="ease-out"
              data-aos-duration="200"
              data-aos-delay="400"
              className=" circulecontainer"
            >
              <h6 className=" fs-6">10 Years Experience</h6>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetu eriam dicta? Eos dolores
                maiores quae.
              </p>
            </div>
          </div>

          <div></div>
        </div>
      </div>
      <div className=" staffContainer row">
        <div className=" col-md-4 col-sm-6 col-12 d-flex justify-content-center align-items-center">
          {" "}
          <div className=" text-light">
            {" "}
            <h2 className=" text-center"> 20 </h2>{" "}
            <p className=" text-center text-uppercase"> Experienced Staff</p>{" "}
          </div>
        </div>
        <div className=" col-md-4 col-sm-6 col-12 d-flex justify-content-center align-items-center">
          {" "}
          <div className=" text-light">
            {" "}
            <h2 className="text-center"> 100 </h2>{" "}
            <p className="text-center text-uppercase">Satisfied Clients </p>{" "}
          </div>
        </div>
        <div className=" col-md-4 col-sm-6 col-12 d-flex justify-content-center align-items-center">
          {" "}
          <div className=" text-light">
            {" "}
            <h2 className="text-center"> 400 </h2>{" "}
            <p className="text-center text-uppercase"> Completed Projects</p>{" "}
          </div>
        </div>
      </div>
      <div className=" container-md">
        <div>
          <div className=" row m-0 w-100 d-flex align-items-center justify-content-center mt-3 mb-3">
            <div
              data-aos={isLargeScreen ? "fade-down-left" : ""}
              className="col-lg-9 col-md-12  d-flex align-items-center justify-content-center"
            >
              <div>
                {" "}
                <p>
                  <h3 className=" text-uppercase">residential</h3>
                  For residential projects, UK Estimators offer services such as
                  kitchen and bathroom renovations, roof replacements, garage
                  and chimney demolitions, siding removal, and complete house
                  clearing.
                </p>
              </div>
            </div>
            <div
              data-aos={isLargeScreen ? "fade-down-right" : ""}
              className=" col-lg-3 col-md-12 d-flex align-items-center justify-content-center "
            >
              <img src={require("../../Images/servicesHTHI2.png")} alt="" />
            </div>
          </div>
        </div>

        <div>
          <div className=" row m-0 w-100 d-flex align-items-center justify-content-center mt-3 mb-3">
            <div
              data-aos={isLargeScreen ? "fade-down-left" : ""}
              className="col-lg-3 col-md-12 order-lg-0 order-md-1 d-flex align-items-center justify-content-center "
            >
              <div>
                <img src={require("../../Images/ServicesHTHI3.png")} alt="" />
              </div>
            </div>
            <div
              data-aos={isLargeScreen ? "fade-down-right" : ""}
              className=" col-lg-9 col-md-12 order-lg-1 order-md-0 d-flex align-items-center justify-content-center "
            >
              <div className=" ps-lg-3">
                <h3 className=" text-uppercase">commercial</h3>
                <p>
                  For commercial projects, UK Estimators provide customized
                  estimates tailored to meet your specific requirements. Rely on
                  our dedication, reliability, and precision for a successful
                  project.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" row m-0 w-100 d-flex align-items-center justify-content-center mt-3 mb-3">
            <div
              data-aos={isLargeScreen ? "fade-down-left" : ""}
              className="col-lg-9 col-md-12  d-flex align-items-center justify-content-center"
            >
              <div>
                {" "}
                <p>
                  <h3 className=" text-uppercase">industrial</h3>
                  For industrial projects, UK Estimators deliver precise
                  estimates customized to your requirements. Count on our
                  commitment, reliability, and precision for ensuring the
                  success of your project.
                </p>
              </div>
            </div>
            <div
              data-aos={isLargeScreen ? "fade-down-right" : ""}
              className=" col-lg-3 col-md-12 d-flex align-items-center justify-content-center "
            >
              <img src={require("../../Images/ServicesHTHI4.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
