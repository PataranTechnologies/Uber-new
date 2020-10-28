import React, { Component } from "react";
import { Container, Box, TextField } from "@material-ui/core";
import logo from "../Images/logo.png";
import axios from "axios";
import { Form, Col, Button } from 'react-bootstrap';
import { RemoveRedEye } from '@material-ui/icons';
import SecurityTool from '../Utils/securityTools'
import { InputAdornment, withStyles } from '@material-ui/core';
class changePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      redirect: false,
      new_password: "",
      new_password_confirm:'',
      passwordIsMasked: true,
      passwordIsMasked1: true,
      
    }
  }
  togglePasswordMask = () => {
    this.setState(prevState => ({
      passwordIsMasked: !prevState.passwordIsMasked,
    }));
  };

togglePasswordMask1 = () => {
    this.setState(prevState => ({
      passwordIsMasked1: !prevState.passwordIsMasked1,
    }));
  };


  dataChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value

    })
    console.log(this.state);
  }
  postData(ev) {
    ev.preventDefault()
    if(!this.state.new_password)
    {
      alert("Please Enter Password")
      return 
    }

    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if(!re.test(this.state.new_password))
    {
      alert("Password should contain one lower case letter ,One upper Case letter ,one number,and atlease 6 character long")
      return;

    }
    if(!this.state.new_password_confirm)
    {
      alert("Please Confirm Password")
      return;
    }
    if(this.state.new_password != this.state.new_password_confirm)
    {
      alert("Password Does not match")
      return;
    }

  let new_password = this.state.new_password

    this.setState({
      redirect: true
    })

    let data = {

      new_password,


    }


    let myFormData = ev.target;
    var fd = new FormData(myFormData);
       
    for(var pair of fd.entries()){
      fd.set(pair[0],SecurityTool.cipher(pair[1]))
  }
    let json = convertFD2JSON(fd);
    let url = 'https://sipcityapi.mobileprogramming.net/admin/change-password';
    let h = new Headers();

    h.append('Content-Type', 'Application/json');
    h.append('Access-Control-Allow-Origin', '*');
    h.append('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJpZCI6MSwibmFtZSI6IkFkbWluaXN0cmF0b3IiLCJlbWFpbCI6Im11ZGl0Lmt1bWFyQG1vYmlsZXByb2dyYW1taW5nLmNvbSJ9LCJpYXQiOjE1OTY3MzgzMjQsImV4cCI6MzE5MzQ4MDI0OH0.7Elcc7IJqeCsmmKFUPy1AXnT_f0Zoeb6yzKkL5eOaWY');

    let req = new Request(url, {
      headers: h,
      body: json,
      method: 'PUT',
    });
    //console.log(req);
    fetch(req)
      .then((res) => res.json())

      .then((data) => {
        console.log(data.json);
        alert("password changed successfully");
        this.props.history.push("/Login");

      })
      .catch(console.warn);
    function convertFD2JSON(formData) {
      let obj = {};
      for (let key of formData.keys()) {
        obj[key] = formData.get(key);
      }
      return JSON.stringify(obj);
    }
  };
  render() {
    console.log(this.props)
    console.log(this.state)
    return (
      <Container maxwidth="lg">
        <img src={logo} height="660px" alt="logo" />
        <Box textAlign="center" ml={61} mt={-75}>
          <Form onSubmit={this.postData.bind(this)} id="myFormData"  >
            <Form.Row>
              <h3>Change Password!</h3>


            </Form.Row>
            <Form.Row>
              <p>Welcome! now you can change your password</p>


            </Form.Row>

            <Form.Row >
              <Form.Group as={Col} controlId="new_password">
                <Col xs={6}>
                  <Form.Label>Enter Verification Code</Form.Label>
                  <TextField
              className="text"
              label=""
             
              id="outlined-size-small"
              defaultValue=""
              variant="outlined"
              size="small"
              name="verification_code"
              id="password"
              value={this.state.name}
              autoComplete="password"
              onChange={this.dataChange.bind(this)}
              required
              title="Password must contain at least 6 characters, including UPPER/lowercase and numbers."

              type={ 'password' }
              {...this.props}
            

            />
                  
                </Col>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="new_password">
                <Col xs={6}>
                  <Form.Label>Enter New Password</Form.Label>
                  <TextField
              className="text"
              label=""
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              id="outlined-size-small"
              defaultValue=""
              variant="outlined"
              size="small"
              name="password"
              id="password"
              autoComplete="password"
              onChange={(e)=>{this.setState({new_password:e.target.value})}}
              required
              title="Password must contain at least 6 characters, including UPPER/lowercase and numbers."
              type={this.state.passwordIsMasked ? 'password' : 'text'}
              {...this.props}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RemoveRedEye
                      className='onhover'
                      onClick={this.togglePasswordMask} />
                  </InputAdornment>
                ),
              }}

            />
            
                </Col>
              </Form.Group>
            </Form.Row>
           
            <Form.Row>
              <Form.Group as={Col} controlId="new_password">
                <Col xs={6}>
                  <Form.Label>Confirm Password</Form.Label>
                  <TextField
              className="text"
              label=""
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              id="outlined-size-small"
              defaultValue=""
              variant="outlined"
              size="small"
              name="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>{this.setState({new_password_confirm:e.target.value})}}
              required

              type={this.state.passwordIsMasked1 ? 'password' : 'text'}
              {...this.props}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RemoveRedEye
                      className='onhover'
                      onClick={this.togglePasswordMask1} />
                  </InputAdornment>
                ),
              }}

            />
            
                </Col>
              </Form.Group>
            </Form.Row>
            <br />
            <Form.Row>
              <Col xs={6}>
                <button type="submit" className="doneButton" onSubmit={this.postData}>
                  Done
                </button>
              </Col>
            </Form.Row>


          </Form >

        </Box>
      </Container>
    );
  }
}

export default changePassword;
