import React from "react";
import Networks from "../component/Networks";

import Logo from '../component/Logo'
import profile from "../img/72_600x.jpg";
import "./scss/Homep.scss";
//import Home from './Home';
//import Form from './Form';
//import Tarea from './Tarea';
//import ListTareas from './ListTareas';

//import NotFound from '../pages/NotFound';

function Home() {
  return (
    <React.Fragment>
      <div className="Home">
        <Networks/>
        <Logo></Logo>
        <div className="divimg">
          <div className="circulo">
            <img src={profile} alt="logo" />
          </div>
        </div>
        <div className="Title">
            <div className="right">
              <p id="top">developer</p>
              <p id="bottom">frontend</p>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
