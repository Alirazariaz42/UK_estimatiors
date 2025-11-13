import React, { useState } from "react";
import "./ContactUs.css";
import { Banner } from "../CommonComponents/Banner";
export const ContactUs = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  return (
    <div>
      <div
        data-aos={isLargeScreen ? "fade-down" : ""}
        className="ContectHeroSection"
      >
        <div className=" text-center">
          <h3> Contact Us</h3>
          <div className="formContainer">
            <form className=" w-100">
              <input
                className="inpitFields"
                placeholder="Your Name"
                type="text"
                name=""
                id=""
              />
              <input
                className="inpitFields"
                placeholder="Your Email"
                type="email"
                required
                name=""
                id=""
              />
              <input
                className="inpitFields"
                placeholder="Your Contact"
                type="tel"
                name=""
                id=""
              />
              <textarea
                className="textAreaFields"
                rows={3}
                placeholder=" Message"
                name=""
                id=""
              ></textarea>
              <input className="submitBtn" type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
      <div className=" mt-4 mb-4">
        <Banner />
      </div>
      <div className=" container-md">
        <div className=" row m-0 w-100 justify-content-center">
          <div
            data-aos={isLargeScreen ? "fade-right" : ""}
            className=" col-lg-5 col-md-6 col-12"
          >
            <h3>Contacts</h3>
            <p>
              Our phone and email are on our site. Contact UK Estimators for
              construction estimates and more. Send plans for estimation
              services. Save money, reach out today!
            </p>

            <a
              className=" text-decoration-none text-dark d-inline-block mt-2 mb-2"
              href=""
            >
              <img src={require("../../Images/Location.png")} alt="" /> &nbsp;
              2505 Bedford Ave, Brooklyn, NY 11226, USA
            </a>

            <a
              className=" text-decoration-none text-dark d-inline-block mt-2 mb-2"
              href=""
            >
              <img src={require("../../Images/Call.png")} alt="" /> &nbsp; +1
              917 300 1079
            </a>
            <br />
            <a
              className=" text-decoration-none text-dark d-inline-block mt-2 mb-2"
              href=""
            >
              <img src={require("../../Images/Mail.png")} alt="" /> &nbsp;
              UK@Estimators.com
            </a>
          </div>
          <div
            data-aos={isLargeScreen ? "fade-left" : ""}
            className=" col-lg-7 col-md-6 col-12"
          >
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13617.382621019875!2d74.27661825!3d31.43214975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1719488405481!5m2!1sen!2s"
                style={{ width: "100%", height: "270px" }}
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
