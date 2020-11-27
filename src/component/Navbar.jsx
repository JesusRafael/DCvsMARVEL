import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.jpg";
import "./scss/Navbar.scss";

function Navbar(props) {
  return (
    <React.Fragment>
      <div className="Navbar">
        <div className="logopage">
        <img className="photo" src={Logo} alt="logo" />
        </div>
        <div className="pages">
          <div id="links">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div id="links">
            <Link className="link" to="/hero">
              Heros
            </Link>
          </div>
          <div id="links">
            <Link className="link" to="/villano">
              Villanos
            </Link>
          </div>
          <div id="links">
            <Link className="link" to="/Search">
              Search
            </Link>
          </div>
        </div>
      </div>
      {props.children}
    </React.Fragment>
  );
}

export default Navbar;
