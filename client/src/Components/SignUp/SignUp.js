import * as React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../JS/actions/userActions";
import { useDispatch } from "react-redux";
import "./SignUp.css"
export default function SignUp() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      fullName:data.get("firstName") + " " + data.get("lastName") 
    });
    dispatch(register({
        email: data.get("email"),
        password: data.get("password"),
        fullName:data.get("firstName") + " " + data.get("lastName") 
      },navigate))
  };
  return (
    <div className="signup_container">
        <div className="signup_form_container">
            <div className="left_signup">
                <h1>Welcome Back</h1>
                <Link to="/login">
                    <button type="button" className="white_btn">
                        Sing in
                    </button>
                </Link>
            </div>
            <div className="right_signup">
                <form className="form_container" onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        id="firstName"
                      
                        required
                        className="input"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        id="lastName"
                    
                        required
                        className="input"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"
                
                        required
                        className="input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                      
                        id="password"
                        autoComplete="new-password"
                        required
                        className="input"
                    />
         
                    <button type="submit" className="green_btn">
                     
              save{" "}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
};