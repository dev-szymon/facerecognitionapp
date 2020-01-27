import React from "react";
import "./OutputPhoto.css";

function OutputPhoto({ imageSrc, FaceBox }) {
  return (
    <div className="OutputPhoto">
      {this.state.FaceBox.forEach(f => {
        return (
          <div
            className="FaceOutline"
            style={{
              top: f.topBorder,
              left: f.leftBorder,
              width: f.widthFace,
              height: f.heightFace
            }}
          ></div>
        );
      })}
      <img id="inputimage" src={imageSrc} alt="face recognized" />
    </div>
  );
}

export default OutputPhoto;
