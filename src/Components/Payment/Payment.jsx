import React, { useState } from "react";
import "./Payment.css";
import Slider from "react-slick";
import { EstimationProcess } from "../CommonComponents/EstimationProcess";
import { Banner2 } from "../CommonComponents/Banner2";
export const Payment = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
  };
  return (
    <div style={{ paddingTop: "80px" }}>
      <div className=" container-md">
        <h1 className=" text-center fs-3">Payment</h1>
        <div className=" row w-100 m-0 justify-content-center">
          <div
            data-aos={isLargeScreen ? "fade-down-right" : ""}
            className=" col-md-9 col-12 d-flex justify-content-center align-items-center"
          >
            {" "}
            <div>
              <h4>Refund Policy: </h4>
              <p>
                At <b style={{ color: "#FFBF00" }}> UK Estimators</b>, we
                prioritize client satisfaction. Although we do not offer
                refunds, we are dedicated to providing exchanges to ensure you
                receive the best value for your investment.
              </p>
            </div>{" "}
          </div>
          <div
            data-aos={isLargeScreen ? "fade-down-left" : ""}
            className=" col-md-3 col-12 d-flex justify-content-center align-items-center"
          >
            {" "}
            <div className="slider-container">
              <Slider {...settings}>
                <div className=" d-flex justify-content-center align-items-center ">
                  <div className="text-center">
                    <img src={require("../../Images/bank1.png")} alt="" />
                    <a className=" btn btn-warning text-light " href="#">
                      {" "}
                      Pay
                      <img
                        className=" d-inline ms-2"
                        src={require("../../Images/tap-to-pay 1.png")}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className=" d-flex justify-content-center align-items-center ">
                  <div className="text-center">
                    <img src={require("../../Images/bank1.png")} alt="" />
                    <a className=" btn btn-warning text-light" href="#">
                      {" "}
                      Pay
                      <img
                        className=" d-inline ms-2"
                        src={require("../../Images/tap-to-pay 1.png")}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className=" d-flex justify-content-center align-items-center ">
                  <div className="text-center">
                    <img src={require("../../Images/bank1.png")} alt="" />
                    <a className=" btn btn-warning text-light" href="#">
                      {" "}
                      Pay
                      <img
                        className=" d-inline ms-2"
                        src={require("../../Images/tap-to-pay 1.png")}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className=" d-flex justify-content-center align-items-center ">
                  <div className="text-center">
                    <img src={require("../../Images/bank1.png")} alt="" />
                    <a className=" btn btn-warning text-light" href="#">
                      {" "}
                      Pay
                      <img
                        className=" d-inline ms-2"
                        src={require("../../Images/tap-to-pay 1.png")}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className=" d-flex justify-content-center align-items-center ">
                  <div className="text-center">
                    <img src={require("../../Images/bank1.png")} alt="" />
                    <a className=" btn btn-warning text-light" href="#">
                      {" "}
                      Pay
                      <img
                        className=" d-inline ms-2"
                        src={require("../../Images/tap-to-pay 1.png")}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className=" d-flex justify-content-center align-items-center ">
                  <div className="text-center">
                    <img src={require("../../Images/bank1.png")} alt="" />
                    <a className=" btn btn-warning text-light" href="#">
                      {" "}
                      Pay
                      <img
                        className=" d-inline ms-2"
                        src={require("../../Images/tap-to-pay 1.png")}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      
      <Banner2/>

      <div className=" container-md">
        <h4>Payment Terms: </h4>
        <p>
          At UK Estimators, we prioritize your financial security. You can
          conveniently pay for our services using Credit Card, Debit Card, or
          PayPal. <br /> After reviewing your project specifications and plans,
          we will provide a detailed quote along with the delivery date. Once
          you approve the quote, you can easily make the payment through your
          mobile phone, desktop, or by calling us at{" "}
          <a
            href="tel:+"
            className=" text-decoration-none text-warning fw-semibold"
          >
            {" "}
            +1 917 300 1079
          </a>
          .
        </p>
       
        <EstimationProcess/>
      </div>
    </div>
  );
};
