import React from "react";
import "./scss/Search.scss";
import Card from '../component/Card';
//import Form from './Form';
//import Tarea from './Tarea';
//import ListTareas from './ListTareas';

//import NotFound from '../pages/NotFound';

function Search({data}) {
    let search = data;
    console.log(data);
    //str.toLocaleLowerCase().search(e.target.value);
    const handleChange = (e) => {
        //console.log(e.target.value);
    }
       
  return (
    <React.Fragment>
        <div className="back"></div>
        
      <div className="Search">
          <div className="Searchbar">
                <input
                    onChange={handleChange}
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
          {search.length === 0
              ? <Card/>
              : search
                  .map((info) => (
                    <Card
                      nombre={info.nombre}
                      bio={info.bio}
                      aparicion={info.aparicion}
                    ></Card>
                  ))}
        
      </div>
    </React.Fragment>
  );
}

export default Search;