import React from "react";
import { Link } from "react-router-dom";
import "./Css/Sign.css";

function SignUp() {
  return (
    <div className="container my-5">
      <h1>Car Rentral</h1>
      <p>Please fill your detail to access your account.</p>
      <form action="https://register-demo.freecodecamp.org">
        <fieldset>
          <div className="row">
            <div className="col-md-6">
              <label>
                First Name
                <input
                
                  type="text"
                  placeholder="First Name"
                  name="first-name"
                  required
                />
              </label>
            </div>

            <div className="col-md-6">
              <label>
                Last Name{" "}
                <input
                  type="text"
                  placeholder="Last Name"
                  name="first-name"
                  required
                />
              </label>
            </div>
          </div>
          <label>
            Email{" "}
            <input
              type="email"
              className="signinIN"
              placeholder="debra.holt@example.com"
              name="last-name"
              required
            />
          </label>
          <label>
            Username{" "}
            <input type="text" className="signinIN" name="email" placeholder="User name" required />
          </label>
          <label>
            Password
            <input
              type="password"
              className="signinIN"
              name="password"
              placeholder="••••••••"
              pattern="[a-z0-5]{8,}"
              required
            />
          </label>
        </fieldset>

        <input type="submit" value="Submit" />
        <button id="googlebtn">
          <img src="search.png" className="img_gg" alt="" />
          Sign in with Google
        </button>
        <p>
          Already have an account? <Link to='/signin'> Sign In here</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
