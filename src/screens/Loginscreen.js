
import React, { useState, useEffect } from "react";
import {useDispatch , useSelector} from 'react-redux'
import { loginUser } from "../actions/userAction";


export default function Loginscreen() {
    
  const [Email, setemail] = useState("");
  const [password, setpassword] = useState("");
   const dispatch = useDispatch();


function login(){
    const user={Email , password}
       dispatch(loginUser(user))
}


    return (
        <div>
            <div className="row justify-content-center mt-6">
        <div className="col-md-5 mt-6 text-left">
          <h3 style={{ fontSize: "25px" }}>Login</h3>
          <div>
          
          
            <input
              required
              type="text"
              placeholder="Email"
              className="form-control"
              value={Email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
           
           
            <button onClick={login} className="btn mt-2">
              LOGIN
            </button>
          </div>
        </div>
      </div>
            
        </div>
    )
}
