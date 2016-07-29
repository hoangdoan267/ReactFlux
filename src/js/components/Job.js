import React from "react";
import {Link, withRouter, browserHistory, IndexLink} from "react-router";
export default class Job extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { job_title, _id, job_description, company_name,  delete_action } = this.props;
    return (
      <tr>
        <td></td>
        <td>{company_name}</td>
        <td>{job_title}</td>
        <td>
          <Link to = {`/single-job/${_id}`}  className="btn btn-success btn-sm">View</Link>
          <Link to = {`/edit-job/${_id}`}  className="btn btn-primary btn-sm">Edit</Link>
          <button class="btn btn-danger btn-sm" onClick={delete_action}>Delete</button>
        </td>
      </tr>
    );
  }
}
