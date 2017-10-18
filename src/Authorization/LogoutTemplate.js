import React, { Component } from 'react';
class LogoutTemplate extends Component {
	render(){
		return(
			<div className="uk-section uk-section-large">
				<div className="uk-container uk-text-center">
					<h1 className="uk-heading-primary uk-margin-medium-bottom">Login to see Fun Food Basket</h1>
					<button className="uk-button uk-button-primary" onClick={this.props.logIn}>Log in</button>
				</div>
			</div>
		)
	}
}

export default LogoutTemplate;