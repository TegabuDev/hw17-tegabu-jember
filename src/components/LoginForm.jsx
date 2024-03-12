import React, { useState } from "react";
import Button from "./Button";

const LoginForm = ({ handleAuth, setShowRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAuth(username, password);
    setPassword("");
    setUsername("");
  };

  return (
    <div className="login-body-container">
      <div className="back">
        <div className="login-container">
          <h1>Login page</h1>
          <form onSubmit={handleSubmit}>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <Button className="login-btn" content="Login" />
          </form>
          <div className="auth-switch">
            <p>
              Don't have an account?{" "}
              <Button
                content="Sign up"
                className=""
                onClick={() => setShowRegister(true)}
              />
              {/* <button onClick={() => setShowRegister(true)}>Sign up</button> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
