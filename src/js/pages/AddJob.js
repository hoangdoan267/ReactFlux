import React from "react";
import AddJobForm from "../components/AddJobForm";
import * as JobAction from "../actions/JobAction";
import JobStore from "../stores/JobStore";

export default class AddJob extends React.Component{
	constructor(){
		super()

		this.state = {
			company_name: "",
			job_title: "",
			job_description: ""
		}
		this.updateState = this.updateState.bind(this)
	}



	updateState(job){
		this.setState({
			company_name: job.company_name,
			job_title: job.job_title,
			job_description: job.job_description
		})
		JobAction.createJob(job)
	}

	render() {
		console.log(this.state)
		return (
			<div>
				<div class ="page-header">
					<h1>Add Job</h1>
				</div>
				<AddJobForm data={this.state} submit ={this.updateState}/>
			</div>
		);
	}
}