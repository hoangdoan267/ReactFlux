import React from "react";
export default class EditJobForm extends React.Component{

  constructor(props){
    super(props);

    this.state ={
      _id: this.props.data._id,
      company_name: this.props.data.company_name,
      job_title: this.props.data.job_title,
      job_description: this.props.data.job_description
    }
    this.handleCompanyChange = this.handleCompanyChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.submitHandle = this.submitHandle.bind(this) 
  }

  componentWillReceiveProps(nextProps) {
     this.setState({
      company_name: nextProps.data.company_name,
      job_title: nextProps.data.job_title,
      job_description:nextProps.data.job_description

    });
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
    this.props.submit(this.state)
  }

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
                value={this.state.job_title}
                onChange={this.handleTitleChange}
                required/>
              </div>
            </div>
            <div class="form-group">
              <label for="textArea" class="col-lg-2 control-label">Job Description</label>
              <div class="col-lg-8">
                <textarea class="form-control" rows="10" id="textArea"
                value={this.state.job_description}
                onChange={this.handleDescriptionChange} 
                required></textarea>
               </div>
            </div>

            <div class="form-group">
              <div class="col-lg-8 col-lg-offset-2">
                <button type="submit" class="btn btn-primary">Submit</button>
                <button type="submit" class="btn btn-default">Cancel</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>

		);
	}
}