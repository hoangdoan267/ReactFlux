import React from "react";

export default class Dashboard extends React.Component{
	render(){
		console.log(this.props);
		const { query } = this.props.location;
		const { params } =this.props;
		const { article } = params;
		const {date, filter} = query;
		return (
			<div>
				<div class ="page-header">
					<h1>Dashboard {(this.props.params.article)}</h1>
					<h4>Overall index of Techkids Connect System</h4>
				</div>
				
				{/*<h4>date: {date}, filter: {filter}</h4>*/}
			</div>
		);
	}
}