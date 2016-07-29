import React from "react";

export default class Company extends React.Component{
	render(){
		const { index } = this.props;
		const { company_name } = this.props;
		const { description } = this.props;

		return (
			<tr>
				<td>{ index }</td>
			    <td>{ company_name }</td>
			    <td>{ description }</td>
			    <td>
			    	<a href="#" class="btn btn-success btn-sm">View</a>
			    	<a href="#" class="btn btn-primary btn-sm">Edit</a>
			    	<a href="#" class="btn btn-danger btn-sm">Delete</a>
			    </td>	      
			</tr>
		);
	}
}