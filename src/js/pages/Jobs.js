import React from "react";
import ReactDOM from "react";
import Job from "../components/Job";
import * as JobListAction from "../actions/JobListAction";
import JobListStore from "../stores/JobListStore";

export default class Jobs extends React.Component{

	constructor(){
		super();
		this.getJob = this.getJob.bind(this);
		this.state = {
			joblist: JobListStore.getAll(),
		}
	}


	componentDidMount(){
		this.reloadJobs();
	}

	componentWillMount(){
		JobListStore.on("change", this.getJob)
	}

	componentWillUnmount(){
		JobListStore.removeListener("change", this.getJob);
	}

	getJob(){
		this.setState({
			joblist: JobListStore.getAll()
		});
	}

	createJob(){
		JobListAction.createJob("ReactJS Developer", "Using ReactJS to build a CMS", Date.now().toString());
	}

	reloadJobs(){
		JobListAction.reloadJobs();
	}

	deleteJob(_id){
		return function(){
			JobListAction.deleteJob(_id)
		}.bind(this)
	}

	render(){

		const { joblist } = this.state;
		const JobListComponent = joblist.map((job) =>{
			return <Job delete_action={this.deleteJob(job._id)} key={job._id} {...job}/>
		});

		return (
			<div>
				<div class ="page-header">
					<h1>Jobs</h1>
					<h4>Managing Jobs. Including add, edit, delete Jobs.</h4>
				</div>
				<button onClick={this.reloadJobs.bind(this)}>Reload</button>
				<button onClick={this.createJob.bind(this)}>Create</button>
				<table class="table table-striped table-hover">
				  <thead>
				    <tr>
				      <th>#</th>
				      <th>Company name</th>
				      <th>Job Title</th>
				      <th>Manage</th>
				    </tr>
				  </thead>
				  <tbody>
				    	{JobListComponent}
				  </tbody>
				</table> 
			</div>
		);
	}
}