import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div style={{ backgroundColor: "#FFF9E9" }}>
      <div className=" container-md">
        <div className=" row justify-content-center m-0 w-100 pt-5 pb-3">
          <div className=" col-lg-5 col-md-6 col-12 ">
            <img src={require("../../../Images/LogoDark.png")} alt="" />
            <p className="   fw-semibold ">
              UK Estimators: Your trusted source for precise construction cost
              estimation services. Specializing in Quantity and Material
              Takeoff, Scheduling, and Planning. Count on us for accurate and
              timely estimates to streamline your projects.
            </p>
            <p>
              <a className=" text-decoration-none" href="">
                {" "}
                <img
                  className=" d-inline"
                  src={require("../../../Images/Insta.png")}
                  alt=""
                />
              </a>
              <a className=" text-decoration-none" href="">
                {" "}
                <img
                  className=" d-inline"
                  src={require("../../../Images/FB.png")}
                  alt=""
                />
              </a>
              <a className=" text-decoration-none" href="">
                {" "}
                <img
                  className=" d-inline"
                  src={require("../../../Images/LI.png")}
                  alt=""
                />
              </a>
            </p>
          </div>
          <div className=" col-lg-3 col-md-6 col-12 d-flex justify-content-center align-items-center">
            <div>
              <p className=" mt-2 mb-2">
                <Link
                  className=" text-decoration-none text-dark  d-inline-block fw-semibold"
                  to=""
                >
                  Home{" "}
                </Link>
              </p>
              <p className=" mt-2 mb-2">
                <Link
                  className=" text-decoration-none text-dark  d-inline-block fw-semibold"
                  to=""
                >
                  {" "}
                  Services
                </Link>
              </p>
              <p className=" mt-2 mb-2">
                <Link
                  className=" text-decoration-none text-dark  d-inline-block fw-semibold"
                  to=""
                >
                  {" "}
                  Trades
                </Link>
              </p>
              <p className=" mt-2 mb-2">
                <Link
                  className=" text-decoration-none text-dark d-inline-block fw-semibold"
                  to=""
                >
                  Estimating Fee{" "}
                </Link>
              </p>
              <p className=" mt-2 mb-2">
                <Link
                  className=" text-decoration-none text-dark  d-inline-block fw-semibold"
                  to=""
                >
                  About Us{" "}
                </Link>
              </p>
              <p>
                <Link
                  className=" text-decoration-none text-dark  d-inline-block fw-semibold"
                  to=""
                >
                  Contact Us{" "}
                </Link>
              </p>
            </div>{" "}
          </div>
          <div className=" col-lg-4 col-md-12 col-12 d-flex justify-content-center ">
            {" "}
            <div>
              <p>
                {" "}
                <img
                  className=" d-inline"
                  src={require("../../../Images/attach_email.png")}
                  alt=""
                />
                <a
                  className=" text-decoration-none text-dark fw-semibold"
                  href="mailto:UK@Estimators.com"
                >
                  {" "}
                  UK@Estimators.com
                </a>
              </p>
              <p>
                {" "}
                <img
                  className=" d-inline"
                  src={require("../../../Images/call (1).png")}
                  alt=""
                />
                <a
                  className=" text-decoration-none text-dark fw-semibold"
                  href="tel:+1 917 300 1079"
                >
                  {" "}
                  +1 917 300 1079
                </a>
              </p>

              <p className="  fw-semibold text-dark">
                {" "}
                <img
                width={34}
                  className=" d-inline me-2"
                  src={require("../../../Images/location_on.png")}
                  alt="" 
                />
                 2505 Bedford Ave, Brooklyn, NY 11226, USA
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
