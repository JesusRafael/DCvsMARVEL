import React from "react";
import "./scss/Look.scss";
import Card from '../component/Card';
//import Form from './Form';
//import Tarea from './Tarea';
//import ListTareas from './ListTareas';

//import NotFound from '../pages/NotFound';

function Look({data}) {
  return (
    <React.Fragment>
        <div className="back"></div>
      <div className="Look">
      {data.length === 0
              ? ""
              : data
                  .map((info) => (
                    "/hero" === window.location.pathname && info.role === "hero" ? <Card
                    nombre={info.nombre}
                    bio={info.bio}
                    aparicion={info.aparicion}
                  ></Card>
                  : 
                  "/villano" === window.location.pathname && info.role === "villano" ? <Card
                    nombre={info.nombre}
                    bio={info.bio}
                    aparicion={info.aparicion}
                  ></Card> : ""
                  ))}
        
      </div>
    </React.Fragment>
  );
}

export default Look;