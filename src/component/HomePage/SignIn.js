import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { authActions } from "../../features/userSlice";
import "./Css/Sign.css";

function SignIn() {


  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authActions.login())
  }

  return (
    <div className="container my-5">
      <h1>Car Rentral</h1>
      <p>Please fill your detail to access your account.</p>
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <label>
            Email{" "}
            <input
              className="signinIN"
              type="email"
              placeholder="debra.holt@example.com"
              name="email"
              required
             
            />
          </label>
          <label>
            Password
            <input
              className="signinIN"
              type="password"
              name="password"
              placeholder="••••••••"
              required           
            />
          </label>
          <div className="rememberme mt-3">
            <div className="row">
              <div className="col-md-6 checkbb">
                <input
                  type="checkbox"
                  id="rememberme"
                  className=""
                  name="rememberme"
                  value="rememberme"
                />
                <label for="rememberme" id="remembermelb" className="">
                  rememberme
                </label>
              </div>
              <div className="col-md-6 text-end pt-1">
                <a href="" className="sss ">
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
        </fieldset>

        <input type="submit" value="Submit" />
        <button id="googlebtn">
          <img src="search.png" className="img_gg" alt="" />
          Sign in with Google
        </button>
        <p>
          Don’t have an account? <Link to="/signup"> Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
