import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "transition-style";
import "transition-style";
import React, { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Header } from "./Components/CommonComponents/Header/Header.jsx";
import { ScrollToTop } from "./Components/CommonComponents/ScrollToTop.jsx";
import { ContactUs } from "./Components/ContactUs/ContactUs.jsx";
import { AboutUs } from "./Components/AboutUs/AboutUs.jsx";
import { Payment } from "./Components/Payment/Payment.jsx";
import { PricingPlan } from "./Components/PricingPlan/PricingPlan.jsx";
import { Ourtrades } from "./Components/OurTrades/Ourtrades.jsx";
import { Services } from "./Components/Services/Services.jsx";
import { CostEstimating } from "./Services-Pages/CostEstimating/CostEstimating.jsx";
import { CostructionTakeOff } from "./Services-Pages/ConstructionTakeOff/CostructionTakeOff.jsx";
import { MaterialTakeOff } from "./Services-Pages/ConstructionTakeOff/MaterialTakeOff.jsx";
import { QuantitiesTakeOff } from "./Services-Pages/ConstructionTakeOff/QuantitiesTakeOff.jsx";
import { CPMScheduling } from "./Services-Pages/CPMScheduling/CPMScheduling.jsx";
import { Planning } from "./Services-Pages/Planning/Planning.jsx";
import { Footer } from "./Components/CommonComponents/Footer/Footer.jsx";
import { GeneralRequirements } from "./Components/Trades-Pages/GeneralRequirements.jsx";
import {
  LumberTakeoff,
  SiteWork,
} from "./Components/Trades-Pages/SiteWork.jsx";
import { Concrete } from "./Components/Trades-Pages/Concrete.jsx";
import { Metals } from "./Components/Trades-Pages/Metals.jsx";
import { DryWall } from "./Components/Trades-Pages/DryWall.jsx";
import { MEP } from "./Components/Trades-Pages/MEP.jsx";
import { HVAC } from "./Components/Trades-Pages/HVAC.jsx";

function App() {
  useEffect(() => {
    const screenWidth = window.innerWidth;
    console.log(screenWidth);

    AOS.init({
      duration: 1000, // duration of animation in milliseconds
    });
  }, []);

  return (
    <div>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us/" element={<ContactUs />}></Route>
        <Route path="/about-us/" element={<AboutUs />}></Route>
        <Route path="/services/" element={<Services />}></Route>
        <Route path="/our-trades/" element={<Ourtrades />}></Route>
        <Route path="/estimating-fee/" element={<AboutUs />}></Route>
        <Route path="/payment/" element={<Payment />}></Route>
        <Route path="/Pricing-Plan/" element={<PricingPlan />}></Route>
        <Route
          path="/construction-takeoff-services/"
          element={<CostructionTakeOff />}
        ></Route>
        <Route
          path="/cost-estimating-services/"
          element={<CostEstimating />}
        ></Route>

        <Route
          path="/material-takeoff-services/"
          element={<MaterialTakeOff />}
        ></Route>

        <Route
          path="/quantity-takeoff-services/"
          element={<QuantitiesTakeOff />}
        ></Route>
        <Route path="/planning/" element={<Planning />}></Route>
        <Route path="/cpm-scheduling/" element={<CPMScheduling />}></Route>
        <Route
          path="/general-requirements/"
          element={<GeneralRequirements />}
        ></Route>
        <Route
          path="/sitework-estimating-services/"
          element={<SiteWork />}
        ></Route>
        <Route
          path="/concrete-estimating-services/"
          element={<Concrete />}
        ></Route>
        <Route path="/metals-estimating-services/" element={<Metals />}></Route>
        <Route
          path="/drywall-estimating-services/"
          element={<DryWall />}
        ></Route>
        <Route path="/mep-estimating-services/" element={<MEP />}></Route>
        <Route path="/hvac-estimating-services/" element={<HVAC />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
