import React from "react";
import "./OutputPhoto.css";

function OutputPhoto({ imageSrc }) {
  return (
    <div className="OutputPhoto">
      <img id="inputimage" src={imageSrc} alt="face recognition" />
    </div>
  );
}

export default OutputPhoto;
