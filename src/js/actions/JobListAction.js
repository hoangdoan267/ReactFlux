import dispatcher from "../dispatcher";
import axios from "axios";

export function createJob(job_title, job_description,date_created) {

	let company={
		company_name: "Techkids Coding School",
		date_created: date_created,
		job_title: job_title,
		job_description: job_description
	}

	axios({
		method: 'post',
		url: 'http://techkids.vn:2407/api/connect/post-company',
		data: company
	}).catch(function (error){
		console.log(error);
	});

	dispatcher.dispatch({
		type: "CREATE_JOB",
		date_created,
		job_title,
		job_description,
	});
}

export function deleteJob(_id) {
	axios({
		method: 'post',
		url: 'http://techkids.vn:2407/api/connect/delete-company/' + _id,
	}).catch(function(error){
		console.log(error)
	})
	setTimeout(()=>{
		dispatcher.dispatch({
			type: "DELETE_JOB",
			_id,
		});
	}, 100)
}

export function reloadJobs(){
	let list = [];

	axios("http://techkids.vn:2407/api/connect/company")
		.then(function(res){
			list = list.concat(res.data.company)
			dispatcher.dispatch({
				type: "RECIEVE_DATA",
				joblist: list.reverse()
			})
		})
}

