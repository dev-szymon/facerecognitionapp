import React from "react";
import "./OutputPhoto.css";

function OutputPhoto({ imageSrc, FaceBox }) {
  console.log(FaceBox);
  return (
    <div className="OutputPhoto">
      <div
        className="FaceOutline"
        style={{
          top: FaceBox.topBorder,
          left: FaceBox.leftBorder,
          width: FaceBox.widthFace,
          height: FaceBox.heightFace
        }}
      ></div>
      <img id="inputimage" src={imageSrc} alt="face recognized" />
    </div>
  );
}

export default OutputPhoto;
