import React, { useState,useEffect } from 'react'
import './user.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

function User() {
    const [users, setUsers]=useState([])
    
    useEffect(()=>{
      axios.get("http://localhost:3001")
      .then(result=> setUsers(result.data))
      .catch(err=>console.log(err))
    },[])

    const handelDelete=(id)=>{
      axios.delete("http://localhost:3001/deleteUser/"+id)
      .then(res=> {console.log(res)
      window.location.reload()})
      .catch(err=> console.log(err))
      
    }



  return (
    <>
    <Link to="/create">Add</Link>
    
     <table>
      <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
       

      </tr>
      </thead>
      
      <tbody>
      {users.map((user,inx)=>{
        return(
          <tr key={inx}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          {/* <button>Update</button> */}
          <Link to={`/update/${user._id}`}>Update</Link>
          <button onClick={(e)=>handelDelete(user._id)}>Delete</button>
          
          </tr>
        )
      })}
      </tbody>
     </table>
    </>
  )
}

export default User