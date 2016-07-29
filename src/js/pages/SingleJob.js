import React from "react";
import * as JobAction from "../actions/JobAction";
import JobStore from "../stores/JobStore";

export default class SingleJob extends React.Component{

	constructor(props){
		super();
		this.getJob = this.getJob.bind(this);
		this.state ={
			job : JobStore.getJob()
		}
	}

	componentWillMount(){
		JobAction.getJobById(this.props.params.id)
		JobStore.on("change", this.getJob);
	}

	componentWillUnmount(){
		JobStore.removeListener("change", this.getJob);
	}

	getJob(){
		this.setState({
			job: JobStore.getJob()
		});
	}

	render(){
		this.props = this.state
		// const {id} = query;
		return (
			<div>
				<div class ="page-header">
					<h1>Job:</h1>
					<h4>View Single Job</h4>
				</div>
				<p><strong>Company name:</strong></p>
				<p>{this.props.job.company_name}</p>
				<p><strong>Job Title:</strong></p>
				<p>{this.props.job.job_title}</p>
				<p><strong>Job Description: </strong></p>
				<p>{this.props.job.job_description}</p>
				<p></p>
			</div>
		);
	}
}