import React from 'react';

class Greet extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {val: "Welcome!"};
	}
	
	
	changeValue = () => {
		this.setState(
			{val: "Plan your day!"}
			);
		}
	
	render(){
		return(
			<div>
				<h1> {this.state.val} </h1>
				<button type="button"onClick={this.changeValue}>Ready?</button>
			</div>
		);
	}
}


export default Greet;
