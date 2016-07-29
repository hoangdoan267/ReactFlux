import { EventEmitter  } from "events";

import dispatcher from "../dispatcher"

class JobListStore extends EventEmitter{ 

	constructor(){
		super()
		this.joblist =[

		];

		this.job = []

	}
	getAll(){
		return this.joblist;
	}
	getJob(){
		return this.job;
	}
	deleteJob(_id){
		for(let i = 0; i<this.joblist.length; i++){
			if(this.joblist[i]._id === _id){
				this.joblist.splice(i, 1)
				break;
			}
		}

		this.emit("change")
	}

	handleAction(action){
		switch(action.type){
			// case "CREATE_JOB":{
			// 	this.createJob(action.job_title, action.job_description)
			// 	break;
			// }
			case "RECIEVE_DATA":{
				this.joblist = action.joblist
				this.emit("change")
				break;
			}
			case "DELETE_JOB":{
				this.deleteJob(action._id)
				break;
			}
			case "GET_JOB_ID":{
				this.job = action.job
				this.emit("change")
				break;
			}
		}
	}
}

const jobListStore = new JobListStore;
dispatcher.register(jobListStore.handleAction.bind(jobListStore))

window.dispatcher = dispatcher;
export default jobListStore;

