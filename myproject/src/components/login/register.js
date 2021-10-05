import React,{Component} from 'react';
import './style.css';

export class Register extends React.Component{
    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  
      };
  
      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }
  
      submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["username"] = "";
            fields["emailid"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
  
      }
  
      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        if (!fields["username"]) {
          formIsValid = false;
          errors["username"] = "*Please enter your username.";
        }
  
        if (typeof fields["username"] !== "undefined") {
          if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["username"] = "*Please enter alphabet characters only.";
          }
        }
  
        if (!fields["emailid"]) {
          formIsValid = false;
          errors["emailid"] = "*Please enter your email-ID.";
        }
  
        if (typeof fields["emailid"] !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["emailid"])) {
            formIsValid = false;
            errors["emailid"] = "*Please enter valid email-ID.";
          }
        }
  
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }
  
        if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Please enter secure and strong password.";
          }
        }
  
        this.setState({
          errors: errors
        });
        return formIsValid;
  
  
      }
    
  
    render(){    
        return(
            
            <div className="SignUppage">
            <div className="base-container">
            <div className="box">
            <img align="center" src="https://cdn1.vectorstock.com/i/thumb-large/97/70/purple-user-icon-in-the-circle-a-solid-gradient-vector-23519770.jpg"></img>
            
            <div className="content">
            <div  className="form" >
                <div className="form-group">
        
                    <input type="text" name="username" placeholder=" Username" value={this.state.fields.username} onChange={this.handleChange} ></input>
                    <div className="errorMsg">{this.state.errors.username}</div>
                </div>
                <div className="form-group">
                    
                    <input type="text" name="emailid" placeholder=" e-mail Id" onChange={this.handleChange}></input>
                    <div className="errorMsg">{this.state.errors.emailid}</div>
                </div>
                <div className="form-group">
                    
                    <input type="password" name="password" placeholder=" Password" onChange={this.handleChange}></input>
                    <div className="errorMsg">{this.state.errors.password}</div>
                </div>
            </div>
            </div>
            <div className="footer">
                <button type="button" className="btn" onClick={this.submituserRegistrationForm}>Register</button></div>
                
            </div>
           
            </div>
        </div> 
        )
}
}
export default Register;