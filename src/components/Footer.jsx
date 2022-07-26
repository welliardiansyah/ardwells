import React from "react";
import logo from "../assets/logo.png";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
export default function Footer() {
  const links = [
    {
      title: "Tentang Kami",
      data: ["Tentang Kami", "Portfolio",],
    },
    {
      title: "Solution",
      data: ["ERP", "CRM", "Point of Sales", "Website", "Other Project"],
    },
    {
      title: "Kontak",
      data: ["Alamat", "Layanan Bantuan", "Chat Kami"],
    },
  ];
  const socialLink = [
    <BsInstagram />,
    <BsLinkedin />,
    <BsGithub />,
  ];
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <p>Jl. Kp Utan jaya No. 26 <br /> Grogol - Limo, 16512 Depok </p>
          <p>Layanan konsultan: +62 88723 73 723<br /> Sales Person: +62 852 8007 2180</p>
          <p>info@ardwells.website</p>
          <ul>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright 2022 | Ardwells Website & Developments System.</span>
        <span>Development by Ardwells</span>
      </div>
    </footer>
  );
}
