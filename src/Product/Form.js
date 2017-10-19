import React, { Component } from 'react';

class ProductForm extends Component{
	render(){
		return(
			<form className="uk-form-stacked" onSubmit={this.props.submitForm}>
				<div className="uk-margin">
					<label className="uk-form-label" htmlFor="name">What is your name?</label>
					<div className="uk-inline uk-width-1-1">
						 <span className="uk-form-icon" uk-icon="icon: user"></span>
						 <input type="text" 
						 				id="name" 
						 				className="uk-input"
						 				placeholder="Name"
						 				name="name" 
						 				required="required"
						 				onChange={this.props.getValueFromInput} 
						 				value={this.props.user.displayName}/>
					</div>
				</div>
				<div className="uk-margin">
					<label className="uk-form-label" htmlFor="product">Product</label>
					<div className="uk-inline uk-width-1-1">
						 <span className="uk-form-icon" uk-icon="icon: list"></span>
						 <input type="text"
						 				id="product"
						 				className="uk-input"
						 				placeholder="Product"
						 				name="product"
						 				required="required"
						 				onChange={this.props.getValueFromInput}
						 				value={this.props.product} />
					</div>
				</div>
				<div className="uk-text-right">
					<button type="submit" className="uk-button uk-button-primary">Add product</button>
				</div>
			</form>
		)
	}
}

export default ProductForm;