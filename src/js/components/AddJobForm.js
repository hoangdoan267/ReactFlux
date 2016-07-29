import React from "react";
import NotificationSystem from "react-notification-system"
export default class AddJobForm extends React.Component{

  constructor(props){
    super(props);
    this._notificationSystem = null
    this.state = this.props.data
    this.handleCompanyChange = this.handleCompanyChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.submitHandle = this.submitHandle.bind(this)
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }

  handleCompanyChange(e) {
    this.setState({company_name: e.target.value});
  }

  handleTitleChange(e) {
    this.setState({job_title: e.target.value});
  }

  handleDescriptionChange(e) {
    this.setState({job_description: e.target.value});
  }

  submitHandle(e){
    e.preventDefault();
    this._notificationSystem.addNotification({
      message: 'New Job was successfully added!',
      level: 'success',
      title: 'Success',
      position: 'bc'
    });
    this.props.submit(this.state)
  }
  // handleTextChange(e) {
  //   this.setState({job_title: e.target.value});
  // }

	render(){
    console.log(this.state)
		return(
      <div>
      <form class="form-horizontal" onSubmit={this.submitHandle}>
          <fieldset>
            <div class="form-group">
              <label for="CompanyName" class="col-lg-2 control-label">Company Name</label>
              <div class="col-lg-8">
                <input type="text" class="form-control" id="CompanyName" placeholder="Company Name" 

                value={this.state.company_name}
                onChange={this.handleCompanyChange}
                required/>
              </div>
            </div>
            <div class="form-group">
              <label for="JobTitle" class="col-lg-2 control-label">Job Title</label>
              <div class="col-lg-8">
                <input type="text" class="form-control" id="JobTitle" placeholder="Job Title" 
                onChange={this.handleTitleChange}
                required/>
              </div>
            </div>
            <div class="form-group">
              <label for="textArea" class="col-lg-2 control-label">Job Description</label>
              <div class="col-lg-8">
                <textarea class="form-control" rows="10" id="textArea" 
                onChange={this.handleDescriptionChange}
                required></textarea>
               </div>
            </div>

            <div class="form-group">
              <div class="col-lg-8 col-lg-offset-2">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </fieldset>
        </form>
        <NotificationSystem ref="notificationSystem" />
      </div>

		);
	}
}