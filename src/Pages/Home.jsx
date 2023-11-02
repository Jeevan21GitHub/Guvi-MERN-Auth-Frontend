import React, { useEffect, useState } from 'react'
import '../Styles/Home.css'
import { Button, Container } from 'react-bootstrap'
import axios from "axios"
import API_URL from "../../config/global";

function Home() {
  const [res,setRes]=useState({})
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("userInfo"))
    if(user&&user.token){
      getData(user.token)
    }
  },[])

 const getData=async(token)=>{
    try{
      const config={
        headers:{
          Authorization:token
        }
      }
      const response=await axios.get(`${API_URL}/home`,config)
      console.log(response)

      if(response.data==="Invalid Token"){
        alert("login again")
      }
      else if(response.data==="Server Busy"){
        alert("unathorised access")
      }
      else if(response?.status){
        setRes(response.data)
      }
    }
    catch(e){
      console.log(e);
    }
  }
  return (
    <Container>
        <h1>Welcome to our Webpage</h1>
        <p>Hi! <span>{res.name}</span></p>
        <Button variant='primary'>Get Started</Button>
    </Container>
  )
}

export default Home
