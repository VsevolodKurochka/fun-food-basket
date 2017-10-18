import React, { Component } from 'react';
import './Login.css';
import ProductForm from '../Product/Form';
import ProductItem from '../Product/Item';

class LoginTemplate extends Component {
	render(){
		return(
			<div>
				<div className="uk-section uk-section-large">
					<div className="uk-container">
						<div className="uk-grid-match uk-grid" uk-grid="true">
							<div className="uk-width-1-3@m">
								<ProductForm 
									submitForm={this.props.submitForm}
									getValueFromInput={this.props.getValueFromInput}
									name={this.props.name}
									product={this.props.product}
									user={this.props.user}
								/>
							</div>
							<div className="uk-width-2-3@m">
								<div className="uk-grid-match uk-grid uk-child-width-1-2@m" uk-grid="true">
									{this.props.items.length ?
										this.props.items.map((item, index)=>{
											return <ProductItem data={item} key={item.id} removeItem={()=>{
												this.props.removeItem(item.id)
											}} />
										})
										:
										<div>
											<p>Add elements with form.</p>
										</div>
									}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="user">
					<img src={this.props.user.photoURL} alt="User Image" className="user-image"/>
					<p className="user-name">{this.props.user.displayName}</p>
				</div>
			</div>
		)
	}
}

export default LoginTemplate;