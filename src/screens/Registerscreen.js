import React, { useState, useEffect } from "react";
import {useDispatch , useSelector} from 'react-redux'
import {registerUser} from "../actions/userAction" ;
export default function Registerscreen() {
  const [name, setname] = useState("");
  const [Email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");


  const dispatch = useDispatch()
  function register() {
    if (password !== password) {
      alert("password not matched");
    } else {
      const user = {
        name,
        Email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user))
    }
  }
  return (
    <div>
      <div className="row justify-content-center mt-6">
        <div className="col-md-5 mt-6 text-left">
          <h3 style={{ fontSize: "25px" }}>Register</h3>
          <div>
            <input
              required
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
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
            <input
              required
              type="text"
              placeholder="Confirm Password"
              className="form-control"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />
            <button onClick={register} className="btn mt-2">
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
