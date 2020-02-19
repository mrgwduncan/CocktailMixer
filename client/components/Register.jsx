import React, { useState } from "react";
import { register, isAuthenticated } from "authenticare/client";

export default function Register(props) {
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
    register(
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

  return (
    <div className="panel">
      <h2>Register</h2>
      <div className="search">
        <form >
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
