import React from "react";
import icon from "../assets/icon.png";
import { HelmetProvider, Helmet } from "react-helmet-async";

const helmetContext = {};

export default function Free() {
  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Ardwells | Website & Development System | jasa pembuatan website</title>
        <meta name="description" content="jasa pembuatan website" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="free">
        <div className="container">
          <div className="background">
            <div className="ellipse pink"></div>
            <div className="ellipse green"></div>
          </div>
          <div className="content">
            <div className="image">
              <img src={icon} alt="icon" />
            </div>
            <h2 className="title">Free NFT for early birds</h2>
            <p className="description">
              Sign up today and you'll get a free NFT when we launch
            </p>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}
