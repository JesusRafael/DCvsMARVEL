import React from "react";
import Networks from "../component/Networks";
import Logo from '../component/Logo'

import Api from "../component/Api";
import photo from "../img/rain.jpeg";
import "./scss/Contact.scss";

function Contact() {
  return (
    <React.Fragment>
      <div className="contact">
        <Networks />
        <Api></Api>
        <Logo></Logo>
        <div className="contacinf">
          <div>
            <div className="left">
              <h3>Dirrecion</h3>
            </div>
            <h5>Cl. 98 #52-115, Barranquilla, Atlántico</h5>
            <h5>PBX: 1234673 - 45699235 - 5302845</h5>
            <h5>codigo postal: 90034</h5>
          </div>
          
          <div>
            <div className="left">
              <h3>formas de contacto</h3>
            </div>
            <h5>Cel: +57 300 3453534</h5>
            <h5>developer@frontend.co</h5>
            <h5>freelancedevelop@gmail.com</h5>
          </div>
          <div>
            <div className="left">
              <h3>Dias laborales</h3>
            </div>
            <h5>Lunes a Viernes</h5>
            <h5>7:00am a 12:00pm</h5>
            <h5>2:00pm a 8:00pm</h5>
          </div>
          
        </div>
      
        <div className="divimg">
          <div className="circulo">
            <img src={photo} alt="logo" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;
