import React from "react";
import clients1 from "../assets/fiture_01.png";
import clients2 from "../assets/fiture_02.png";
import clients7 from "../assets/fiture_07.png";
import clients4 from "../assets/fiture_04.png";
import clients5 from "../assets/fiture_05.png";
import { HelmetProvider, Helmet } from "react-helmet-async";

export default function Clients() {
  const helmetContext = {};
  const data = [clients1, clients2, clients7, clients4, clients5];
  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Ardwells | Website & Development System | jasa pembuatan website</title>
        <meta name="description" content="jasa pembuatan website" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="clients">
        <div className="container">
          <div className="clients-container">
            {data.map((client, index) => (
              <div className="client" key={index}>
                <img src={client} alt="client" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}
