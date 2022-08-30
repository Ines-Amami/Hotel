import * as React from "react";
import { Link as LinkR, useNavigate } from "react-router-dom";
import { login } from "../../JS/actions/userActions";
import { useDispatch } from "react-redux";
import "./Login.css"
export default function SignIn() {

    const navigate=useNavigate()
    const dispatch=useDispatch()

    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get("email"),
        password: data.get("password"),
      });
      dispatch(
        login({
          email: data.get("email"),
          password: data.get("password"),
        },navigate)
      );
    };
  
    return (
        <div className="login_container">
        <div className="login_form_container">
            <div className="left_login">
                <form className="form_container_login" onSubmit={handleSubmit}>
                    <h1>Login to Your Account</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"
                        label="Email Address"                    
                        autoComplete="email"
                        required
                        className="input_login"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        label="Password"
                        id="password"
                        autoComplete="current-password"
                        required
                        className="input_login"
                    />
               
                    <button type="submit" className="green_btn_login">
                   
                        Sing In
                    </button>
                    
                </form>
            </div>
            <div className="right_login">
                <h1>New Here ?</h1>
                <LinkR to="/register">
                    <button type="button" variant="contained" className="white_btn_login">
                        Sing Up
                    </button>
                </LinkR>
            </div>
        </div>
    </div>
    );
  }