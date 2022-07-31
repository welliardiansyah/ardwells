import React from "react";
import Services from "../components/Services";
import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";
import super4 from "../assets/super4.png";
import { HelmetProvider, Helmet } from "react-helmet-async";

const helmetContext = {};

export default function SuperRare() {
  const data = [
    {
      image: super1,
      title: "UI/UX Development",
    },
    {
      image: super2,
      title: "Custom Software Development",
    },
    {
      image: super3,
      title: "Software Testing & QA Service",
    },
    {
      image: super4,
      title: "Outstaffing Service",
    },
  ];
  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Ardwells | Website & Development System | jasa pembuatan website</title>
        <meta name="description" content="jasa pembuatan website" />
        <link rel="canonical" href="/" />
      </Helmet>
        
      <div className="super-rare">
        <div className="title-container">
          <center>
          <h2 className="title">Layanan Kami</h2>
          <p className="description">
          Kami bersemangat membangun solusi khusus yang selaras dengan kebutuhan bisnis Anda.
          </p>
          </center>
        </div>
        <Services />
      </div>
    </HelmetProvider>
  );
}
