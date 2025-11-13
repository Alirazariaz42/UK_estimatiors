import React, { useState } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { HalfImgHalfText } from "../CommonComponents/HalfImgHalfText";
import { Banner } from "../CommonComponents/Banner";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { duration } from "@mui/material";

export const Home = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const text = (
    <div>
      <h3 className="HomeCommonH3">
        Get Clear & Accurate Construction Estimates with UK Estimators
      </h3>
      <p>
        Welcome to UK Estimators! We specialize in CPM scheduling, construction
        takeoffs, planning, and cost estimating services. With over 10 years of
        experience, we excel in handling commercial, residential, industrial,
        and corporate projects. Rely on us for accurate planning and successful
        project outcomes tailored to your needs.
        <ul className=" fw-semibold custom-list">
          <li> Accuracy And Efficency </li>
          <li> Dedicated Team </li>
          <li> 10 Years Experienced </li>
          <li> Fast Turnaround </li>
        </ul>
        <button className=" btn btn-warning">Discover More</button>
      </p>
    </div>
  );
  const text2 = (
    <div>
      <p className=" p-0 m-0">
        <ul>
          <li>
            {" "}
            <b> Client-Focused Approach:</b> We prioritize your needs and take
            full responsibility for your project.{" "}
          </li>
          <li>
            {" "}
            <b> Advanced Tools and Software:</b> We use the latest and most
            reliable tools and software to ensure accuracy.{" "}
          </li>
          <li>
            {" "}
            <b> Industry Competitiveness:</b> We offer prompt, cost-effective
            solutions for all busy contractors.{" "}
          </li>
          <li>
            {" "}
            <b> Wide Range of Services:</b> Our specialties include project
            estimations and consulting.{" "}
          </li>
          <li>
            {" "}
            <b> Accurate Estimates:</b> Whether you’re a contractor or a
            construction estimator, we provide precise estimates.
          </li>
          <li>
            {" "}
            <b> Key Advantages:</b> Enjoy benefits like affordable pricing,
            quick turnaround times, reliable services, competitive rates,
            improved bid-winning ratios, and professional expertise.{" "}
          </li>
        </ul>
      </p>
      <h3 className="HomeCommonH3">Need Help? Call Construct</h3>
      <h3 className="HomeCommonH3" style={{ color: "#ffbf00" }}>
        +1 917 300 1079
      </h3>
    </div>
  );
  const text3 = (
    <div>
      <h3 className="HomeCommonH3">CONSTRUCTION ESTIMATING SERVICES UK</h3>
      <p>
        Looking for reliable construction estimating services in the UK? Look no
        further than UK Estimators! Our expert team provides accurate and
        detailed estimates, tailored to your project's specific needs. With our
        expertise, you can confidently bid and win more projects. Trust UK
        Estimators for all your construction estimating needs in the UK.
      </p>
      <button className=" btn btn-warning text-light">Read More</button>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 800,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1224, // Define the breakpoint for large displays
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          dots: true,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
          slidesToScroll: 1,
          // initialSlide: 2,
          // centerPadding: "40px",
        },
      },
    ],
  };
  return (
    <div>
      <div className="heroContainer">
        <div>
          <img
            src={require("../../Images/HeroImg1.png")}
            className=" HeroImg1"
            data-aos={isLargeScreen ? "fade-up-right" : ""}
            alt=""
          />
          <img
            src={require("../../Images/HeroImg2.png")}
            className=" HeroImg2"
            data-aos={isLargeScreen ? "fade-up-left" : ""}
            alt=""
          />
        </div>
        <div className=" w-100 d-flex align-items-center arrange_call_Container  justify-content-evenly animate__animated animate__backInUp">
          <div>
            <p className=" text-light m-0 p-0  fs-5 text-center">
              Let's build something together! Contact UK Estimators today.
            </p>
          </div>
          <div className=" mt-2">
            <button className=" btn btn-warning arrange_call_btn">
              {" "}
              <img src={require("../../Images/CallIcon.png")} alt="" /> Arrange
              a Call
            </button>
          </div>
        </div>
      </div>

      <div className=" container-md">
        <HalfImgHalfText
          text={text}
          src={require("../../Images/HomeHTHIPic1.png")}
        />
      </div>

      <div className=" h-auto">
        {" "}
        <div className=" servicesContainer">
          <div className=" container-md">
            <p className=" text-light fs-5">
              Discover our comprehensive construction solutions.
            </p>
          </div>
        </div>
        <div className=" container-md">
          <div className=" servicesCardsContainer">
            <div className="row w-100 m-0 justify-content-center">
              <div
                data-aos={isLargeScreen ? "fade-left" : ""}
                className=" col-lg-3 col-md-6 col-12 d-flex justify-content-center align-items-center"
              >
                {" "}
                <div className="MediamWidth">
                  {" "}
                  <img
                    width={"100%"}
                    src={require("../../Images/S1.png")}
                    alt=""
                  />{" "}
                  <div className=" text-center servicesCard   ">
                    {" "}
                    <h5>Cost Estimating</h5>{" "}
                    <p className=" text-center">
                      Accurate estimates for your project's success. Explore our
                      services to learn more.
                    </p>{" "}
                    <button className="btn btn-warning text-capitalize text-light">
                      {" "}
                      read more
                    </button>{" "}
                  </div>
                </div>
              </div>
              <div
                data-aos={isLargeScreen ? "fade-left" : ""}
                className=" col-lg-3 col-md-6 col-12 d-flex justify-content-center align-items-center "
              >
                {" "}
                <div className="MediamWidth">
                  {" "}
                  <img
                    width={"100%"}
                    src={require("../../Images/S2.png")}
                    alt=""
                  />{" "}
                  <div className=" text-center servicesCard ">
                    {" "}
                    <h5>Construction Takeoff</h5>{" "}
                    <p className=" text-center">
                      {" "}
                      Efficient takeoff services for your construction needs.
                      Discover more.
                    </p>{" "}
                    <button className="btn btn-warning  text-capitalize text-light">
                      read more
                    </button>{" "}
                  </div>
                </div>
              </div>
              <div
                data-aos={isLargeScreen ? "fade-left" : ""}
                className=" col-lg-3 col-md-6 col-12 d-flex justify-content-center align-items-center"
              >
                {" "}
                <div className="MediamWidth">
                  {" "}
                  <img
                    width={"100%"}
                    src={require("../../Images/S3.png")}
                    alt=""
                  />{" "}
                  <div className=" text-center servicesCard ">
                    {" "}
                    <h5>CPM Scheduling</h5>{" "}
                    <p className=" text-center">
                      Expert CPM scheduling solutions for efficient project
                      management. Find out more.
                    </p>{" "}
                    <button className="btn btn-warning  text-capitalize text-light">
                      read more
                    </button>{" "}
                  </div>
                </div>
              </div>
              <div
                data-aos={isLargeScreen ? "fade-left" : ""}
                className=" col-lg-3 col-md-6 col-12 d-flex justify-content-center align-items-center"
              >
                {" "}
                <div className="MediamWidth">
                  {" "}
                  <img
                    width={"100%"}
                    src={require("../../Images/S4.png")}
                    alt=""
                  />{" "}
                  <div className=" text-center servicesCard ">
                    {" "}
                    <h5>Planning</h5>{" "}
                    <p className=" text-center">
                      Discover customized planning solutions tailored to your
                      project's unique requirements. Learn more.
                    </p>{" "}
                    <button className="btn btn-warning text-light  text-capitalize">
                      read more
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-3 mb-3">
            <Banner />
          </div>
          <div>
            <div className=" container-md">
              <h3 className="HomeCommonH3">Why Choose UK Estimators First?</h3>
              <p className=" p-0 m-0">
                UK Estimators is a leading name in the estimating industry,
                recognized for our expertise and commitment to excellence.
                Here’s why you should partner with us:
              </p>
              <HalfTextHalfImg
                text={text2}
                src={require("../../Images/HomeHTHI2.png")}
              />
            </div>
          </div>

          <div></div>
        </div>
        <div className="winMoreBidContainer">
          <h3 className=" text-center ps-3 pe-3 HomeCommonH3">
            Let us help you win more bids?
          </h3>
          <ul className="tickUL">
            <li
              data-aos={isLargeScreen ? "fade-right" : ""}
              // data-aos-delay="200"
            >
              <img
                src={require("../../Images/TicIcon.png")}
                width={55}
                alt=""
              />
              <h5>TIME MANAGEMENT</h5>
              <p>
                Time is short for your next project. Don't waste time with wrong
                estimates. Our expert team gives you fast and accurate
                estimates, saving you time and helping you beat the competition.
              </p>
            </li>
            <li
              data-aos={isLargeScreen ? "fade-right" : ""}
              // data-aos-delay="200
            >
              <img
                src={require("../../Images/TicIcon.png")}
                width={55}
                alt=""
              />
              <h5>WIN MORE BIDS</h5>
              <p>
                Make your next bid a winner with our expert construction
                estimating services! Our detailed estimates will give you a
                competitive edge, helping you stand out, win more contracts, and
                grow your business.
              </p>
            </li>
            <li
              data-aos={isLargeScreen ? "fade-right" : ""}
              // data-aos-delay="200"
            >
              <img
                src={require("../../Images/TicIcon.png")}
                width={55}
                alt=""
              />
              <h5>SATISFIED CLIENTS</h5>
              <p>
                Join our list of happy clients who have used our construction
                estimating services. We have a lot of experience and a good
                track record of giving accurate estimates. Our team has saved
                time and money for many clients. Let us help you with your
                project too!
              </p>
            </li>
          </ul>
        </div>
        <div className=" mt-4 mb-3 container-md">
          <div className=" YellowborderContainer">
            <HalfTextHalfImg
              text={text3}
              src={require("../../Images/HomeHTHI3.png")}
            />
          </div>
        </div>
        <div
          data-aos={isLargeScreen ? "fade-up" : ""}
          data-aos-duration="1000"
          className="slider-container"
        >
          <h3 className=" text-center mt-5 mb-5 HomeCommonH3">
            {" "}
            Our Successful Projects
          </h3>
          <Slider {...settings}>
            <div className=" d-flex justify-content-center">
              <img src={require("../../Images/Sp1.png")} alt="" />
            </div>
            <div className=" d-flex justify-content-center">
              <img src={require("../../Images/Sp2.png")} alt="" />
            </div>
            <div className=" d-flex justify-content-center">
              <img src={require("../../Images/Sp3.png")} alt="" />
            </div>
            <div className=" d-flex justify-content-center">
              <img src={require("../../Images/Sp4.png")} alt="" />
            </div>
            <div className=" d-flex justify-content-center">
              <img src={require("../../Images/Sp5.png")} alt="" />
            </div>
            <div className=" d-flex justify-content-center">
              <img src={require("../../Images/Sp6.png")} alt="" />
            </div>
            <div className=" d-flex justify-content-center">
              <img src={require("../../Images/Sp7.png")} alt="" />
            </div>
          </Slider>
        </div>
        <div
          className=" mt-5 mb-4"
          data-aos={isLargeScreen ? "fade-down" : ""}
          data-aos-duration="1000"
        >
          <h3 className="  mt-3 mb-5 HomeCommonH3 ps-4">
            {" "}
            What Our Customer Says About Us
          </h3>
          <div className=" row w-100 m-0 p-0 clientscontainer">
            <div className=" col-lg-3 col-md-6 col-12 m-0 p-0">
              <div className="ClientreviewBG1">
                <div className="item-hints">
                  <div className="hint" data-position="1">
                    <span className="hint-radius"></span>
                    <span className="hint-dot"></span>
                    <div className="hint-content do--split-children">
                      <h5 className=" text-uppercase"> Ava Williams</h5>
                      <p>
                        UK Estimators' expertise saved us time and money with
                        precise estimates. Their comprehensive support ensured
                        project success, covering all aspects from planning to
                        completion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-lg-3 col-md-6 col-12 m-0 p-0">
              <div className="ClientreviewBG2">
                <div className="item-hints">
                  <div className="hint" data-position="2">
                    <span className="hint-radius"></span>
                    <span className="hint-dot"></span>
                    <div className="hint-content do--split-children">
                      <h5 className=" text-uppercase">Lucas Johnson</h5>
                      <p>
                        UK Estimators' expertise in construction estimating
                        saved us time and money. Their precise estimates allowed
                        us to plan effectively and complete our project
                        successfully. Their comprehensive approach ensured every
                        aspect was Deeply handled, leading to our project's
                        overall success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-lg-3 col-md-6 col-12 m-0 p-0">
              <div className="ClientreviewBG3">
                <div className="item-hints3">
                  <div className="hint3" data-position="3">
                    <span className="hint-radius3"></span>
                    <span className="hint-dot3"></span>
                    <div className="hint-content3 do--split-children3">
                      <h5 className=" text-uppercase">Isabella Brown</h5>
                      <p>
                        Working with UK Estimators was a breeze. Their attention
                        to detail and professionalism made the construction cost
                        estimating process smooth and efficient. Their accurate
                        estimates and thorough analysis helped us stay on track
                        and within budget, ensuring a successful project
                        outcome.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-lg-3 col-md-6 col-12 m-0 p-0">
              <div className="ClientreviewBG4">
                <div className="item-hints3">
                  <div className="hint3" data-position="4">
                    <span className="hint-radius3"></span>
                    <span className="hint-dot3"></span>
                    <div className="hint-content3 do--split-children3">
                      <h5 className=" text-uppercase">Ethan Smith</h5>
                      <p>
                        UK Estimators' construction cost estimating services
                        were outstanding. Their accurate estimates kept us
                        within budget, and their expertise ensured our project
                        was completed on time with excellent quality. Highly
                        recommended!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};
