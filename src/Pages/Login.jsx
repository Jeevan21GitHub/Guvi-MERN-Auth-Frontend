import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import axios from "axios"
import API_URL from "../../config/global";

function Login() {
  const [formData, setFormDAta] = useState({
    email: "",
    password: "",
  });

  const navigate=useNavigate()

  function HandleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormDAta((ps) => {
      return { ...ps, [name]: value };
    });
  }
  async function HandleOnSubmit(e) {
    e.preventDefault();
    const response=await axios.post(`${API_URL}/login`,formData)
    console.log(response)
    if(response.data==="Invalid User name or Password"){
      alert("Invalid User name or Password")
    }
    else if(response.data==="Server Busy"){
      alert("verify your email id")
    }
    else if(response?.status){
      localStorage.setItem("userInfo",JSON.stringify(response.data))
      navigate("/home")
    }
  }
  return (
    <>
      <Container>
        <h1>Login Form</h1>
        <Form onSubmit={HandleOnSubmit}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={HandleOnChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={HandleOnChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Login;
