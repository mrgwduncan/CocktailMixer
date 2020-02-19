import React, { useState } from "react";
import { signIn, isAuthenticated } from "authenticare/client";
import { updateControl } from "../actions";
import { connect } from "react-redux";

function SignIn(props) {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = () => {
    signIn(
      {
        username: form.username,
        password: form.password
      },
      {
        baseUrl: process.env.BASE_API_URL // see .env and webpack.config.js
      }
    ).then(token => {
      if (isAuthenticated()) {
        props.history.push("/");
      }
    });
  };
  const handleRegister = () => {
    props.dispatch(updateControl(5));
  };

  return (
    <div className="panel">
      <h2>Sign in</h2>
      <div className="search">
        <form>
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={form.username}
          ></input>
          <br /> <label>password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={form.password}
          ></input>
          <br />
          <button type="button" onClick={handleClick}>
            Sign in
          </button>
        </form>
        <div className="search">
          <p>no account ?</p>
          <br />
          <button onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
  );
}
export default connect()(SignIn);