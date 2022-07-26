import React from "react";
import superEth from "../assets/supereth.png";
export default function Card({ image, series, title, price, tag, time }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="super1" />
      </div>
      <div className="card-content">
        <div className="card-heading">
        </div>
        <div className="card-details">
          <center>
            <h4 className="card-title">{title}</h4>
          </center>
        </div>
      </div>
    </div>
  );
}
