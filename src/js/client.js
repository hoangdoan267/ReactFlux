import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from "react-router";

import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import SingleJob from "./pages/SingleJob"
import Layout from "./pages/Layout";
import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Dashboard}></IndexRoute>
			<Route path="dashboard(/:article)" name="dashboard"component={Dashboard}></Route>
			<Route path="add-job"  name="addjob" component={AddJob}></Route>
			<Route path="jobs" name="jobs" component={Jobs}></Route>
			<Route path="edit-job/:id"  name="editjob" component={EditJob}></Route>
			<Route path="single-job/:id" name="job" component={SingleJob}></Route>
		</Route>
	</Router>
, app);
