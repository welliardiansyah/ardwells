import React, { useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import { HelmetProvider, Helmet } from "react-helmet-async";

const helmetContext = {};

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });
  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Ardwells | Website & Development System | jasa pembuatan website</title>
        <meta name="description" content="jasa pembuatan website" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className={`scrollToTop ${visible ? "visible" : ""}`}>
        <a href="#">
          <BsChevronUp />
        </a>
      </div>
    </HelmetProvider>
  );
}
