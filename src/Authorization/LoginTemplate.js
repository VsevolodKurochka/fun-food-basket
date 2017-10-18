import React, { Component } from 'react';

import ProductForm from '../Product/Form';
import ProductItem from '../Product/Item';

class LoginTemplate extends Component {
	render(){
		return(
			<div className="uk-grid-match uk-grid" uk-grid="true">
				<div className="uk-width-1-3@m">
					<ProductForm 
						submitForm={this.props.submitForm}
						getValueFromInput={this.props.getValueFromInput}
						name={this.props.name}
						product={this.props.product}
					/>
				</div>
				<div className="uk-width-2-3@m">
					<div className="uk-grid-match uk-grid uk-child-width-1-2@m" uk-grid="true">
						{this.props.items.map((item, index)=>{
							return <ProductItem data={item} key={item.id} removeItem={()=>{
								this.removeItem(item.id)
							}} />
						})}
					</div>
				</div>
			</div>
		)
	}
}

export default LoginTemplate;