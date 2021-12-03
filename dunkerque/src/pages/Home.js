import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import '../styles/general.scss'; // assuming a styles directory under src/


export default class Home extends Component {
   
  render() {
  	return(

		<div className="carousel">

			<Carousel autoPlay={true} interval={2000} infiniteLoop={true} width={500}>
				<div id="event1">
					<label>Nom :</label><br/>
					<img src={require("../assets/chat.jpg").default}/>
					<label>Descritpion : </label>
					<p>AFFICHE 1</p>
				</div>

				<div id="event2">
					<label>Nom :</label><br/>
					<img src={require("../assets/index1.jpg").default}/>
					<label>Descritpion : </label>
					<p>AFFICHE 2</p>
				</div>

                <div id="event3">
					<label>Nom :</label><br/>
					<img src={require("../assets/index2.jpg").default}/>
					<label>Descritpion : </label>
					<p>AFFICHE 3</p>
				</div>
            </Carousel>
		</div>
	)
  }
}