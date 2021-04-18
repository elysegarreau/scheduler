import React from 'react';
import axios from 'axios';

class Scheduler extends React.Component {

	constructor(props){
		super(props);
		this.name = {val: "Welcome!"};
		this.state = [
			{task: "Task 1",
			priority: 0,
			time: 0
			}]

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleSubmit() {
		console.log(this.state)
	}

	handleInputChange(event) {
	    const target = event.target;
	    const name = target.task;
	    const priority = target.priority;
	    const time = target.time;

			this.state = [
				{task: name,
				priority: priority,
				time: time
			 }]
	};

	render(){
		return(
			<form>
			<label>Task #1
			<input
				name="task"
				type="text"
				task = {this.state.name}
				onChange={this.handleInputChange}/>
				</label>
				<br />
				<label>
				Priority (out of 10)
 			 <input
 				 name = "priority"
 				 type = "number"
 				 priority = {this.state.priority}
 				 onChange={this.handleInputChange} />
 		 </label>
		 <label>
			 Estimated Time (hours)
			 <input
				 name = "time"
				 type = "number"
				 time = {this.state.time}
				 onChange={this.handleInputChange} />
		 </label>
		 < input type="submit" value = "Submit"/>,
		 </form>

		);
	}
}



export default Scheduler;
