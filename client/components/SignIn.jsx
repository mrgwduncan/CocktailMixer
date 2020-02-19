import React from "react";
import { signIn, isAuthenticated } from "authenticare/client";

export function SignIn(props) {
  this.state = {
    username: "",
    password: ""
  };
}

const handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

return (
  <div className="panel">
    <h3>sign in</h3>
    <form onSubmit={this.handleSelectSubmit}>
      <label>username</label>
      <input type="text" name="username" onChange={this.handleChange}></input>
      <label>password</label>
      <input
        type="password"
        name="password"
        onChange={this.handleChange}
      ></input>
      <input type="submit" value="login" />
    </form>
  </div>
);
