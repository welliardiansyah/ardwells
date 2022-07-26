import React from "react";
import { BsArrowRight } from "react-icons/bs";
import dev from "../assets/ardwells_01.png";
import site from "../assets/ardwells_02.png";
import  mobapp from "../assets/ardwells_03.png";
import Card from "./Card";

export default function Release() {
  return (
    <div className="releases">

      <center>
        <h2 className="titles">Aplikasi yang telah kami kembangkan</h2>
        <p className="descriptions">
          System ERP, Mobile Application, Website, E-commerce dan lainnya.
        </p>
      </center>

      <div className="release orange">
        <div className="content">
          <h2 className="title">System ERP, Point of Sales, Dll</h2>
          <p className="description">
            Kami mengubah ide-ide kuno menjadi produk perangkat lunak canggih yang dapat dengan mudah beradaptasi dengan lingkungan bisnis yang terus berkembang.
            <br />
            <br />
            <a href="#">PT. Selaras Bahagia Lestari</a>
            <br />
            <a href="#">PT. Panji Teknologi Services</a>
          </p>
        </div>
        <div className="image">
          <img src={dev} alt="release" />
        </div>
        <br />
      </div>


      <div className="release green">
        <div className="content">
          <h2 className="title">Website & E-commerce by Shopify, Wordpress</h2>
          <p className="description">
            Kami bekerja sama dengan Anda untuk menentukan dan merancang website anda yang transformatif untuk pengembangan baru atau perombakan yang sudah ada.
            <br />
            <br />
            <a href="#">PT. Selaras Bahagia Lestari</a>
            <br />
            <a href="#">PT. Panji Teknologi Services</a>
            <br />
            <a href="#">KLMX Custom</a>
          </p>
        </div>
        <div className="image">
          <img src={site} alt="release" />
        </div>
        <br />
      </div>

      <div className="release orange">
        <div className="content">
          <h2 className="title">Mobile applications andorid & ios</h2>
          <p className="description">
            Kami menawarkan layanan pengembangan aplikasi seluler android atau ios dengan yang  berinovatif dan menyatukan mobilitas.
            <br />
            <br />
            <a href="#">PT. Selaras Bahagia Lestari</a>
            <br />
            <a href="#">Moojol</a>
          </p>
        </div>
        <div className="image">
          <img src={mobapp} alt="release" />
        </div>
        <br />
      </div>

    </div>
  );
}
