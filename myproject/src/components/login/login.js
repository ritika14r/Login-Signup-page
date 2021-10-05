import React from 'react';
import './style.css';


export class Login extends React.Component{
    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submitLoginForm = this.submitLoginForm.bind(this);
  
      };
  
      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }
  
      submitLoginForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["username"] = "";
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
          errors["username"] = "*Username Required.";
        }
  
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Password Required.";
        }
  
        this.setState({
          errors: errors
        });
        return formIsValid;
  
  
      }
  
      render(){
    
  
        
        return( 
            <div  className="loginpage">
                <br></br>
                <br></br>
            <div className="base-container">
            <div className="box">
            <img align="center" src="https://cdn1.vectorstock.com/i/thumb-large/97/70/purple-user-icon-in-the-circle-a-solid-gradient-vector-23519770.jpg"></img>
            
            <div className="content">
            <div  className="form" >
                <div className="form-group">
                    
                    <input type="text" name="username" placeholder=" Username" value={this.state.fields.username} onChange={this.handleChange}></input>
                    <div className="errorMsg">{this.state.errors.username}</div>
                </div>
                <div className="form-group">
                    
                    <input type="password" name="password" placeholder=" Password" onChange={this.handleChange}></input>
                <div className="errorMsg">{this.state.errors.password}</div>
                </div>
            </div>
            </div>
            <div className="footer">
                <button type="button" className="btn" onClick={this.submitLoginForm}>Login</button></div>
                
            </div>
            </div>
        </div>
        )
}
}