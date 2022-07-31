import React from "react";
import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";
import { HelmetProvider, Helmet } from "react-helmet-async";

const helmetContext = {};

export default function Like() {
  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Ardwells | Website & Development System | jasa pembuatan website</title>
        <meta name="description" content="jasa pembuatan website" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="like">
        <div className="container">
          <div className="content">
            <div className="image">
              <img src={eth1} alt="eth1" />
            </div>
            <h2 className="title">An NFT like no other</h2>
            <p className="description">
              Don't miss out on the release of our new NFT. Sign up below to
              recieve updates when we go live on 11/22.
            </p>
            <p className="description">
              Don't miss out on the release of our new NFT. Sign up below to
              recieve updates when we go live on 11/22. Don't miss out on the
              release of our new NFT.
            </p>
          </div>
          <div className="content">
            <div className="image">
              <img src={eth2} alt="eth2" />
            </div>
            <h2 className="title">An NFT like no other</h2>
            <p className="description">
              Don't miss out on the release of our new NFT. Sign up below to
              recieve updates when we go live on 11/22.
            </p>
            <p className="description">
              Don't miss out on the release of our new NFT. Sign up below to
              recieve updates when we go live on 11/22. Don't miss out on the
              release of our new NFT.
            </p>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}
