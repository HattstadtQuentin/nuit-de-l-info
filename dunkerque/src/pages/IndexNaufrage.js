import React, { Component } from 'react';

export default class IndexNaufrage extends Component {
   
  render() {
  	return(
		<div className="main">
			<div className="research_zone">
				<p>Je suis la zone de recherche</p>
				<div className="research_bar">
					<p>je suis la zone de recherche</p>
				</div>
				<div className="research_filter">
					<p>je suis la zone de filtre</p>
				</div>
			</div>
			<div className="list_zone">
				<div className="sort_bar">
					<p>je suis la barre de trie</p>
				</div>
				<div className="list">
					<p>je suis la liste de naufrage</p>
				</div>
			</div>	
		</div>
	)
  }
}