import React from "react";

import logo from "../img/tigre.jpg";
import "./scss/Logo.scss";

function Logo() {
  return (
    <React.Fragment>
      <div className="logo">
        <img className="photo" src={logo} alt="logo" />
      </div>
    </React.Fragment>
  );
}

export default Logo;
