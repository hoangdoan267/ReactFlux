import dispatcher from "../dispatcher";
import axios from "axios";

export function getJobById(_id){
	axios("http://techkids.vn:2407/api/connect/companyById/" + _id)
		.then(function(res){
			dispatcher.dispatch({
				type: "GET_JOB_ID",
				job: res.data.data
			})
	})
}

export function getJobId(_id){
	axios("http://techkids.vn:2407/api/connect/companyById/" + _id)
		.then(function(res){

			dispatcher.dispatch({
				type: "GET_JOB_ID",
				job: res.data.data
			})
	})
		
}

export function createJob(job) {

	axios({
		method: 'post',
		url: 'http://techkids.vn:2407/api/connect/post-company',
		data: job
	}).catch(function (error){
		console.log(error);
	});

	dispatcher.dispatch({
		type: "CREATE_JOB",
		job
	});
}

export function editjob(job, _id) {
	axios({
		method: 'post',
		url: 'http://techkids.vn:2407/api/connect/edit-company/' + _id,
		data: job
	}).catch(function (error){
		console.log(error);
	});

	dispatcher.dispatch({
		type: "EDIT_JOB",
		job,
		_id
	});
}