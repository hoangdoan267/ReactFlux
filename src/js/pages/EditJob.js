import React from "react";
import EditJobForm from "../components/EditJobForm";
import * as JobAction from "../actions/JobAction";
import JobStore from "../stores/JobStore";


export default class EditJob extends React.Component{
	constructor(props){
		super();
		this.getJob = this.getJob.bind(this);
		this.state = {
			job : JobStore.getJob()
		}
		this.updateJob =this.updateJob.bind(this)
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

	updateJob(job){
		JobAction.editjob(job, this.state.job._id)
	}

	render() {
		let stateData = this.state.job
		return (
			<div>
				<div class ="page-header">
					<h1>Edit Job</h1>
				</div>
				<EditJobForm data={stateData} submit ={this.updateJob}/>
			</div>
		);
	}
}