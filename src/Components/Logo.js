import React from "react";
import "./Logo.css";
import logo from "../Img/smartbrain.png";

function Logo() {
  return (
    <div className="Logo">
      <img src={logo} alt="smartbrain icon" />
    </div>
  );
}

export default Logo;
