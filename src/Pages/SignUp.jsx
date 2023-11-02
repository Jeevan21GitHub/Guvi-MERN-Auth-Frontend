import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import {Link,useNavigate} from 'react-router-dom'
import '../Styles/SignUp.css'
import axios from "axios"
import API_URL from "../../config/global";

function SignUp() {
    const [formData,setFormDAta]=useState({
        name:"",
        email:"",
        password:""
    })


function HandleOnChange(e){
  const name=e.target.name;
  const value=e.target.value;
  setFormDAta((ps)=>{return{...ps,[name]:value}});
}

async function HandleOnSubmit(e){
  e.preventDefault();
  //console.log(formData);
  try{
    const response=await axios.post(`${API_URL}/signin/verify`,formData)
    console.log(response)
    if(response.data===true){
      alert("Registeration link send to your email")
    }
    else if(response.data===false){
      alert("User already exists")
    }
  }catch(e){
    console.log("Error during registeration");
  }
}
  return (

      <Container>
        <h1>Registeration Form</h1>
        <Form onSubmit={HandleOnSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={HandleOnChange} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={HandleOnChange} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={formData.password} onChange={HandleOnChange} required/>
            </Form.Group>
            <Button variant="primary" type="submit">Register</Button>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </Form>
      </Container>
  );
}

export default SignUp;
