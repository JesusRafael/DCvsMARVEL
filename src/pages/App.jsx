import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from '../component/Navbar'
import Home from './Home';
import Look from './Look';
import Comparar from './Comparar';
import Search from './Search';
import data from "../data/personajes.json";
//import ListTareas from './ListTareas';

//import NotFound from '../pages/NotFound';




function App() {
  return (
    <React.Fragment>
     
      <BrowserRouter>
      <Navbar>
          <Switch>
            <Route exact path="/" component={() => <Home data={data}/>}/>
            <Route exact path="/hero" component={() => <Look data={data}/>} />
            <Route exact path="/villano" component={() => <Look data={data}/>} />
            <Route exact path="/Search" component={() => <Search data={data}/>} />
            <Route exact path="/Comparar" component={Comparar} />
          </Switch>
        </Navbar>
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
