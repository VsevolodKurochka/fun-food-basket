import React, {Component} from 'react';

class Navigation extends Component{
	render(){
		return(
			<nav className="uk-navbar-container vak-navbar-container" uk-navbar="true">
				<div className="uk-navbar-left">
					<p className="uk-navbar-item uk-logo vak-logo">Fun food friends</p>
				</div>
				<div className="uk-navbar-right">
					<div className="uk-navbar-item">
						{this.props.user ? 
							<button className="uk-button uk-button-danger" onClick={this.props.logOut}>Log out</button>
							:
							<button className="uk-button uk-button-primary" onClick={this.props.logIn}>Log in</button>
						}
					</div>
				</div>
			</nav>
		)
	}
}

export default Navigation;