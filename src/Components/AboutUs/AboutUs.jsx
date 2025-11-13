import React, { useState } from "react";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import "./AboutUs.css";
export const AboutUs = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const text1 = (
    <div>
      <p>
        At <b style={{ color: "#FFBF00" }}>UK Estimators</b>, we're dedicated to
        providing cost-effective and efficient construction cost estimating
        services for the real estate development and construction industry. With
        a focus on accuracy and reliability, our expert team is committed to
        meeting your specific needs, ensuring you receive precise estimating
        solutions.
        <br />
        With over 10 years of experience in the AEC industry, we offer guidance
        tailored to the evolution of the construction sector. By combining our
        industry knowledge, technology, and commitment to excellence, we aim to
        save you time and money in your construction processes.
        <br /> Whether you need cost estimates or professional expertise, UK
        Estimators is here to assist you. Contact us at{" "}
        <a style={{ color: "#FFBF00" }} href="tel:+1 917 300 1079">
          {" "}
          <b>+1 917 300 1079</b>
        </a>{" "}
        for reliable service.
      </p>
    </div>
  );
  return (
    <div>
      <div style={{ paddingTop: "90px" }} className=" container-md">
        <h2 className=" fs-3 text-center">About us</h2>
        <HalfTextHalfImg
          text={text1}
          src={require("../../Images/AboutUsHTHI1.png")}
        />
      </div>
      <div className="sectio2Container">
        <div>
          <h2
            data-aos={isLargeScreen ? "fade-down" : ""}
            className=" text-center shadowed-text"
          >
            <span style={{ color: "#FFBF00" }}>EXTENSIVE EXPERIENCE </span> IN
            Construction Estimating SERVICES
          </h2>
          <p
            data-aos={isLargeScreen ? "fade-up" : ""}
            className="shadowed-text text-center fw-semibold  fs-4"
          >
            Our team has a lot of experience in construction estimating. We
            provide accurate cost estimates and careful project planning. You
            can trust us to help make your projects successful.
          </p>
          <div
            data-aos={isLargeScreen ? "fade-right" : ""}
            className="slide d-flex align-items-center "
          >
            <div>
              <img src={require("../../Images/slideimg1.png")} alt="" />
            </div>
            <div>
              <h3>Our Mission</h3>
              <p className=" fw-semibold">
                Our Mission at <b style={{ color: "#FFBF00" }}>UK Estimators</b>{" "}
                is to offer top-notch construction estimating solutions that
                exceed our clients' expectations. We prioritize being accurate,
                efficient, and sustainable to ensure the success of every
                project we undertake.
              </p>
            </div>
          </div>

          <div
            data-aos={isLargeScreen ? "fade-left" : ""}
            className="slide d-flex align-items-center "
          >
            <div>
              <img src={require("../../Images/slideimg2.png")} alt="" />
            </div>
            <div>
              <h3>OUR VISION</h3>
              <p className=" fw-semibold">
                At <b style={{ color: "#FFBF00" }}>UK Estimators</b>, we're
                dedicated to top-quality construction estimating. Our smart
                solutions ensure client satisfaction. Contact us today at{" "}
                <a style={{ color: "#FFBF00" }} href="tel:+1 917 300 1079">
                  {" "}
                  <b>+1 917 300 1079</b>
                </a>{" "}
                to experience the difference.
              </p>
            </div>
          </div>

          <div
            data-aos={isLargeScreen ? "fade-right" : ""}
            className="slide d-flex align-items-center "
          >
            <div>
              <img src={require("../../Images/slideimg3.png")} alt="" />
            </div>
            <div>
              <h3>Our Priority</h3>
              <p className=" fw-semibold">
                At <b style={{ color: "#FFBF00" }}>UK Estimators</b>, your
                satisfaction comes first. We're committed to exceeding your
                expectations with our top-notch construction estimating
                services. Count on our dedicated team for efficient and timely
                solutions tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
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
  );
};
