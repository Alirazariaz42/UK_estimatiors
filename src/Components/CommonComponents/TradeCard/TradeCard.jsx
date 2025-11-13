import React from "react";
import "./TradeCard.css";
import { Link } from "react-router-dom";
export const TradeCard = (props) => {
  return (
    <div>
      <Link className=" text-decoration-none" to={props.redirect}>
        <div class="body">
          <a class="card wallet" href="#">
            <div class="overlay"></div>
            <div class="circle">
              <img src={props.src} alt="" height={80} width={80} />
            </div>
            <h5 className=" mt-2 text-center">{props.title} </h5>
            <p className=" text-center">{props.description}</p>
            <h6 className=" fw-bold">Read More +</h6>
          </a>
        </div>
      </Link>
    </div>
  );
};
