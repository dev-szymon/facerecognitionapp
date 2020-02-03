import React from "react";
import "./SignInForm.css";

function SignInForm({ goHome }) {
  return (
    <main className="SignInForm">
      <form>
        <fieldset id="sign_up">
          <legend>Sign In</legend>
          <div>
            <label htmlFor="email-address">Email</label>
            <input type="email" name="email-address" id="email-address" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>

          {/* ///  Optional remember me checkbox
          <label>
            <input type="checkbox" /> Remember me
          </label> */}
        </fieldset>
        <div>
          <input
            className="btn"
            onClick={goHome}
            type="submit"
            value="Sign in"
          />
          <input className="btn" type="submit" value="Sign up" />
        </div>
        {/* <div>
          <a href="#0">Sign up</a>
          <a href="#0">Forgot your password?</a>
        </div> */}
      </form>
    </main>
  );
}

export default SignInForm;
