import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const helmetContext = {};

export default function Card({ image, title }) {
  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Ardwells | Website & Development System | jasa pembuatan website</title>
        <meta name="description" content="jasa pembuatan website" />
        <link rel="canonical" href="/" />
      </Helmet>
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
      </HelmetProvider>
  );
}
