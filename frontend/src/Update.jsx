import React,{useState,useEffect} from 'react'
import './user.css'
import {Link,useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'

function Update() {

  const {id}=useParams()
  const [firstName,setFirstName]=useState()
  const [lastName,setLastName]=useState()
  const [email, setEmail]=useState()

  const nevagate = useNavigate()
  
  useEffect(()=>{
    axios.get("http://localhost:3001/getUser/"+id)
    .then(result=> {console.log(result)
           setFirstName(result.data.firstName)
           setLastName(result.data.lastName)
           setEmail(result.data.email)
          })
    
    .catch(err=>console.log(err))
    
  },[])

  const updateUser = (e)=>{
    e.preventDefault();
    axios.put("http://localhost:3001/updateUser/"+id,{firstName,lastName,email})
    .then(result => console.log(result))
    .catch(err=>console.log("error is: ",err))
    nevagate('/')
   
  }

  
  

  return (
    <div className="form-container">
        <h2>User Information</h2>
        <form id="userForm" onSubmit={updateUser} action="#" method="post">

            <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} id="firstName" name="firstName" required/>
            </div>

            <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} id="lastName" name="lastName" required/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" name="email" required/>
            </div>

            <div className="form-group">
              {/* <Link to="/" type="button">Update</Link> */}
              <button type="submit">Update</button>
            </div>
        </form>
    </div>
  
  )
}

export default Update