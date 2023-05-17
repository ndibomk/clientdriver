import React from 'react'
import { MdEmail, MdLocationOn } from "react-icons/md";
import { SlKey } from "react-icons/sl";

function Login() {
  return (
    <div>
     
        <form className='adminlogin' style={{margin:"auto"}}>
       
            <h1>Admin login</h1>
             <div className="input" >
            {/* <div style={{display:"flex",flexDirection:"row",textAlign:"centre"}}> */}
              <span>
                <MdEmail size={20} style={{ background: ""}} />
              </span>
              <input
             
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder=" &nbsp; Email Address"
              />
              {/* </div> */}
            </div>

            <div className="input">
              <span>
                <SlKey style={{ background: "" }} />
              </span>
              <input
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                type="password"
                placeholder=" &nbsp; Password "
              />
              
            </div>
            <button className='btnadminlogin'>Login</button>
            <button className='btnnotadmin'>Not anAdmin? Click here </button>
            </form>
            
        </div>
  )
}

export default Login