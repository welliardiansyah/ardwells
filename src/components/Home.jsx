import React from "react";
import Typewriter from "typewriter-effect";
import home from "../assets/background.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <h1 className="title">Make a plan for your website or a system plan for your company.</h1>
          <p className="description">
            <Typewriter 
                onInit={(typewriter)=> {
                typewriter
                .typeString("Buat website anda dengan hal yang baru dan menarik.")
                .pauseFor(500)
                .deleteAll()
                .typeString("Buat perusahan anda lebih fleksibel dengan System website atau Software.")
                .pauseFor(500)
                .deleteAll()
                .typeString("Bisnis anda di gengaman tangan customer dengan Apps android & ios.")
                .pauseFor(500)
                .deleteAll()
                .typeString("Lebih mudah untuk mengatur produk dagangan anda dengan Shopify.")
                .pauseFor(500)
                .deleteAll()
                .typeString("Ardwells layanan maintenance & Network")
                .start()
                }}
            />
          </p>
          <button>Join Project</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
