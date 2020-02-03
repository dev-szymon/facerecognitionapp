import React from "react";
import "./Nav.css";

function Nav({ goHome, route, goOut }) {
  return (
    <nav className="Nav">
      <h3 className="navText">
        {route === "home" ? <p onClick={goOut}>Sign Out</p> : null}
      </h3>
    </nav>
  );
}

export default Nav;
