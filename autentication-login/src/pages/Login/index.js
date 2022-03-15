import React, { useState, useContext } from "react";
import "../Login/style.css";
import { AuthContext } from "../../contexts/auth";
import TextField from "@mui/material/TextField";

const Login = () => {
  const { authenticated, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { email, password });
    login(email, password);
  };
  return (
    <div id="login">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pasword">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="actions">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
