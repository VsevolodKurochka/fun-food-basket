import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';

// Import own components


class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			product: '',
			items: []
		}
		this.getValueFromInput = this.getValueFromInput.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}
	getValueFromInput(e){
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	submitForm(e){
		e.preventDefault();
		const itemsRef = firebase.database().ref('items');

		const item = {
			name: this.state.name,
			product: this.state.product
		}

		itemsRef.push(item);

		this.setState({
			name: '',
			product: ''
		});

	}
	componentDidMount(){
		const itemsRef = firebase.database().ref('items');
		itemsRef.on('value', (snapshot) => {
			let items = snapshot.val();
			let currentItems = [];
			for(let item in items){
				currentItems.push({
					id: item,
					name: items[item].name,
					product: items[item].product
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
				
				<div className="uk-section uk-section-large uk-background-muted">
					<div className="uk-container">
						<div className="uk-grid-match uk-grid" uk-grid="true">
							<div className="uk-width-1-3@m">
								<form className="uk-form-stacked" onSubmit={this.submitForm}>
									<div className="uk-margin">
										<label className="uk-form-label" htmlFor="name">What is your name?</label>
										<div className="uk-inline uk-width-1-1">
											 <span className="uk-form-icon" uk-icon="icon: user"></span>
											 <input type="text" id="name" className="uk-input" placeholder="Name" name="name" onChange={this.getValueFromInput}  value={this.state.name}/>
										</div>
									</div>
									<div className="uk-margin">
										<label className="uk-form-label" htmlFor="product">Product</label>
										<div className="uk-inline uk-width-1-1">
											 <span className="uk-form-icon" uk-icon="icon: list"></span>
											 <input type="text" id="product" className="uk-input" placeholder="Product" name="product" onChange={this.getValueFromInput} value={this.state.product}/>
										</div>
									</div>
									<div className="uk-text-right">
										<button type="submit" className="uk-button uk-button-primary">Add product</button>
									</div>
								</form>
							</div>
							<div className="uk-width-2-3@m">
								<div className="uk-grid-match uk-grid" uk-grid="true">
									<div className="uk-width-1-2@m">
										<div className="uk-card uk-card-default">
											<div className="uk-card-header">
												<div className="uk-grid-small uk-flex-middle" uk-grid="true">
													<h3 className="uk-card-title uk-margin-remove-bottom">Title</h3>
													<p className="uk-text-meta uk-margin-remove-top">
														<time dateTime="2016-04-01T19:00">April 01, 2016</time>
													</p>
												</div>
											</div>
											<div className="uk-card-body">
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
											</div>
											<div className="uk-card-footer">
												<button className="uk-button uk-button-danger">Remove Item</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
