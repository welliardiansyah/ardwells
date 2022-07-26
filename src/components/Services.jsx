import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const helmetContext = {};

export default function Services() {
  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Ardwells | Website & Development System | jasa pembuatan website</title>
        <meta name="description" content="jasa pembuatan website" />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="services">
        <div className="container">

        <div className="content">
            <h2 className="title">UI/UX Development</h2>
            <p className="description">
            Kami bekerja sama dengan Anda untuk menentukan dan merancang pengalaman pengguna yang transformatif untuk pengembangan produk baru atau perombakan produk yang sudah ada.
            </p>
          </div>

          <div className="content">
            <h2 className="title">Custom Software Development</h2>
            <p className="description">Kami mengubah ide-ide kuno menjadi produk perangkat lunak canggih yang dapat dengan mudah beradaptasi dengan lingkungan bisnis dan akan terus berkembang.
            </p>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}
