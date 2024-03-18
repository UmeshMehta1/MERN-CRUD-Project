import React, { useState } from 'react'
import './user.css'
import {useNavigate} from 'react-router-dom'

import axios from 'axios'
function Create() {
  const [firstName,setFirstName]=useState()
  const [lastName,setLastName]=useState()
  const [email, setEmail]=useState()

  const nevagate = useNavigate()

  const Submit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/createUser",{firstName,lastName,email})
    .then(result => console.log(result))
    .catch(err=>console.log("error is: ",err))
    nevagate('/')
   
  }


  return (

      <div className="form-container">
        <h2>User Information</h2>
        <form id="userForm" onSubmit={Submit}>

            <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" onChange={(e)=>setFirstName(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" onChange={(e)=>setLastName(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email"  id="email" name="email" onChange={(e)=>setEmail(e.target.value)} required/>
            </div>

            <div className="form-group">
                <button type="Submit">Submit</button>
            </div>
        </form>
    </div>
  
  )
}

export default Create