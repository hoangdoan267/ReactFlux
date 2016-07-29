import { EventEmitter  } from "events";

import dispatcher from "../dispatcher"

class JobStore extends EventEmitter{ 

	constructor(){
		super()
		this.job = {
			company_name: '',
			job_title: '',
			job_description: ''
		}
	}

	getJob(){
		return this.job;
	}

	handleAction(action){
		switch(action.type){
			case "GET_JOB_ID":{
				this.job = action.job
				this.emit("change")
				break;
			}
		}
	}
}

const jobStore = new JobStore;
dispatcher.register(jobStore.handleAction.bind(jobStore))

window.dispatcher = dispatcher;
export default jobStore;