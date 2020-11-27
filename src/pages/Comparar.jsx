import React from "react";
import "./scss/Comparar.scss";
import Card from '../component/Card';
//import Form from './Form';
//import Tarea from './Tarea';
//import ListTareas from './ListTareas';

//import NotFound from '../pages/NotFound';

function Comparar() {
  return (
    <React.Fragment>
        <div className="back"></div>
      <div className="Comparar">
        <Card/>
        <div className="Searchbar">
                <input
                    className="input"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button
                    type="button">
                    Buscar
                </button>
          </div>
        <Card/>
      </div>
    </React.Fragment>
  );
}

export default Comparar;