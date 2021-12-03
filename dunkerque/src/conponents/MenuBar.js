import React, { Component } from 'react';

import {BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";

import { signInWithGoogle } from "../utils/firebaseConfig";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { BsFillPersonBadgeFill } from "react-icons/bs";




class MenuBar extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = firebase.auth().onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

  
  return (
          <header>
            <nav>
              <ul id="menu">
                <li class="liste"><Link  style={{ textDecoration: 'none' ,  color: '#000' }} to="/">Home</Link ></li>
                <li><Link  style={{ textDecoration: 'none' ,  color: '#000'}} to="/naufrage">Naufrage</Link ></li>
                <li><Link  style={{ textDecoration: 'none' ,  color: '#000'}} to="/index-naufrage">IndexNaufrage</Link ></li>
                <li><Link  style={{ textDecoration: 'none' ,  color: '#000'}} to="/sauveteur">Sauveteur</Link ></li>
                <li><Link  style={{ textDecoration: 'none' ,  color: '#000'}} to="/index-sauveteur">IndexSauveteur</Link ></li>
                <li><Link  style={{ textDecoration: 'none' ,  color: '#000'}} to="/insertion-donnee">InsertData</Link ></li>
                <li><Link  style={{ textDecoration: 'none' ,  color: '#000'}} to="/materiaux">Materiaux</Link ></li>
                <li><Link  style={{ textDecoration: 'none' ,  color: '#000'}} to="/station">Station</Link ></li>
                <li><Link  style={{ textDecoration: 'none' ,  color: '#000'}} to="/index-station">IndexStation</Link ></li>
                <li>{this.state.currentUser ? <button onClick={signInWithGoogle}>Se Connecter</button> : <BsFillPersonBadgeFill />}</li>
              </ul>
            </nav>
          </header>
        
  );
  }
}

export default MenuBar;
