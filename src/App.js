import React, { Component } from 'react';
import './App.css';
import firebase, { auth, provider } from './firebase.js';

// Import own components
import Navigation from './Nav/Nav';

// Product
import LoginTemplate from './Authorization/LoginTemplate';
import LogoutTemplate from './Authorization/LogoutTemplate';


class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			product: '',
			items: [],
			user: null
		}
		this.getValueFromInput = this.getValueFromInput.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.logIn = this.logIn.bind(this);
		this.logOut = this.logOut.bind(this);
	}
	logIn(){
		auth.signInWithPopup(provider)
			.then((result) => {
				const user = result.user;
				console.log(user);
				this.setState({
					user
				});
			});
	}
	logOut(){
		auth.signOut()
	    .then(() => {
	      this.setState({
	        user: null
	      });
	    });
	}
	getValueFromInput(e){
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	submitForm(e){
		e.preventDefault();
		const itemsRef = firebase.database().ref('items');

		let currentDate = new Date();
		
		const date = {
			timestamp: currentDate,
			year: currentDate.getFullYear(),
			month: currentDate.getMonth(),
			date: currentDate.getDate(),
			hours: currentDate.getHours(),
			minutes: currentDate.getMinutes()
		}
		const item = {
			name: this.state.name,
			product: this.state.product,
			time: date
		}

		itemsRef.push(item);

		this.setState({
			name: '',
			product: ''
		});

	}
	removeItem(id){
		const itemsRef = firebase.database().ref('/items/' + id);
		itemsRef.remove();
	}
	componentDidMount(){
		auth.onAuthStateChanged((user) => {
	    if (user) {
	      this.setState({ user });
	    } 
	  });
		const itemsRef = firebase.database().ref('items');
		itemsRef.on('value', (snapshot) => {
			let items = snapshot.val();
			let currentItems = [];
			for(let item in items){
				currentItems.unshift({
					id: item,
					name: items[item].name,
					product: items[item].product,
					time: items[item].time
				})
			}
			this.setState({
				items: currentItems
			})
		});
	}
	render() {
		return (
			<div className="App">
				<Navigation 
					user={this.state.user}
					logOut={this.logOut}
					logIn={this.logIn}
				/>
				<div className="uk-section uk-section-large">
					<div className="uk-container">
						{this.state.user ? 
							<LoginTemplate
								items={this.state.items}
								submitForm={this.submitForm}
								getValueFromInput={this.getValueFromInput}
								name={this.state.name}
								product={this.state.product}
							/> : 
							<LogoutTemplate logIn={this.logIn} />
						}
					</div>
				</div>
			</div>
		);
	}
}

export default App;

/*

*/