import React from "react";
import "./scss/Home.scss";
import Card from "../component/Card";
//import Form from './Form';
//import Tarea from './Tarea';
//import ListTareas from './ListTareas';

//import NotFound from '../pages/NotFound';

function Home({ data }) {
  return (
    <React.Fragment>
      <div className="back"></div>
      <div className="Home">
        <div className="page_descrip">
          <div className="containerdes">
            <div className="center">
              <h1>DC vs MARVEL</h1>
              <h5>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                cumque sint, error dolores voluptatibus deserunt fuga
                repellendus ab? Maxime vitae aut architecto ducimus obcaecati
                distinctio dolorem, adipisci incidunt omnis mollitia? Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Sint
                deleniti atque nostrum molestias reiciendis. Cum quis quisquam
                alias consequatur voluptatem facilis, velit quas placeat ab
                neque. Aliquam quidem aut animi! Lorem ipsum
              </h5>
            </div>
          </div>
        </div>
        <div className="caracters">
          <div className="center">
            {data.length === 0
              ? ""
              : data
                  .slice(0, 16)
                  .map((info) => (
                    <Card
                      nombre={info.nombre}
                      bio={info.bio}
                      aparicion={info.aparicion}
                    ></Card>
                  ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
