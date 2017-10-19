import React, {Component} from 'react';
import './Item.css';

import ItemDate from './ItemDate';

class ProductItem extends Component{
	render(){
		return(
			<div className="uk-card-wrapper">
				<div className="uk-card uk-card-default">
					<div className="uk-card-header">
						<h3 className="uk-card-title uk-margin-remove-bottom">{this.props.data.name}</h3>
						<p className="uk-text-meta uk-margin-remove-top">{<ItemDate time={this.props.data.time} />}</p>
						{this.props.data.name === this.props.user.displayName ? <button className="uk-close-large" type="button" uk-close="true" onClick={this.props.removeItem}></button> : ''}
					</div>
					<div className="uk-card-body">
						<p>Product: <span className="uk-text-bold">{this.props.data.product}</span></p>
					</div>
				</div>
			</div>
		)
	}

}

export default ProductItem;