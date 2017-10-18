import React, {Component} from 'react';

class ProductItem extends Component{
	constructor(props){
		super(props);
		this.time = this.props.data.time;
	}
	render(){
		return(
			<div>
				<div className="uk-card uk-card-default">
					<div className="uk-card-header">
						<h3 className="uk-card-title uk-margin-remove-bottom">{this.props.data.name}</h3>
						<p className="uk-text-meta uk-margin-remove-top">
							<time dateTime={this.time.timestamp}>{`${this.time.date}.${this.time.month}.${this.time.year} (${this.time.hours}:${this.time.minutes}) `}</time>
						</p>
					</div>
					<div className="uk-card-body">
						<p>Product: <span className="uk-text-bold">{this.props.data.product}</span></p>
					</div>
					<div className="uk-card-footer uk-text-right">
						<button className="uk-button uk-button-danger" onClick={this.props.removeItem}>Remove Product</button>
					</div>
				</div>
			</div>
		)
	}

}

export default ProductItem;