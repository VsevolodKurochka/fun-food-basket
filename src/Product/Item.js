import React, {Component} from 'react';
import './Item.css';

import ItemDate from './ItemDate';

class ProductItem extends Component{
	render(){
		return(

			<li className="product-item">
				{this.props.data.name === this.props.user.displayName ? <span className="product-item-delete uk-text-danger" uk-icon="icon: trash" onClick={this.props.removeItem}></span> : ''}

				<p className="product-item-element"><span className="uk-text-primary" uk-icon="icon: user"></span>{this.props.data.name}</p>
				<p className="uk-text-meta product-item-element">
					<span className="uk-text-primary" uk-icon="icon: calendar"></span>
					{ <ItemDate time={this.props.data.time} /> }
				</p>
				<p className="product-item-element"><span className="uk-text-primary" uk-icon="icon: cart"></span>{this.props.data.product}</p>
			</li>
		)
	}

}

export default ProductItem;
/*
			<div className="uk-card-wrapper">
				<div className="uk-card uk-card-default">
					<div className="uk-card-header">
						<h3 className="uk-card-title uk-margin-remove-bottom">{this.props.data.name}</h3>
						<p className="uk-text-meta uk-margin-remove-top">{<ItemDate time={this.props.data.time} />}</p>
						
					</div>
					<div className="uk-card-body">
						<p><span className="uk-text-bold">{this.props.data.product}</span></p>
					</div>
				</div>
			</div>
*/