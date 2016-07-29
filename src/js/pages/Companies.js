import React from "react";

import Company from "../components/Company";
export default class Companies extends React.Component{

	render(){

		const Companies = [
			[1,"EWAY Vietnam", "Lorem ipsum dolor sit amet, consectetur adipisicing elit."],
		].map((index, company_name, description, i)=> <Company key={i} company_name ={company_name} description={description} />);

		return (
			<div>
				<div class ="page-header">
					<h1>Companies</h1>
					<h4>List of Companies joining in Techkids Connect System</h4>
				</div>
				<table class="table table-striped table-hover">
				  <thead>
				    <tr>
				      <th>#</th>
				      <th>Company's name</th>
				      <th>Description</th>
				      <th>Manage</th>
				    </tr>
				  </thead>
				  <tbody>
				    	{Companies}
				  </tbody>
				</table> 
			</div>
		);
	}
}