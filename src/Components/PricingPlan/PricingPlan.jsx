import React from "react";
import { PricingPlans } from "../CommonComponents/PricingPlans";
import { Banner2 } from "../CommonComponents/Banner2";
import { EstimationProcess } from "../CommonComponents/EstimationProcess";

export const PricingPlan = () => {
  return (
    <div style={{ paddingTop: "80px" }}>
      <div className="container">
        <h1 className=" text-center fs-2">Our Pricing Plan</h1>
        <p className=" text-center">
          Committed to offering you highly competitive market rates so you can
          'Bid More, Win More.'
        </p>
        <h3>Precision</h3>
        <p>
          We understand the importance of accuracy in achieving your project
          goals. That's why we ensure precise estimates by using up-to-date
          software and comprehensive cost databases.
        </p>

        <h3> Fast Turnaround time</h3>
        <p>
          {" "}
          We are known as the most efficient estimating service in the market.
          We typically deliver estimates within 24 to 48 hours, although the
          time may vary based on the scope of work. This timeframe does not
          apply to complex industrial projects.{" "}
        </p>
        <h3> Affordability</h3>
        <p>
          {" "}
          With a large estimation team, we offer highly affordable rates, often
          below market prices. Our charges depend on the scope of work and vary
          by project. We don't charge extra for amendments and reviews. <br />
          Our quotes are accepted by 95% of our clients, and we encourage
          negotiations to finalize deals. For a general idea of our pricing, see
          below, but please upload your plans for a precise quote tailored to
          your project needs.{" "}
        </p>
      </div>
      <h2 className=" text-center fs-3 mb-4">
        Explore Our Professional{" "}
        <span style={{ color: "#F3C11B" }}>Pricing Plans</span>
      </h2>
      <PricingPlans />

      <div>
        <Banner2 />
        <h2 className=" text-center fs-3 mb-4">
          Estimation
          <span style={{ color: "#F3C11B" }}> Process</span>
        </h2>
        <div>
            <EstimationProcess/>
        </div>
      </div>
    </div>
  );
};
