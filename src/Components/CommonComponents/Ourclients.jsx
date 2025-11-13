import React from "react";

export const Ourclients = () => {
  return (
    <div className=" container-md">
      <p className=" fw-semibold fs-4">Our Clients</p>
      <div className=" row m-0 w-100 justify-content-center">
        <div className=" col-md-6 col-12 d-flex justify-content-center align-items-center">
          <ul className="custom-list">
            <li data-aos="fade-right" data-aos-delay="200">
              General Contractors
            </li>
            <li data-aos="fade-right" data-aos-delay="400">
              Subcontractors
            </li>
            <li data-aos="fade-right" data-aos-delay="600">
              Projects Managers{" "}
            </li>
            <li data-aos="fade-right" data-aos-delay="800">
              Investors{" "}
            </li>
            <li data-aos="fade-right" data-aos-delay="1000">
              Architects
            </li>
          </ul>
        </div>

        <div className=" col-md-6 col-12  d-flex justify-content-center align-items-center">
          <ul className="custom-list">
            <li data-aos="fade-left" data-aos-delay="200">
              {" "}
              Home Builders
            </li>
            <li data-aos="fade-left" data-aos-delay="400">
              {" "}
              Owners{" "}
            </li>
            <li data-aos="fade-left" data-aos-delay="600">
              {" "}
              Developers{" "}
            </li>
            <li data-aos="fade-left" data-aos-delay="800">
              {" "}
              Vendors{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
