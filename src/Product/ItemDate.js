import React, { Component } from 'react';

class ItemDate extends Component{
	constructor(props){
		super(props);
		this.time = this.props.time;
		this.timestamp = this.time.timestamp;
		this.day = this.time.date;
		this.month = this.time.month;
		this.year = this.time.year;
		this.hours = this.time.hours;
		this.minutes = this.time.minutes;
		if(this.minutes < 10){
			this.minutes = '0' + this.minutes;
		}
	}
	render(){
		return <time dateTime={this.timestamp}>{`${this.day}.${this.month}.${this.year} (${this.hours}:${this.minutes}) `}</time>
	}
}

export default ItemDate;