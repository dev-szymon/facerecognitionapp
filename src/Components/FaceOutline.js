import React from "react";
import "./OutputPhoto.css";

function FaceOutline({ faceBox }) {
  console.log(faceBox);
  return (
    <div
      className="FaceOutline"
      style={{
        top: faceBox.topBorder,
        left: faceBox.leftBorder,
        width: faceBox.heightFace,
        height: faceBox.widthFace
      }}
    ></div>
  );
}

export default FaceOutline;
