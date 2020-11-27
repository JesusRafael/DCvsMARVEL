import React from "react";
import Logo from "../img/rain.jpeg";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
//import Logo2 from "../img/Space.png";
import "./scss/Card.scss";

//import ListTareas from './ListTareas';

//import NotFound from '../pages/NotFound';

function Card({nombre, bio, aparicion}) {
    
  return (
    <React.Fragment>
      <div className="container">
        <div className="caracterimag">
          <img className="photo" src={Logo} alt="logo" />
        </div>
        <div className="info_car">
  <h3>{nombre}</h3>
          <h5>
            {bio}
          </h5>
          <p>{aparicion}</p>
          <Link className="link" to="/">
          <a class="myButton">
            Ver mas...
          </a>
          </Link>
          <Link className="link" to="/Comparar">
          <a class="myButton">
            Comparar
          </a>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
Card.defaultProps = {
    nombre: "Nombre",
    bio: "Descricion del personaje de DC/MARVEL",
    aparicion: "AAAA/MM/DD"
  }
  Card.propTypes = {
    nombre: PropTypes.string,
    bio: PropTypes.string,
    aparicion: PropTypes.string
  }
export default Card;
