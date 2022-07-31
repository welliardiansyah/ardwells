import React from "react";
import signup from "../assets/signup.png";
import { HelmetProvider, Helmet } from "react-helmet-async";

const helmetContext = {};

export default function Signup() {
  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Ardwells | Website & Development System | jasa pembuatan website</title>
        <meta name="description" content="jasa pembuatan website" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="signup">
        <div className="container">
          <div className="content">
            <p className="sub-title">Launching Soon</p>
            <h1 className="title">An NFT like no other</h1>
            <p className="description">
              Don't miss out on the release of our new NFT. Sign up below to
              recieve updates when we go live.
            </p>
            <button>Sign Up</button>
          </div>
          <div className="image-container">
            <div className="image">
              <img src={signup} alt="home image" />
            </div>
            <div className="ellipse-container">
              <div className="ellipse pink"></div>
              <div className="ellipse orange"></div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}
