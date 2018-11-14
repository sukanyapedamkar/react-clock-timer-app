import React, { Component } from 'react';
import './App.css';


class Clock extends Component{
	constructor(props){
		super(props);
		this.state = {
			days:0,
			hours:0,
			minutes:0,
			seconds:0
		}
		
	}

	componentWillMount(){
		this.getTimeUntil(this.props.deadline);
	}

	componentDidMount(){
		setInterval(() => this.getTimeUntil(this.props.deadline),1000);
	}

	getTimeUntil(deadline){
		const time = Date.parse(deadline) - Date.parse(new Date());
		const seconds = Math.floor(time/1000) % 60; 
		const minutes = Math.floor(time/1000/60) % 60;
		const hours = Math.floor(time/(1000*60*60) % 24);
		const days = Math.floor(time/(1000*60*60*24));
		this.setState({days, hours, minutes, seconds});

	}

	startwithzero(num){
		return num < 10 ? '0'+ num : num;
	}
	render(){

		return(
			<div>
				<div className="days"><span>{this.startwithzero(this.state.days)}</span> days</div>
				<div className="hours"><span>{this.startwithzero(this.state.hours)}</span> hours</div>
	        	<div className="minutes"><span>{this.startwithzero(this.state.minutes)}</span> minutes</div>
	        	<div className="seconds"><span>{this.startwithzero(this.state.seconds)}</span> seconds</div>

			</div>
		)      
	      
	}
}

export default Clock;