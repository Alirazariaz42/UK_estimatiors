import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { Dropdown } from "bootstrap";
export const Header = () => {
  const [logo, setlogo] = useState(require("../../../Images/Logo.png"));
  const changelogo = () => {
    setlogo(require("../../../Images/LogoDark.png"));
  };
  const changelogo2 = () => {
    setlogo(require("../../../Images/Logo.png"));
  };
  return (
    <>
      <div className="sticky">
        {["lg"].map((expand) => (
          <Navbar
            onMouseEnter={changelogo}
            onMouseLeave={changelogo2}
            key={expand}
            expand={expand}
            className=" mb-3 Navbar-Custom"

            //   className=""
          >
            <Container fluid>
              <Navbar.Brand href="#">
                <img
                  className="logotransition"
                  height={31}
                  width={156}
                  src={logo}
                  alt=""
                />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <img src={require("../../../Images/Logo.png")} alt="" />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-center align-items-center flex-grow-1 pe-md-3 pe-0">
                    <Nav.Link href="#action1">
                      <NavLink className="Nav-a" to="/">
                        Home
                      </NavLink>
                    </Nav.Link>

                    <Nav.Link
                      className="  position-relative ServicesDropDownContainer"
                      href="#action143"
                    >
                      <NavLink className="Nav-a" to="/services/">
                        Services <span style={{ fontSize: "10px" }}>▼</span>
                      </NavLink>
                      <div className="ServicesDropDown ">
                        <ul className=" p-2 m-0 ">
                          <li>
                            {" "}
                            <Link to="/cost-estimating-services/">
                              Cost Estimating Services
                            </Link>
                          </li>
                          <li className=" position-relative ServicesSubDropDownContainer">
                            <Link to="/construction-takeoff-services/">
                              Construction Takeoff Services{" "}
                            </Link>
                            <span
                              style={{
                                fontSize: "11px",
                                position: "absolute",
                                right: "15px",
                                top: "8px",
                              }}
                            >
                              {" "}
                              ▼
                            </span>{" "}
                            <ul className="ServicesSubDropDown">
                              <li>
                                {" "}
                                <Link to="/quantity-takeoff-services/">
                                  Quantities Takeoff Services{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/material-takeoff-services/">
                                  Material Takeoff Services{" "}
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            {" "}
                            <Link to="/cpm-scheduling/">CPM Scheduling </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to="/planning/">Planning </Link>
                          </li>
                        </ul>
                      </div>
                    </Nav.Link>

                    <Nav.Link
                      className="TradeDropDwonContainer"
                      href="#action68"
                    >
                      <NavLink className="Nav-a" to="/our-trades/">
                        Trades<span style={{ fontSize: "10px" }}> ▼</span>
                      </NavLink>

                      <div className=" TradeDropDwon scroll-container">
                        <ul className=" m-0 p-2">
                          <li>
                            {" "}
                            <Link to="/general-requirements/">
                              {" "}
                              General Requirements{" "}
                            </Link>
                          </li>
                          <li className="TradesSubDropDown2">
                            {" "}
                            <Link
                              to="/lumber-takeoff-services/"
                              className=" position-relative"
                            >
                              {" "}
                              Lumber Takeoff{" "}
                              <span
                                style={{
                                  fontSize: "11px",
                                  position: "absolute",
                                  right: "15px",
                                  top: "4px",
                                }}
                              >
                                {" "}
                                ▼
                              </span>{" "}
                            </Link>
                            <ul className=" m-0  TradesSubDropDown">
                              <li>
                                {" "}
                                <Link to="/wood-plastic-estimating-services/">
                                  {" "}
                                  Wood and Plastic Estimating{" "}
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="TradesSubDropDown2">
                            {" "}
                            <Link
                              to="/thermal-moisture-protection-estimating-services/"
                              className=" position-relative"
                            >
                              {" "}
                              Thermal & Moisture Protection{" "}
                              <span
                                style={{
                                  fontSize: "11px",
                                  position: "absolute",
                                  right: "15px",
                                  top: "4px",
                                }}
                              >
                                {" "}
                                ▼
                              </span>{" "}
                            </Link>
                            <ul className=" m-0 TradesSubDropDown ">
                              <li>
                                {" "}
                                <Link to="/roofing-estimating-services/">
                                  {" "}
                                  Roofing Estimating Services{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/insulation-estimating-services/">
                                  {" "}
                                  Insulation Estimating Services{" "}
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            {" "}
                            <Link to="/framing-estimating-services/">
                              {" "}
                              Framing Estimating{" "}
                            </Link>
                          </li>
                          <li className="TradesSubDropDown2">
                            {" "}
                            <Link
                              to="/interior-exterior-finishes/"
                              className=" position-relative"
                            >
                              {" "}
                              Interior & Exterior Finishes{" "}
                              <span
                                style={{
                                  fontSize: "11px",
                                  position: "absolute",
                                  right: "15px",
                                  top: "4px",
                                }}
                              >
                                {" "}
                                ▼
                              </span>{" "}
                            </Link>
                            <ul className=" m-0  TradesSubDropDown">
                              <li>
                                {" "}
                                <Link to="/flooring-estimating-services/">
                                  {" "}
                                  Flooring Estimating & Takeoff{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/drywall-estimating-services/">
                                  {" "}
                                  Drywall Takeoff Services
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            {" "}
                            <Link to="/furnishing-estimating-services/">
                              {" "}
                              Furnishings{" "}
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to="/masonry-estimating-services/">
                              {" "}
                              Masonry{" "}
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to="/concrete-estimating-services/">
                              {" "}
                              Concrete{" "}
                            </Link>
                          </li>
                          <li className="TradesSubDropDown2">
                            {" "}
                            <Link
                              to="/sitework-estimating-services/"
                              className=" position-relative"
                            >
                              {" "}
                              Site Works{" "}
                              <span
                                style={{
                                  fontSize: "11px",
                                  position: "absolute",
                                  right: "15px",
                                  top: "4px",
                                }}
                              >
                                {" "}
                                ▼
                              </span>
                            </Link>
                            <ul className=" m-0 TradesSubDropDown">
                              <li>
                                {" "}
                                <Link to="/landscaping-estimating-services/">
                                  {" "}
                                  Landscape Estimating{" "}
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="TradesSubDropDown2">
                            {" "}
                            <Link
                              to="/metals-estimating-services/"
                              className=" position-relative"
                            >
                              {" "}
                              Metals{" "}
                              <span
                                style={{
                                  fontSize: "11px",
                                  position: "absolute",
                                  right: "15px",
                                  top: "4px",
                                }}
                              >
                                {" "}
                                ▼
                              </span>
                            </Link>
                            <ul className=" m-0 TradesSubDropDown">
                              <li>
                                {" "}
                                <Link to="/rebar-estimating-services/">
                                  {" "}
                                  Rebar Estimating{" "}
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="TradesSubDropDown">
                            {" "}
                            <Link to="/metals-estimating-services/">
                              {" "}
                              Metals{" "}
                            </Link>
                            <ul className=" m-0  ">
                              <li>
                                {" "}
                                <Link to="/rebar-estimating-services/">
                                  {" "}
                                  Rebar Estimating{" "}
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            {" "}
                            <Link to="/equipment-estimating-services/">
                              {" "}
                              Equipment{" "}
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to="/conveying-system-estimating-services/">
                              {" "}
                              Conveying Systems{" "}
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to="/commercial-estimating-services/">
                              {" "}
                              Commercial Estimating{" "}
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to="/industrial-estimating-services/">
                              {" "}
                              Industrial Estimating{" "}
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to="/residential-estimating-services/">
                              {" "}
                              Residential Estimating{" "}
                            </Link>
                          </li>
                          <li className="TradesSubDropDown2">
                            {" "}
                            <Link
                              to="/mep-estimating-services/"
                              className=" position-relative"
                            >
                              {" "}
                              MEP Estimating{" "}
                              <span
                                style={{
                                  fontSize: "11px",
                                  position: "absolute",
                                  right: "15px",
                                  top: "4px",
                                }}
                              >
                                {" "}
                                ▼
                              </span>{" "}
                            </Link>
                            <ul className=" m-0  TradesSubDropDown">
                              <li>
                                {" "}
                                <Link to="/mechanical-estimating-services/">
                                  {" "}
                                  Mechanical Estimating Services{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/electrical-estimating-services/">
                                  {" "}
                                  Electrical Estimating Services
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/plumbing-estimating-services/">
                                  {" "}
                                  Plumbing Estimating Services
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/gutter-estimating-services/">
                                  {" "}
                                  Gutter Estimating Services
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            {" "}
                            <Link to="/special-construction-estimating-services/">
                              {" "}
                              Special Construction{" "}
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to="/hvac-estimating-services/">
                              {" "}
                              HVAC Estimating{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Nav.Link>

                    <Nav.Link href="#action6">
                      <NavLink className="Nav-a" to="/about-us/">
                        About Us
                      </NavLink>
                    </Nav.Link>

                    <Nav.Link href="#action7">
                      <NavLink className="Nav-a" to="/payment/">
                        Payments{" "}
                      </NavLink>
                    </Nav.Link>

                    <Nav.Link href="#action8">
                      <NavLink className="Nav-a" to="/Pricing-Plan/">
                        Pricing Plan
                      </NavLink>
                    </Nav.Link>

                    <Nav.Link href="#action9">
                      <NavLink className="Nav-a" to="/contact-us/">
                        Contact Us
                      </NavLink>
                    </Nav.Link>
                  </Nav>

                  <Nav className=" justify-content-end">
                    <Button
                      className=" fw-semibold GetEstimation-Btn"
                      varient=""
                    >
                      {" "}
                      Get Estimation
                    </Button>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
};
