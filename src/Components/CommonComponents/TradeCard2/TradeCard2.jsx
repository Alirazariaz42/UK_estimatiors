import React from "react";
import "./TradeCard2.css";
import { Link } from "react-router-dom";
export const TradeCard = (props) => {
  return (
    <div>
      <Link className=" text-decoration-none" to={props.redirect}>
        <div class="body">
          <a class="card2 wallet" href="#">
            <div className="innercard d-flex  flex-column justify-content-evenly align-items-center  bg-light">
              <div class="overlay2"></div>
              <div class="circle2">
                <img src={props.src} alt="" height={120} width={120} />
              </div>
              <h5 className=" mt-2 text-center">{props.title} </h5>
              <p className=" text-center">{props.description}</p>
              <h6 className=" fw-bold">Read More +</h6>
            </div>
          </a>
        </div>
      </Link>
    </div>
  );
};
