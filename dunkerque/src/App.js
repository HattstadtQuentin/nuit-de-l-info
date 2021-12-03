import React, { Component, useState, useEffect } from 'react';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";
import logo from './logo.svg';
import Home from './pages/Home';
import Naufrage from './pages/Naufrage';
import IndexNaufrage from './pages/IndexNaufrage';
import Sauveteur from './pages/Sauveteur';
import IndexSauveteur from './pages/IndexSauveteur';
import InsertData from './pages/InsertData';
import Materiaux from './pages/Materiaux';
import Station from './pages/Station';
import IndexStation from './pages/IndexStation';
import './App.css';
import * as FirestoreService from './utils/firebaseConfig';

import MenuBar from './conponents/MenuBar';

import { BsFillMoonStarsFill } from "react-icons/bs";


FirestoreService.getMarkers().then(console.log("YEEEE"));


class App extends Component {

  constructor(props, context) { 
    super(props, context);
 
    this.state = {
       check: false
    };
    };



  render(){
  return (
      <Router>
        <div className="main">
          <MenuBar/>
          
          <main>
              <Switch>
                  <Route exact path="/" component = {Home}/>
                  <Route exact path="/naufrage" component={Naufrage}/>
                  <Route exact path="/index-naufrage" component={IndexNaufrage}/>
                  <Route exact path="/sauveteur" component={Sauveteur}/>
                  <Route exact path="/index-sauveteur" component={IndexSauveteur}/>
                  <Route exact path="/insertion-donnee" component={InsertData}/>
                  <Route exact path="/materiaux" component={Materiaux}/>
                  <Route exact path="/station" component={Station}/>
                  <Route exact path="/index-station" component={IndexStation}/>
              </Switch>
          </main>
          { this.check ? <div className="blackMode">
          <BsFillMoonStarsFill /><button 
          onClick={this.setState(({ check }) => ({ check: !check }))}/>
          </div> : <div className="lightMode">
          
          <BsFillMoonStarsFill /><button 
          onClick={this.setState(({ check }) => ({ check: !check }))}/> }
          </div> }
          
        </div>
      </Router>
  );
}
}


export default App;
