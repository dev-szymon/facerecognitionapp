import React from "react";
import "./LinkForm.css";

function LinkForm({ onInputChange, onButtonSubmit }) {
  return (
    <div className="LinkForm">
      <input
        type="text"
        placeholder="enter URL"
        onChange={onInputChange}
      ></input>
      <button id="submit-btn" onClick={onButtonSubmit}>
        Detect
      </button>
    </div>
  );
}

export default LinkForm;
