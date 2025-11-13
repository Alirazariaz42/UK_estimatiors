import React, { useState } from "react";

export const Banner2 = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  return (
    <div>
      <div className=" container-fluid">
        <div className="PaymentSection2Container">
          <div className="row w-100 m-0">
            <div
              data-aos={isLargeScreen ? "fade-up-right" : ""}
              className="  col-lg-6 col-12 "
            >
              <div>
                <img
                  src={require("../../Images/LogoDark.png")}
                  width={150}
                  alt=""
                  className=" mb-2 ms-0 ms-md-3"
                />
                <div className="text-center">
                  <p className="OpenSans p-0 m-0">
                    Precision Estimates for Your Success
                  </p>
                  <h2 className=" Calculating-Your-Future text-warning  fw-bold">
                    {" "}
                    Calculating Your Future
                  </h2>
                  <button className=" btn btn-warning text-light fw-semibold">
                    Contact Us Get 40% OFF
                  </button>
                  <p className=" d-flex  flex-column flex-md-row justify-content-around mt-4 mb-3">
                    <a
                      className=" text-decoration-none fw-semibold text-dark"
                      href="mailto:"
                    >
                      {" "}
                      <img
                        src={require("../../Images/attach_email.png")}
                        alt=""
                      />
                      UK@Estimators.com{" "}
                    </a>
                    <a
                      className=" text-decoration-none fw-semibold text-dark"
                      href="tel:"
                    >
                      {" "}
                      <img src={require("../../Images/call (1).png")} alt="" />
                      +1 917 300 1079{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos={isLargeScreen ? "fade-up-left" : ""}
              className=" col-lg-6 col-12"
            >
              <div className="text-center">
                <img
                  className="HTHIwidth"
                  src={require("../../Images/Frame 1935.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
