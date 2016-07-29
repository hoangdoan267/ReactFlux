import React from "react";
import {Link, withRouter, browserHistory} from "react-router";
import Nav from "../components/layout/Nav";
export default class Layout extends React.Component { 

	navigate(){
		this.props.history.pushState(null, '/dashboard');
	}

	render(){
		const { location } = this.props;
		return (

			<div>
				<Nav location={location} />
				<div class ="container">
				{this.props.children}
				</div>
			</div>
		);
	}
}